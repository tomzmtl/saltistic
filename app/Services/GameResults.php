<?php

namespace App\Services;

use App\Services\GameLogic;
use App\Services\CharacterStore;

class GameResults
{
    private $games;
    private $players;
    private $characters;

    public function __construct ($games, $players)
    {
        $this->games = $games;
        $this->players = $players;
        $this->characters = new CharacterStore();
    }

    public function generate ()
    {
        $results = [];
        foreach ($this->games as $game) {
            $results[] = [
                1 => [
                      'name' => $this->players->where('id', $game->player_1)->first()->name,
                     'score' => $game->score_1,
                    'winner' => GameLogic::isWinner(1, $game),
                    'character' => [
                      'icon' => $this->characters->getIconUrl($game->character_1),
                      'name' => $this->characters->getName($game->character_1),
                    ],
                ],
                2 => [
                      'name' => $this->players->where('id', $game->player_2)->first()->name,
                     'score' => $game->score_2,
                    'winner' => GameLogic::isWinner(2, $game),
                    'character' => [
                      'icon' => $this->characters->getIconUrl($game->character_2),
                      'name' => $this->characters->getName($game->character_2),
                    ],
                ]
            ];
        }
        return $results;
    }
}
