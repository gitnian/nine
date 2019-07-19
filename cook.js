var ex=require('express')
var cookieParser=require('cookie-parser')
var app=ex()
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send('首页')
})
app.get('/set',(req,res)=>{
    res.cookie('username','tom',{maxAge:200000,httpOnly:true})
    res.send('cookie设置成功')
})
app.get('/get',(req,res)=>{
    var name = req.cookies.username
    console.log(name)
    res.send("读取成功"+name)
})
app.listen(3000)