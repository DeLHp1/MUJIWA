<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\ResetPasswordRequest;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ResetPasswordController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('reset-password/page', [
            'token' => $request->route('token'),
            'email' => $request->get('email'),
        ]);
    }

    public function store(ResetPasswordRequest $request): RedirectResponse
    {
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token')->toArray(),
            function (User $user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(64),
                ]);

                $user->save();

                event(new PasswordReset($user));
            }
        );

        if ($status === Password::PASSWORD_RESET) {
            return Redirect::route('password.success')->once();
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }

    public function success(Request $request)
    {
        return Inertia::render('reset-password/success');
    }
}
