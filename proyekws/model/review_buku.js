const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
const Buku = require('./buku');
const Anggota = require('./user'); // Pastikan Anda memiliki model Anggota

class ReviewBuku extends Model {}

ReviewBuku.init({
  id_review: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_buku: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Buku,
      key: 'id_buku'
    }
  },
  id_anggota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Anggota,
      key: 'id_anggota'
    }
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  komentar: {
    type: DataTypes.TEXT
  },
  tanggal_review: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'ReviewBuku',
  tableName: 'review_buku'
});

module.exports = ReviewBuku;
