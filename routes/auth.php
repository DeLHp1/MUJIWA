<?php

use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    //Register
    Route::get('register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'index'])
        ->name('register');

    Route::post('register', [\App\Http\Controllers\Auth\RegisteredUserController::class, 'store'])
        ->middleware('throttle:register');

    //Login
    Route::get('login', [\App\Http\Controllers\Auth\AuthenticationSessionController::class, 'index'])
        ->name('login');

    Route::post('login', [\App\Http\Controllers\Auth\AuthenticationSessionController::class, 'store']);

    //Forgot password
    Route::get('forgot-password', [\App\Http\Controllers\Auth\PasswordResetLinkController::class, 'index'])
        ->name('forgot-password');

    Route::get('forgot-password/success', [\App\Http\Controllers\Auth\PasswordResetLinkController::class, 'success'])
        ->middleware('onceAccess:forgot-password')
        ->name('forgot-password.success');

    Route::post('forgot-password', [\App\Http\Controllers\Auth\PasswordResetLinkController::class, 'store']);

    //Reset password
    Route::get('reset-password/success', [\App\Http\Controllers\Auth\ResetPasswordController::class, 'success'])
        ->middleware('onceAccess:forgot-password')
        ->name('password.success');

    Route::get('reset-password/{token}', [\App\Http\Controllers\Auth\ResetPasswordController::class, 'index'])
        ->name('password.reset');

    Route::post('reset-password', [\App\Http\Controllers\Auth\ResetPasswordController::class, 'store'])
        ->name('password.update');
});

Route::middleware('auth')->group(function () {
    //Logout
    Route::delete('logout', [\App\Http\Controllers\Auth\AuthenticationSessionController::class, 'destroy'])
        ->name('logout');

    //Email Verify
    Route::get('email/verify', [\App\Http\Controllers\Auth\EmailVerifyController::class, 'index'])
        ->name('verification.notice');

    Route::get('email/verify/{id}/{hash}', [\App\Http\Controllers\Auth\EmailVerifyController::class, 'verify'])
        ->middleware('signed')
        ->name('verification.verify');

    Route::post('email/verification-notification', [\App\Http\Controllers\Auth\EmailVerifyController::class, 'sendNotify'])
        ->middleware('throttle:resend-verification')
        ->name('verification.send');

    //User Activated Account
    Route::get('activate', [\App\Http\Controllers\Auth\ActivatedUserController::class, 'index'])
        ->name('activate.account');
});
