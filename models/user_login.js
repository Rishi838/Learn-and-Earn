const mongoose = require("mongoose");
const { refreshtoken } = require("../controller/authController");
// Connecting to database Learn
mongoose.connect("mongodb://127.0.0.1:27017/Learn")
.then(()=>{  
  console.log("Login Database connected");
})
.catch((e)=>{
  console.log(e)
  console.log("Login Database Falied");
})
// Construct a schema
const LogInschema = new mongoose.Schema({
  name:{
    type:String,
    required : true,
    lowercase : true
  },
  email:{
    type:String,
    required : true,
    lowercase : true
  },
  password:{
    type:String,
    required : true
  },
  refreshToken :{
    type:String,
    unique:true
  }
})
const collection = new mongoose.model("login_data",LogInschema);
module.exports=collection;