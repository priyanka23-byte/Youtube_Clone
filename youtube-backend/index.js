const express = require("express");
const app = express();

const PORT = 4000;

app.get('/',(req, res)=>{
    res.send({
        message:"hii world"
    });
})

app.listen(PORT,()=>{console.log("Project is running on port 4000")})