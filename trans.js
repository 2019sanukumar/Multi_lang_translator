const express=require('express');
const mysql=require('mysql');
const translate = require('@iamtraction/google-translate');
const bodyparser=require('body-parser');
const app=express();
const port=6000;
app.use(bodyparser);
// creating connection for mysql database
const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:"password",
  database:'trans',
  insecureAuth : true,
  multipleStatements:true
  
});

con.connect(function(err){
  if(err)
  {
    console.log("error",err);
    return;
  };
  
    console.log("conndected to db");
  
})

// app.get('/',function(req,res)
// {
//   let st="db connected";
//   con.query(mysql,(err)=>{
//     if(err)throw err;
//     res.send("dasta conneted");
//   })

// })


  let arr=['en','hi','it'];
  let out=[];
  for(var i=0;i<arr.length;i++)
  {
      let temp=arr[i];
      let translatedtext;

      translate('Thank you', { from: 'auto', to: temp }).then(res => {
        console.log(res.text); // OUTPUT: Je vous remercie
        translatedtext=res.text;
        out.push(translatedtext);
        console.log(translatedtext);
        // console.log(res.from.autoCorrected); // OUTPUT: true
        // console.log(res.from.text.value); // OUTPUT: [Thank] you
        // console.log(res.from.text.didYouMean); // OUTPUT: false
      }).catch(err => {
        console.error(err);
      });
  
    
}



// let arr=['en','hi','it'];
// let out=[];
// for(var i=0;i<arr.length;i++)
// {
//     let temp=arr[i];
//     let translatedtext;

//     translate('Thank you', { from: 'auto', to: temp }).then(res => {
//       console.log(res.text); // OUTPUT: Je vous remercie
//       translatedtext=res.text;
//       out.push(translatedtext);
//       console.log(translatedtext);
//       // console.log(res.from.autoCorrected); // OUTPUT: true
//       // console.log(res.from.text.value); // OUTPUT: [Thank] you
//       // console.log(res.from.text.didYouMean); // OUTPUT: false
//     }).catch(err => {
//       console.error(err);
//     });
    
// }

app.listen(port,function(){
  console.log('server is running on port 6000');
});







