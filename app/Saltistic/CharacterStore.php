<?php

namespace App\Saltistic;

Class CharacterStore
{
    private $characters = [];

    const INDEX_ID   = 0;
    const INDEX_CODE = 1;
    const INDEX_NAME = 2;
    const COUNT = 55;

    public function __construct ()
    {
        $this->characters = include base_path('resources/characters.php');
    }

    private function isIdValid ($id)
    {
        return $id > 0 && $id < self::COUNT+1;
    }

    public function getAll ()
    {
        return collect(array_map(function($char) {
            return (object) [
              'id' => $char[self::INDEX_ID],
              'name' => $char[self::INDEX_NAME],
            ];
        }, $this->characters));
    }

    public function getName ($index)
    {
        foreach ($this->characters as $character) {
            if ($character[self::INDEX_ID] === $index) {
                return $character[self::INDEX_NAME];
            }
        }
    }

    public function getCode ($index)
    {
        foreach ($this->characters as $character) {
            if ($character[self::INDEX_ID] === $index) {
                $code = $character[self::INDEX_CODE];
                return $code;
            }
        }
    }

    public function getRandomCode ()
    {
        return $this->getCode(rand(0, self::COUNT));
    }

    public function getIconUrl ($id) {
        $url = 'img/characters/unknown.png';
        if ($this->isIdValid($id)) {
            $code = $this->getCode($id);
            $url  = 'img/characters/small/'.$code.'.png';
        }
        return asset($url);
    }
}
