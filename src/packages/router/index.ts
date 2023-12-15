/*
 * @Author: shiwanyu shi.wy@neusoft.com
 * @Date: 2023-12-14 10:33:15
 * @LastEditors: shiwanyu shi.wy@neusoft.com
 * @LastEditTime: 2023-12-15 15:22:42
 * @FilePath: \vue-bag-admin\src\packages\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createWebHashHistory, RouterOptions, RouteLocationNormalized } from "vue-router"
import * as vueRouter from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import afterEach from "./afterEach.ts"
import routerMap from "@/packages/router/routerMap.ts"
import beforeEach from "@/packages/router/beforeEach.ts"

NProgress.configure({
    easing: "ease",  // 动画方式
    speed: 1000,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

const router = vueRouter.createRouter({
    history: createWebHashHistory(),
    routes: routerMap,
} as RouterOptions)

router.beforeEach((to, from, next) => {
    NProgress.start()
    beforeEach(to, from, next)
})

router.afterEach((to: RouteLocationNormalized) => {
    NProgress.done()
    afterEach(to)
})

export default router
