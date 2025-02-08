<?php

namespace App\Http\Controllers;

use App\Models\Carpooling;
use Illuminate\Http\Request;

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
        //
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
        //
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
                                    ['departure_date', '=',$request->input('departure_date')]
                                    ])
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

    public function reservation(Request $request){


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

    
}
