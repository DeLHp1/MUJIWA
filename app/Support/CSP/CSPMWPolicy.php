<?php

namespace App\Support\CSP;

use Spatie\Csp\Directive;
use Spatie\Csp\Policies\Basic;

class CSPMWPolicy extends Basic
{
    public function configure()
    {
        parent::configure();

        $this->addDirective(Directive::CONNECT, ['ws://127.0.0.1:5174', 'wss://wss.mujiwa.cz'])
            ->addDirective(Directive::SCRIPT, ['sha512-hash', 'https://challenges.cloudflare.com'])
            ->addDirective(Directive::STYLE, 'sha512-hash')
            ->addDirective(Directive::IMG, ['https://mujiwa.cz', 'https://r2.mujiwa.cz', 'https://challenges.cloudflare.com'])
            ->addDirective(Directive::FRAME, ['youtube.com']);
    }
}
