<script lang="ts">
import { computed, defineComponent, reactive } from "vue"
import { darkTheme, GlobalThemeOverrides } from "naive-ui"
import { zhCN, dateZhCN } from "naive-ui"
import appStore from "@/packages/pinia/app.ts"
import type { App } from "vue"
import { readonly } from "vue"
import mitt, { Emitter } from "mitt"
import mergeWith from "lodash/mergeWith"
import cloneDeep from "lodash/cloneDeep"
import isArray from "lodash/isArray"
import "@/packages/style/style.less"
import setupGlobal from "@/packages/global"
import setupPinia from "@/packages/pinia"
import config from "@/packages/config"
import setupIcons from "@/packages/config/icon.ts"
import { axios } from "@/packages/http/request.ts"
import router from "@/packages/router"
import setupComponents from "@/packages/components"
import Message from "@/packages/layout/components/Message.vue"
import Notification from "@/packages/layout/components/Notification.vue"

const emitter: Emitter<any> = mitt()

interface CustomConfigOptions {
    [key: string]: any; // Define more specific types if possible
}

function customizer(objValue: any, srcValue: any) {
    if (isArray(objValue)) {
        return objValue.concat(srcValue)
    }
    // You might want to return some other value or handle other cases here
}

const install = (app: App, options?: CustomConfigOptions) => {
    const configOptions = mergeWith(cloneDeep(config), cloneDeep(options), customizer)
    app.config.globalProperties["$configOptions"] = configOptions
    app.provide("configOptions", readonly(configOptions))
    app.provide("$mitt", emitter)
    axios["$configOptions"] = configOptions
    axios["$router"] = router
    setupPinia(app)
    setupIcons(app)
    setupGlobal()
    setupComponents(app)
}

export {
    install,
    axios,
    router,
}

export default defineComponent({
    components: {
        "message-api": Message,
        "notification-api": Notification
    },
    setup() {
        const app = appStore()
        const themeOverrides: GlobalThemeOverrides = reactive({
            common: {
                primaryColor: computed(() => app.userSetting.themeColor),
                primaryColorHover: computed(() => app.userSetting.themeColor),
                progressRailColor: computed(() => app.userSetting.themeColor)
            },
        })
        return {
            darkTheme: computed(() => app.userSetting.themeName ? darkTheme : null),
            themeOverrides,
            locale: computed(() => app.userSetting.language ? zhCN : null),
            dateLocale: computed(() => app.userSetting.language ? dateZhCN : null),
        }
    }
})
</script>
