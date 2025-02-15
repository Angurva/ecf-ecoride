<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class RoleController extends Controller
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
    public function show(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        //
    }

    public function showByUserId(User $user){

        //$roles_user = [];
        $roles_user = array();
        foreach ($user->roles as $role)
        {
            //array_push($roles_user, $role->name);
            $roles_user[] = $role->name;
        }
        return response()->json($roles_user);
    }
    public function allByUser(User $user){

        //$roles_user = [];
        $roles_user = array();
        foreach ($user->roles as $role)
        {
            //array_push($roles_user, $role->name);
            $roles_user[] = $role->name;
        }
        return response()->json($roles);
    }

    
}
