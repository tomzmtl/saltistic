<?php

namespace App\Stats;

use Illuminate\Support\Collection;
use App\Collections\GameCollection;
use App\Stats\GameStats;

class PlayerStats
{
    private $wins = 0;
    private $losses = 0;
    private $nemesis;
    private $opponents = [];
    private $characters = [];

    public function __construct ($playerId, Collection $players, Collection $games)
    {
        $this->players = $players;
        $this->games   = new GameCollection($games->all());
        $this->games   = $this->games->withPlayer($playerId);
        $this->player  = $players->where('id', $playerId)->first();
        $this->crunch();
    }

    public function initializeCharacter ($id)
    {
        if (!array_key_exists($id, $this->characters)) {
            $this->characters[$id] = (object) [
                'wins'   => 0,
                'losses' => 0,
            ];
        }
    }

    public function getWinPercentage ()
    {
        return self::winPercentage($this->wins, $this->losses);
    }

    public function getNemesis ()
    {
        return $this->nemesis;
    }

    public function getVictim ()
    {
        return $this->victim;
    }

    public function getCharactersWinPercentage ()
    {
        $output = [];
        foreach ($this->characters as $id => $data) {
            $output[$id] = self::winPercentage($data->wins, $data->losses);
        }
        return $output;
    }

    public function getCharacterUsage ()
    {
        $output = [];
        $cap = 100;
        $i = 0;
        foreach ($this->characters as $id => $data) {
            if ($i === count($this->characters) - 1) {
                $output[$id] = $cap;
                continue;
            }
            $output[$id] = intval(floor((($data->wins + $data->losses) / $this->getTotalGames()) * 100));
            $cap -= $output[$id];
            $i++;
        }
        return $output;
    }

    public static function winRatio ($wins, $losses)
    {
        return round($wins / ($wins + $losses), 2);
    }

    public static function winPercentage ($wins, $losses)
    {
        return intval(round($wins / ($wins + $losses), 2) * 100);
    }

    private function crunch ()
    {
        foreach ($this->games as $game) {
            $game = new GameStats($game);

            // init opponent
            $opponent = $game->getOpponentId($this->player->id);
            $this->initializeOpponent($opponent);

            // init character
            $character = $game->getCharacterId($this->player->id);
            $this->initializeCharacter($character);

            if ($game->winner === $this->player->id) {
                $this->registerWin($opponent, $character);
                continue;
            }
            $this->registerLoss($opponent, $character);
        }

        // process opponent stats
        $nemesisPercentage = 100;
        $victimPercentage  = 0;
        foreach ($this->opponents as $id => $stats) {
            $stats->wlr = self::winPercentage($stats->wins, $stats->losses);
            if ($stats->wlr <= $nemesisPercentage) {
                $nemesisPercentage = $stats->wlr;
                $this->nemesis = $id;
            }
            if ($stats->wlr >= $victimPercentage) {
                $victimPercentage = $stats->wlr;
                $this->victim = $id;
            }
        }

        // process character stats
        //dd($this);
    }

    private function initializeOpponent ($id)
    {
        if (!array_key_exists($id, $this->opponents)) {
            $this->opponents[$id] = (object) [
                'wins'   => 0,
                'losses' => 0,
            ];
        }
    }

    private function registerWin ($opponent, $character) {
        $this->wins++;
        $this->opponents[$opponent]->wins++;
        $this->characters[$character]->wins++;
    }

    private function registerLoss ($opponent, $character) {
        $this->losses++;
        $this->opponents[$opponent]->losses++;
        $this->characters[$character]->losses++;
    }

    private function getTotalGames ()
    {
        return $this->wins + $this->losses;
    }
}
