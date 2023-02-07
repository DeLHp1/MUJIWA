<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" class="h-full bg-slate-100">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" async defer></script>
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900|poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        <title>MUJIWA</title>
        @vitereactrefresh
        @vite('resources/js/main.jsx')
        @inertiaHead('mw-ui')
    </head>
    <body class="h-full font-inter antialiased">
        @inertia('mw-ui')
    </body>
    <div id="mw-portals"></div>
</html>
