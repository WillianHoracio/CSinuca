<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: *");

    function autentica() {
        return 'abc123';
    }

    echo json_encode(autentica());
?>