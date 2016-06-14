@extends('master')

@section('title')
    Add a game
@endsection

@section('scripts')

<script src='https://www.google.com/recaptcha/api.js'></script>
<script>
    window.saltisticData = {
        players: JSON.parse('{!! $players !!}'),
        characters: JSON.parse('{!! $characters !!}'),
    };
</script>

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

    <div id="formRender"></div>

    <button type="submit" class="ui btn">Submit</button>

</form>

@endsection
