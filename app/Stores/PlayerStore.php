<?php

namespace App\Stores;

use App\Repositories\PlayerRepository;

Class PlayerStore
{
    private $players = [];

    public function __construct (PlayerRepository $repo)
    {
        $this->players = $repo->all();
    }

    public function getAll ()
    {
        return $this->players;
    }
}
