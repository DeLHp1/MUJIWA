<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" class="h-full font-inter">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PROJECT MUJIWA</title>
        <meta name="description" content="Nová anime, dorama, manga databáze | Již brzy">
        <meta name="author" content="TEAM MUJIWA">
        <link rel="icon" href="https://r2.mujiwa.cz/favicon.ico" />
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css">
        <link href="https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        @vite('resources/scripts/app.ts')
        @inertiaHead('mw-ui-v3')
    </head>
    <body class="h-full antialiased bg-slate-100">
        @inertia('mw-ui-v3')
    </body>
</html>
