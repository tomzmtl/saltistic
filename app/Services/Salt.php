<?php

namespace App\Services;

use App\Repositories\PlayerRepository;
use App\Repositories\SaltRepository;
use App\Services\GameLogic;
use Illuminate\Support\Collection;

class Salt
{
    private $rankings = [];

    public function __construct (SaltRepository $salt, PlayerRepository $player)
    {
        $this->Salt = $salt;
        $this->Player = $player;
    }

    public function getRankings ()
    {
        return self::rankings($this->Salt->ranked(), $this->Player->all());
    }

    public static function rankings (Collection $salt, Collection $players)
    {
        return $salt->map(function($row, $index) use ($players) {
            return (object) [
                    'name' => $players->where('id', $row->player)->first()->name,
                   'score' => $row->score,
                    'rank' => $index+1,
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
