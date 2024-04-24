const express = require('express');
const jwt = require('jsonwebtoken');
const Buku = require('../model/buku'); // Sesuaikan path ke model Buku Anda

const router = express.Router();

// Endpoint untuk menambahkan buku
router.post('/', async (req, res) => {
    const { judul, penulis, penerbit, tahun_terbit, isbn, token } = req.body;
    
    try {
        // Verifikasi token
        const decoded = jwt.verify(token, 'your_jwt_secret');
        
        // Cek role dari token
        if (decoded.user.role !== 'admin') {
            return res.status(403).json({ message: 'Akses ditolak. Hanya admin yang bisa menambahkan buku.' });
        }

        const buku = await Buku.create({
            judul,
            penulis,
            penerbit,
            tahun_terbit,
            isbn
        });

        res.status(201).json({ message: 'Buku berhasil ditambahkan', buku });
    } catch (error) {
        console.error(error.message);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token tidak valid' });
        }
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
