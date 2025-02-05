<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register',[AuthenticationController::class, 'register'])->name('register');
Route::post('/login',[AuthenticationController::class, 'login'])->name('login');
