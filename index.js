const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute=require('./routes/auth')
const usersRoute = require('./routes/users')
const postRoute=require('./routes/posts')
const  morgan = require('morgan')
require('dotenv').config()
app.use(express.json())
console.log(process.env.BLOG_URL)



//  DB
mongoose.connect(process.env.BLOG_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }).then(console.log("DB connectd")).catch(err=>{
      console.log(err)
  })

app.use(morgan("common"))
  //routers
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/posts",postRoute)
// PORT 
const port=process.env.PORT||3300
app.listen(port,()=>{
    console.log("Server Running on : " + port)
})