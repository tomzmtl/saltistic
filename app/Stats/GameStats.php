<?php

namespace App\Stats;

use App\Game;

class GameStats
{
    public $winner;

    public function __construct (Game $game)
    {
        $this->data = $game;

        // define winner
        $winnerIndex = $this->data->score_1 === $this->data->stocks ? 1 : 2;
        $this->winner = $this->data->{'player_'.$winnerIndex};
    }

    public function getOpponentId ($playerId)
    {
        return $this->data->{'player_'.$this->getOppositeIndexOf($playerId)};
    }

    public function getCharacterId ($playerId)
    {
        return $this->data->{'character_'.$this->getIndexOf($playerId)};
    }

    private function getIndexOf ($playerId)
    {
        return $playerId === $this->data->player_1 ? 1 : 2;
    }

    private function getOppositeIndexOf ($playerId)
    {
        return $this->getIndexOf($playerId) === 1 ? 2 : 1;
    }
}
