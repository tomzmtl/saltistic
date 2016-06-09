<?php

namespace App\Repositories;

use App\Abstracts\AbstractRepository as Repository;

class GameRepository extends Repository
{
    // This is where the "magic" comes from:
    protected $modelClass = 'App\Game';

    protected $collectionClass = 'App\Collections\GameCollection';

    // This class only implements methods specific to this Repository
    public function latest ($count = null)
    {
        $builder = $this->model->orderBy('id', 'desc');
        if ($count) {
            $builder->take($count);
        }
        return $builder->get();
    }

    public function withPlayers (array $playerIds)
    {
        // Get data from buffer
        if ($this->all) {
            return $this->all->filter(function($game) use ($playerIds) {
                foreach ($playerIds as $id) {
                    if ($id === $game->player_1 || $id === $game->player_2) {
                        return true;
                    }
                }
                return false;
            });
        }

        // Get data from DB
        $builder = $this->model->query();
        foreach ($playerIds as $id) {
            $builder->orWhere('player_1', $id);
            $builder->orWhere('player_2', $id);
        }
        return $builder->get()->toBase();
    }
}
