const mongoose = require('mongoose');
const User = require('./models/userModel');
const config = require('./config/config');

const createAdmin = async () => {
  try {
    await mongoose.connect(config.DB_URI);
    const admin = new User({
      name: 'Admin Admin',
      email: 'admin@example.com',
      password: '1234567',
      role: 'admin'
    });
    await admin.save();
    console.log('Admin user created successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

createAdmin();
