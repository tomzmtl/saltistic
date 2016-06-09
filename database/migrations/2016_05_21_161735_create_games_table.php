<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
         Schema::create('games', function (Blueprint $table) {
             $table->increments('id');
             $table->integer('stocks');
             $table->integer('player_1')->unsigned();
             $table->integer('player_2')->unsigned();
             $table->integer('score_1')->unsigned();
             $table->integer('score_2')->unsigned();
             $table->integer('character_1')->unsigned();
             $table->integer('character_2')->unsigned();
             $table->timestamps();

             // foreign keys
             $table->foreign('player_1')->references('id')->on('players');
             $table->foreign('player_2')->references('id')->on('players');
         });
     }

     /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
         Schema::drop('games');
     }
}
