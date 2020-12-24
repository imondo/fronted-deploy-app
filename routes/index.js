const path = require('path');
const Router = require('koa-router')

const router = new Router()

const deployCtr = require('../deploy')

const deleteFile = require('../utils/deleteFiles');

router.get('/', async ctx => {
  await ctx.render('index')
});

router.post('/upload/fronted', async ctx => {
  const { body, files } = ctx.request;
  const basename = path.basename(files.file.path)
  deployCtr.config.localZip = `static/uploads/${basename}`;
  deployCtr.config.distZipName = body.distZipName || deployCtr.config.distZipName;
  deployCtr.config.distDir = body.distDir || deployCtr.config.distDir;
  await deployCtr.start(deployCtr.config)

  deleteFile(`./static/uploads/`, basename);
  ctx.body = {
    code: 200,
    msg: '部署成功！'
  }
})

module.exports = router;