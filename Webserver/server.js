const express = require('express');
const app= express();
const bodyparser= require('body-parser')
app.get('/', (req,res)=>{
    res.send("Hello world");
});
app.use(bodyparser.json());
app.post('/hello',(req,res)=>{
   // res.
   let body= res.body;
   body.message= "Hello" + body.name;
   res.json(body);
});
app.listen(3000,()=>{
    console.log("Server listening port no :80");
});
