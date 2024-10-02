import express from 'express';
const app = express();
const port = 3000;


app.get('/',(req,res)=>{
    res.send("Hi, my name is abhinav. are you looking for something");
})

app.get("/about",(req,res)=>{
    res.send("<h1>Name: Abhinav</h1> <h1>Age: 22</h1> <h1>Gender: Male</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Email: abhinavkonakandla@gmail.com</h1> <h1>mobile-no: 9866463310</h1>");
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})