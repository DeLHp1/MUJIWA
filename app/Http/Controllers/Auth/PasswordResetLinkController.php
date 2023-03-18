<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\ForgotPasswordRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('forgot-password/page');
    }

    public function store(ForgotPasswordRequest $request): RedirectResponse|ValidationException
    {
        $status = Password::sendResetLink(
            $request->only('email')->toArray()
        );

        if ($status === Password::RESET_LINK_SENT) {
            return  Redirect::route('forgot-password.success')->once();
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }

    public function success(Request $request): Response
    {
        return Inertia::render('forgot-password/success');
    }
}
