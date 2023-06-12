<?php
// Database connection
$host = "localhost";
$dbname = "techbiz";
$username = "";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch images from the database
    $stmt = $conn->prepare("SELECT * FROM images");
    $stmt->execute();
    $images = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Generate dynamic CSS code
    $css = "";
    foreach ($images as $image) {
        $css .= ".background-image-" . $image['id'] . " { background-image: url(" . $image['image_path'] . "); } ";
    }

    // Output CSS code
    header("Content-Type: text/css");
    echo $css;
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
