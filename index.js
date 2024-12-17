const express= require('express')
const app=express()
 const db=require('./db/db ')
const router=require('./Routes/userRoute')


app.get('/',(req,res)=>{
    res.send("hiiii")
})

// Middleware
app.use('/api/v1',router) 


app.listen(1000,()=>{
    console.log("server is now running ");
    
})