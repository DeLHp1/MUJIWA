<?php

namespace App\Console\Commands;

use App\Events\UpdateUIFinish;
use Illuminate\Console\Command;

class FinishUpdateUI extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'updater:finish {title=Aktualizace byla úspěšná!} {message=MW UI se automaticky za 5 sekund restartuje a načte vám novou verzi webu.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Funkce pro ukončení aktualizace MW UI V3';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $title = $this->argument('title');
        $message = $this->argument('message');

        event(new UpdateUIFinish($title, $message));

        return Command::SUCCESS;
    }
}
