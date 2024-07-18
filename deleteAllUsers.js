const mongoose = require('mongoose');
const User = require('./models/userModel');
const config = require('./config/config');

const deleteAllUsers = async () => {
  try {
    await mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await User.deleteMany({});
    console.log('All users deleted successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error deleting users:', error);
  }
};

deleteAllUsers();
