<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Opinion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class OpinionController extends Controller
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
        $opinion = new Opinion;
        $opinion->comment = $request->input('comment');
        $opinion->note = $request->input('note');
        $opinion->save();
        $opinion->users()->attach($request->input('driver'));

        return response()->json(["success" => "opinion created"]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Opinion $opinion)
    {
        
    }
    /**
     * Display the specified resource.
     */
    public function show_accepted(User $user)
    {

        //$opinions_accepted = User::find($user->id)->opinions()->where('status','accepted')->get();
        $opinions = Cache::remember( 'show_opinions_accepted',300, function() use ($user){
            return User::find($user->id)->opinions()->where('status','accepted')->get();
        } );

        $count = Cache::remember('count_opinions_user',300 ,function() use ($user){
            return count(User::find($user->id)->opinions()->where('status','accepted')->get());
        } );

       

        return response()->json(["opinions" => $opinions, 'count'=>$count],200);
    }
    /**
     * Display the specified resource.
     */
    public function show_pending()
    {
        //$opinions_pending = Opinion::where('status','pending')->get();
        $opinions_pending = Cache::remember('show_opinion_pending', 300, function () {
            return Opinion::where('status','pending')->get();
        }); 

        return response()->json($opinions_pending,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Opinion $opinion)
    {
        //
    }

    public function update_status(Request $request, Opinion $opinion)
    {
        $opinion->status = $request->input('status');
        $opinion->save();
        return response()->json(['success'=>'Mise à jour du statut réussi']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Opinion $opinion)
    {
        //
    }
}
