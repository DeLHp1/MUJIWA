<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
 *  Dummy Test
 */
if (env('CI_ENABLED', false)) {
    Route::group([], function () {
        Route::get('/dummy', function () {
            return response('<h1>Dummy page</h1>');
        });
    });
}

Route::middleware('auth')->group(function (){
    Route::inertia('/', 'home');
});
