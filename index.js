const express = require("express")
const mongoose = require('mongoose');

const {UserController} = require("./controllers/UserController")
const {UserService} = require("./services/UserService.js");

mongoose.connect('mongodb://127.0.0.1:27017/newDb');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const userController = new UserController(new UserService());

app.route("/user")
    .post(userController.addUser)
app.route("/signin")
    .post(userController.signin)



app.listen(8000, () => console.log("Listening on port 8000"))



