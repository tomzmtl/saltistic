<!DOCTYPE html>
<html>
    <head>
        <title>Saltistic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @if (env('APP_ENV') === 'production')
            <link href="https://fonts.googleapis.com/css?family=Lato:400" rel="stylesheet" type="text/css">
        @else
            <link rel="stylesheet" href="{{ asset('css/fonts.css') }}" type="text/css">
        @endif
        <link rel="stylesheet" href="{{ asset('css/styles.css') }}" media="screen" charset="utf-8">
        <link rel="icon" href="{{ $faviconUrl }}">
        <script src={{ asset('js/bundle.js') }}></script>
        @yield('scripts')
    </head>
    <body class="{{ $bodyClass }}">
        <div class="main-wrap">
            <div class="sidebar-wrapper">
                <header class="sidebar">
                    <div class="mobile-menu-trigger" id="mobile-menu-trigger">
                        <img src="{{ $appVersion['icon'] }}">
                    </div>
                    <div class="sidebar-title">
                        <div class="title">
                            <a href="{{ url('/') }}">
                                <span class="sharp">#</span><span class="salt">Salt</span>istic
                            </a>
                        </div>
                        <strong class="subtitle">Don't get mad. Get salty.</strong>
                    </div>
                    <nav class="nav" id="sidebar-nav">
                        <ul>
                            <li class="{{ $bodyClass === 'index' ? 'active' : '' }}">
                                <a href="{{ url('/') }}">Dashboard</a>
                            </li>
                            <li class="{{ $bodyClass === 'games add' ? 'active' : '' }}">
                                <a href="{{ url('games/add') }}">Add a game</a>
                            </li>
                            <li class="{{ $bodyClass === 'games' ? 'active' : '' }}">
                                <a href="{{ url('games') }}">See all games</a>
                            </li>
                        </ul>
                        <ul class="players">
                            @foreach(Player::getAll() as $player)
                                <li class="{{ $bodyClass === 'player '.strtolower($player->name) ? 'active' : '' }}">
                                    <a href="{{ url('player/'.$player->name) }}">{{ $player->name }}</a>
                                </li>
                            @endforeach
                        </ul>
                    </nav>
                </div>
            </header>
            <main class="container">
                <div class="wrap">
                    <h1 class="main-title">
                        <div>
                            @yield('title')
                        </div>
                    </h1>
                    <div class="main-content">
                        @yield('content')
                    </div>
                </div>
            </main>
            <footer>
              <a href="https://github.com/tomzmtl/Saltistic" target="blank">
                  <img src="{{ $appVersion['icon'] }}">
              </a>
              <span>{{ $appVersion['number'] }}</span>
            </footer>
        </div>
    </body>
</html>
