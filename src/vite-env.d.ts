/*
 * @Author: shiwanyu shi.wy@neusoft.com
 * @Date: 2023-12-14 10:33:15
 * @LastEditors: shiwanyu shi.wy@neusoft.com
 * @LastEditTime: 2023-12-15 15:33:04
 * @FilePath: \vue-bag-admin\src\vite-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { DefineComponent } from "vue"

declare module "*.vue" {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: ReturnType<typeof defineComponent>
    export default component
}
