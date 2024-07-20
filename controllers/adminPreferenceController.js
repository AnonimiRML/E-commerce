const AdminPreference = require('../models/adminPreferenceModel.js');

exports.getPreferences = async (req, res) => {
  try {
    const preferences = await AdminPreference.findOne();
    if (!preferences) {
      return res.status(404).send({ error: 'Preferences not found' });
    }
    res.send(preferences);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updatePreferences = async (req, res) => {
  const { zapier, stripe, paypal } = req.body;

  try {
    const preferences = await AdminPreference.findOne();
    if (!preferences) {
      return res.status(404).send({ error: 'Preferences not found' });
    }

    if (zapier) {
      if (zapier.purchase) {
        preferences.zapier.purchase.enabled = zapier.purchase.enabled !== undefined ? zapier.purchase.enabled : preferences.zapier.purchase.enabled;
        preferences.zapier.purchase.url = zapier.purchase.url !== undefined ? zapier.purchase.url : preferences.zapier.purchase.url;
      }
      if (zapier.orderCompleted) {
        preferences.zapier.orderCompleted.enabled = zapier.orderCompleted.enabled !== undefined ? zapier.orderCompleted.enabled : preferences.zapier.orderCompleted.enabled;
        preferences.zapier.orderCompleted.url = zapier.orderCompleted.url !== undefined ? zapier.orderCompleted.url : preferences.zapier.orderCompleted.url;
      }
      if (zapier.orderCancelled) {
        preferences.zapier.orderCancelled.enabled = zapier.orderCancelled.enabled !== undefined ? zapier.orderCancelled.enabled : preferences.zapier.orderCancelled.enabled;
        preferences.zapier.orderCancelled.url = zapier.orderCancelled.url !== undefined ? zapier.orderCancelled.url : preferences.zapier.orderCancelled.url;
      }
    }

    preferences.stripe.enabled = stripe !== undefined ? stripe.enabled : preferences.stripe.enabled;
    preferences.paypal.enabled = paypal !== undefined ? paypal.enabled : preferences.paypal.enabled;

    await preferences.save();
    res.send(preferences);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
