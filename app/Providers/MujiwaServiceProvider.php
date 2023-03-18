<?php

namespace App\Providers;

use App\Data\Shared\NotificationOptions;
use App\Enums\Notification\NotificationType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\ServiceProvider;

class MujiwaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->RegisterAllMacros();
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
    }

    protected function RegisterAllMacros()
    {
        RedirectResponse::macro('success', function (string $body, ?string $description, ?NotificationOptions $options = new NotificationOptions(true, 3000)){
            return $this->flash(NotificationType::Success, $body, $description, $options);
        });

        RedirectResponse::macro('error', function (string $body, ?string $description, ?NotificationOptions $options = new NotificationOptions(true, 3000)){
            return $this->flash(NotificationType::Error, $body, $description, $options);
        });

        RedirectResponse::macro('warn', function (string $body, ?string $description, ?NotificationOptions $options = new NotificationOptions(true, 3000)){
            return $this->flash(NotificationType::Warning, $body, $description, $options);
        });

        RedirectResponse::macro('info', function (string $body, ?string $description, ?NotificationOptions $options = new NotificationOptions(true, 3000)){
            return $this->flash(NotificationType::Info, $body, $description, $options);
        });

        RedirectResponse::macro('flash', function (NotificationType $type, string $body, ?string $description, ?NotificationOptions $options) {
            session()->flash('notification', [
                'type' => $type,
                'title' => $body,
                'description' => $description,
                'options' => $options
            ]);

            /** @var RedirectResponse $this */
            return $this;
        });

        RedirectResponse::macro('once', function () {
            session()->flash('onceAccess', true);

            /** @var RedirectResponse $this */
            return $this;
        });
    }
}
