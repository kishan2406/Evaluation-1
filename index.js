const express = require("express")

const app=express();

app.get("/books",function(req,res){

    // console.log("Hello Bharat")

    // app.get(logger1);
    // app.get(checkPermission);

    var data = [{ route: "/books" }]
    res.send(data)
})

app.get("/libraries",function(req,res){

    var data = [{ route: "/libraries", permission: true  }]

    res.send(data)
})

app.get("/authors",function(req,res){

    var data = [{ route: "/authors", permission: true }]

    res.send(data)

})
// function logger1(req,res,next){
//     console.log("Who am I")
//     next();
// }

// function  checkPermission(req,res,next){
//     console.log("")
//     next();
// }

app.listen(5000,()=>{

    console.log("Hello,I am Bharat")
})