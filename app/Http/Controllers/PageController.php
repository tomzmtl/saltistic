<?php

namespace App\Http\Controllers;

use App\Services\Pages\Index;


class PageController extends Controller
{
    public function __construct (Index $index)
    {
        $this->index = $index;
    }

    public function index ()
    {
        return view('index', $this->index->handle());
    }
}
