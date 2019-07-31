const express=require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const app=express()
const keys=require("./config/key")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.Promise=global.Promise

mongoose.connect(keys.MONGO_DB,{
    useNewUrlParser:true,
    useCreateIndex:true
},(err,db)=>{
    if(err){
        console.log("err in connect")
    }else{
        console.log("connected")
    }
})

//////////////////////////////////////
require("./models/user")
require("./routs/user")(app)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    // Express will server up production assest like main.js
    //or main.css file
  //make sure to run "npm run build"
    //express will server up index.html file if it dosn't recognzie the route
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("Listening on port 5000")
})

// async function genToken(){
//   const token =await jwt.sign({_id:"sdksndksndksndsn"},keys.SECRET,{expiresIn:"1 hours"})
//   console.log(token)
// }
// genToken()