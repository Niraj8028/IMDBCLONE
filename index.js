const express=require('express')
const User=require('./Models/User')
const cors=require('cors')
const mongoose=require('mongoose');
const { signup } = require('./Middlewares/auth');
const authRoutes=require('./Routes/auth')
const movieRoutes=require('./Routes/Movie')
const actorRoutes=require('./Routes/actor')
const producerRoutes=require("./Routes/producer")
const categoryRoutes=require("./Routes/category")

const app=express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/IMDB')

app.use('/api',authRoutes)
app.use('/api',movieRoutes)
app.use('/api',categoryRoutes)
app.use('/api',actorRoutes)
app.use('/api',producerRoutes)

app.get('/',(req,res)=>{    
    res.send("Success")
})


app.listen(8000,(req,res)=>{
    console.log("Connected");
})