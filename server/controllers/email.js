console.log("ctrl_connections");


const nodemailer = require("nodemailer")
const smtpConfig = require("../config/email_config")

module.exports=(function(app) {
  return {
    send: function(req, res, next) {
      const transporter = nodemailer.createTransport(smtpConfig);

      var mailOptions = {
        from: req.body.email,
        to: "solly0702@gmail.com",
        subject: req.body.title,
        text: req.body.context,
        html: `<h4>Name: ${req.body.name}</h4>
               <h4>Email: ${req.body.email}</h4>
               <h3>Name: ${req.body.title}</h3>
               <p>Content: ${req.body.content}</p>`
      }

      transporter.sendMail(mailOptions)
      .then(function(info) {
        console.log("Message Sent: " + info.response)
        return res.json({message: "Contents was sent successfully"})
      })
      .catch(function(err) {
        console.log("Error: " + err)
        return res.json({error: "There was an error please try again"})
      })
    }
  };
})();
