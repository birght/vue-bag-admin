import {post} from "@/packages/http/request.ts"
import apiMap from "@/packages/api/apiMap.ts"
import {resetApiInstanceUrl} from "@/packages/global"

const login = (params) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return post(resetApiInstanceUrl(apiMap.login), params, {hint: true})
}

const register = (params) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return post(resetApiInstanceUrl(apiMap.register), params, {hint: true})
}
const menus = () => {
    return post(resetApiInstanceUrl(apiMap.menus))
}

const userInfo = () => {
    return post(resetApiInstanceUrl(apiMap.userInfo))
}

export {
    login,
    menus,
    userInfo,
    register
}
