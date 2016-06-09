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

Route::get('/', 'PageController@index');

Route::get('games',     'GameController@index');
Route::get('games/add', 'GameController@add');

Route::post('addGame', 'GameController@postAdd');

Route::get('bot', function() { return 'i See wHat you dId There.'; });
