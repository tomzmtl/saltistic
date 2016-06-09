@extends('master')

@section('title')
    {{ $player->name }}
@endsection

@section('content')

<div class="ui two columns">
    <div class="col">
        <div class="ui card overview no-padding">
            <ul class="base stats">
                <li class="big multiline stat">
                    <span class="name">Salt Level</span>
                    <span class="value">{{ $salt->score }}</span>
                </li>
                <li class="rank stat">
                    <span class="name">Rank</span>
                    <span class="value">{{ $salt->rank }}</span>
                </li>
                <li class="big multiline stat">
                    <span class="name">Wins</span>
                    <span class="value">{{ $wins }}%</span>
                </li>
            </ul>
            <ul class="enemy stats">
                <li class="multiline stat">
                    <span class="name">Nemesis</span>
                    <span class="value">{{ $nemesis }}</span>
                </li>
                <li class="multiline stat">
                    <span class="name">Victim</span>
                    <span class="value">{{ $victim }}</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="col">
        <div class="ui card characters">
            <h2>Character usage</h2>
            <ul class="ui grid">
                @foreach ($characterUsage as $character)
                    <li class="item">
                        <img src="{{ $character->portrait }}" title="{{ $character->name }}" />
                        <div class="info">{{ $character->usage }}%</div>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="ui card characters">
            <h2>Character wins</h2>
            <ul class="ui grid">
                @foreach ($characterWins as $character)
                    <li class="item">
                        <img src="{{ $character->portrait }}" title="{{ $character->name }}" />
                        <div class="info">{{ $character->wins }}%</div>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
</div>

@endsection
