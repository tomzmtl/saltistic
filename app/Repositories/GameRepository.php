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
        $builder = $this->model->query();
        foreach ($playerIds as $id) {
            $builder->orWhere('player_1', $id);
            $builder->orWhere('player_2', $id);
        }
        return $builder->get()->toBase();
    }
}
