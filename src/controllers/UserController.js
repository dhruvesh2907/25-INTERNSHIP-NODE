const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt");
//addUser
//getUser
//deleteUser
//getUserById
const signup = async (req, res) => {
  //try catch if else...
  try {
    //password encrupt..
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;
    const createdUser = await userModel.create(req.body);
    res.status(201).json({
      message: "user created..",
      data: createdUser,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "error",
      data: err,
    });
  }
};
const login = async (req, res) => {
  //req.body email and password: password

  //password -->plain -->db -->encrypted
  //bcrypt  --> plain,enc --> match : true
  const email = req.body.email;
  const password = req.body.password;
  //select * from users where email =? and password = ?
  //userModel.find({email:email,password:password})
  //email --> object -->abc --{passwird:hashedPasseord}
  //normal passwoed compare -->

  //const foundUserFromEmail = userModel.findOne({email:req.body.email})
  const foundUserFromEmail = await userModel.findOne({ email: email });
  console.log(foundUserFromEmail);
  //check if email is exist or not//
  if (foundUserFromEmail != null) {
    //password
    //normal -plain req.bodyy --- databse -->match  --> true | false
    //const isMatch = bcrypt.compareSync(req.body.password,foundUserFromEmail.password)
    const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password);
    //true | false
    if (isMatch == true) {
      res.status(200).json({
        message: "login success",
        data: foundUserFromEmail,
      });
    } else {
      res.status(404).json({
        message: "invalid cred..",
      });
    }
  } else {
    res.status(404).json({
      message: "Email not found..",
    });
  }
};

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
    adduser,getAllUsers,deleteUser,getUserById,signup,login
}