@extends('master')

@section('title')
    Dashboard
@endsection

@section('content')

@if (session('gameAdded'))
    <div class="ui positive message">
        <div class="header">Game added !</div>
    </div>
@endif

<div class="ui cards">
    <div class="ui card salt">
        <h2>Salt-y-Meter</h2>
        <div class="ui table saltymeter">
            @foreach ($saltymeter as $player)
                <div class="row">
                    <div class="cell name">
                        <a href="{{ url('player/'.$player->name) }}">
                            {{ $player->name }}
                        </a>
                    </div>
                    <div class="cell score line-y">{{ $player->score }}</div>
                </div>
            @endforeach
        </div>
    </div>

    <div class="ui card games">
        <h2>Latest games</h2>
        <div class="ui table gamelist lines-x">
            @foreach ($results as $result)
                <div class="row">
                    <div class="cell icon winner-{{ (int) $result[1]['winner'] }} ">
                        <img src="{{ $result[1]['character']['icon'] }}" title="{{ $result[1]['character']['name'] }}">
                    </div>
                    <div class="cell first name winner-{{ (int) $result[1]['winner'] }}">
                        {{ $result[1]['name'] }}
                    </div>
                    <div class="cell score">
                        {{ $result[1]['score'] }}
                    </div>
                    <div class="cell score line-y">
                        {{ $result[2]['score'] }}
                    </div>
                    <div class="cell second name winner-{{ (int) $result[2]['winner'] }}">
                        {{ $result[2]['name'] }}
                    </div>
                    <div class="cell icon winner-{{ (int) $result[2]['winner'] }}">
                        <img src="{{ $result[2]['character']['icon'] }}" title="{{ $result[2]['character']['name'] }}">
                    </div>
                </div>
            @endforeach
        </div>
        <div class="link">
            <a href="{{ url('games') }}">See the full list</a>
        </div>
    </div>
</div>

@endsection
