<?php

namespace App\Data\Auth;

use Spatie\LaravelData\Attributes\Validation;
use Spatie\LaravelData\Data;

class ResetPasswordRequest extends Data
{
    public function __construct(
        #[Validation\Required(), Validation\Email(Validation\Email::DnsCheckValidation, Validation\Email::RfcValidation, Validation\Email::NoRfcWarningsValidation)]
        public string|null $email,
        #[Validation\Required(), Validation\Password(), Validation\Confirmed()]
        public string|null $password,
        #[Validation\Required()]
        public string|null $password_confirmation,
        #[Validation\Required()]
        public string|null $token
    ) {
    }
}
