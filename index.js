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

app.get('/coursedetails',(req,res)=>{
    res.send(courseDetails)
})

app.get('/coursedetails/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCourse = courseDetails.find(n=>n.id === id);
    res.send(selectedCourse)
})
app.get('/checkout/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCourse = courseDetails.find(n=>n.id === id);
    res.send(selectedCourse)
})

app.listen(port, ()=>{
    console.log('b2m server running at port:',port);
})