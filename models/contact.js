const mongoose=require('mongoose')
const contactschema=new mongoose.Schema({
    firstName:{
        type:String,required:true
    }, lastName:{
        type:String,required:true
    }, email:{
        type:String,required:true
    }, phone:{
        type:String,required:true
    },message:{
        type:String,required:true
    },
},{timestamps:{createdAt:"created_at",updatedAt:"updated_at"}})

const contact=mongoose.model('portfoliocontacts',contactschema)

module.exports=contact