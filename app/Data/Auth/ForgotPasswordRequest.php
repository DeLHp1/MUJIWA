<?php

namespace App\Data\Auth;

use Spatie\LaravelData\Attributes\Validation;
use Spatie\LaravelData\Data;

class ForgotPasswordRequest extends Data
{
    public function __construct(
        #[Validation\Required(), Validation\Email(Validation\Email::NoRfcWarningsValidation, Validation\Email::RfcValidation, Validation\Email::DnsCheckValidation)]
        public string|null $email
    ) {
    }
}
