<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    # FIX: Replace this email with recipient email
    $mail_to = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

    # Sender Data
    $subject = 'PCT Email';
    $fname = str_replace(array("\r", "\n"), array(" ", " "), strip_tags(trim($_POST["fname"])));
    $lname = str_replace(array("\r", "\n"), array(" ", " "), strip_tags(trim($_POST["lname"])));
    $email = "yeagy@crazyyeagydesigns.com";
    $majors = $_POST["majors"];
    $dob = strip_tags(trim($_POST["dob"]));
    $semester = strip_tags(trim($_POST["semester"]));

    if (empty($fname) or empty($lname) or empty($dob) or empty($semester) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        # Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Please complete the form and try again.";

        exit;
    }

    # Mail Content
    $content = "Name: $fname $lname\n\n";
    $content .= "Top Major: $majors[0]\n";
    $content .= "Second Major: $majors[1]\n";
    $content .= "Third Major: $majors[2]\n";
    $content .= "Date of birth: $dob\n";
    $content .= "Semester: $semester\n";


    # email headers.
    $headers = "From: Pennsylvania College of Technology <$email>";

    # Send the email.
    $success = mail($mail_to, $subject, $content, $headers);
    if ($success) {
        # Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        # Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong, we couldn't send your message.";
    }

} else {
    # Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

?>
