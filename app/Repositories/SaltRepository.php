<?php

namespace App\Repositories;

use App\Abstracts\AbstractRepository as Repository;

class SaltRepository extends Repository
{
    protected $modelClass = 'App\SaltyMeter';

    public function ranked ()
    {
        return $this->model->orderBy('score', 'desc')->get();
    }

    public function addOrUpdate ($playerId, $score)
    {
        $item = $this->model->firstOrNew(['player' => $playerId]);
        $item->score = $score;
        $item->save();
    }
}
