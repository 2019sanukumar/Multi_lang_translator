const express=require('express');
const mysql=require('mysql');
const translate = require('@iamtraction/google-translate');

const app=express();
const port=8080;
// const db=require('./db');
app.use(express.json());

// creating connection for mysql database



const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:"password",
  database:'trans',
  insecureAuth : true,
  multipleStatements:true
  
});



// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE language (name VARCHAR(255), lang VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


// con.connect(function(err){
//   if(err)
//   {
//     console.log("error",err);
//     return;
//   };
  
//     console.log("conndected to db");
  
// });


app.get('/',(req,res)=>
{
  res.send('Home page jjj');

});
let src;
app.post('/api/from',(req,res)=>
{
  console.log(req.body,"req");
  
  // console.log(src.from);
  res.send('Home page from');

});
app.post('/api/to',function(req,res){
  console.log(req.body);
  src=req.body;
  res.send('home to');
});



let translatedtext1;

app.get('/translate',  async function(req,res)
{
  // 


  
    let response = await translate('Thank you', { from: 'auto', to: 'it' });
      if (response.err) { console.log('error');}
      else { 
        console.log(response.text)
        translatedtext1=response.text;
      };
  
      console.log(translatedtext1);

  res.send(translatedtext1);


  // translate('Thank you', { from: 'auto', to: src.to }).then(res => {
  //   console.log(res.text); // OUTPUT: Je vous remercie
  //   translatedtext1=res.text;
  //   // out.push(translatedtext);
  //   console.log(translatedtext1);
  //   // console.log(res.from.autoCorrected); // OUTPUT: true
  //   // console.log(res.from.text.value); // OUTPUT: [Thank] you
  //   // console.log(res.from.text.didYouMean); // OUTPUT: false


    
    







  // }).catch(err => {
  //   console.error(err);
  // });
  
  

  
});

app.get('/transleted-text',function(req,res)
{
  // res.send.json(200)
  res.end(JSON.stringify({ text:translatedtext1 }));
})



// app.get('/',function(req,res)
// {
//   let st="db connected";
//   con.query(mysql,(err)=>{
//     if(err)throw err;
//     res.send("dasta conneted");
//   })

// })


//   let arr=['en','hi','it'];
//   let out=[];
//   for(var i=0;i<arr.length;i++)
//   {
//       let temp=arr[i];
//       let translatedtext;

//       translate('Thank you', { from: 'auto', to: temp }).then(res => {
//         console.log(res.text); // OUTPUT: Je vous remercie
//         translatedtext=res.text;
//         out.push(translatedtext);
//         console.log(translatedtext);
//         // console.log(res.from.autoCorrected); // OUTPUT: true
//         // console.log(res.from.text.value); // OUTPUT: [Thank] you
//         // console.log(res.from.text.didYouMean); // OUTPUT: false

        








//       }).catch(err => {
//         console.error(err);
//       });
  
    
// }



// // let arr=['en','hi','it'];
// // let out=[];
// // for(var i=0;i<arr.length;i++)
// // {
// //     let temp=arr[i];
// //     let translatedtext;

// //     translate('Thank you', { from: 'auto', to: temp }).then(res => {
// //       console.log(res.text); // OUTPUT: Je vous remercie
// //       translatedtext=res.text;
// //       out.push(translatedtext);
// //       console.log(translatedtext);
// //       // console.log(res.from.autoCorrected); // OUTPUT: true
// //       // console.log(res.from.text.value); // OUTPUT: [Thank] you
// //       // console.log(res.from.text.didYouMean); // OUTPUT: false
// //     }).catch(err => {
// //       console.error(err);
// //     });
    
// // }

app.listen(port,function(){
  console.log('server is running on port 6000');
});







