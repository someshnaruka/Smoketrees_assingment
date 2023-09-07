//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const session = require('express-session')
const flash = require('connect-flash');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
 // trust first proxy

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60000 }
}))
app.use(flash());
app.set("view engine", "ejs");
const PORT=process.env.PORT || 8080;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

const addressSchema = new mongoose.Schema({
  user: { 
    type:mongoose.SchemaTypes.ObjectId,
    ref:"users",
 },

  street: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

});
const User = mongoose.model("User", userSchema);
const Address=mongoose.model("Address",addressSchema);


app.get("/",(req,res)=>{
    res.render("Form",{message:req.flash()})
});


app.post("/submit",(req,res)=>{
 
User.findOne({username:req.body.username}).then((data)=>{
  if(!data)
  {
    const newUser=new User({
      username:req.body.username
  });
  newUser.save().then((data)=>{
 
      const newAdress=new Address({
          user:data._id,
          street: req.body.street,
            zipcode:  req.body.zipcode,
            city:req.body.city,
            state: req.body.state,
            country: req.body.country
      });
      newAdress.save().then(()=>{
        req.flash("success","Success! Your Form had been Submitted");
  
    res.redirect("/");
  
      }).catch((err)=>{
          console.log(err);
      });
  }).catch((err)=>{
      console.log(err);
  })
  }
  else
  {
    req.flash("error","User alredy exists");

    res.redirect("/")
  }
})
   
})


app.listen(PORT,()=>{
    console.log("Server running on Port "+PORT);
})