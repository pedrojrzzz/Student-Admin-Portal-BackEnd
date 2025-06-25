"use strict";class HomeController {
   async index(req, res) {
    res.status(200).json({
      message: "Welcome to the SAP-Project API"
    })
  }
}

module.exports = new HomeController();
