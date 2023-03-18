<?php

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

Route::middleware(['auth:web', 'verified', 'activated'])->group(function (){
    Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

    Route::prefix('settings')->group(function (){
        Route::get('/', [\App\Http\Controllers\Settings\UserProfileSettingsController::class, 'index'])->name('settings.profile');
        Route::get('ucet', [\App\Http\Controllers\Settings\UserAccountSettingsController::class, 'index'])->name('settings.account');

        Route::post('/user/account/password', [\App\Http\Controllers\Settings\UserAccountSettingsController::class, 'updatePassword'])->name('settings.account.update.password');
        Route::post('/user/account/email', [\App\Http\Controllers\Settings\UserAccountSettingsController::class, 'updateEmail'])->name('settings.account.update.email');
        Route::post('/user/profile/pfp', [\App\Http\Controllers\Settings\UserProfileSettingsController::class, 'updateProfilePicture'])->name('settings.profile.pfp.update');
        Route::post('/user/profile/banner', [\App\Http\Controllers\Settings\UserProfileSettingsController::class, 'updateBannerPicture'])->name('settings.profile.banner.update');
    });
});
