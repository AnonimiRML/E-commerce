const mongoose = require('mongoose');
const config = require('./config/config.js');
const User = require('./models/userModel.js');
const AdminPreference = require('./models/adminPreferenceModel.js');

// Connect to MongoDB
mongoose.connect(config.DB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await createAdmin();
    await createDefaultAdminPreferences();
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const createAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    if (!existingAdmin) {
      const admin = new User({
        name: 'Admin Admin',
        email: 'admin@example.com',
        password: '1234567',
        role: 'admin'
      });
      await admin.save();
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

const createDefaultAdminPreferences = async () => {
  try {
    const preferences = await AdminPreference.findOne();
    if (!preferences) {
      const defaultPreferences = new AdminPreference({
        zapier: {
          purchase: { enabled: false, url: '' },
          orderCompleted: { enabled: false, url: '' },
          orderCancelled: { enabled: false, url: '' }
        },
        stripe: { enabled: false },
        paypal: { enabled: false }
      });
      await defaultPreferences.save();
      console.log('Default admin preferences created.');
    } else {
      console.log('Admin preferences already exist.');
    }
  } catch (error) {
    console.error('Error creating default admin preferences:', error);
  }
};
