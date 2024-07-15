const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  guest: {
    name: {
      type: String,
      required: function() {
        return !this.user;
      }
    },
    email: {
      type: String,
      required: function() {
        return !this.user;
      }
    },
    address: {
      type: String,
      required: function() {
        return !this.user;
      }
    },
    phone: {
      type: String,
      required: function() {
        return !this.user;
      }
    }
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Cancelled'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
