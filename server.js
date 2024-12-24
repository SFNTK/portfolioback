const express=require("express")
const app=express()
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');


app.use(cors())
app.listen(3001)

const { json } = require('body-parser');

const router = express.Router();

const contact=require('./models/contact')
const sendemail=require('./emails/mail')
require("./connection/connection")



app.post("/send",async(req,res)=>{
   try{
    console.log("d5lt")
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const phone=req.body.phone;
    const message=req.body.message;

    const contactmsg=await contact({firstName:firstName,lastName:lastName,email:email,phone:phone,message:message})
console.log("traitit")
    await contactmsg.save()
    console.log("ajoutiti")
    const messagecontact=`
    contact form data :
    
    firstName : ${firstName}

    lastName : ${lastName}

    email : ${email}

    phone : ${phone}

    message : ${message}


    `
    console.log("ba4i nsift lmail")
    const response = await sendemail(messagecontact,"contact form data")
    console.log("sift lmail")
    return res.status(200).json({ "message": "all is good" ,response:response})


}catch(err){
    console.log(err)
    return res.status(400).json({ "message": err.message  })
    }

})



