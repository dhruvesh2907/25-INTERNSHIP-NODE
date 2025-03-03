//router
const routes = require("express").Router()
//controller --> userController
const userController = require("../controllers/UserController")
//get
//post
//delete
//get
routes.post("/user",userController.signup)
routes.get("/user",userController.getAllUsers)
routes.post("/user",userController.adduser)
routes.delete("/user/:id",userController.deleteUser)
routes.get("/user/:id",userController.getUserById)
routes.post("/user/login",userController.login)

module.exports = routes 