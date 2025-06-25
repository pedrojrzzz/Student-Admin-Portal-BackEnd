"use strict";module.exports = {

  url: process.env.APP_STATUS === 'production' ? process.env.APP_URL : 'http://localhost:3001',
};
