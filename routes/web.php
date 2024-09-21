<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::group([], function() {
    Route::get('/about', fn() => Inertia::render('About'));
    Route::get('/contact', fn() => Inertia::render('Contact'));
    Route::get('/faq', fn() => Inertia::render('FAQ'));
});

// Route for 404 page
Route::get('/404', fn() => Inertia::render('NotFound'));

// Fallback route
Route::fallback(function () {
    return redirect('/404');
});