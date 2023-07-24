const express = require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const app = express();
mongoose.connect("mongodb+srv://shivatalluri725:Shiva551@cluster0.xtiys65.mongodb.net/newblog");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
const LoginSchema=new mongoose.Schema({
    userName:String,
    email:{type:String,require:true},
    password:{type:String,require:true},
    phone:{type:Number,min:10000000}
  });
  const BlogSchema=new mongoose.Schema({
    userid:String,
    Title:String,
    subtitle:String,
    category:String,
    cont:String,
    createdat:{type:Date,default:Date.now}
  });
var blog=mongoose.model("blog",BlogSchema);
var user=mongoose.model("user",LoginSchema);
app.get("/",function(req,res){
    res.send("hello world");
});
app.post("/signup",function(req,res){
  const newuser={
    userName:req.body.name,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.number
  };
  user.find({email:newuser.email}).then((found)=>{
    if(found.length!=0){
      res.send({sts:"exists"});
    }
  })
  user.find({userName:newuser.userName}).then((found)=>{
    if(found.length!=0){
      res.send({sts:"uexists"});
    }
  })
  user.insertMany([newuser])
  .then((suc)=>{
    //cart.insertMany([{cartid:suc[0].email}]);
    res.send({sts:"success",dit:suc[0].email});
  })
  .catch(err=>{console.log(err);
        res.send({sts:"error",dit:null}); 
  });
})
app.post("/login",function(req,res){
  console.log(req.body);
  user.find({userName:req.body.userid,password:req.body.password})
    .then(function(found){
      if(found.length!=0){
        res.send("success");}
      else{
        res.send("err");
      }
})});
app.listen(3001, function(){
    console.log("Server started on port 3001");
  });