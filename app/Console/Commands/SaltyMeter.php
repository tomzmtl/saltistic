<?php

namespace App\Console\Commands;

use App\Repositories\PlayerRepository;
use App\Repositories\GameRepository;
use App\Repositories\SaltRepository;
use App\Services\Salt;
use Illuminate\Console\Command;
use Illuminate\Foundation\Inspiring;

class SaltyMeter extends Command
{
    private $Game;
    private $Player;
    private $Salt;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'salt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Regenerate Salt-y-Meter';

    public function __construct (GameRepository $game, PlayerRepository $player, SaltRepository $salt)
    {
        parent::__construct();

        $this->Game = $game;
        $this->Player = $player;
        $this->Salt = $salt;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle ()
    {
        $players = $this->Player->all();
        $games = $this->Game->all();

        foreach ($players as $player) {
            $score = Salt::getSaltScore($player->id, $games);
            $this->Salt->addOrUpdate($player->id, $score[2]);
        }
    }
}
