<?php

test('Existuje na stránce Dummy Web', function(){
   $this->browse(function (\Laravel\Dusk\Browser $browser){
       $browser->visit('/dummy')->assertSee('Dummy page')->screenshot('test');
   });
});

test('Neexistuje na stránce Hello world', function(){
    $this->browse(function (\Laravel\Dusk\Browser $browser){
        $browser->visit('/dummy')->assertDontSee('Hello world');
    });
});
