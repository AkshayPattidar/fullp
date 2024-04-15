const express=require("express")
const { default: mongoose } = require("mongoose")
const cors=require('cors')
const app=express()
const env=require('dotenv')
const jwts=require("jsonwebtoken")

const valid=require("validator")
const mon=require("mongoose")



 mon.connect("mongodb://127.0.0.1:27017/Tata").then(()=>{console.log("connect")})
app.use(express.json())
app.use(cors({origin:"*",methods:'GET,POST ,DELETE,PUT,PATCH,HEAD ' ,preflightContinue:false, optionsSuccessStatus:205 }))


const sch=new mon.Schema({
name:{
  type:String,
  required:true,
validate(so){
if(!so>2)
throw new Error("name is less than 2");
}    
  },

  contact:{
    type:Number,
  required:true,
minlength:10,
  unique:true,
  },
  email:{
    type:String,
    unique:true,
    required:true,
        validate(va){
      if(!valid.isEmail(va)){
        console.log("INvalid email ")
      }
     }
  },
  Job:{
    type:mon.Schema.Types.Mixed,
    required:true,
  },

}

)

const mo=new mon.model('tataserv',sch)


app.post("/",async (r,re)=>{
  console.log(r.body)
const text= new mo(r.body)
const enti=await text.save()
re.send(enti)
 })

app.get("/",async (r,re)=>{
const ssu=await mo.find({})
re.send(ssu)

}) 

// app.get("/:id",async (r,re)=>{
// const ssu=r.params.id
// const v=await mo.findById(ssu)
// re.send(v)
// })

// app.patch("/:id",async (r,re)=>{
//   const pv=r.params.id
//   const ssu=await mo.findByIdAndUpdate(pv,r.body)
//   re.send(ssu)
// })

// app.delete("/:id",async (r,re)=>{
// const delet=r.params.id
// const co=await mo.findByIdAndDelete(delet)
// re.send(co)

// })




app.listen(7000)
