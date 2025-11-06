export const themeData = JSON.parse("{\"locales\":{\"/\":{\"repoLabel\":\"GitHub\",\"navbarLabel\":\"my site X\",\"selectLanguageText\":\"Switch Language\",\"selectLanguageName\":\"English\"},\"/zh/\":{\"repoLabel\":\"给特哈勃\",\"navbarLabel\":\"我的站点 X\",\"selectLanguageText\":\"选择语言\",\"selectLanguageName\":\"简体中文\"}},\"colorModeSwitch\":true,\"colorMode\":\"dark\",\"externalLinkIcon\":true,\"home\":\"/\",\"navbar\":[\"/\",\"/get-started\"],\"logo\":\"https://vuejs.press/images/hero.png\",\"logoAlt\":\"这是我的站点\",\"repo\":\"https://github.com/vuepress/vuepress.git\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"contributors\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
