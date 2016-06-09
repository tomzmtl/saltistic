<?php

namespace App\Services\Pages;

use App\Repositories\PlayerRepository;
use App\Repositories\SaltRepository;
use App\Repositories\GameRepository;
use App\Stores\CharacterStore;
use App\Services\GameLogic;
use App\Services\GameResults;
use App\Services\Salt;

Class Games
{
    public function __construct (GameRepository $game, PlayerRepository $player, SaltRepository $salt)
    {
        $this->Player = $player;
        $this->Salt = $salt;
        $this->Game = $game;
        $this->Characters = new CharacterStore();
    }

    public function index ()
    {
        $games = $this->Game->latest();
        $players = $this->Player->all();

        $gameResults = new GameResults($games, $players);

        return [
            'results' => $gameResults->generate(),
        ];
    }

    public function add ()
    {
        return [
            'characters' => $this->Characters->getAll(),
            'players' => $this->Player->all()->sortBy('name'),
            'stocks' => [GameLogic::MIN_STOCKS, GameLogic::MAX_STOCKS],
        ];
    }
}
