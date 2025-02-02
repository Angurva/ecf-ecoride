<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Validations\LoginValidation;
use Illuminate\Support\Facades\Validator;
use App\Http\Validations\RegisterValidation;

class AuthenticationController extends Controller
{
    /**function to register a new account
     * 
     */
    public function register(Request $request, RegisterValidation $validation)
    {
        $validator = Validator::make($request->all(), $validation->rules(), $validation->messages());
        if ($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()],401);
        }
        $user = new User();
        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        //$user->api_token = Str::random(64);
        $user->save();
        /*$roles_list=json_decode($request->input('roles'));
        foreach($roles_list as $role)
        {
            $role_user = Role::where('name', $role)->firstOrFail();
            $user->roles()->attach($role_user->id);
        }*/
        
        return response()->json($user, 200);
    }

    public function login(Request $request, LoginValidation $validation){
        $validator = Validator::make($request->all(), $validation->rules(), $validation->messages());
        if ($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()],401);
        }
        if(Auth::attempt(['email' => $request->input('email') , 'password' => $request->input('password')]))
        {
            /*$user = User::with('role')
                    ->select('username','email','api_token')
                    ->where('email',$request->input('email'))
                    ->firstOrFail(); */
            $user = User::with('roles')
                    ->where('email',$request->input('email'))
                    ->firstOrFail();
                    
            return response()->json($user, 200); 
        }
        else{
            return response()->json(['errors' => 'Bad credentials'], 401);
        }

    }
}
