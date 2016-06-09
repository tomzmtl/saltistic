@extends('master')

@section('content')

<h1 class="ui header">Dashboard</h1>
<div class="ui divider"></div>

@if (session('gameAdded'))
    <div class="ui positive message">
        <div class="header">Game added !</div>
    </div>
@endif

<div class="ui two stackable cards">
    <div class="card saltymeter">
        <section class="content">
            <h2 class="ui header">Salt-y-meter</h2>
            <table class="ui striped celled table">
                <tbody>
                    @foreach ($saltymeter as $player)
                        <tr>
                            <td>{{ $player->name }}</td>
                            <td class="score">{{ $player->score }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </section>
    </div>
    <div class="card games">
        <section class="content">
            <h2 class="ui header">Latest Games</h2>
            <table class="ui striped table">
                <tbody>
                    @foreach ($results as $result)
                        <tr>
                            <td class="center aligned icon winner-{{ (int) $result[1]['winner'] }} large monitor only">
                                <img src="{{ $result[1]['character']['icon'] }}" title="{{ $result[1]['character']['name'] }}">
                            </td>
                            <td class="name right aligned winner-{{ (int) $result[1]['winner'] }}">
                                {{ $result[1]['name'] }}
                            </td>
                            <td class="center aligned">
                                {{ $result[1]['score'] }}
                            </td>
                            <td class="center aligned">
                                {{ $result[2]['score'] }}
                            </td>
                            <td class="name winner-{{ (int) $result[2]['winner'] }}">
                                {{ $result[2]['name'] }}
                            </td>
                            <td class="center aligned icon winner-{{ (int) $result[2]['winner'] }} large monitor only">
                                <img src="{{ $result[2]['character']['icon'] }}" title="{{ $result[2]['character']['name'] }}">
                            </td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot class="full-width">
                    <tr>
                        <th colspan="6" class="center aligned">
                            <a href="{{ url('games') }}">See the full list</a>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </section>
    </div>
</div>

@endsection
