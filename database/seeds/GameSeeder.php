<?php

use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    private $data = [
        [
            2,   // stocks
            2,   // player_1
            6,   // player_2
            2,   // score_1
            0,   // score_2
            25,  // character_1
            14,  // character_2
        ],
        [2, 2, 6, 2, 1, 25, 14],

        [2, 1, 5, 2, 1,  8, 53],
        [2, 1, 5, 1, 2,  8, 53],
        [2, 1, 5, 0, 2,  8, 53],

        [2, 2, 4, 1, 2, 25,  9],
        [2, 2, 4, 2, 0, 25,  9],
        [2, 2, 4, 0, 2, 25,  9],

        [2, 1, 6, 1, 2,  8, 14],
        [2, 1, 6, 2, 0,  8,  5],
        [2, 1, 6, 1, 2,  8, 14],

        [2, 4, 5, 1, 2,  9, 53],
        [2, 4, 5, 0, 2,  9, 53],

        [2, 1, 2, 0, 2,  8, 25],
        [2, 1, 4, 1, 2,  8,  9],
        [2, 1, 5, 2, 0,  8, 53],
        [2, 1, 6, 1, 2,  8, 14],
        [2, 2, 4, 1, 2, 25,  9],
        [2, 2, 5, 2, 1, 25, 53],
        [2, 2, 6, 1, 2, 25, 14],
        [2, 4, 5, 2, 1,  9, 53],
        [2, 4, 6, 0, 2,  9, 14],
        [2, 3, 7, 2, 0,  3, 50],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('games')->insert(array_map(function ($game) {
            return array_combine([
                'stocks',
                'player_1',
                'player_2',
                'score_1',
                'score_2',
                'character_1',
                'character_2',
            ], $game);
        },
        $this->data));
    }
}
