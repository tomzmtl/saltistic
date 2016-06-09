<!DOCTYPE html>
<html>
    <head>
        <title>Saltistic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Lato:400" rel="stylesheet" type="text/css">
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
                                <a href="{{ url('/') }}">
                                    <h4 class="ui header">Dashboard</h4>
                                    <p>Check out what's new</p>
                                </a>
                            </li>
                            <li class="{{ $bodyClass === 'games-add' ? 'active' : '' }}">
                                <a href="{{ url('games/add') }}">
                                    <h4 class="ui header">Add a game</h4>
                                    <p>Show me your moves!</p>
                                </a>
                            </li>
                            <li class="{{ $bodyClass === 'games' ? 'active' : '' }}">
                                <a href="{{ url('games') }}">
                                    <h4 class="ui header">See all games</h4>
                                </a>
                            </li>
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
