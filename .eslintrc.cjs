/*
 * @Author: shiwanyu shi.wy@neusoft.com
 * @Date: 2023-12-14 10:33:15
 * @LastEditors: shiwanyu shi.wy@neusoft.com
 * @LastEditTime: 2023-12-15 15:19:33
 * @FilePath: \vue-bag-admin\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "vue"],
    rules: {
        "vue/multi-word-component-names": [
            "off",
            {
                ignores: ["index"], //需要忽略的组件名
            },
        ],
        indent: ["error", 4],
        "linebreak-style": ["off"],
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }], // 如需设置关闭 off
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-explicit-any": ["off"],
    },
}
