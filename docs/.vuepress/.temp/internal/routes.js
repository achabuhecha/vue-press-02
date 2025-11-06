export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"F:/ownProject/huangjia/github-project/vue-press-02/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/ownProject/huangjia/github-project/vue-press-02/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"my website"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/ownProject/huangjia/github-project/vue-press-02/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
