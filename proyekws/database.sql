CREATE DATABASE proyekws2024;

USE proyekws2024;
-- buat table anggota nya
CREATE TABLE user (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    nomer_telepon VARCHAR(15),
    dob DATE,
    gender ENUM('Laki-laki', 'Perempuan', 'Lainnya') NOT NULL,
    role ENUM('admin', 'anggota') NOT NULL
);

-- tabel buku nya
CREATE TABLE buku (
    id_buku INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    penulis VARCHAR(255) NOT NULL,
    penerbit VARCHAR(255),
    tahun_terbit YEAR,
    isbn VARCHAR(20) UNIQUE
);
-- buat table riview buku nya 
CREATE TABLE review_buku (
    id_review INT AUTO_INCREMENT PRIMARY KEY,
    id_buku INT NOT NULL,
    id_anggota INT NOT NULL,
    rating INT NOT NULL,
    komentar TEXT,
    tanggal_review TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_buku) REFERENCES buku(id_buku),
    FOREIGN KEY (id_anggota) REFERENCES user(id_user)
);

ALTER TABLE user
ADD password VARCHAR(255) NOT NULL;
ALTER TABLE user
ADD created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
ADD updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

