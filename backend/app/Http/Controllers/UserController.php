<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Role;
use App\Models\User;
use App\Models\Carpooling;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class UserController extends Controller
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
    public function show(User $user)
    {
        
        //$carpooling=$user->carpoolings()->with('car')->get();
        //$carpooling=$user->roles->pluck('name')->carpoolings()->with('car')->get();
        
        //$roles = $user->roles()->pluck('name');
        //$carpoolings = $user->carpoolings()->with('car')->get();
        

        //$cars = Car::all();
        //$carpoolings = Carpooling::find(5)->car;
        
       /* $test = User::with('carpoolings')->whereHas('carpoolings',function($query)use($cars){
            $query->where('carpoolings.car_id',$cars->id);

        })->where('users.id',$user->id)->get();
        //$user->cars;*/
        
           /* $history_driver = Carpooling::rightJoin('cars','carpoolings.car_id','=', 'cars.id')
                                        ->leftJoin('brands', 'cars.brand_id','=',"brands.id")
                                        ->rightJoin('users','cars.user_id','=','users.id' )
                                        ->where('users.id',$user->id)
                                        ->whereIn('status', ['in progress', 'pending'])  
                                        ->whereNotNull('carpoolings.id')
                                        ->select('carpoolings*',
                                            'cars.*')
                                        ->orderBy('departure_date','desc')
                                        ->select('carpoolings.*')
                                        ->get();*/


        //return response()->json(["user"=>$user, "roles"=>$roles,"participations"=>$carpoolings,/*"organized"=>$history_driver*/]);
        
      
        $rolesList = array();
        $history_passenger = [];
        $history_driver = [];

        $roles= User::find($user->id)->roles()->get();

        foreach ($roles as $role )
        {
            $rolesList[] = $role->name;
        }

       /* $user->carpoolings;
        $user->cars;
        $user->roles;*/

       
      

        $cars = User::rightJoin("cars", "users.id","=", "cars.user_id")
                        ->leftJoin("brands", "brands.id","=", "cars.brand_id")
                        ->where("users.id", $user->id)
                        ->select(
                            'cars.*',
                            'brands.name as brand'
                        )->get() ;

 
        if(in_array("passenger",$rolesList))
        {
            //$history_passenger = $user->carpoolings()->get();
            /*$history_passenger = Carpooling::leftJoin('cars', 'carpoolings.car_id', '=', 'cars.id')
                                                ->where(carpooling)
                                                ->get();*/
            $history_passenger = $user->carpoolings()
                                        ->leftJoin('cars','carpoolings.car_id','=', 'cars.id')
                                        ->leftJoin('brands', 'cars.brand_id','=','brands.id')
                                        ->rightJoin('users','cars.user_id', '=','users.id')
                                        ->select('carpoolings.*', 'cars.*', 'brands.name AS brand', 'users.username','users.email')
                                        ->get();
            
        }

        if(in_array("driver",$rolesList))
        {
            $history_driver = Carpooling::rightJoin('cars','carpoolings.car_id','=', 'cars.id')
                                        ->rightJoin('users','cars.user_id','=','users.id' )
                                        ->where('users.id',$user->id)
                                        ->whereIn('status', ['in progress', 'pending'])  
                                        ->whereNotNull('carpoolings.id')
                                        ->orderBy('departure_date','desc')
                                        ->select('carpoolings.*')
                                        ->get();
        } 

        $note = Cache::remember('note_user',300 ,function() use ($user){
            $count = count(User::find($user->id)->opinions()->where('status','accepted')->get());
            if($count === 0)
            {
                return 0;
            }
            return round(User::find($user->id)->opinions()->where('status','accepted')->sum('note') / $count,1);
        } );

        return response()->json(
                ['user'=>$user,
                 "roles" => $rolesList, 
                 "cars" => $cars,
                 "note" => $note,
                 "carpoolings_passenger" => $history_passenger,
                 "carpoolings_driver" => $history_driver]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {

        $rolesOldById = array();
        foreach($user->roles as $oldRole)
        {
            $rolesOldById[] = $oldRole->id;
        }

        if($request->roles !== [])
        {
            $listNewRole = array();
            foreach($request->roles as $newRole)
            {
                $listNewRole[] = Role::where("name",$newRole)->select("roles.id")->first();

            }

            $user->roles()->detach($rolesOldById);
            $user->roles()->attach($listNewRole);

        }

        $user->username = $request->input('username');
        $user->firstname = $request->input('firstname');
        $user->lastname = $request->input('lastname');
        $user->phone = $request->input('phone');
        $user->address = $request->input('address');
        $user->photo = $request->input('photo');
        
        $user->save();

        return response()->json(["success" => "La modification s'est déroulé correctement"],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }

   
    
}
