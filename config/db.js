const mongoose = require('mongoose');
const config = require('./config.js');

const connect = async () => {
  try {
    await mongoose.connect(config.DB_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

module.exports = { connect };
