import dotenv from 'dotenv';
import {resolve, dirname} from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';
import connection from './database/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
dotenv.config({ path: resolve(__dirname, '../.env') });

app.listen(3001, async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
    console.log(`Servidor rodando na porta: ${process.env.APP_PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database');

    console.log(error)
  }
});
