const mysql=require('mysql');

const express=require('express');
const app=express();

const bodyparser=require('body-parser');
app.use(bodyparser.json());
const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:"password",
  database:'trans',
  insecureAuth : true,
  multipleStatements:true
  
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

  