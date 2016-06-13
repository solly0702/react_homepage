console.log("routes_connection");

const path = require('path')

//**********RESTful routes for users**********
const Email = require("../controllers/email");

module.exports = (function(app) {
  app.post('/contact', Email.send);
});
//**********END routes for users**************
