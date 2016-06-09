@extends('master')

@section('content')

<div class="title">
    <h1 class="ui header">Latests results</h1>
</div>
<table class="ui striped table">
    <tbody>

        @foreach ($results as $result)

            <tr>
                <td class="center aligned">
                    <img src="{{ asset('img/characters/small/'.$result[1]['character'].'.png') }}" width="32" height="32">
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
                <td class="center aligned">
                    <img src="{{ asset('img/characters/small/'.$result[2]['character'].'.png') }}" width="32" height="32">
                </td>
            </tr>

        @endforeach

    </tbody>
</table>

@endsection
