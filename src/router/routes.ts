import DashboardLayout from '../layout'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
import _import from '../libs/import';
const frameIn = [
  // 首页
  {
    path: '/',
    name: '首页',
    icon: 'fa-home',
    component: _import('index'),
  },
  // 博客页面
  {
    path: '/blog',
    name: '博客',
    icon: 'fa-blog',
    component: _import('blog/index'),
    children: [
      {
        path: '/blog/add',
        name: '添加',
        meta: { title: '添加博客', icon: 'fa-plus-circle', layout: 'default' },
        component: _import('blog/edit')
      },
      {
        path: '/blog/delete',
        name: '删除',
        meta: { title: '删除博客', icon: 'fa-trash-alt' },
        component: _import('blog/delete')
      },
      {
        path: '/blog/edit',
        name: '编辑',
        meta: { title: '编辑博客', icon: 'fa-edit' },
        component: _import('blog/edit')
      },
    ]
  },

  // 英语
  {
    path: '/english',
    name: '英语',
    icon: 'fa-book',
    component: _import('english/index')
  },
  //诗歌
  {
    path: '/poetry',
    name: '诗歌',
    icon: 'fa-book-open',
    component: _import('poetry/index')
  },
  //音乐
  {
    path: '/music',
    name: '音乐',
    icon: 'fa-music',
    component: _import('music/index')
  },
  //视频
  {
    path: '/video',
    name: '视频',
    icon: 'fa-video',
    component: _import('video/index')
  },
  //测试
  {
    path: '/test',
    name: '测试',
    icon: 'fa-hammer',
    component: _import('test/index')
  },
];
/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('user/login'),
    meta: {
      layout: 'empty',
      isShow: false
    },
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
]
