import "F:/ownProject/huangjia/github-project/vue-press-02/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "F:/ownProject/huangjia/github-project/vue-press-02/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "F:/ownProject/huangjia/github-project/vue-press-02/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "F:/ownProject/huangjia/github-project/vue-press-02/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "F:/ownProject/huangjia/github-project/vue-press-02/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "F:/ownProject/huangjia/github-project/vue-press-02/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "F:/ownProject/huangjia/github-project/vue-press-02/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
