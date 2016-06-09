<?php

use Illuminate\Database\Seeder;

class PlayerSeeder extends Seeder
{
    private $data = [
        ['Ato',        8],
        ['Sendo',     25],
        ['Neocid',     3],
        ['Plauriola',  9],
        ['Petate',    53],
        ['RY',        14],
        ['Luna',      50],
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
                'full_name' => $player[0],
                'favorite_character' => $player[1],
            ];
        },
        $this->data));
    }
}
