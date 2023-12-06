const express = require("express");
const bcrypt = require("bcryptjs");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server started at http://localhost:PORT`));
