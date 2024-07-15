const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const authRoutes = require('./routes/authRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const productsRoutes = require('./routes/productsRoutes.js');
const categoriesRoutes = require('./routes/categoriesRoutes.js');
/*const ordersRoutes = require('./routes/ordersRoutes.js');
const cartRoutes = require('./routes/cartRoutes.js');
const paymentsRoutes = require('./routes/paymentsRoutes.js');
const reviewsRoutes = require('./routes/reviewsRoutes.js');
const shippingRoutes = require('./routes/shippingRoutes.js');*/

/*const adminUsersRoutes = require('./routes/admin/usersRoutes.js');
const adminProductsRoutes = require('./routes/admin/productsRoutes.js');
const adminCategoriesRoutes = require('./routes/admin/categoriesRoutes.js');
const adminOrdersRoutes = require('./routes/admin/ordersRoutes.js');
const adminShippingRoutes = require('./routes/admin/shippingRoutes.js');
const adminDiscountsRoutes = require('./routes/admin/discountsRoutes.js');*/

// Use routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', usersRoutes);
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/categories', categoriesRoutes);
/*app.use('/api/v1/orders', ordersRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/payments', paymentsRoutes);
app.use('/api/v1/reviews', reviewsRoutes);
app.use('/api/v1/shipping', shippingRoutes);*/

/*app.use('/api/v1/admin/users', adminUsersRoutes);
app.use('/api/v1/admin/products', adminProductsRoutes);
app.use('/api/v1/admin/categories', adminCategoriesRoutes);
app.use('/api/v1/admin/orders', adminOrdersRoutes);
app.use('/api/v1/admin/shipping', adminShippingRoutes);
app.use('/api/v1/admin/discounts', adminDiscountsRoutes);
*/
module.exports = app;
