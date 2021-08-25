const express=require('express');

const router=express.Router();
router.get('/',function(req,res){
    console.log("under reoute")
    res.send("under api");
})








module.exports=router;