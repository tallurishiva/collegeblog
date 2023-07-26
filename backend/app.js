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
  const followSchema=new mongoose.Schema({
      folerid:String,
      folingid:String
  });
var follow=mongoose.model("follow",followSchema);
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
    user.find({ email: newuser.email }).then((found) => {
      if (found.length != 0) {
        return res.send("exists");
      }
  
      user.find({ userName: newuser.userName }).then((found) => {
        if (found.length != 0) {
          return res.send("uexists");
        }
  
        user
          .insertMany([newuser])
          .then(() => {
            res.send("success");
          })
          .catch((err) => {
            console.log(err);
            res.send("error");
          });
      });
    });
  });
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
app.post("/typee",function(req,res){
  blog.find({category:req.body.typ})
  .then((found)=>{
    if(found.length!=0){
      res.send(found);
    }
    else{
      res.send("NF");
    }
  })
  .catch(()=>{console.error()});
})
app.post("/blogid",function(req,res){
  blog.findById(req.body.id)
  .then((found)=>{res.send(found)})
  .catch(()=>{console.error();
      res.send("error"); 
  })
})
app.post("/myblogs",function(req,res){
  console.log(req.body.id);
  blog.find({userid:req.body.id})
  .then((found)=>{res.send(found)})
  .catch(()=>{console.error()});
})
app.post("/blog",function(req,res){
  console.log(req.body);
  const newb={
    userid:req.body.eid,
    Title:req.body.title,
    subtitle:req.body.subtitle,
    category:req.body.Category,
    cont:req.body.cont
  }
  blog.insertMany([newb]);
  console.log("insertedtype==",req.body.Category);
  res.send("success");
})
app.post("/delet",function(req,res){
  console.log(req.body);
  blog.findByIdAndDelete(req.body.id).then((found)=>{res.send("successfully deleted")})
  .catch(err=>{console.log(err)});
});
app.post("/follow",function(req,res){
  if(req.body.sts=="1"){
  follow.insertMany([{folerid:req.body.flid,folingid:req.body.flrid}])
  .then(()=>{res.send("following")})
  .catch(()=>{res.send("error")});}
  else{
    follow.findOneAndDelete({folerid:req.body.flid,folingid:req.body.flrid})
    .then(()=>{res.send("unfollowed")})
  .catch(()=>{res.send("error")});
  }
});
app.post("/followcount",function(req,res){
    follow.find({folerid:req.body.id})
    .then((found)=>{
      if(found.length!=0){
        res.send(found.length);
      }
      else{
        res.send("0");
      }
    })
    .catch(err=>{console.log(err)});
})
app.post("/followingcount",function(req,res){
  follow.find({folingid:req.body.id})
  .then((found)=>{
    if(found.length!=0){
      res.send(found.length);
    }
    else{
      res.send("0");
    }
  })
  .catch(err=>{console.log(err)});
})
app.listen(3001, function(){
    console.log("Server started on port 3001");
  });