"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

_app2.default.listen(3001, () => {
  console.log(`Servidor rodando na porta: ${process.env.APP_PORT}`);
});
