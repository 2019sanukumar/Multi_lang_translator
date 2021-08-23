const mysql=require('mysql');

var con=mysql.createConnection({
    host:"translator",
    user:"sanu",
    password:"9790"
  
});
  
con.connect(function(err){
    if(err)
    {
      console.log("error",err);
      return;
    };
    
      console.log("conndected to b");
    
});
  