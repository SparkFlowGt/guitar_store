const express = require('express');
const app = express();
const mongoose= require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');


 
const mongoUri= `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
    mongoose.connect(mongoUri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    })
 
/// body parser
app.use(express.json())

//sanitize middleware

app.use(xss());
app.use(mongoSanitize());

//routes
// app.use()



const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})