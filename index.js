const express = require("express");
const {UserController} = require("./Controller/UserController");
const {UserService} = require("./Services/UserService");

const app = express();
app.use(express.json());
app.use(express.urlencoded());


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');


const userController = new UserController( new UserService() );


app.post("/users/signup", userController.addUser);

app.get("/users", userController.getUsers );

app.get("/user/:username", userController.findUser);

app.put("/user/:username", userController.updateUser);

app.listen(8000, () => console.log("App listening on Port 8000"))