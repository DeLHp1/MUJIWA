<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->applyPassportSettings();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->applyNonceAttributeToVite();
    }

    /**
     * Register all custom settings of Laravel Passport
     *
     * @return void
     */
    protected function applyPassportSettings()
    {
        Passport::ignoreRoutes();
    }

    /**
     * Register nonce for scripts & styles
     *
     * @return void
     */
    protected function applyNonceAttributeToVite()
    {
        Vite::useScriptTagAttributes([
            'nonce' => csp_nonce()
        ]);

        Vite::useStyleTagAttributes([
            'nonce' => csp_nonce()
        ]);
    }
}
