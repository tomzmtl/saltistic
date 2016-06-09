<?php

use Illuminate\Database\Seeder;

class PlayerSeeder extends Seeder
{
    private $data = [
        ['ATo',        9],
        ['Sendo',     26],
        ['Neocid',     4],
        ['Plauriola', 10],
        ['Petate',    54],
        ['RY',        15],
        ['Luna',      51],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('players')->insert(array_map(function ($player) {
            return [
                'name' => $player[0],
                'favorite_character' => $player[1],
            ];
        },
        $this->data));
    }
}
