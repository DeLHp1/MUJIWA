<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticationSessionController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('login/page');
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $request->Authentication();

        \Illuminate\Support\Facades\Request::session()->regenerate();

        return Redirect::intended();
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerate();

        return Redirect::route('login');
    }
}
