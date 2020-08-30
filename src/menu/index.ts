/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath(menu: any) {
  // menu.map((e: any) => {
  //   console.log(e);
  // })
  // return menu.map((e: any) => ({
  //   ...e, path: e.path,
  //   ...e.children ? { children: supplementPath(e.children) } : {}
  // }
  // ))
  return menu
}

export const menuHeader = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '页面',
    icon: 'folder-o',
    path: 'blog/add',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' }
    ]
  },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' }
    ]
  }
])

export const menuAside = supplementPath([
  { path: '/index', title: '首页', icon: 'fa-home', },
  {
    // path: '/blog/add',
    title: '博客',
    icon: 'fa-blog',
    children: [
      { path: '/blog/add', title: '添加', icon: 'fa-plus-circle' },
      { path: '/blog/delete', title: '删除', icon: 'fa-trash-alt' },
      { path: '/blog/edit', title: '修改', icon: 'fa-edit' }
    ]
  },
  { path: '/english', title: '英语', icon: 'fa-book', },
  { path: '/poetry', title: '诗歌', icon: 'fa-book-open' },
  { path: '/music', title: '音乐', icon: 'fa-music' },
  { path: '/video', title: '视频', icon: 'fa-video' },
  { path: '/test', title: '测试', icon: 'fa-hammer' },

])
