const mongoose = require("mongoose");
// Connecting to database Learn
mongoose.connect("mongodb://127.0.0.1:27017/Learn")
.then(()=>{
  console.log("User Database connected");
})
.catch((e)=>{
  console.log("User Database Falied");
})
//Creating a new schema
const userschema = new mongoose.Schema({
    //  Name of user
      name:{
        type:String,
        required : true
      },
      // email of user
      email:{
        type:String,
        required : true
      },

    })
const collection = new mongoose.model("user_info",userschema);
module.exports=collection;