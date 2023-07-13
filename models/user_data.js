const mongoose = require("mongoose");
// Connecting to database Learn
mongoose.connect("mongodb://127.0.0.1:27017/Learn")
.then(()=>{  
  console.log("User Data  Database connected");
})
.catch((e)=>{
  console.log(e)
  console.log("User Data Database Falied");
})
// Construct a schema
const UserDataSchema = new mongoose.Schema({
  email:{
    type:String,
    required : true,
    lowercase : true,
    unique:true
  },
  programming:{
    type:Object,
    required : true,
  }
})
const collection = new mongoose.model("user_data",UserDataSchema);
module.exports=collection;