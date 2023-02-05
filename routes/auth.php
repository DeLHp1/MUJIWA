<?php

use Illuminate\Support\Facades\Route;

/***
 *      _____  _____   ____       _ ______ _____ _______   __  __ _    _      _ _______          __
 *     |  __ \|  __ \ / __ \     | |  ____/ ____|__   __| |  \/  | |  | |    | |_   _\ \        / /\
 *     | |__) | |__) | |  | |    | | |__ | |       | |    | \  / | |  | |    | | | |  \ \  /\  / /  \
 *     |  ___/|  _  /| |  | |_   | |  __|| |       | |    | |\/| | |  | |_   | | | |   \ \/  \/ / /\ \
 *     | |    | | \ \| |__| | |__| | |___| |____   | |    | |  | | |__| | |__| |_| |_   \  /\  / ____ \
 *     |_|    |_|  \_\\____/ \____/|______\_____|  |_|    |_|  |_|\____/ \____/|_____|   \/  \/_/    \_\
 *              _    _ _______ _    _   _____             _
 *         /\  | |  | |__   __| |  | | |  __ \           | |
 *        /  \ | |  | |  | |  | |__| | | |__) |___  _   _| |_ ___ ___
 *       / /\ \| |  | |  | |  |  __  | |  _  // _ \| | | | __/ _ / __|
 *      / ____ | |__| |  | |  | |  | | | | \ | (_) | |_| | ||  __\__ \
 *     /_/    \_\____/   |_|  |_|  |_| |_|  \_\___/ \__,_|\__\___|___/
 *
 *
 *     Routing soubor obsahujicí všechny cesty určené k jakékoliv authentifikaci a věčem podobné.
 *     Version: 1.0.0
 */

Route::middleware(['guest'])->group(function (){
    Route::get('/login', [\App\Http\Controllers\Auth\AuthenticatedUserController::class, 'index'])->name('login');
    Route::post('/login', [\App\Http\Controllers\Auth\AuthenticatedUserController::class, 'store']);
    Route::get('/register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'index'])->name('register');
    Route::post('/register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'store']);
});

Route::middleware(['auth:web'])->group(function (){
    Route::delete('/logout', [\App\Http\Controllers\Auth\AuthenticatedUserController::class, 'destroy'])->name('logout');
});
