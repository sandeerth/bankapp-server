const express = require('express');
const dataService= require('./services/data.service');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("helloo")
})
app.post('/',(req,res)=>{
    res.send("post")
    
})
app.post('/register',(req,res)=>{
    const result = dataService.register(req.body.name,req.body.acno,req.body.pin,req.body.password)
    res.send(result.message);
    
})
app.post('/login',(req,res)=>{
    const result = dataService.login(req.body.accno,req.body.password)
    res.send(result.message);
    
})
app.post('/deposit',(req,res)=>{
    const result = dataService.deposit(req.body.dpacno,req.body.dppin,req.body.dpamt)
    res.send(result.message);
    
})
app.post('/withdraw',(req,res)=>{
    const result = dataService.withdraw(req.body.wacno,req.body.wpin,req.body.wamt)
    res.send(result.message);
    
})
app.listen(3000, ()=>{
    console.log("server started at port 3000");
})