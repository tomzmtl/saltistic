<?php

namespace App\Repositories;

use App\Abstracts\AbstractRepository as Repository;

class PlayerRepository extends Repository
{
    protected $modelClass = 'App\Player';

    public function withName ($name)
    {
        // Get data from DB
        return $this->model->where(compact('name'))->get()->first();
    }
}
