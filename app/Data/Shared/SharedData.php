<?php

namespace App\Data\Shared;

use Spatie\LaravelData\Data;

class SharedData extends Data
{
    public function __construct(
        public ?UserData $user = null,
        public ?NotificationData $notification = null
    ) {
        $this->shareNotification();
    }

    protected function shareNotification(): void
    {
        if (session('notification')) {
            $this->notification = new NotificationData(
                ...session('notification')
            );
        }
    }
}
