<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" class="h-full bg-slate-100">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" async defer></script>
        <title>MUJIWA</title>
        @vitereactrefresh
        @vite('resources/js/main.jsx')
        @inertiaHead('mw-ui')
    </head>
    <body class="h-full font-inter antialiased">
        @inertia('mw-ui')
    </body>
</html>
