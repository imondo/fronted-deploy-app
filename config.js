module.exports = {
  NODE_EN: process.argv[process.argv.length - 1],
  port: 5080,
  distDir: '/fronted', // 前端文件部署目录
  distZipName: 'mediapc1', // 前端项目文件部署根目录
  ssh: { // ssh 配置
    host: '10.10.10.10',
    username: 'root',
    password: 'test',
    port: 22
  }
}