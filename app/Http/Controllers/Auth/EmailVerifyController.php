<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerifyController extends Controller
{
    public function index(Request $request): Response|RedirectResponse
    {
        return $request->user()->hasVerifiedEmail()
            ? Redirect::intended()
            : Inertia::render('verify-email/page');
    }

    public function sendNotify(Request $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return Redirect::intended();
        }

        $request->user()->sendEmailVerificationNotification();

        return Redirect::back();
    }

    public function verify(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return Redirect::intended();
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return Redirect::intended();
    }
}
