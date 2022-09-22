require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT } = process.env;

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes());

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스 전에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d',port);
});