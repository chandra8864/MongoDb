const express=require('express')
const Router=express.Router()
const authModel=require('../Model/authModel')
const { login, singup } = require('../Controller/auth')

Router.get('/login',login)

Router.get('/signup',singup)



module.exports=Router;
