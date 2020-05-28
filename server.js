const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const router = require("./controllers/burgers_controller");

const server = express();
const PORT = process.env.PORT || 8080; 

server.use( express.static(path.join(__dirname, "public")));
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.engine("handlebars", exphbs({defaultLayout: "main"}));
server.set("view engine", "handlebars");

server.use("/", router);

server.listen(PORT, ()=> {
  console.log(`Listen on port ${PORT}`);
})
