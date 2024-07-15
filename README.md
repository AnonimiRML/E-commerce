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
│ └── productsController.js
├── middlewares/
│ └── authMiddleware.js
├── models/
│ ├── categoryModel.js
│ ├── productModel.js
│ └── userModel.js
├── routes/
│ ├── authRoutes.js
│ ├── categoriesRoutes.js
│ └── productsRoutes.js
├── config/
│ ├── config.js
│ └── db.js
├── createAdmin.js
├── app.js
├── package.json
└── server.js

shell
Copy code

## Usage

### Creating an Admin User

To create an admin user, run the following script:
```bash
node createAdmin.js
This will create an admin user with the following credentials:

Email: admin@example.com
Password: password123
API Endpoints
Auth
Register

URL: /api/v1/auth/register
Method: POST
Headers:
Content-Type: application/json
Body:
json
Copy code
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}
Login

URL: /api/v1/auth/login
Method: POST
Headers:
Content-Type: application/json
Body:
json
Copy code
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
Copy code
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
Copy code
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
License
This project is licensed under the MIT License.
