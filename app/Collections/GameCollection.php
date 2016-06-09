<?php

namespace App\Collections;

use Illuminate\Support\Collection;

class GameCollection extends Collection
{
    public function __construct ($items)
    {
        parent::__construct($items);
    }

    public function withPlayer ($id)
    {
        return $this->filter(function($game) use ($id) {
            return $id === $game->player_1 || $id === $game->player_2;
        });
    }
}
