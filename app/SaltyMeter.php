<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SaltyMeter extends Model
{
    public $timestamps = false;
    protected $table = 'saltymeter';
    protected $guarded = [];
}
