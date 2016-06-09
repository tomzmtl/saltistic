<?php

namespace App\Http\Controllers;

use App\Stats\PlayerStats;
use App\Repositories\PlayerRepository;
use App\Repositories\GameRepository;
use App\Repositories\SaltRepository;
use App\Stores\CharacterStore;

class PlayerController extends Controller
{
    public function __construct (PlayerRepository $player, GameRepository $game, SaltRepository $salt)
    {
        $this->Player = $player;
        $this->Game = $game;
        $this->Salt = $salt;
    }

    public function profile ($name) {
        $players = $this->Player->all();
        $player  = $this->Player->withName($name);
        $games = $this->Game->withPlayers([$player->id]);

        $salt = $this->Salt->ofPlayer($player->id);

        $stats = new PlayerStats($player->id, $players, $games);

        $playerMap = [];
        foreach ($players as $p) {
            $playerMap[$p->id] = $p->name;
        }

        $CS = new CharacterStore();

        $player->characterImg  = $CS->getImgUrl($player->favorite_character, 'big');
        $player->characterName = $CS->getName($player->favorite_character);

        $characterWins = [];
        foreach ($stats->getCharactersWinPercentage() as $id => $wins) {
            $characterWins[] = (object) [
                'name'     => $CS->getName($id),
                'portrait' => $CS->getImgUrl($id, 'medium'),
                'wins'     => $wins,
            ];
        }

        $characterUsage = [];
        foreach ($stats->getCharacterUsage() as $id => $usage) {
            $characterUsage[] = (object) [
                'name'     => $CS->getName($id),
                'portrait' => $CS->getImgUrl($id, 'medium'),
                'usage'    => $usage,
            ];
        }

        $data = [
            'characterWins' => $characterWins,
            'characterUsage' => $characterUsage,
            'nemesis' => $playerMap[$stats->getNemesis()],
            'player' => $player,
            'salt' => $salt,
            'victim' => $playerMap[$stats->getVictim()],
            'wins' => $stats->getWinPercentage(),
        ];

        return view('player', $data);
    }
}
