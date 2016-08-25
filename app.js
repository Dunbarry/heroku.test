"use strict";

require('dotenv').config();

const express =require('express')
let app = express()
const port = process.env.PORT

app.get('/', function(req,res){
  res.json({message:"Drone online. Drone enacted."})
})

console.log(process.env);

module.exports=app;
