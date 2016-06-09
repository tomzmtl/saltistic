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
            26,  // character_1
            15,  // character_2
        ],
        [2, 2, 6, 2, 1, 26, 15],

        [2, 1, 5, 2, 1,  9, 54],
        [2, 1, 5, 1, 2,  9, 54],
        [2, 1, 5, 0, 2,  9, 54],

        [2, 2, 4, 1, 2, 26, 10],
        [2, 2, 4, 2, 0, 26, 10],
        [2, 2, 4, 0, 2, 26, 10],

        [2, 1, 6, 1, 2,  9, 15],
        [2, 1, 6, 2, 0,  9,  6],
        [2, 1, 6, 1, 2,  9, 15],

        [2, 4, 5, 1, 2, 10, 54],
        [2, 4, 5, 0, 2, 10, 54],

        [2, 1, 2, 0, 2,  9, 26],
        [2, 1, 4, 1, 2,  9, 10],
        [2, 1, 5, 2, 0,  9, 54],
        [2, 1, 6, 1, 2,  9, 15],
        [2, 2, 4, 1, 2, 26, 10],
        [2, 2, 5, 2, 1, 26, 54],
        [2, 2, 6, 1, 2, 26, 15],
        [2, 4, 5, 2, 1, 10, 54],
        [2, 4, 6, 0, 2, 10, 15],
        [2, 3, 7, 2, 0,  4, 51],
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
