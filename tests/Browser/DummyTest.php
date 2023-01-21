<?php

test('Funguje Google', function () {
    $this->browse(function (Laravel\Dusk\Browser $browser) {
        $browser->visit('https://google.com')->screenshot('google')->storeSource('google');
    });
});

test('Existuje na stránce Dummy Web', function () {
    $this->browse(function (Laravel\Dusk\Browser $browser) {
        $browser->visit('/dummy')->assertSee('Dummy page')->screenshot('test')->storeSource('test');
    });
});

test('Neexistuje na stránce Hello world', function () {
    $this->browse(function (Laravel\Dusk\Browser $browser) {
        $browser->visit('/dummy')->assertDontSee('Hello world');
    });
});
