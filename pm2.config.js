/**
pm2 部署 nuxt 项目
参看文档:https://nuxtjs.org/faq/deployment-pm2
pm2配置文档:https://pm2.keymetrics.io/docs/usage/application-declaration/
对于新装的pm2 一定要记得执行下 `pm2 kill` 清一下旧的pm2进程
运行指令:
pm2 start <pm2配置文件名> --env <环境变量>
*/
module.exports = {
  apps: [
    {
      name: 'test',                       // pm项目名
      exec_mode: 'cluster',               // 应用启动模式，支持fork和cluster模式
      instances: '1',                     // number[0-x]/max 开启的实例，仅在cluster模式有效，用于负载均衡
      script: './node_modules/nuxt/bin/nuxt.js', // nuxt自带服务的程序入口 / 实际服务启动的脚本
      args: 'start',                      // 参数 执行的指令名 exp: package script 'start': 'nuxt start' 
      min_uptime: '60s',                  // 应用运行少于时间被认为是异常启动
      autorestart: true,                  // 自动重启
      restart_delay: 1000,                // 启动延时 单位:毫秒
      watch: true,                        // 监控变化的目录，一旦变化，自动重启
      ignore_watch: ['node_modules'],     // 排除的文件夹,不监控
      watch_delay: 1000,                  // 监控时延
      env_production: {                   // 可配置多个环境 指令： --env production
      	'NODE_ENV': 'production',
      	'PORT': 5999
      },
      watch_options: {                    // 监听配置
       'followSymlinks': false,
        'usePolling': true
      }
    },
  ],
}
