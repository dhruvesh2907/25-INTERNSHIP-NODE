//router
const routes = require("express").Router()
//controller --> userController
const userController = require("../controllers/UserController")
//routes.post("/user",userController.addUser)
routes.post("/user",userController.Signup)
routes.get("/users",userController.getAllUsers)
routes.get("/user/:id",userController.getUserById)
routes.delete("/user/:id",userController.deleteUserById)
routes.post("/user/login",userController.Login)
//get
//post
//delete
//get

module.exports = routes