const express = require('express');

const router = express.Router();

// Users Model
router.use('/pelanggan', require('./pelanggan/Routes'));
router.use('/barang', require('./barang/Routes'));
router.use('/pemasok', require('./pemasok/Routes'));
router.use('/gudang', require('./gudang/Routes'));
router.use('/transaksi', require('./transaksi/Routes'));
router.use('/karyawan', require('./karyawan/Routes'));

module.exports = router;
