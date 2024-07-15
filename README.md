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
   
    cd ecommerce
  

3. Install the dependencies:
 
    npm install
  

4. Update the `config.js` file in the `config` directory with the following environment variables:

    module.exports = {
      PORT: process.env.PORT || 5000,
      DB_URI: 'mongodb://localhost:27017/ecommerce',
      JWT_SECRET: 'your_jwt_secret_key'
    };

5. Start the server:
    
    npm start
   

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
├── .env
├── app.js
├── createAdmin.js
├── package.json
└── server.js

## Usage

### Creating an Admin User

To create an admin user, run the following script:

node createAdmin.js


This will create an admin user with the following credentials:

Email: admin@example.com
Password: password123


License
This project is licensed under the MIT License.
