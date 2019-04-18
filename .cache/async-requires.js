// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/belencurcio/Develop/m37/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/belencurcio/Develop/m37/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-episodes-js": () => import("/Users/belencurcio/Develop/m37/src/pages/episodes.js" /* webpackChunkName: "component---src-pages-episodes-js" */),
  "component---src-pages-index-js": () => import("/Users/belencurcio/Develop/m37/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/belencurcio/Develop/m37/.cache/data.json")

