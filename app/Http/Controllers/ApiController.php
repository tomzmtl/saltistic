<?php

namespace App\Http\Controllers;

use App\Services\Salt;

class ApiController extends Controller
{
    public function __construct (Salt $salt)
    {
        $this->saltService = $salt;
    }

    public function version ()
    {
        return response()->json([
            'number' => config('app.version.number'),
            'name'   => config('app.version.name'),
        ]);
    }

    public function salt ()
    {
        $data = $this->saltService->getRankings();
        return response()->json($data);
    }
}
