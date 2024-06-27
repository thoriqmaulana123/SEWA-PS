<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $package = htmlspecialchars($_POST['package']);
    $address = htmlspecialchars($_POST['address']);
    $instagram = htmlspecialchars($_POST['instagram']);
    $facebook = htmlspecialchars($_POST['facebook']);
    $date = htmlspecialchars($_POST['date']);
    $ktp = $_FILES['ktp'];

    if (empty($name) || empty($package) || empty($address) || empty($instagram) || empty($facebook) || empty($date) || empty($ktp)) {
        die("Semua bidang harus diisi.");
    }

    if ($ktp['error'] != 0) {
        die("Upload KTP gagal.");
    }

    $target_dir = "uploads/";
    $target_file = $target_dir . basename($ktp["name"]);
    if (move_uploaded_file($ktp["tmp_name"], $target_file)) {
        echo "Pemesanan berhasil diproses.";
    } else {
        die("Terjadi kesalahan saat mengupload KTP.");
    }
}
?>
