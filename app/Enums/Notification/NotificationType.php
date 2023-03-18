<?php

namespace App\Enums\Notification;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
enum NotificationType: string
{
    case Success = 'success';
    case Error = 'error';
    case Warning = 'warning';
    case Info = 'info';
}
