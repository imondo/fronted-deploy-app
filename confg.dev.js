module.exports = {
  NODE_EN: process.argv[process.argv.length - 1],
  port: 5080,
  distDir: '/var/www/html/newmedia-shop-pc', // 前端文件部署目录
  distZipName: 'dist', // 前端项目文件部署根目录
  ssh: { // ssh 配置
    host: 'test',
    username: 'test',
    password: 'test',
    port: 22
  }
}