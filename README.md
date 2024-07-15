# Ecommerce API

This is a simple ecommerce API built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AnonimiRML/E-commerce.git
    ```

2. Navigate to the project directory:
    ```bash
    cd E-commerce
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Update the `config.js` file in the `config` directory with the following environment variables:
    ```javascript
    module.exports = {
      PORT: process.env.PORT || 5000,
      DB_URI: 'mongodb://localhost:27017/ecommerce',
      JWT_SECRET: 'your_jwt_secret_key'
    };
    ```

5. Start the server:
    ```bash
    npm start
    ```

## Project Structure

E-commerce/
├── controllers/
│ ├── authController.js
│ ├── categoriesController.js
│ ├── ordersController.js
│ └── productsController.js
├── middlewares/
│ └── authMiddleware.js
├── models/
│ ├── categoryModel.js
│ ├── orderModel.js
│ ├── productModel.js
│ └── userModel.js
├── routes/
│ ├── authRoutes.js
│ ├── categoriesRoutes.js
│ ├── ordersRoutes.js
│ └── productsRoutes.js
├── config/
│ ├── config.js
│ └── db.js
├── createAdmin.js
├── app.js
├── package.json
└── server.js

shell


## Usage

### Creating an Admin User

To create an admin user, run the following script:
```bash
node createAdmin.js
This will create an admin user with the following credentials:

Email: admin@example.com
Password: password123

```

### API Endpoints

Auth
Register

```javascript
URL: /api/v1/auth/register
Method: POST
Headers:
Content-Type: application/json
Body:
json

{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}

```
Login

URL: /api/v1/auth/login
Method: POST
Headers:
Content-Type: application/json
Body:
json

{
  "email": "user@example.com",
  "password": "password123"
}
Categories
Create Category

URL: /api/v1/categories
Method: POST
Headers:
Content-Type: application/json
Authorization: Bearer <jwt_token>
Body:
json

{
  "name": "New Category",
  "description": "Description of the new category"
}
Get All Categories

URL: /api/v1/categories
Method: GET
Products
Create Product

URL: /api/v1/products
Method: POST
Headers:
Content-Type: application/json
Authorization: Bearer <jwt_token>
Body:
json

{
  "name": "Product Name",
  "description": "Product Description",
  "price": 99.99,
  "category": "<category_id>",
  "stock": 100,
  "image": "<base64_encoded_image>"
}
Get All Products

URL: /api/v1/products
Method: GET
Query Params:
name (optional): Filter products by name
category (optional): Filter products by category ID
minPrice (optional): Filter products by minimum price
maxPrice (optional): Filter products by maximum price
Orders
Create Order

URL: /api/v1/orders
Method: POST
Headers:
Content-Type: application/json
Body:
json

{
  "guest": {
    "name": "Guest User",
    "email": "guest@example.com",
    "address": "123 Guest St",
    "phone": "123-456-7890"
  },
  "products": [
    {
      "product": "<product_id>",
      "quantity": 2
    },
    {
      "product": "<product_id>",
      "quantity": 1
    }
  ]
}
Get User Orders

URL: /api/v1/orders
Method: GET
Headers:
Authorization: Bearer <jwt_token>
Get All Orders (Admin)

URL: /api/v1/orders/all
Method: GET
Headers:
Authorization: Bearer <jwt_token>
Update Order Status (Admin)

URL: /api/v1/orders/status
Method: PUT
Headers:
Content-Type: application/json
Authorization: Bearer <jwt_token>
Body:
json

{
  "orderId": "<order_id>",
  "status": "Completed"
}


### License
This project is licensed under the MIT License.
