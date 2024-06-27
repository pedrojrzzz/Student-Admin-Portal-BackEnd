"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
var _database = require('./database'); var _database2 = _interopRequireDefault(_database);

const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

_app2.default.listen(3001, async () => {
  try {
    await _database2.default.authenticate();
    console.log('Connection has been established successfully.');
    console.log(`Servidor rodando na porta: ${process.env.APP_PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
