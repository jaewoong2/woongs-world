(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2l/u":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return x}));var n=a("q1tI"),o=a.n(n),r=a("vOnD"),i=a("9Dj+"),c=a("Tgqd"),l=a("X13+"),s=a("Npfw"),m=r.c.section.withConfig({displayName:"AboutMySelf__Main",componentId:"sc-1okguh7-0"})(["width:100%;margin-bottom:30px;display:flex;align-items:flex-end;.clarification-wrapper{width:45%;height:20%;background-color:",";border-radius:2px;margin-left:20px;margin-bottom:20px;.clarification{padding:20px;color:",";box-shadow:2px 2px 5px ",";width:100%;font-size:0.75em;height:100%;}}.history-wrapper{position:relative;padding-left:10px;width:50%;.date-wrapper{margin-bottom:10px;&::after{content:'';position:absolute;left:0;top:0;width:2px;height:100%;background-color:",";transition:background-color 0.5s linear;}.date{position:relative;display:flex;height:22px;align-items:center;padding-left:12px;color:",";text-shadow:",";&::before{content:'';position:absolute;width:18px;height:2px;left:-10px;top:11px;background-color:",";}}.description{width:fit-content;font-size:0.75em;margin-top:5px;position:relative;margin-left:5px;cursor:pointer;&::before{content:'';color:inherit;margin-right:5px;}}}}"],(function(e){return e.theme.color.dark}),(function(e){return e.theme.color.primary}),(function(e){return!0===e.theme.isDarkMode?"rgba(255, 255, 255, 0.435)":"rgba(0, 0, 0, 0.435)"}),(function(e){return e.theme.color.dark}),(function(e){var t=e.theme;return!0===t.isDarkMode?t.color.yellow:t.color.purple}),(function(e){return e.theme.color.boxShadow}),(function(e){return e.theme.color.dark})),p=function(e){var t=e.myHistory,a=e.circleColor,i=void 0===a?"rgba(252, 126, 141, 0.6)":a,c=Object(n.useState)({isClicked:!1,index:0}),l=c[0],s=c[1],p=Object(r.e)(),d=Object(n.useMemo)((function(){return Object.assign({},p,{props:{circleColor:i}})}),[p]),u=Object(n.useCallback)((function(e){return function(){s({isClicked:!0,index:e})}}),[]);return o.a.createElement(m,{theme:d},o.a.createElement("section",{className:"history-wrapper"},null==t?void 0:t.map((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"history-"+t,className:"date-wrapper"},o.a.createElement("div",{className:"date text"},e.date),o.a.createElement("div",{onClick:u(t),className:"description text"},e.description)))}))),l.isClicked&&o.a.createElement("div",{className:"clarification-wrapper"},o.a.createElement("div",{className:"clarification"},t[l.index].clarification)))},d=r.c.section.withConfig({displayName:"about__SectionTechStack",componentId:"sc-5x513g-0"})(["width:100%;display:flex;justify-content:space-evenly;.stack{position:relative;::after{content:'';font-size:0.3em;top:1.2rem;position:absolute;height:10px;left:0;animation:"," 2s linear;}}.cpp{::after{width:70%;background-color:rgba(188,202,198,0.767);}}.cs{::after{width:40%;background-color:rgba(150,150,220,0.7);}}.py{::after{width:60%;background-color:rgba(40,100,250,0.5);}}.js{::after{width:110%;background-color:rgba(248,114,4,0.836);}}.ts{::after{width:100%;background-color:#0084ff;}}.react{::after{width:100%;background-color:#48afeb;}}.node{::after{width:50%;background-color:#64e684;}}"],s.b),u=r.c.section.withConfig({displayName:"about__Contact",componentId:"sc-5x513g-1"})(["width:100%;display:flex;margin-top:15px;margin-left:10px;.contact-icon{margin-bottom:10px;width:100%;display:flex;align-items:center;margin-top:15px;text-decoration:none;color:",";svg{color:",";min-width:24px;min-height:24px;margin-right:7px;}}"],(function(e){return e.theme.color.dark}),(function(e){return e.theme.color.icon})),f=r.c.p.withConfig({displayName:"about__Paragraph",componentId:"sc-5x513g-2"})(["width:100%;margin-top:25px;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;&::before{content:'';width:95%;margin-bottom:20px;height:1.5px;background-color:",";}"],(function(e){return e.theme.color.dark})),h=r.c.span.withConfig({displayName:"about__Span",componentId:"sc-5x513g-3"})(["width:fit-content;height:1em;"]),g=[{date:"1995.12.01",description:"출생",clarification:"느긋한 성격을 갖고 있습니다."},{date:"2014.02",description:"강원대학교 사범대학부설고등학교 졸업",clarification:"문과"},{date:"2014.03",description:"한국외국어대학교 글로벌캠퍼스 인문학부 입학",clarification:"인문학이 맞지않아 방황을 하며 하고싶은 것을 찾기 시작한 때 입니다."},{date:"2014.09 - 2015.11",description:"1학기 후 휴학후, 수능 준비.",clarification:"휴학하며 하고 싶은 것을 찾았고, 상경계열 및 이공계열 을 가기 위해 수능 준비를 하였습니다."},{date:"2016.03",description:"숭실대학교 전자정보공학부 IT융합전공 입학",clarification:"IT 업계를 가고 싶어 IT융합전공을 선택하여 입학 하였습니다."},{date:"2017.05 - 2019.04",description:"대한민국 해군 641기 병장 만기전역",clarification:"남들과 다른 군입대를 하고 싶었기 때문에, 주위에서 비교적 가지 않은 해군에 입대하였습니다."},{date:"2019.11",description:"휴학 후, 아르바이트를 병행하며 개발공부 시작",clarification:"여러사람을 만나며 하고싶은 것에 대해 구체화를 하였고, 결단 끝에 개발공부를 시작하였습니다."},{date:"2020.03",description:"2020학기 복학",clarification:"궁극적인 목표(개발자) 를 위해 복학을 하였습니다."}],x=(t.default=function(e){e.data;return o.a.createElement(i.a,null,o.a.createElement(p,{myHistory:g}),o.a.createElement(h,{className:"text"},"사용빈도-"),o.a.createElement(d,null,o.a.createElement("span",{className:"stack cpp text"},"C++"),o.a.createElement("span",{className:"stack cs text"},"C#"),o.a.createElement("span",{className:"stack py text"},"Python"),o.a.createElement("span",{className:"stack js text"},"ECMA2020"),o.a.createElement("span",{className:"stack ts text"},"TypeScript"),o.a.createElement("span",{className:"stack react text"},"Recat Hooks"),o.a.createElement("span",{className:"stack node text"},"NodeJS")),o.a.createElement(u,null,o.a.createElement("a",{rel:"noreferrer",className:"contact-icon text",href:"https://github.com/jaewoong2",target:"_blank"},o.a.createElement(c.a,{className:"icon",size:"36px"}),"https://github.com/jaewoong2"),o.a.createElement("a",{rel:"noreferrer",className:"contact-icon text",href:"https://velog.io/@jwisgenius",target:"_blank"},o.a.createElement(l.b,{className:"icon",size:"36px"})," https://velog.io/@jwisgenius")),o.a.createElement(f,{className:"text"},"경력은 없지만, 꾸준히 개인 프로젝트를 해왔습니다. 현재, 숭실대학교 YOURSSU 프론트엔드 팀에서 부족하지만 열심히 하고 있습니다. 배우는 걸 좋아하고, 그 누구에 못지않는 열정을 갖고 있습니다."))},"1617620919")},"9Dj+":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),i=a("vOnD"),c=a("v7au"),l=a("ma3e"),s=a("QEEu"),m=i.c.div.withConfig({displayName:"layout__Container",componentId:"sc-10a7hlv-0"})(["display:flex;align-items:center;flex-direction:column;min-height:100vh;min-width:97vw;.nav-container{width:100%;padding:10px;max-width:700px;display:flex;justify-content:space-between;margin-top:10px;.nav-sub{display:flex;height:100%;align-items:center;.link-about{margin-right:10px;}.theme-icon{margin-right:10px;font-size:1.3em;cursor:pointer;}.moon{filter:drop-shadow(2px 2px 4px rgba(20,20,30,0.4));color:",";&:hover{filter:drop-shadow(2px 2px 4px rgba(20,20,30,0.4)) brightness(1.5);transition:transform 0.5s linear;}transition:transform 0.5s linear;}.sun{filter:drop-shadow(2px 2px 4px rgba(255,255,255,0.5));color:",";&:hover{transform:rotate(180deg);transition:transform 0.5s linear;}transition:transform 0.5s linear;}}.title{letter-spacing:1px;font-style:italic;.double-o{color:",";}}}.main{max-width:700px;width:100%;padding:10px;}"],(function(e){var t=e.theme;return t.isDarkMode?t.color.white:t.color.black}),(function(e){return e.theme.color.dark}),(function(e){return e.theme.color.icon})),p=i.c.footer.withConfig({displayName:"layout__Footer",componentId:"sc-10a7hlv-1"})(["display:flex;justify-content:center;width:100%;box-shadow:-2px 0px 2px ",";"],(function(e){return e.theme.color.dark}));t.a=function(e){var t=e.children,a=Object(n.useContext)(s.a),i=a.isDarkMode,d=a.setIsDarkMode,u=Object(n.useCallback)((function(){localStorage.setItem("isDarkMode",JSON.stringify({value:!i})),d((function(e){return!e}))}),[d,i]);return Object(n.useEffect)((function(){var e=localStorage.getItem("isDarkMode");e&&(!0===JSON.parse(e).value?d(!0):d(!1))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null,o.a.createElement("nav",{className:"nav-container"},o.a.createElement(r.a,{to:"/"},o.a.createElement("h3",{className:"title text"},"W",o.a.createElement("span",{className:"double-o"},"OO"),"NG")),o.a.createElement("div",{className:"nav-sub text"},o.a.createElement(r.a,{to:"/blog/",className:"link-about"},"Blog"),o.a.createElement(r.a,{to:"/portfolio/",className:"link-about"},"Project"),o.a.createElement(r.a,{to:"/about/",className:"link-about"},"About"),i?o.a.createElement(l.a,{onClick:u,className:"sun theme-icon"}):o.a.createElement(c.a,{onClick:u,className:"moon theme-icon"}))),o.a.createElement("main",{className:"main"},t)),o.a.createElement(p,{className:"footer text"},"2020 @Jaewoong2"))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),o=a.n(n),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(r),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a};function s(e){return function(t){return o.a.createElement(m,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return o.a.createElement(t.tag,c({key:a},t.attr),e(t.child))}))}(e.child))}}function m(e){var t=function(t){var a,n=e.attr,r=e.size,i=e.title,s=l(e,["attr","size","title"]),m=r||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),e.children)};return void 0!==i?o.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-7c84e20626245222ebad.js.map