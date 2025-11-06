import comp from "F:/ownProject/huangjia/github-project/vue-press-02/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Pages\",\"slug\":\"pages\",\"link\":\"#pages\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]},{\"level\":2,\"title\":\"Configuration\",\"slug\":\"configuration\",\"link\":\"#configuration\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"git\":{\"updatedTime\":1762397367000,\"contributors\":[{\"name\":\"huangqishang\",\"username\":\"huangqishang\",\"email\":\"768432905@qq.com\",\"commits\":1,\"url\":\"https://github.com/huangqishang\"}],\"changelog\":[{\"hash\":\"993c3ea044b26d6cd7282fba4c2e5f8b9a5e2b3c\",\"time\":1762397367000,\"email\":\"768432905@qq.com\",\"author\":\"huangqishang\",\"message\":\"初始化vuepress项目\"}]},\"filePathRelative\":\"get-started.md\"}")
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
