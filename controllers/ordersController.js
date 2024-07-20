const Order = require('../models/orderModel.js');
const Product = require('../models/productModel.js');
const AdminPreference = require('../models/adminPreferenceModel.js');
const axios = require('axios');

exports.createOrder = async (req, res) => {
  const { products, guest, shippingAddress } = req.body;

  console.log(req.body);

  try {
    const orderProducts = await Promise.all(products.map(async item => {
      const product = await Product.findById(item.product);
      if (!product) {
        throw new Error(`Product with ID ${item.product} not found`);
      }
      return {
        product: item.product,
        quantity: item.quantity,
        price: product.price
      };
    }));

    const totalAmount = orderProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const orderData = {
      products: products.map(item => ({
        product: item.product,
        quantity: item.quantity
      })),
      totalAmount,
      shippingAddress
    };

    if (req.user) {
      orderData.user = req.user._id;
    } else {
      orderData.guest = guest;
    }

    const order = new Order(orderData);
    await order.save();

    // Check admin preferences for Zapier hook
    const preferences = await AdminPreference.findOne();
    if (preferences && preferences.zapier && preferences.zapier.purchase && preferences.zapier.purchase.enabled) {
      const zapierUrl = preferences.zapier.purchase.url;
      if (zapierUrl) {
        await axios.post(zapierUrl, order);
      }
    }

    res.status(201).send(order);
  } catch (error) {
    res.status(400).send({ error: error.message });
    console.log(error.message);
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('products.product');
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products.product');
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).send({ error: 'Order not found' });
    }

    order.status = status;
    await order.save();

    res.send(order);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).send({ error: 'Order not found' });
    }

    await order.deleteOne();

    res.send({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
