const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
let merge;
const mongo = async()=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/NewDocument",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Db connected successfully")
    const fetchData = mongoose.connection.db.collection("NewCollection")
    merge= fetchData.find({}) .toArray((err, result) => {
        if (err) {
          console.error('Error executing the query:', err);
          return;
        }
  
        console.log('Result:', result);
  
     
      });
//    console.log(merge)
  
   
    }).catch((error)=>{
        console.log("Db connection error")
    })
}
mongo()
app.get("/",async (req,res)=>{
    // console.log(merge,'mergfe')
    res.send( await merge)
    
})
app.listen("7000",()=>{

})