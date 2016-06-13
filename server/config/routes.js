console.log("routes_connection");

//**********RESTful routes for users**********
const Email = require("../controllers/email");

module.exports = (function(app) {
  app.post('/contact', Email.send);
});
//**********END routes for users**************
