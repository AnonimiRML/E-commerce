const app = require('./app.js');
const config = require('./config/config.js');
const db = require('./config/db.js');

const PORT = config.PORT || 5000;

db.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });
