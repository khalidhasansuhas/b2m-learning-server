const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())

const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')
const courseDetails = require('./data/courseDetails.json')

app.get('/',(req,res)=>{
    res.send('b2m API Running');
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get('/courseDetails',(req,res)=>{
    res.send(courseDetails)
})

app.listen(port, ()=>{
    console.log('b2m server running at port:',port);
})