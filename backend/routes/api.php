<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use Illuminate\Http\Middleware\HandleCors;
use App\Http\Controllers\AuthenticationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register',[AuthenticationController::class, 'register'])->middleware(HandleCors::class);
Route::post('/login',[AuthenticationController::class, 'login']);

Route::get('/roles-user/{user}',[RoleController::class,'showByUserId'])->middleware(HandleCors::class);
