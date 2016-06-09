<?php

namespace App\Repositories;

use App\Abstracts\AbstractRepository as Repository;

class PlayerRepository extends Repository
{
    protected $modelClass = 'App\Player';

    public function withName ($name)
    {
        // Get data from buffer
        if ($this->all) {
            return $this->all->filter(function($player) use ($name) {
                return strtolower($name) === strtolower($player->name);
            })->first();
        }

        // Get data from DB
        return $this->model->where(compact('name'))->get()->first();
    }
}
