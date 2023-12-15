/*
 * @Author: shiwanyu shi.wy@neusoft.com
 * @Date: 2023-12-14 10:33:15
 * @LastEditors: shiwanyu shi.wy@neusoft.com
 * @LastEditTime: 2023-12-15 14:19:16
 * @FilePath: \vue-bag-admin\src\app\admin\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createApp} from "vue"
import App, { install,router } from "@/packages/install.vue"
// import App from "./App.vue"
// import install from "@/packages/install.ts"
// import router from "@/app/admin/router"
import headerUserSet from "@/app/admin/components/headerUserSet.vue"

import {setupProdMockServer} from "__ROOT__/mock/mockProdServer.ts"

if (process.env.NODE_ENV === "production") {
    setupProdMockServer()
}

createApp(App).use(install, {
    menus: [
        // {
        //     "id": 9000,
        //     "title": "首页",
        //     "icon": "Home",
        //     "path": "/home",
        //     "pid": 0,
        //     "file": "/view/home/index.vue",
        // }
    ],
    getViews: () => {
        return import.meta.glob("@/app/admin/view/**/*.vue", {eager: true})
    },
    website: {},
    components: {
        headerUserSet: headerUserSet
    },
}).use(router).mount("#app")
