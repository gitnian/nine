var ex=require('express')
var art=require('express-art-template')
var app=ex()
app.engine('art',art)
app.get('/',(req,res)=>{
    // .art 必须写上，不然express-art-template 识别不到模板引擎
    res.render('new.art',{
        list:["yu","jis","3"]
    })
})
app.listen(3000)