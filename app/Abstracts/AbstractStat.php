<?php

namespace App\Abstracts;

abstract class AbstractStat
{
    private $name;
    private $value;

    private function construct ()
    {
        $this->process();
    }
}
