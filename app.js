const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

// Increase payload size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Import routes
const authRoutes = require('./routes/authRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const productsRoutes = require('./routes/productsRoutes.js');
const categoriesRoutes = require('./routes/categoriesRoutes.js');
const ordersRoutes = require('./routes/ordersRoutes.js');
const adminPreferenceRoutes = require('./routes/adminPreferenceRoutes.js');


// Use routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', usersRoutes);
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/orders', ordersRoutes);
app.use('/api/v1/admin/preferences', adminPreferenceRoutes);

module.exports = app;
