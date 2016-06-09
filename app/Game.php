<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $guarded = ['g-recaptcha-response'];

    public function player1 ()
    {
        return $this->hasOne('App\Player', 'id', 'player_1');
    }

    public function player2 ()
    {
        return $this->hasOne('App\Player', 'id', 'player_2');
    }
}
