const Product = require('../models/productModel.js');
const Category = require('../models/categoryModel.js');

exports.addProduct = async (req, res) => {
  try {
    const { category } = req.body;

   
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).send({ error: 'Category not found' });
    }

    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllProducts = async (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;
  const filter = {};

  if (name) {
    filter.name = { $regex: name, $options: 'i' }; 
  }

  if (category) {
    filter.category = category;
  }

  if (minPrice) {
    filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
  }

  if (maxPrice) {
    filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
  }

  try {
    const products = await Product.find(filter).populate('category');
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'description', 'price', 'category', 'stock', 'image'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send();
    }

    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();

    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).send();
    }

    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};
