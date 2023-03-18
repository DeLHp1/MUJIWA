<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Symfony\Component\HttpFoundation\Response;

class OnceAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $redirect): Response
    {
        if (! $request->session()->exists('onceAccess') || $request->session()->get('onceAccess') !== true) {
            return Redirect::route($redirect);
        }

        return $next($request);
    }
}
