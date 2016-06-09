<?php

function selectIfOld($name, $value)
{
    $old = old($name);
    if ($old === null) {
        return;
    }
    if ($old === (string) $value) {
        echo 'selected';
    }
}

function setAppVersionData ($characters)
{
    $data = trim(file_get_contents(base_path('.version')));
    $data = explode('/', $data);
    config(['app.version.number' => $data[0]]);
    config(['app.version.name' => $characters->getName($data[1])]);
    config(['app.version.character' => $data[1]]);
}
