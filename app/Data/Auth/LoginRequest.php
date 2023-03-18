<?php

namespace App\Data\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Spatie\LaravelData\Attributes\Validation;
use Spatie\LaravelData\Data;

class LoginRequest extends Data
{
    public function __construct(
        #[Validation\Required(), Validation\StringType()]
        public string|null $username,
        #[Validation\Required(), Validation\StringType()]
        public string|null $password,
        #[Validation\Required(), Validation\BooleanType()]
        public bool|null $remember
    ) {
    }

    public function Authentication(): void
    {
        $this->ensureIsNotRateLimited();

        if (! Auth::attempt($this->only('username', 'password')->toArray(), $this->remember)) {
            RateLimiter::hit($this->ThrottleKey());

            throw ValidationException::withMessages([
                'username' => trans('auth.failed'),
            ]);
        }

        RateLimiter::clear($this->ThrottleKey());
    }

    protected function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->ThrottleKey(), 5)) {
            return;
        }

        event(new Lockout(Request::instance()));

        $seconds = RateLimiter::availableIn($this->ThrottleKey());

        throw ValidationException::withMessages([
            'username' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    protected function ThrottleKey(): string
    {
        return Str::transliterate(Str::lower($this->username.'|'.$this->password.'|'.Request::ip().'|'.Request::fingerprint()));
    }
}
