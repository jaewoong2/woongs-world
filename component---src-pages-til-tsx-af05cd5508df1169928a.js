(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"92gO":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var a=n("vOnD"),i=a.c.div.withConfig({displayName:"styles__Container",componentId:"sc-4yw9eu-0"})(["padding:10px;margin-left:10px;.list-wrapper{display:flex;flex-direction:column;}.link-posts{width:fit-content;text-decoration:none;color:inherit;}.post-title{display:initial;margin-bottom:11px;&:hover{opacity:0.65;transition:opacity 0.25s;}transition:opacity 0.25s;.index{font-size:1.2em;margin-right:3px;}}.post-date{display:initial;color:#555;font-size:0.75em;margin:0;padding:0;margin-left:15px;margin-bottom:10px;}"]),o=(a.c.h1.withConfig({displayName:"styles__Title",componentId:"sc-4yw9eu-1"})(["display:inline-block;border-bottom:1px solid;"]),a.c.code.withConfig({displayName:"styles__Tag",componentId:"sc-4yw9eu-2"})(["font-size:0.85em;font-family:'Roboto';border-radius:4px;padding:4px 6px 4px 6px;cursor:pointer;overflow:hidden;background-color:",";margin-right:2px;color:",";margin-left:3px;"],(function(t){return t.theme.color.tagColor}),(function(t){return t.theme.color.primary})))},"9JiB":function(t,e,n){"use strict";var a=n("Wbzz"),i=n("q1tI"),o=n.n(i),r=n("92gO"),l=function(t){var e=t.title,n=t.slug,i=t.date,l=t.tags;return o.a.createElement(r.a,null,o.a.createElement("div",{className:"list-wrapper"},o.a.createElement(a.Link,{className:"link-posts",to:n},o.a.createElement("h3",{className:"post-title text"},""+e)),o.a.createElement("h4",{className:"post-date text"},": ",i),o.a.createElement("div",{className:"tag-wrapper"},null==l?void 0:l.map((function(t){return o.a.createElement(a.Link,{key:t,className:"link-posts",to:"/tags?tag="+t},o.a.createElement(r.b,null,t))})))))};e.a=o.a.memo(l)},tlvo:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return c}));var a=n("q1tI"),i=n.n(a),o=n("vOnD"),r=n("9JiB"),l=n("ZtoJ"),s=o.c.section.withConfig({displayName:"til__Section",componentId:"sc-2eqnbh-0"})(["position:relative;"]);e.default=function(t){var e=t.data;return i.a.createElement(l.a,null,i.a.createElement(s,null,e.allMarkdownRemark.edges.map((function(t,e){var n,a;return i.a.createElement(r.a,{tags:null==t||null===(n=t.node)||void 0===n||null===(a=n.frontmatter)||void 0===a?void 0:a.tags,title:t.node.frontmatter.title,key:t.node.id.slice(0,10)+e,date:t.node.frontmatter.date,slug:t.node.fields.slug})}))))};var c="2681018001"}}]);
//# sourceMappingURL=component---src-pages-til-tsx-af05cd5508df1169928a.js.map