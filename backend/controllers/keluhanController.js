const { Keluhan } = require('../models');

// Create Keluhan (Public - user submit form)
exports.createKeluhan = async (req, res) => {
  try {
    const { nama, alamat, no_telp, keluhan } = req.body;

    // Validasi field wajib diisi
    if (!nama || !alamat || !no_telp || !keluhan) {
      return res.status(400).json({ message: 'Semua field harus diisi' });
    }

    // Validasi no_telp: harus 10-15 digit dan hanya angka
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(no_telp)) {
      return res.status(400).json({ 
        message: 'Nomor telepon harus terdiri dari 10-15 digit angka' 
      });
    }

    const newKeluhan = await Keluhan.create({
      nama,
      alamat,
      no_telp,
      keluhan,
      status: 'Belum Diproses'
    });

    res.status(201).json({
      message: 'Keluhan berhasil dikirim',
      data: newKeluhan
    });
  } catch (error) {
    res.status(500).json({ message: 'Error', error: error.message });
  }
};

// Get All Keluhan (Admin only)
exports.getAllKeluhan = async (req, res) => {
  try {
    const keluhanList = await Keluhan.findAll({
      order: [['tanggal', 'DESC']]
    });

    res.status(200).json({
      message: 'Success',
      data: keluhanList
    });
  } catch (error) {
    res.status(500).json({ message: 'Error', error: error.message });
  }
};

// Get Keluhan by ID
exports.getKeluhanById = async (req, res) => {
  try {
    const { id } = req.params;
    const keluhan = await Keluhan.findByPk(id);

    if (!keluhan) {
      return res.status(404).json({ message: 'Keluhan tidak ditemukan' });
    }

    res.status(200).json({
      message: 'Success',
      data: keluhan
    });
  } catch (error) {
    res.status(500).json({ message: 'Error', error: error.message });
  }
};

// Update Status Keluhan (Admin only)
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validasi status yang diperbolehkan
    const validStatus = ['Belum Diproses', 'Sedang Diproses', 'Sudah Diproses'];
    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: 'Status tidak valid' });
    }

    const keluhan = await Keluhan.findByPk(id);
    if (!keluhan) {
      return res.status(404).json({ message: 'Keluhan tidak ditemukan' });
    }

    // Validasi: Status tidak boleh mundur ke status sebelumnya
    const statusOrder = {
      'Belum Diproses': 0,
      'Sedang Diproses': 1,
      'Sudah Diproses': 2
    };

    if (statusOrder[status] < statusOrder[keluhan.status]) {
      return res.status(400).json({ 
        message: 'Status tidak bisa dikembalikan ke status sebelumnya' 
      });
    }

    await keluhan.update({ status });

    res.status(200).json({
      message: 'Status berhasil diupdate',
      data: keluhan
    });
  } catch (error) {
    res.status(500).json({ message: 'Error', error: error.message });
  }
};

// Delete Keluhan (Admin only)
exports.deleteKeluhan = async (req, res) => {
  try {
    const { id } = req.params;
    const keluhan = await Keluhan.findByPk(id);

    if (!keluhan) {
      return res.status(404).json({ message: 'Keluhan tidak ditemukan' });
    }

    await keluhan.destroy();

    res.status(200).json({
      message: 'Keluhan berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error', error: error.message });
  }
};