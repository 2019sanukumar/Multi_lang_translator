const express=require('express');
const app=express();
const router=express.Router();
app.use('/',function(req,res){
    console.log("under reoute")
    res.send("under api");
})








module.exports=router;