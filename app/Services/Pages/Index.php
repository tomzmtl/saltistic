<?php

namespace App\Services\Pages;

use App\Repositories\GameRepository;
use App\Repositories\PlayerRepository;
use App\Repositories\SaltRepository;
use App\Services\GameResults;
use App\Services\Salt;

Class Index
{
    public function __construct (GameRepository $game, PlayerRepository $player, SaltRepository $salt)
    {
        $this->Game = $game;
        $this->Player = $player;
        $this->Salt = $salt;
    }

    public function handle ()
    {
        $players = $this->Player->all();

        $gameResults = new GameResults($this->Game->latest(6), $players);

        return [
            'results' => $gameResults->generate(),
            'saltymeter' => Salt::rankings($this->Salt->ranked(), $players),
        ];
    }
}
