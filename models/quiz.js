const mongoose = require("mongoose");
// Connecting to database Learn
mongoose.connect("mongodb://127.0.0.1:27017/Learn")
.then(()=>{
  console.log("Quiz Database connected");
})
.catch((e)=>{
  console.log("Quiz Database Falied");
})
//Creating a new schema
const questionSchema = new mongoose.Schema({
  question_code: {type:String,required:true},
  question: { type: String, required: true },
  option :{ type: [String], required: true },
  answer: { type: Number, required: true },
});
const collection = new mongoose.model("quiz_question",questionSchema);
module.exports=collection;