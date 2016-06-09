<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Saltistic\CharacterStore;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $CS = new CharacterStore();
        view()->share('favicon', asset('img/characters/small/'.$CS->getRandomCode().'.png'));
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
