'use strict';

const {parse}=require('csv-parse');
const fs=require('fs');
const http=require('http');
const path=require('path');
const express=require('express')
const app=express();

const bodyParser=require('body-parser')
require("dotenv").config({path:"./config.env"});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const port=process.env.PORT;
const local=process.env.LOCALHOST;

app.use((req,res,next)=>{
    console.log(`The request body is ${JSON.stringify(req.body)}`);
    next();
})

const friends=[];

app.get("/home",(req,res)=>{
    res.status(200).send("<h1>Work...</h1>")
})

app.get("/home/:id",(req,res)=>{
    console.log(friends)
    let id=Number(req.params.id);
    if(friends[id]){
        res.status(200).send(friends[id])
    }
    else{
        res.status(404).json({data:"none",error:true})
    }
})


app.post("/add",(req,res)=>{
    friends.push(req.body);
    console.log(friends)
    res.status(201).send("succes request")
})

app.listen(port,local,()=>{
    console.log(`Server running at port ${port}`)
})



