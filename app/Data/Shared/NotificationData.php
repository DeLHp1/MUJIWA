<?php

namespace App\Data\Shared;

use App\Enums\Notification\NotificationType;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

use Spatie\TypeScriptTransformer\Attributes\Optional as TypeScriptOptional;
class NotificationData extends Data
{
    public function __construct(
        public NotificationType $type,
        public string $title,
        public string|Optional $description,
        public ?NotificationOptions $options
    ) {
    }
}
