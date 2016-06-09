<?php

namespace App\Repositories;

use App\Abstracts\AbstractRepository as Repository;

class SaltRepository extends Repository
{
    protected $modelClass = 'App\SaltyMeter';

    public function ranked ()
    {
        $rankify = function ($row, $index) {
            $row->rank = $index+1;
            return $row;
        };

        $rows = $this->model->orderBy('score', 'desc')->get()->map($rankify);
        return $rows->toBase();
    }

    public function addOrUpdate ($playerId, $score)
    {
        $item = $this->model->firstOrNew(['player' => $playerId]);
        $item->score = $score;
        $item->save();
    }

    public function ofPlayer ($playerId)
    {
        return $this->ranked()->where('player', $playerId)->first();
    }
}
