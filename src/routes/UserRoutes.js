//router
const routes = require("express").Router()
//controller --> userController
const userController = require("../controllers/UserController")
//get
//post
//delete
//get
routes.get("/users",userController.getAllUsers)
routes.post("/users",userController.adduser)
routes.delete("/users/:id",userController.deleteUser)
routes.get("/users/:id",userController.getUserById)

module.exports = routes 