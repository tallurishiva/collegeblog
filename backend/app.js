const express = require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const cookieSession=require("cookie-session");
const cookieparser=require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
mongoose.connect("mongodb+srv://shivatalluri725:Shiva551@cluster0.xtiys65.mongodb.net/newblog");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Your frontend's origin
  methods:["get","post"],
  credentials: true, // Allow credentials (cookies)
}));
app.use(cookieparser());
app.use(
  cookieSession({
    name: 'session',
    keys: ['your-secret-key'],
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie will expire in 7 days
    httpOnly: true,
  })
);
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
  const commentSchema=new mongoose.Schema({
    bid:String,
    userid:String,
    cmt:String,
    createdat:{type:Date,default:Date.now}
});
var comment=mongoose.model("comment",commentSchema);
var follow=mongoose.model("follow",followSchema);
var blog=mongoose.model("blog",BlogSchema);
var user=mongoose.model("user",LoginSchema);
BlogSchema.index({ Title: "text", subtitle: "text", category: "text",userid:"text" });
app.get("/",function(req,res){
    res.send("hello world");
});
app.post('/logout', function (req, res) {
  // Clear the session data (this will remove the associated cookie)
  console.log(req.session);
  req.session = null;
  console.log("loged out");
  // Respond with a success message
  res.send('Logged out successfully');
});
app.post("/search", async function(req, res) {
  const searchTerm = req.body.searchTerm; // Get the search term from the request body
  console.log("searhing for=",searchTerm);
  try {
    const searchResults = await blog.aggregate([
      { $match: { $or:[{userid: {$regex:searchTerm,$options:"i"}},{Title:{$regex:searchTerm,$options:"i"}},{subtitle:{$regex:searchTerm,$options:"i"}}] }}
    ]);
    console.log(searchResults);
    res.send(searchResults);
  } catch (error){
    console.error("Error searching:", error);
    res.status(500).json({ error: "An error occurred while searching" });
  }
});
app.post("/cat", async function(req, res) {
  const searchTerm = req.body.cat; // Get the search term from the request body
  console.log("searhing for=",searchTerm);
  try {
    const searchResults = await blog.aggregate([
      { $match: { $or:[{category:searchTerm}]}}
    ]);
    console.log(searchResults);
    res.send(searchResults);
  } catch (error){
    console.error("Error searching:", error);
    res.status(500).json({ error: "An error occurred while searching" });
  }
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
        //res.cookie("uid",req.body.userid);
        req.session.uid = req.body.userid;
        console.log(req.session);
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
  console.log(req.headers.cookie);
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
app.post("/followcount", function(req, res) {
  console.log("body==",req.body);
  follow.countDocuments({ folingid: req.body.id })
    .then((count) => {
      console.log("Count:", count);
      res.json({ count: count }); 
    })
    .catch((error) => {
      console.error("Error counting followers:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});
app.post("/followingcount",function(req,res){
  console.log("body==",req.body);
  follow.countDocuments({ folerid: req.body.id })
    .then((count) => {
      console.log("Count:", count);
      res.json({ count: count }); 
    })
    .catch((error) => {
      console.error("Error counting followers:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
})
app.post("/isfol",function(req,res){
  console.log("body==",req.body);
  follow.countDocuments({ folerid: req.body.id,folingid: req.body.uid })
    .then((count) => {
      console.log("Count:", count);
      res.json({ count: count }); 
    })
    .catch((error) => {
      console.error("Error counting followers:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
})
app.post("/comment",function(req,res){
    const newcmt={
      bid:req.body.bid,
      userid:req.body.uid,
      cmt:req.body.comment
    }
    comment.insertMany([newcmt])
    .then(()=>{res.send(success)})
    .catch(()=>{console.error()});
})
app.post("/cmts",function(req,res){
    comment.find({bid:req.body.id})
    .then((found)=>{
      console.log(found);
      res.send(found);
    })
    .catch(()=>{console.error()});
});
app.listen(3001, function(){
    console.log("Server started on port 3001");
  });