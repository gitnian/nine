var ex = require('express')
var bodyParser = require('body-parser')
var path=require('path')
var publicpath=path.resolve(__dirname,'static')
var app=ex()
// post  json  字符串
// 处理json数据请求
app.use(bodyParser.json())
// app.use(bodyParser.json())
// 处理字符串数据的请求
// app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.urlencoded({extends:false}))
app.use(ex.static(publicpath))
app.get('/',(req,res)=>{
    res.send('首页')
})
app.post('/dopost',(req,res)=>{
    var body = req.body
    console.log(body)
    res.send('post数据传输')
})
app.listen(3000)