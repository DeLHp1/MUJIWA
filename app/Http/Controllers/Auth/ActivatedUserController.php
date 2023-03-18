<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ActivatedUserController extends Controller
{
    public function index(Request $request): Response|RedirectResponse
    {
        if ($request->user()->hasActivatedAccount()) {
            return Redirect::route('home');
        }

        return Inertia::render('activate-account/page');
    }
}
