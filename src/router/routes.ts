import layoutHeaderAside from '../layout'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
import _import from '../libs/import';

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    // 必须添加.vue后缀
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('index')
      },
      // 博客页面
      {
        path: 'blog/add',
        name: 'add',
        meta: {
          title: '添加博客',
          auth: true
        },
        component: _import('blog/add')
      },
      {
        path: 'blog/edit',
        name: 'edit',
        meta: {
          title: '编辑博客',
          auth: true
        },
        component: _import('blog/edit')
      },
      {
        path: 'blog/delete',
        name: 'delete',
        meta: {
          title: '删除博客',
          auth: true
        },
        component: _import('blog/delete')
      },
      // 英语
      {
        path: 'english',
        name: 'english',
        meta: {
          title: '英语',
          auth: true
        },
        component: _import('english/index')
      },
      //诗歌
      {
        path: 'poetry',
        name: 'poetry',
        meta: {
          title: '古诗',
          auth: true
        },
        component: _import('poetry/index')
      },
      //音乐
      {
        path: 'music',
        name: 'music',
        meta: {
          title: '音乐',
          auth: true
        },
        component: _import('music/index')
      },
      //视频
      {
        path: 'video',
        name: 'video',
        meta: {
          title: '视频',
          auth: true
        },
        component: _import('video/index')
      },
      //Vuex
      {
        path: 'test',
        name: 'test',
        meta: {
          title: '测试',
          auth: true
        },
        component: _import('test/index')
      },

    ]
  }
]
/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('user/login')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
]
