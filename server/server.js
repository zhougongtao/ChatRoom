var koa =require('koa'),
    router = require('koa-router')(),      // 路由配置
    views = require('koa-views'),          // 结合界面
    bodyParser =require('koa-bodyparser'); // post数据获取

var app= new koa();
app.use(views('./'))  //当前文件夹下
app.use(bodyParser());


router.get('/',async (ctx) =>{
    await ctx.render('index')
})

router.get('/news',(ctx)=>{
    ctx.body='news'
})

router.get('/sport',(ctx)=>{
    console.log(ctx.query)
    ctx.body='sport'
})

//接受 post 数据  koa-bodyparser
router.post('/doAdd',(ctx)=>{
    var data = ctx.request.body
    console.log(`username: ${data.username} password: ${data.password}`)
    ctx.body=ctx.request.body;
})


app.use(router.routes())
app.use(router.allowedMethods());
app.listen(3000 ,()=>{
    console.log("服务器启动成功")
});
