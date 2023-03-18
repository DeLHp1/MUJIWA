<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\RegisterRequest;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('register/page');
    }

    public function store(RegisterRequest $request): RedirectResponse
    {
        $user = User::create($request->toArray());

        event(new Registered($user));

        Auth::login($user);

        return Redirect::intended();
    }
}
