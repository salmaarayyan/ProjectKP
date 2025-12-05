const express = require('express');
const keluhanController = require('../controllers/keluhanController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Public route
router.post('/submit', keluhanController.createKeluhan);

// Admin routes (protected with JWT)
router.get('/', verifyToken, keluhanController.getAllKeluhan);
router.get('/:id', verifyToken, keluhanController.getKeluhanById);
router.put('/:id', verifyToken, keluhanController.updateStatus);
router.delete('/:id', verifyToken, keluhanController.deleteKeluhan);

module.exports = router;