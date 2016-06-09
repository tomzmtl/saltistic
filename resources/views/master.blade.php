<!DOCTYPE html>
<html>
    <head>
        <title>Saltistic</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:400" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/semantic-ui.css') }}" media="screen" charset="utf-8">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}" media="screen" charset="utf-8">
        <link rel="icon" href="{{ $faviconUrl }}">
        @yield('scripts')
    </head>
    <body class="{{ $bodyClass }}">
        <div class="wrap">
            <div class="sidebar-wrapper">
                <div class="sidebar">
                    <header>
                        <h1><a href="{{ url('/') }}"><span class="sharp">#</span><span class="salt">Salt</span>istic</a></h1>
                        <h2>Don't get mad. Get salty.</h2>
                    </header>
                    <nav>
                        <div class="ui vertical menu">
                            <a class="item {{ $bodyClass === 'index' ? 'active' : '' }}" href="{{ url('/') }}">
                                <h4 class="ui header">Dashboard</h4>
                                <p>Check out what's new</p>
                            </a>
                            <a class="item {{ $bodyClass === 'gamesAdd' ? 'active' : '' }}" href="{{ url('games/add') }}">
                                <h4 class="ui header">Add a game</h4>
                                <p>Show me your moves!</p>
                            </a>
                            <a class="item {{ $bodyClass === 'games' ? 'active' : '' }}" href="{{ url('games') }}">
                                <h4 class="ui header">See all games</h4>
                            </a>
                        </div>
                    </nav>
                    <footer>
                      <span>Build {{ $appVersion['number'] }}</span>
                      <img src="{{ $appVersion['icon'] }}">
                    </footer>
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
