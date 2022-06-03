<?php

function conectarDB(){
    $db = new mysqli('localhost', 'root', '', 'bienesraices_crud');

    if(!$db){
        echo "Error no se pudo conectar";
    }

    return $db;

}