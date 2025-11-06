export const siteData = JSON.parse("{\"base\":\"/my-vuepress-site/\",\"lang\":\"zh-CN\",\"title\":\"自定义X\",\"description\":\"My first VuePress Site\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"description\":\"Vue-powered Static Site Generator\",\"selectLanguageName\":\"EnglishX\"},\"/zh/\":{\"lang\":\"zh-CN\",\"description\":\"Vue 驱动的静态网站生成器\",\"selectLanguageName\":\"简体中文X\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
