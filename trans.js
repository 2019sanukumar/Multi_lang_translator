const express=require('express');
// const mysql=require('mysql');
const db=require('./db');
const Text=require('./models');
const translate = require('@iamtraction/google-translate');
const app=express();
const router = express.Router()
const port=8080;
// const db=require('./db');
app.use(express.json());

// creating connection for mysql database



// const con=mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:"password",
//   database:'trans',
//   insecureAuth : true,
//   multipleStatements:true
  
// });




app.get('/',(req,res)=>
{
  res.send('Home page jjj');

});

let input;


app.post('/api/input',(req,res)=>{
  input=req.body;
  res.end(JSON.stringify({ input:input.input}));

});


let src;
app.post('/api/from',(req,res)=>
{
  console.log(req.body,"req");
  
  // console.log(src.from);
  res.send('Home page from');

});

//api for taking input ,to which lang string will be translated
app.post('/api/to',function(req,res){
  console.log(req.body);
  src=req.body;
  res.send('home to');
});

app.get('/fill',(req,res)=>{
  let out=new Text({
    id_num:2,
    translated_lang:'eng',
    translated_text:'thank you'

  });
  out.save();
  console.log(out);
  res.end(" inside the function");

})
//adding data to db

//searching in db
app.get('/find', async function(req,res){//cahnge it inot async await

  let val;
  const [data, err]=await Text.find({id_num:2});
  if(data)
  {
    val=data;
    console.log(data);
  }
  else{
    console.log(err,'errr555555555555rrv');
  }


  console.log(val,"ffff");
  res.end(val.stringify);

});



let translatedtext1;

app.get('/translate',  async function(req,res)
{

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







