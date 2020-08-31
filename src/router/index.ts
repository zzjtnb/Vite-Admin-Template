import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// 路由数据
import routes from './routes'

const router = createRouter({
  // history: createWebHashHistory(),//hash模式
  history: createWebHistory(process.env.BASE_URL),//历史模式
  routes: routes,
  // linkActiveClass: " bg-gray-600 bg-opacity-25 border-gray-100 border-l-4 text-gray-100", // active class for non-exact links.
  // linkExactActiveClass: " bg-gray-600 bg-opacity-25 border-gray-100 border-l-4 text-gray-100" // active class for *exact* links.
})

export default router
