const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

    

let app = express();

dotenv.config({ path: "./.env"});

app.set("view engine", "hbs");


let publicDierctory = path.join(__dirname, "./public");

app.use(express.static(publicDierctory));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/", require("./routes/pages"));

app.use("/auth", require("./routes/auth"));

app.listen(7000);