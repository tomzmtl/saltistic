<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayersTable extends Migration
{
    /**
    * Run the migrations.
    *
    * @return void
    */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->increments('id');
            $table->string('full_name');
            $table->string('email')->unique()->nullable();
            $table->integer('favorite_character');
            $table->integer('arch_enemy')->unsigned()->nullable();
            $table->integer('victim')->unsigned()->nullable();
            $table->timestamps();

            // foreign keys
            $table->foreign('arch_enemy')->references('id')->on('players');
            $table->foreign('victim')->references('id')->on('players');
        });
    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {
        Schema::drop('players');
    }
}
