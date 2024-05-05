import app from './app';

const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

app.listen(3001, () => {
  console.log(`Servidor rodando na porta: ${process.env.APP_PORT}`);
});
