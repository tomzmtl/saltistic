<!DOCTYPE html>
<html>
    <head>
        <title>Saltistic</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/semantic-ui.css') }}" media="screen" charset="utf-8">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}" media="screen" charset="utf-8">
        <link rel="icon" href="{{ $favicon }}">
    </head>
    <body>
        <div class="wrap">
            <div class="sidebar">
                <header>
                    <h1><span>#</span>Saltistic</h1>
                    <h2>Don't get mad, Get salty.</h2>
                </header>
                <footer>build 0.1.2</footer>
            </div>

            <main class="container">
                @yield('content')
            </main>
        </div>
    </body>
</html>
