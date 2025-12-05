require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const keluhanRoutes = require('./routes/keluhanRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend running!' });
});

app.use('/api/keluhan', keluhanRoutes);
app.use('/api/auth', authRoutes);

// Test DB Connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected!');
  })
  .catch(err => {
    console.log('Database error:', err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  const link = `http://localhost:${PORT}`;
  console.log(`\n✓ Server running on ${link}\n`);
});