const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const views = require('koa-views');
const koaBody = require('koa-body')

const config = require('./config');
const router = require('./routes/index');

const app = new Koa();

// 静态文件
app.use(static(
  path.join( __dirname,  './static')
))

app.use(koaBody({
  // 支持文件格式
  multipart: true,
  formidable: {
    // 上传目录
    uploadDir: path.join(__dirname, './static/uploads'),
    // 保留文件扩展名
    keepExtensions: true,
  }
}));

// 加载模板引擎
app.use(views(
  path.join(__dirname, './views'), {
    extension: 'html'
  }
))

app.use(router.routes(), router.allowedMethods());

app.listen(config.port, () => {
  console.log('开始监听' + config.port)
  console.log('请打开' + 'http://localhost:' + config.port)
});