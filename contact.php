<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from form
    $name = $_POST["name"];
    $emailFrom = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];


    // Set up email parameters
    $to = "hello@paolomissagia.com"
    $body = "Name: $name\nEmail: $emailFrom\n\n$message";

    // Send the email
    if (mail($to, $subject, $body)) {
        http_response_code(200);
        echo "Thank you for your message!";
    } else {
        http_response_code(500);
        echo "Something went wrong";
    }
} else {
    http_response_code(400);
    echo "Bad Request";
}