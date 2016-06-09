@extends('master')

@section('title')
    Latest Games
@endsection

@section('content')

<div class="ui card">
    <div class="ui table gamelist">
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
</div>

@endsection
