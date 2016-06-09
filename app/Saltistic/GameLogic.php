<?php

namespace App\Saltistic;

use App\Game;

Class GameLogic
{
    const MIN_STOCKS = 2;
    const MAX_STOCKS = 3;

    public static function getWinner(Game $game) {
        return self::isWinner(1, $game) ? 1 : 2;
    }

    public static function isWinner($player, Game $game) {
        $col = 'score_'.$player;
        return $game->$col === $game->stocks;
    }
}
