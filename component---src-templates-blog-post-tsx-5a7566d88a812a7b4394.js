(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9Dj+":function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("vOnD"),c=a("v7au"),l=a("ma3e"),s=a("QEEu"),u=a("AeFk"),d=i.c.div.withConfig({displayName:"layout__Container",componentId:"sc-10a7hlv-0"})(["display:flex;align-items:center;flex-direction:column;min-height:100vh;min-width:97vw;.nav-container{width:100%;padding:10px;max-width:700px;display:flex;justify-content:space-between;margin-top:10px;.nav-sub{display:flex;height:100%;align-items:center;.link-about{margin-right:10px;}.theme-icon{margin-right:10px;font-size:1.3em;cursor:pointer;}.moon{filter:drop-shadow(2px 2px 4px rgba(20,20,30,0.4));color:",";&:hover{filter:drop-shadow(2px 2px 4px rgba(20,20,30,0.4)) brightness(1.5);transition:transform 0.5s linear;}transition:transform 0.5s linear;}.sun{filter:drop-shadow(2px 2px 4px rgba(255,255,255,0.5));color:",";&:hover{transform:rotate(180deg);transition:transform 0.5s linear;}transition:transform 0.5s linear;}}.title{letter-spacing:1px;font-style:italic;.double-o{color:",";}}}.main{max-width:700px;width:100%;padding:10px;}"],(function(t){return t.theme.color.dark}),(function(t){return t.theme.color.dark}),(function(t){return t.theme.color.icon})),m=i.c.footer.withConfig({displayName:"layout__Footer",componentId:"sc-10a7hlv-1"})(["display:flex;justify-content:center;width:100%;box-shadow:-2px 0px 2px ",";"],(function(t){return t.theme.color.dark}));e.a=function(t){var e=t.children,a=Object(n.useContext)(s.a),i=a.isDarkMode,p=a.setIsDarkMode,f=Object(n.useCallback)((function(){localStorage.setItem("isDarkMode",JSON.stringify({value:!i})),p((function(t){return!t}))}),[p,i]);return Object(n.useEffect)((function(){var t=localStorage.getItem("isDarkMode");t&&(!0===JSON.parse(t).value?p(!0):p(!1))}),[]),Object(u.a)(r.a.Fragment,null,Object(u.a)(d,null,Object(u.a)("nav",{className:"nav-container"},Object(u.a)(o.a,{to:"/"},Object(u.a)("h3",{className:"title text"},"W",Object(u.a)("span",{className:"double-o"},"OO"),"NG")),Object(u.a)("div",{className:"nav-sub text"},Object(u.a)(o.a,{to:"/blog/",className:"link-about"},"Blog"),Object(u.a)(o.a,{to:"/portfolio/",className:"link-about"},"Project"),Object(u.a)(o.a,{to:"/about/",className:"link-about"},"About"),i?Object(u.a)(l.a,{onClick:f,className:"sun theme-icon"}):Object(u.a)(c.a,{onClick:f,className:"moon theme-icon"}))),Object(u.a)("main",{className:"main"},e)),Object(u.a)(m,{className:"footer text"},"2020 @Jaewoong2"))}},Lnxd:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.a.createContext&&r.a.createContext(o),c=function(){return(c=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var r in e=arguments[a])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},l=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};function s(t){return function(e){return r.a.createElement(u,c({attr:c({},t.attr)},e),function t(e){return e&&e.map((function(e,a){return r.a.createElement(e.tag,c({key:a},e.attr),t(e.child))}))}(t.child))}}function u(t){var e=function(e){var a,n=t.attr,o=t.size,i=t.title,s=l(t,["attr","size","title"]),u=o||e.size||"1em";return e.className&&(a=e.className),t.className&&(a=(a?a+" ":"")+t.className),r.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,s,{className:a,style:c(c({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&r.a.createElement("title",null,i),t.children)};return void 0!==i?r.a.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},cZrw:function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return c}));a("q1tI");var n=a("9Dj+"),r=a("vOnD"),o=a("AeFk"),i=r.c.section.withConfig({displayName:"blog-post__Section",componentId:"sc-1yq0vve-0"})([".markdown-wrapper{*{color:inherit;}code{background-color:rgba(220,220,220,0.9);padding:2px;color:black;border-radius:5px;}pre{background-color:",";color:",";padding:10px;overflow:auto;code{background-color:unset;color:inherit;}}}"],(function(t){return!0===t.theme.isDarkMode?"rgba(220, 220, 220, 0.56)":"rgba(0, 0, 0, 0.84)"}),(function(t){return t.theme.color.primary}));e.default=function(t){var e=t.data.markdownRemark;return Object(o.a)(n.a,null,Object(o.a)(i,null,Object(o.a)("h1",{className:"text"},null==e?void 0:e.frontmatter.title),Object(o.a)("div",{className:"text markdown-wrapper",dangerouslySetInnerHTML:{__html:(null==e?void 0:e.html)?null==e?void 0:e.html:""}})))};var c="471609186"}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-5a7566d88a812a7b4394.js.map