<?php

namespace App\Providers;

use App\Facade\Player;
use App\Repositories\PlayerRepository;
use App\Stores\CharacterStore;
use App\Stores\PlayerStore;
use Illuminate\Support\ServiceProvider;
use Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(\Illuminate\Http\Request $request)
    {
        // App binding
        $this->app->singleton('CharacterStore', function ($app) {
            return new CharacterStore();
        });

        $this->app->singleton('PlayerStore', function ($app) {
            return new PlayerStore(new PlayerRepository($app));
        });

        $CS = new CharacterStore();

        // version number
        setAppVersionData($CS);
        view()->share('appVersion', [
          'number' => config('app.version.number'),
          'icon'   => $CS->getImgUrl(config('app.version.character')),
        ]);

        // favicon
        view()->share('faviconUrl', $CS->getImgUrl(config('app.version.character')));

        // main body class
        view()->share('bodyClass', $this->getBodyClasses($request->path()));



        $this->extendValidator();
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

    private function getBodyClasses ($path)
    {
        if ($path === '/') {
            return 'index';
        }
        return strtolower(str_replace('/', ' ', $path));
    }

    private function extendValidator ()
    {
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
}
