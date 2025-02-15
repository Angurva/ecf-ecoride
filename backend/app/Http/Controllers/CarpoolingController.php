<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\User;
use App\Models\Carpooling;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CarpoolingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $carpooling = New Carpooling;

        $carpooling->departure_location = $request->input('departure_location');
        $carpooling->departure_date = $request->input('departure_date');
        $carpooling->departure_time = $request->input('departure_time');
        $carpooling->end_location = $request->input('end_location');
        $carpooling->end_date = $request->input('end_date');
        $carpooling->end_time = $request->input('end_time');
        $carpooling->car_id = $request->input('car');
        $carpooling->place_number = $request->input('place');
        $carpooling->price = $request->input('price');

        $carpooling->save();

        return response()->json(["success" => "enregistrement covoiturage réussi"],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Carpooling $carpooling)
    {
        $carpoolingDetail = Carpooling::leftJoin('cars', 'carpoolings.car_id', '=', 'cars.id')
                                    ->leftJoin('users', 'cars.user_id','=','users.id')
                                    ->leftJoin('brands', 'cars.brand_id','=','brands.id')
                                    ->where('carpoolings.id',$carpooling->id)
                                    ->select(
                                        'carpoolings.*',
                                        'brands.name as brand',
                                        'cars.model',
                                        'cars.registration',
                                        'cars.color',
                                        'cars.energy',
                                        'users.username',
                                        'users.email',
                                    )
                                    ->firstOrFail();
        return response()->json($carpoolingDetail);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Carpooling $carpooling)
    {
        $carpooling->status = $request->input('status');
        $carpooling->save();

        return response()->json(["success"=>"opération réussie"],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Carpooling $carpooling)
    {
        //
    }

    /**
     * Display a listing of the resource searching 
     */
    public function search(Request $request)
    {
        $carpoolingsList = array();
        $carpoolings = Carpooling::leftJoin('cars', 'carpoolings.car_id', '=', 'cars.id')
                                    ->leftJoin('users', 'cars.user_id','=','users.id')
                                    ->leftJoin('brands', 'cars.brand_id','=','brands.id')
                                    ->where([
                                    ['departure_location', 'LIKE',$request->input('departure_location')],
                                    ['end_location','LIKE',$request->input('end_location')],
                                    ['departure_date', '=',$request->input('departure_date')],
                                    ])
                                    ->whereIn('status', ['in progress'])
                                    ->orderBy('departure_date','asc')
                                    ->orderBy('departure_time','asc')
                                    ->select(
                                        'carpoolings.*',
                                        'brands.name',
                                        'cars.model',
                                        'cars.registration',
                                        'cars.color',
                                        'cars.energy',
                                        'users.username',
                                        'users.email',
                                    )
                                    ->get();
        

        if(count($carpoolings) === 0)
        {
            return response()->json(['errors' => 'aucun resultat n\'a été trouvé'], 404);
        }

        foreach($carpoolings as $carpooling)
        {
            $users = $carpooling->users()->get();
            $count = count($users);
           
            if($count < $carpooling->place_number)
            { 
                $carpooling->place_number = $carpooling->place_number - $count ;
                $carpoolingsList[] = $carpooling;
            }
        }
        return response()->json($carpoolingsList,200);
    }
    /**
     * 
     * 
     */
    public function reservation(Request $request)
    {
        $carpooling = Carpooling::find($request->carpooling);
        $users = $carpooling->users()->get();
        $count = count($users);
        if($count >= $carpooling->place_number)
        {
            return response()->json([ "errors" => "il n'y a plus de places disponibles"], 404);
        }
        else{
            $carpooling->users()->attach($request->user); 
            return response()->json(["success" => "La réservation s'est correctement réalisée." ]);
        }    
        
    }

    public function history_passenger(User $user){

        $carpoolings = $user->carpoolings()->get();

        return response()->json();

    }

    public function history_driver(User $user)
    {
        //$carpoolings = $car->carpoolings()->get();

        $carpoolings = Carpooling::rightJoin('cars','carpoolings.car_id','=', 'cars.id')
                                    ->rightJoin('users','cars.user_id','=','users.id' )
                                    ->where('users.id',$user->id)
                                    ->whereIn('status', ['done', 'cancelled'])
                                    ->orderBy('departure_date','desc')
                                    ->select('carpoolings.*')
                                    ->get();

        return response()->json($carpoolings);
    }
    

    public function carpool(Request $request){

        $carpoolings = Carpooling::leftJoin('cars', 'carpoolings.car_id', '=', 'cars.id')
                                    ->leftJoin('users', 'cars.user_id','=','users.id')
                                    ->leftJoin('brands', 'cars.brand_id','=','brands.id')
                                    ->where([
                                    ['departure_location', 'LIKE',$request->input('departure_location')],
                                    ['end_location','LIKE',$request->input('end_location')],
                                    ['departure_date', '=',$request->input('departure_date')],
                                    ])
                                    ->whereIn('status', ['in progress'])
                                    ->orderBy('departure_date','asc')
                                    ->orderBy('departure_time','asc')
                                    ->select(
                                        'carpoolings.*',
                                        'brands.name',
                                        'cars.model',
                                        'cars.registration',
                                        'cars.color',
                                        'cars.energy',
                                        'users.username',
                                        'users.email',
                                    )
                                    ->get();

        return response()->json($carpoolings);
    }
}
