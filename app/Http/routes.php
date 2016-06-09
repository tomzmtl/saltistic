<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Index
Route::get('/', 'PageController@index');

// Games
Route::get('games',     'GameController@index');
Route::get('games/add', 'GameController@add');
Route::post('addGame', 'GameController@postAdd');

// Players
Route::get('player/{player}', 'PlayerController@profile');

// Bot redirect
Route::get('bot', function() { return 'i See wHat you dId There.'; });

// Api
$apiConfig = [
    'middleware' => 'cors',
    'prefix' => 'api/v1',
];

Route::group($apiConfig, function () {
    Route::get('version', 'ApiController@version');
    Route::get('salt', 'ApiController@salt');
});
