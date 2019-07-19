var ex=require('express')
var router = ex.Router()
var app=ex()
app.use(router)
router.get('/',(req,res)=>{
    res.send({"success":"ok"})
})
router.get('/getcode',(req,res)=>{
    var randomNum = function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str='abcdefghrjklmnopqrstuvwxyz1234567890'
    var result=''
    for(var i=0;i<4;i++){
        result+=str[randomNum(0,str.length-1)]
    }
    res.send({'data':result})
})
app.listen(3000)

