const Order = require('../models/orderModel.js');
const Product = require('../models/productModel.js');

exports.createOrder = async (req, res) => {
  const { products, guest } = req.body;

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
      totalAmount
    };

    if (req.user) {
      orderData.user = req.user._id;
    } else {
      orderData.guest = guest;
    }

    const order = new Order(orderData);

    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send({ error: error.message });
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
