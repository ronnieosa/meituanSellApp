const Koa = require('koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = koaRouter();

app.use(router['routes']());

const homeAdData = require('./home/ad')
router.get('/api/homead', function (ctx, next) {
    ctx.body = homeAdData;
});

const homeListData = require('./home/list')
router.get('/api/homeList/:city/:page', function (ctx, next) {
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    ctx.body = homeListData;
});

const detailInfoData = require('./detail/info')
router.get('/api/detail/info/:id',function(ctx,next){
    const params = ctx.params;
    ctx.body = detailInfoData;
})

const commentListData = require('./detail/commonlist');
router.get('/api/detail/comment/:page/:id', function (ctx, next) {
    const params = ctx.params;
    const paramsId = params.id;
    const paramsPage = params.page;

    console.log('当前ID：' + paramsId);
    console.log('当前页数：' + paramsPage);

    ctx.body = commentListData;
});

const orderListData = require('./user/orderlist');
router.get('/api/orderlist/:username',function(ctx,next){
    const params = ctx.params;
    const username = params.username;
    console.log(username)
    ctx.body = orderListData;
});

router.post('/api/submitComment',function(ctx,next){
    // let id =ctx.request.body.id || 0;
    // console.log(id)
    // let comment =ctx.request.body. || 0;
    ctx.body = JSON.stringify({
        errno:0,
        msg:'OK'
    });
});

app.listen(3000, ()=>console.log('Koa start at 3000...'));
