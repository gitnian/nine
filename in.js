var ex = require('express')
var fs = require('fs')
var app = ex()
// 设置模板引擎
app.set('view engine','ejs')
// 指定模板的具体目录
app.set('views',__dirname+'/views')
// app.engine("views engine", "ejs")
app.get('/', function (req, res) {
    // var list = ["1", "2", "3"]

    res.render("index",{
        list:[
            "1","2","3"
        ]
     })

})
app.listen(3000)