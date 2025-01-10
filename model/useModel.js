const mongoose  = require('mongoose')


const userSchema  =  new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'user name required']
    },
    email:{
        type:String,
        required:[true,'Email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    address:{
        type:String
    },
    phone:{
        type:String,
        required:[true,'phone no is required']
    },
    userType:{
        type:String,
        required:[true,'user type is required'],
        default:"client",
        enum:['client','admin','vender','driver']
    },
    profile:{
        type:String,
        default:'https://www.google.com/imgres?q=user%20image&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F99%2FSample_User_Icon.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&docid=wEzPstpTgQ5VoM&tbnid=SBUlgl2FWFFpQM&vet=12ahUKEwixzPvcjuGJAxVYSmwGHZi3MpgQM3oECFIQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwixzPvcjuGJAxVYSmwGHZi3MpgQM3oECFIQAA'
        
    }
    
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)