const userModel = require("../models/UserModel")
//addUser
//getUser
//deleteUser
//getUserById

const adduser = async (req, res) => {
  
  const savedUser = await  userModel.create(req.body)

  res.json({
    message:"user created...",
    data:savedUser
  });
};
const getAllUsers = async (req, res) => {

  const users = await userModel.find() //[{}]

  res.json({
    message: "U sers fetched successfully",
    data:users
  });
};
const deleteUser = async(req,res)=>{


  const deletedUser = await userModel.findByIdAndDelete(req.params.id)

  res.json({
    message:"User deleted successfully..",
    data:deletedUser
  })



}

const getUserById = async (req,res)=>{

const foundUser = await userModel.findById(req.params.id)
res.json({
  message:"User fatched..",
  data:foundUser
})

}

module.exports = {
    adduser,getAllUsers,deleteUser,getUserById
}