<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class UserAccountSettingsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('settings/account/page');
    }

    public function updateEmail(Request $request): RedirectResponse
    {
        Validator::make($request->all(), [
           'email' => ['required', 'email:dns,rfc,strict', 'confirmed']
        ])->validate();

        Auth::user()->forceFill([
            'email' => $request->get('email'),
            'email_verified_at' => null
        ])->save();

        Auth::user()->sendEmailVerificationNotification();

        return back()->success('Změna emailu', 'Váš nový email byl úspěšně uložen.');
    }


    public function updatePassword(Request $request): RedirectResponse
    {
        Validator::make($request->all(), [
            'currentPassword' => ['required', 'string', 'current_password:web'],
            'password' => ['required', 'confirmed', 'string', \Illuminate\Validation\Rules\Password::defaults()]
        ])->validate();

        Auth::user()->forceFill([
            'password' => Hash::make($request->get('password'))
        ])->save();

        return back()->success('Změna hesla', 'Vaše nové heslo je uloženo.');
    }
}
