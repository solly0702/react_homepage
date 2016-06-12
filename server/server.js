const express = require("express")
const http = require("http")
const path = require('path')
const app = express()

// App Setup
const cors = require("cors")
app.use(cors())

const morgan = require("morgan");
app.use(morgan("combined"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "*/*" }));

// DB and Route setup
require("./config/routes.js")(app);

app.use(express.static(path.join(__dirname, '../client')));

// Server Setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log("Server Listening on : ", port);
