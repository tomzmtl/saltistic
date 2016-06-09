<?php

namespace App\Services;

use App\Repositories\GameRepository;
use App\Repositories\SaltRepository;
use App\Services\Salt;
use Artisan;

class GameService
{
    private $Game;
    private $Salt;

    public function __construct (GameRepository $game, SaltRepository $salt)
    {
        $this->Game = $game;
        $this->Salt = $salt;
    }

    public function createEntry ($data)
    {
        $this->Game->create($data);
        // @todo optimise this
        Artisan::call('salt');
    }
}
