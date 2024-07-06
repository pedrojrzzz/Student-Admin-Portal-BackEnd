import dotenv from 'dotenv';
import path from 'path';
import app from './app';
import connection from './database';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

app.listen(3001, async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
    console.log(`Servidor rodando na porta: ${process.env.APP_PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database');
  }
});
