<?php

use Illuminate\Http\Request;
use App\Http\Middleware\CheckCors;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Middleware\HandleCors;
use App\Http\Controllers\OpinionController;
use App\Http\Controllers\CarpoolingController;
use App\Http\Controllers\AuthenticationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register',[AuthenticationController::class, 'register'])->middleware(CheckCors::class);
Route::post('/login',[AuthenticationController::class, 'login']);

//Route::get('/user/roles/{user}',[RoleController::class,'allByUser'])->middleware(HandleCors::class);

Route::get('/carpooling/search',[CarpoolingController::class,'search'])->middleware(CheckCors::class);
Route::get('/carpooling/{carpooling}',[CarpoolingController::class,'show'])->middleware(CheckCors::class);
Route::post('/carpooling/reservation', [CarpoolingController::class, 'reservation'])->middleware(CheckCors::class);
Route::post('/carpooling/store',[CarpoolingController::class,'store'])->middleware(CheckCors::class);
Route::patch('/carpooling/update/{carpooling}',[CarpoolingController::class,'update'])->middleware(CheckCors::class);

//Route::get('/carpooling/history/passenger/{user}',[CarpoolingController::class,'history_passenger'])->middleware(HandleCors::class);
Route::get('/carpooling/history/driver/{user}',[CarpoolingController::class,'history_driver'])->middleware(CheckCors::class);

Route::get('/user/{user}',[UserController::class,'show']);
Route::patch('user/{user}', [UserController::class, 'update'])->middleware(CheckCors::class);

Route::post('/car/add', [CarController::class,'store'])->middleware(CheckCors::class);
Route::get('/car/history',[Carcontroller::class, 'history'])->middleware(CheckCors::class);
//Route::delete('/car/delete/{car}', [CarController::class,'destroy'])->middleware(HandleCors::class);

Route::get('/opinion/pending',[OpinionController::class,'show_pending'])->middleware(CheckCors::class);
Route::get('/opinion/accepted/{user}',[OpinionController::class,'show_accepted'])->middleware(CheckCors::class);
Route::post('/opinion/update/status/{opinion}',[OpinionController::class,'update_status'])->middleware(CheckCors::class);
Route::post('/opinion/store',[OpinionController::class,'store'])->middleware(CheckCors::class);