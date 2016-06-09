<?php

namespace App\Services;

use App\Services\GameLogic;
use Illuminate\Support\Collection;

class Salt
{
    private $rankings = [];

    public static function rankings (Collection $salt, Collection $players)
    {
        $i = 1;
        return $salt->map(function($row) use ($players, $i) {
            return (object) [
                    'name' => $players->where('id', $row->player)->first()->name,
                   'score' => $row->score,
                    'rank' => $i++,
            ];
        });
    }

    public static function update (array $players, Collection $games)
    {

    }

    public static function getSaltScore ($playerId, Collection $games)
    {
        $games = $games->filter(function($game) use ($playerId) {
            return $game->player_1 === $playerId || $game->player_2 === $playerId;
        });

        $stocksLost = 0;
        $gamesLost  = 0;

        foreach ($games as $game) {
            $index = $game->player_1 === $playerId ? 1 : 2;
            $oppIndex = $index === 1 ? 2 : 1;
            $scoreAttr = 'score_'.$index;
            if ($game->$scoreAttr < $game->stocks) {
                $stocksLost += $game->stocks;
                $gamesLost++;
            } else {
                $oppScoreAttr = 'score_'.$oppIndex;
                $stocksLost += $game->$oppScoreAttr;
            }
        }

        return self::calculateSaltFormula($stocksLost, $gamesLost);
    }

    public static function calculateSaltFormula ($stocksLost, $gamesLost)
    {
        return [
            $stocksLost,
            $gamesLost,
            $stocksLost + ($gamesLost * 3),
        ];
    }
}
