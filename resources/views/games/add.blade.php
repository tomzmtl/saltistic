@extends('master')

@section('title')
    Add a game
@endsection

@section('scripts')

<script src='https://www.google.com/recaptcha/api.js'></script>

@endsection

@section('content')

@if ($errors->all())
    <div class="ui error message">
        <div class="heading">
            <code>/!\</code> There was some errors with your submission
        </div>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ url('addGame') }}" method="POST" class="ui form">
    {{ csrf_field() }}

    <div class="ui card stocks">
        <div class="required field {{ $errors->has('stocks') ? 'error' : '' }}">
            <label>Stocks</label>
            <select name="stocks" class="ui dropdown" required>
                @foreach ($stocks as $count)
                    <option {{ selectIfOld('stocks', $count) }} value="{{ $count }}">
                        {{ $count }}
                    </option>
                @endforeach
            </select>
        </div>
    </div>

    <div class="ui cards">
        <div class="ui card player">
            <h2>Player 1</h2>
            <div class="required field {{ $errors->has('player_1') ? 'error' : '' }}">
                <label>Name</label>
                <select name="player_1" class="ui dropdown" required>
                    <option value="" disabled selected>Choose...</option>
                    @foreach ($players as $player)
                        <option {{ selectIfOld('player_1', $player->id) }} value="{{ $player->id }}">
                            {{ $player->name }}
                        </option>
                    @endforeach
                </select>
            </div>
            <div class="required field {{ $errors->has('character_1') ? 'error' : '' }}">
                <label>Character</label>
                <select name="character_1" class="ui dropdown" required>
                    <option value="" disabled selected>Choose...</option>
                    @foreach ($characters as $character)
                        <option {{ selectIfOld('character_1', $character->id) }} value="{{ $character->id }}">
                            {{ $character->name }}
                        </option>
                    @endforeach
                </select>
            </div>
            <div class="required field {{ $errors->has('score_1') ? 'error' : '' }}">
                <label>Score</label>
                <select name="score_1" class="ui dropdown" required>
                    <option value="" disabled selected>Choose...</option>
                    @for ($i = 0; $i <= max($stocks); $i++)
                        <option {{ selectIfOld('score_1', $i) }} value="{{ $i }}">
                            {{ $i }}
                        </option>
                    @endfor
                </select>
            </div>
        </div>
        <div class="ui card player">
            <h2>Player 2</h2>
            <div class="required field {{ $errors->has('player_2') ? 'error' : '' }}">
                <label>Name</label>
                <select name="player_2" class="ui dropdown" required>
                    <option value="" disabled selected>Choose...</option>
                    @foreach ($players as $player)
                        <option {{ selectIfOld('player_2', $player->id) }} value="{{ $player->id }}">
                            {{ $player->name }}
                        </option>
                    @endforeach
                </select>
            </div>
            <div class="required field {{ $errors->has('character_2') ? 'error' : '' }}">
                <label>Character</label>
                <select name="character_2" class="ui dropdown" required>
                    <option value="" disabled selected>Choose...</option>
                    @foreach ($characters as $character)
                        <option {{ selectIfOld('character_2', $character->id) }} value="{{ $character->id }}">
                            {{ $character->name }}
                        </option>
                    @endforeach
                </select>
            </div>
            <div class="required field {{ $errors->has('score_2') ? 'error' : '' }}">
                <label>Score</label>
                <select name="score_2" class="ui dropdown" required>
                    <option value="" disabled selected>Choose...</option>
                    @for ($i = 0; $i <= max($stocks); $i++)
                        <option {{ selectIfOld('score_2', $i) }} value="{{ $i }}">
                            {{ $i }}
                        </option>
                    @endfor
                </select>
            </div>
        </div>
    </div>

    <div class="g-recaptcha" data-sitekey="6Ld_7iATAAAAAGenSPju81hhqTrClIw15SfEEW7n"></div>

    <button type="submit" class="ui btn">Submit</button>

</form>

@endsection
