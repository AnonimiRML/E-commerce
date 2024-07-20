const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  url: { type: String }
});

const adminPreferenceSchema = new mongoose.Schema({
  zapier: {
    purchase: { type: eventSchema },
    orderCompleted: { type: eventSchema },
    orderCancelled: { type: eventSchema }
  },
  stripe: {
    enabled: { type: Boolean, default: false }
  },
  paypal: {
    enabled: { type: Boolean, default: false }
  }
}, {
  timestamps: true,
  toJSON: { getters: true },
  toObject: { getters: true }
});

const AdminPreference = mongoose.model('AdminPreference', adminPreferenceSchema);

module.exports = AdminPreference;
