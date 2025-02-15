<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Brand;
use Illuminate\Http\Request;

class CarController extends Controller
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
        $car = new Car;

        $brand = Brand::where("brands.name", 'LIKE',$request->input('brand'))->first();

        if (is_null($brand))
        {
            $brandNew = new Brand;
            $brandNew->name = $request->input('brand');
            $brandNew->save();
            $brand = Brand::where("brands.name", 'LIKE',$request->input('brand'))->first();
        }

        $car->model = $request->input('model');
        $car->registration = $request->input('registration');
        $car->first_registration_date = $request->input('first_registration_date');
        $car->energy = $request->input('energy');
        $car->color = $request->input('color');
        $car->brand_id = $brand->id;
        $car->user_id = $request->input('user');

        $car->save();

        return response()->json(["success"=>"ajout réussi"],200);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Car $car)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Car $car)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Car $car)
    {
        $car->delete();

        return response()->json(["success" => "item deleted with success"]);
    }
}
