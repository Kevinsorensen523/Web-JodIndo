<?php

use App\Http\Controllers\MainController;
use App\Http\Controllers\MessageController;
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
    Route::get('/term', fn() => Inertia::render('Term'));
    Route::get('/privacy', fn() => Inertia::render('Privacy'));
});

Route::post('/contact/message', [MessageController::class, 'store'])->name('message.store');

// Route for 404 page
Route::get('/404', fn() => Inertia::render('NotFound'));

Route::get("/", [MainController::class, 'home'])->name('home');
Route::get("/about", [MainController::class, 'about'])->name('about');
Route::get('/contact', [MainController::class, 'contact'])->name('contact');
Route::get('/faq', [MainController::class, 'faq'])->name('faq');
Route::get('/term', [MainController::class, 'term'])->name('term');

// Fallback route
Route::fallback(function () {
    return redirect('/404');
});