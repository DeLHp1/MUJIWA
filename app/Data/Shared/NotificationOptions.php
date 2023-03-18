<?php

namespace App\Data\Shared;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\Optional as TypeScriptOptional;

class NotificationOptions extends Data
{
    public function __construct(
        #[TypeScriptOptional]
        public bool $autoClose,
        #[TypeScriptOptional]
        public int $timeout
    ) {
    }
}
