<?php

namespace App\Console\Commands;

use App\Events\UpdateUIStart;
use Illuminate\Console\Command;

class StartUpdateUI extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'updater:start {title=Vyšla nová verze MW UI} {message=MW UI V3 se začne automaticky aktualizovat.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Funkce pro spuštění aktualizace MW UI V3';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $title = $this->argument('title');
        $message = $this->argument('message');

        event(new UpdateUIStart($title, $message));

        return Command::SUCCESS;
    }
}
