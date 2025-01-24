const dotenv = require('dotenv');
const path = require('path');
const app = require('./app');
const connection = require('./database/index');


dotenv.config({ path: path.resolve(__dirname, '../.env') });

app.listen(3001, async () => {
  try {
    await connection.authenticate();
    console.log('Connection with database has been established successfully.');
    console.log(`Server is running on: ${process.env.APP_PORT}`);
  } catch (e) {
    console.log('Just test')
    throw new Error(`Unable to connect to the database: ${e}`)
  }
});