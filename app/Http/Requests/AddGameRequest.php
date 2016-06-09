<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Saltistic\CharacterStore;
use App\Saltistic\GameLogic;

class AddGameRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'stocks'      => ['required', 'integer', 'between:'.GameLogic::MIN_STOCKS.','.GameLogic::MAX_STOCKS],
            'player_1'    => ['required', 'exists:players,id'],
            'player_2'    => ['required', 'exists:players,id', 'different:player_1'],
            'score_1'     => ['required', 'integer', 'kill_count'],
            'score_2'     => ['required', 'integer', 'kill_count'],
            'character_1' => ['required', 'integer', 'between:0,'.CharacterStore::COUNT],
            'character_2' => ['required', 'integer', 'between:0,'.CharacterStore::COUNT],
        ];
    }
}
