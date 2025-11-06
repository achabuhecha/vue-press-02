import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // https://achabuhecha.github.io/my-vuepress-site/
  base: '/my-vuepress-site/',
  lang: 'zh-CN', // en-US
  title: '自定义X',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      // title: 'MY SITE',
      description: 'Vue-powered Static Site Generator',
      selectLanguageName: 'EnglishX',
    },
    '/zh/': {
      lang: 'zh-CN',
      // title: '我的站点',
      description: 'Vue 驱动的静态网站生成器',
      selectLanguageName: '简体中文X',
    },
  },
  description: 'My first VuePress Site',

  theme: defaultTheme({
    // hostname: 'https://vuepress.vuejs.org', // 部署的域名，例如 https://vuepress.vuejs.org
    locales: {
      '/': {
        repoLabel: 'GitHub',
        navbarLabel: 'my site X',
        selectLanguageText: 'Switch Language',
        selectLanguageName: 'English',
      },
      '/zh/': {
        repoLabel: '给特哈勃',
        navbarLabel: '我的站点 X',
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
      },
    },
    // [true | false] 是否启用切换颜色模式的功能。默认为 true ，会在导航栏展示一个切换颜色模式的按钮。
    colorModeSwitch: true,
    // ['auto' | 'light' | 'dark'] 默认颜色模式。默认为 'auto' ，会根据 prefers-color-scheme 自动设置初始颜色模式。
    // 实际上，如果 colorModeSwitch 设置为 true ，则 colorMode 选项将无效。
    colorMode: 'dark',
     // 是否在外部链接上显示外部链接图标。默认为 true
    externalLinkIcon: true,
    // 首页的路径。默认为 '/'。它将被用于： 导航栏中 Logo 的链接；404 页面的 返回首页 链接
    home: '/',
    /**
     * 导航栏配置。
     * 默认值： []
     * 设置为 false 可以禁用导航栏。
     * 为了配置导航栏元素，你可以将其设置为 导航栏数组 ，其中的每个元素是 NavbarLink 对象、 NavbarGroup 对象、或者字符串：
        NavbarLink 对象应该有一个 text 字段和一个 link 字段，还有一个可选的 activeMatch 字段。
        NavbarGroup 对象应该有一个 text 字段和一个 children 字段，还有一个可选的 prefix 字段。 children 字段同样是一个 导航栏数组，而 prefix 会作为 导航栏数组 的路径前缀。
        字符串应为目标页面文件的路径。它将会被转换为 NavbarLink 对象，将页面标题作为 text ，将页面路由路径作为 link 。
     */
    navbar: ['/', '/get-started'],
    /**
     * Logo 图片的 URL。
        Logo 图片将会显示在导航栏的左端。
        设置为 null 可以禁用 Logo 。
     */
    logo: 'https://vuejs.press/images/hero.png',
    // Public 文件路径
    // logo: '/images/hero.png',
    /**
     * 在夜间模式中使用的 Logo 图片的 URL。
        如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。
        设置为 null 可以在夜间模式下禁用 Logo 。忽略该配置项将会在夜间模式中使用 logo 配置。
     */
    // logoDark: '/images/hero.png',
    // 指定 Logo 图片的替代文字。当未指定时，将默认与站点标题相同。
    logoAlt: '这是我的站点',
    /**
     * 项目仓库的 URL。它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。
      如果你按照 `organization/repository` 的格式设置它
      我们会将它作为一个 GitHub 仓库
      repo: 'vuepress/core',
      你也可以直接将它设置为一个 URL
      repo: 'https://gitlab.com/foo/bar',
     */
    repo: 'https://github.com/vuepress/vuepress.git',
    /**
     * 侧边栏配置。
        默认值： 'heading'
        你可以通过页面的 sidebar frontmatter 来覆盖这个全局配置。
        设置为 false 可以禁用侧边栏。
        如果你设置为 'heading'，侧边栏会根据页面标题自动生成。
        为了手动配置侧边栏元素，你可以将其设置为 侧边栏数组 ，其中的每个元素是一个 SidebarItem 对象或者一个字符串
     */
    // sidebar: [],
    // 
    /**
     * 设置根据页面标题自动生成的侧边栏的最大深度。
        默认值： 2
        设为 0 来禁用所有级别的页面标题。
        设为 1 来包含 <h2> 标题。
        设为 2 来包含 <h2> 和 <h3> 标题。
     */
    sidebarDepth: 2,
    // 是否启用 编辑此页 链接。默认值： true。你可以通过页面的 editLink frontmatter 来覆盖这个全局配置。
    editLink: true,
    /**
     * 编辑此页 链接的 Pattern 。
        它将会用于生成 编辑此页 的链接。
        如果你不设置该选项，则会根据 docsRepo 配置项来推断 Pattern 。
        但是如果你的文档仓库没有托管在常用的平台上，比如 GitHub 、 GitLab 、 Bitbucket 、 Gitee 等，那么你必须设置该选项才能使 编辑此页 链接正常工作。
        如：
        editLinkPattern: ':repo/-/edit/:branch/:path',
        docsRepo: 'https://gitlab.com/owner/name',
        docsBranch: 'master',
        docsDir: 'docs',
     */
    // editLinkPattern: '',
    // 文档源文件的仓库 URL 。它将会用于生成 编辑此页 的链接。
    // 如果你不设置该选项，则默认会使用 repo 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。
    // docsRepo: '',
    // 文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。
    // docsBranch: 'main',
    // 文档源文件存放在仓库中的目录名。它将会用于生成 编辑此页 的链接。
    // docsDir: '',
    /**
     * 最后更新时间配置。
        默认值： true。
        设置为 false 可以禁用最后更新时间。
        设置为 true 会使用默认的文案。
        设置为字符串会作为文案。
        设置为一个函数，它接受一个参数 pageData ，返回一个字符串，该字符串将作为文案。
        你可以通过页面的 lastUpdated frontmatter 来覆盖这个全局配置。
        要注意的是，如果你已经将该选项设为了 false ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。
     */
    lastUpdated: true,
    /**
     * 是否启用 贡献者列表 。默认值： true。
        你可以通过页面的 contributors frontmatter 来覆盖这个全局配置。
        要注意的是，如果你已经将该选项设为了 false ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。
     */
    contributors: true
  }),

  bundler: viteBundler(),
})
