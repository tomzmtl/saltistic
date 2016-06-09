<?php

namespace App\Providers;

use App\Saltistic\CharacterStore;
use Illuminate\Support\ServiceProvider;
use Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // random favicon
        $CS = new CharacterStore();
        view()->share('favicon', asset('img/characters/small/'.$CS->getRandomCode().'.png'));

        // version number
        view()->share('appVersion', getAppVersion());

        // custom validation
        Validator::extend('kill_count', function($attribute, $value, $parameters, $validator) {
            $values = $validator->getData();

            $index  = (int) substr($attribute, -1);
            $oppIndex = $index === 1 ? 2 : 1;
            $score = (int) $value;
            $oppScore = (int) $values['score_'.$oppIndex];

            $stocks = (int) $values['stocks'];

            // score out of bounds
            if ($score > $stocks) {
                return false;
            }

            // no winner score
            if ($score !== $stocks && $oppScore !== $stocks) {
                return false;
            }

            // both winner scores
            if ($score === $stocks && $oppScore === $score) {
                return false;
            }

            return true;
        });

        Validator::replacer('kill_count', function ($message, $attribute, $rule, $parameters) {
            return str_replace(':index', substr($attribute, -1), $message);
        });
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
