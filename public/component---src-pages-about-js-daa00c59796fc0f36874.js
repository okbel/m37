(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(t,n,e){"use strict";e.r(n);var a=e(175),r=e(149),o=e(0),i=e.n(o),c=e(157),u=e(155);n.default=function(){return i.a.createElement(r.b,{query:"450013431",render:function(t){var n=t.dataJson.about,e=n.title,a=n.text;return i.a.createElement(c.a,null,i.a.createElement(u.a,{title:"About"}),i.a.createElement("h1",null,e),i.a.createElement("p",null,a))},data:a})}},149:function(t,n,e){"use strict";e.d(n,"b",function(){return s});var a=e(0),r=e.n(a),o=e(4),i=e.n(o),c=e(33),u=e.n(c);e.d(n,"a",function(){return u.a});e(150);var l=r.a.createContext({}),s=function(t){return r.a.createElement(l.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(t,n,e){var a;t.exports=(a=e(153))&&a.default||a},152:function(t){t.exports={data:{site:{siteMetadata:{title:"M37 - Movimiento 37"}},dataJson:{layout:{announcementBar:{text:"Subscribe now on Apple Podcasts"},footer:{text:"Movimiento 37",links:[{name:"Spotify",path:"http://something."},{name:"Apple Podcast",path:"http://something."},{name:"Google Play",path:"http://something."}]}}}}}},153:function(t,n,e){"use strict";e.r(n);e(34);var a=e(0),r=e.n(a),o=e(4),i=e.n(o),c=e(55),u=e(2),l=function(t){var n=t.location,e=u.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(c.a,Object.assign({location:n,pageResources:e},e.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=l},154:function(t){t.exports={data:{dataJson:{layout:{navBar:{links:[{name:"About",path:"/about",primary:null},{name:"Episodes",path:"/episodes",primary:null},{name:"Subscribe Now",path:"http://google.com",primary:!0}]}}}}}},155:function(t,n,e){"use strict";var a=e(156),r=e(4),o=e.n(r),i=e(0),c=e.n(i),u=e(159),l=e.n(u);function s(t){var n=t.description,e=t.lang,r=t.meta,o=t.keywords,i=t.title,u=a.data.site,s=n||u.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:e},title:i,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},n.a=s},156:function(t){t.exports={data:{site:{siteMetadata:{title:"M37 - Movimiento 37",description:"Movimiento 37 Podcast sobre tecnología y más",author:"@okbel"}}}}},157:function(t,n,e){"use strict";var a=e(152),r=e(149),o=e(4),i=e.n(o),c=e(0),u=e.n(c),l=(e(158),e(147)),s=e.n(l),d=e(148);function p(){var t=s()(["\n  height: 50px;\n  text-align: center;\n  background-color: #3549bb;\n  color: #fff;\n  line-height: 50px;\n"]);return p=function(){return t},t}var f=d.a.div(p()),m=function(t){var n=t.data;return u.a.createElement(f,null,n.text)};e(151);function g(){var t=s()(["\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n"]);return g=function(){return t},t}function h(){var t=s()(["\n  display: inline-flex;\n  margin-right: 10px;\n  a {\n    color: #ffca00;\n    text-decoration: none;\n  }\n"]);return h=function(){return t},t}function x(){var t=s()(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n"]);return x=function(){return t},t}function y(){var t=s()(["\n  padding-top: 60px;\n  background-color: #222;\n  color: #fff;\n  height: 120px;\n  text-align: center;\n"]);return y=function(){return t},t}var v=d.a.div(y()),b=d.a.ul(x()),E=d.a.li(h()),w=d.a.div(g()),k=function(t){var n=t.data;return u.a.createElement(v,null,u.a.createElement(b,null,n.links.map(function(t){return u.a.createElement(E,null,u.a.createElement(r.a,{to:t.path},t.name))})),u.a.createElement(w,null,n.text))},M=e(154);function q(){var t=s()(["\n  text-transform: uppercase;\n  text-decoration: none;\n  list-style: none;\n  margin-right: 10px;\n  padding: 7px 14px;\n  border-radius: 5px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n\n  a {\n    text-decoration: none;\n    color: #222;\n    transition: color 0.15s ease-in;\n  }\n\n  ","\n\n  &:hover {\n    a {\n      color: #ffca00;\n    }\n  }\n"]);return q=function(){return t},t}function T(){var t=s()(["\n  background-color: transparent;\n  color: #fff;\n  display: flex;\n  flex-direction: row-reverse;\n"]);return T=function(){return t},t}function J(){var t=s()(["\n  flex: 1;\n"]);return J=function(){return t},t}var j=d.a.div(J()),P=d.a.ul(T()),R=d.a.li(q(),function(t){return t.primary&&"background-color: #3549BB; color: #fff; a { color: #fff;}"}),A=function(){return u.a.createElement(r.b,{query:"370356928",render:function(t){return u.a.createElement(j,null,u.a.createElement(P,null,t.dataJson.layout.navBar.links.map(function(t){return u.a.createElement(R,{primary:t.primary},u.a.createElement(r.a,{to:t.path},t.name))})))},data:M})};function B(){var t=s()(["\n  flex: 0;\n  margin: 0;\n  align-content: center;\n  a {\n    text-decoration: none;\n    color: #222;\n  }\n"]);return B=function(){return t},t}function S(){var t=s()(["\n  display: flex;\n  flex-direction: row;\n  height: 130px;\n  justify-content: center;\n  padding: 60px 0;\n  box-sizing: border-box;\n  border-bottom: solid 1px #ffca00;\n"]);return S=function(){return t},t}var O=d.a.header(S()),C=d.a.h1(B()),F=function(t){t.siteTitle;return u.a.createElement(O,null,u.a.createElement(C,null,u.a.createElement(r.a,{to:"/"},"M37")),u.a.createElement(A,null))};F.propTypes={siteTitle:i.a.string},F.defaultProps={siteTitle:""};var z=F;function G(){var t=s()(["\n  max-width: 1080px;\n  margin: 0 auto;\n"]);return G=function(){return t},t}var L=d.a.div(G()),N=function(t){var n=t.children;return u.a.createElement(r.b,{query:"4151820513",render:function(t){var e=t.site,a=t.dataJson.layout,r=a.announcementBar,o=a.footer;return u.a.createElement(u.a.Fragment,null,u.a.createElement(m,{data:r}),u.a.createElement(L,null,u.a.createElement(z,{siteTitle:e.siteMetadata.title}),u.a.createElement("main",null,n),u.a.createElement(k,{data:o})))},data:a})};N.propTypes={children:i.a.node.isRequired};n.a=N},175:function(t){t.exports={data:{dataJson:{about:{title:"About",text:"M37 is a podcast about the present and the future of technology."}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-daa00c59796fc0f36874.js.map