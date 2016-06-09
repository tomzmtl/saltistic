<!DOCTYPE html>
<html>
    <head>
        <title>Saltistic</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/semantic-ui.css') }}" media="screen" charset="utf-8">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}" media="screen" charset="utf-8">
        <link rel="icon" href="{{ $favicon }}">
        @yield('scripts')
    </head>
    <body>
        <div class="wrap">
            <div class="sidebar-wrapper">
                <div class="sidebar">
                    <header>
                        <h1><a href="{{ url('/') }}"><span class="sharp">#</span><span class="salt">Salt</span>istic</a></h1>
                        <h2>Don't get mad. Get salty.</h2>
                    </header>
                    <nav>
                        <div class="ui vertical menu">
                            <a class="item" href="{{ url('/') }}">
                                <h4 class="ui header">Home</h4>
                                <p>Check out what's new</p>
                            </a>
                            <a class="item" href="{{ url('add') }}">
                                <h4 class="ui header">Add a game</h4>
                                <p>Create a new entry</p>
                            </a>
                        </div>
                    </nav>
                    <footer>build {{ $appVersion }}</footer>
                </div>
            </div>
            <main class="container">
                <div class="wrap">
                    @yield('content')
                </div>
            </main>
        </div>
    </body>
</html>
