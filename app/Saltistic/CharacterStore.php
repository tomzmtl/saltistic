<?php

namespace App\Saltistic;

Class CharacterStore
{
    private $characters = [];

    const ID = 0;
    const CODE = 1;
    const NAME = 2;

    public function __construct ()
    {
        $this->characters = include base_path('resources/characters.php');
    }

    public function getName ($index)
    {
        foreach ($this->characters as $character) {
            if ($character[self::ID] === $index) {
                return $character[self::NAME];
            }
        }
    }

    public function getCode ($index)
    {
        foreach ($this->characters as $character) {
            if ($character[self::ID] === $index) {
                $code = $character[self::CODE];
                return $code;
            }
        }
    }

    public function count ()
    {
        return count($this->characters);
    }

    public function getRandomCode ()
    {
        return $this->getCode(rand(0, $this->count()));
    }
}
