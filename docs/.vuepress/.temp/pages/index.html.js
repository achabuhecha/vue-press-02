import comp from "F:/ownProject/huangjia/github-project/vue-press-02/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"my website\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"my website\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Simplicity First\",\"details\":\"Minimal setup with markdown-centered project structure helps you focus on writing.\"},{\"title\":\"Vue-Powered\",\"details\":\"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.\"},{\"title\":\"Performant\",\"details\":\"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\"},{\"title\":\"Themes\",\"details\":\"Providing a default theme out of the box. You can also choose a community theme or create your own one.\"},{\"title\":\"Plugins\",\"details\":\"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.\"},{\"title\":\"Bundlers\",\"details\":\"Default bundler is Vite, while Webpack is also supported. Choose the one you like!\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1762397727000,\"contributors\":[{\"name\":\"huangqishang\",\"username\":\"huangqishang\",\"email\":\"768432905@qq.com\",\"commits\":2,\"url\":\"https://github.com/huangqishang\"}],\"changelog\":[{\"hash\":\"36762d81e90469ad4a831f553c5969d6fb113c82\",\"time\":1762397727000,\"email\":\"768432905@qq.com\",\"author\":\"huangqishang\",\"message\":\"测试修改文件，触发workflow\"},{\"hash\":\"993c3ea044b26d6cd7282fba4c2e5f8b9a5e2b3c\",\"time\":1762397367000,\"email\":\"768432905@qq.com\",\"author\":\"huangqishang\",\"message\":\"初始化vuepress项目\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
