const path = require('path');
const Router = require('koa-router')

const router = new Router()

const deployCtr = require('../deploy')

router.get('/', async ctx => {
  await ctx.render('index')
});

router.post('/upload/fronted', async ctx => {
  const { body, files } = ctx.request;
  const basename = path.basename(files.file.path)
  deployCtr.config.localZip = `static/uploads/${basename}`;
  deployCtr.config.distZipName = body.distZipName;
  await deployCtr.start(deployCtr.config)
  ctx.body = {
    code: 200,
    msg: '部署成功！'
  }
})

module.exports = router;