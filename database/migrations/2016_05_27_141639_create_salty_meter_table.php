<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSaltyMeterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saltymeter', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('player')->unsigned();
            $table->integer('score')->unsigned();

            // foreign keys
            $table->foreign('player')->references('id')->on('players');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('saltymeter');
    }
}
