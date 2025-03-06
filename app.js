// console.log("Hello") 
// var user = require("./user") 

// console.log(user) 
// console.log(user.userName) 
// console.log(user.userAge) 
// user.printUserData(100) 
const express = require("express")
const mongosse = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())


//import role routes

const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)
const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)
const stateRoutes = require("./src/routes/StateRoutes")
app.use("/state",stateRoutes) //
//http://localhost:3000/addState
//http://localhost:3000/state/addState

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/city",cityRoutes) //http://localhost:3000/city/addCity

const areaRoutes = require("./src/routes/AreaRoutes")
app.use("/area",areaRoutes) //http://localhost:3000/area/add

const hordingRoutes = require("./src/routes/HordingRoutes")
app.use("/hording",hordingRoutes) //http://localhost:3000/hording/add

mongosse.connect("mongodb://127.0.0.1/25_node_internship").then(()=>{
    console.log("database connected...")

})



//http.//localhost:3000/test
// app.get("/test",(req,res)=>{
//     console.log("test api called..")

//     res.send("Hello test api called...")
// })
// app.get("/users",(req,res)=>{
//     res.json({
//     message:("user api called..."),
//     data :["ram","shyam","dhruv"]
// })
// })


//server creation..
const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on port number",PORT)
})

