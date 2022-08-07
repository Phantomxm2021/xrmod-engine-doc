"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9487],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return a?n.createElement(f,o(o({ref:e},u),{},{components:a})):n.createElement(f,o({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6529:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"notification-data-api/CreateBaseDataUnit",id:"notification-data-api/CreateBaseDataUnit",title:"CreateBaseDataUnit",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/notification-data-api/CreateBaseDataUnit.md",sourceDirName:"notification-data-api",slug:"/notification-data-api/CreateBaseDataUnit",permalink:"/zh-Hans/open-api-visual-scripting/notification-data-api/CreateBaseDataUnit",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/open-api-visual-scripting/notification-data-api/CreateBaseDataUnit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CreateAnchorDataUnit",permalink:"/zh-Hans/open-api-visual-scripting/notification-data-api/CreateAnchorDataUnit"},next:{title:"CreateOpenBuiltInBrowserDataUnit",permalink:"/zh-Hans/open-api-visual-scripting/notification-data-api/CreateOpenBuiltInBrowserDataUnit"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:c};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"\u6b63\u5982\u5b83\u7684\u540d\u5b57\u6240\u793a\uff0c\u5b83\u662f\u6240\u6709\u901a\u77e5\u6570\u636e\u7684\u57fa\u7c7b\u3002"),(0,r.kt)("h2",{id:"return"},"Return"),(0,r.kt)("p",null,"Base notification data\n\u200b\u200b"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Target"),(0,r.kt)("td",{parentName:"tr",align:null},"Objects stored in response to events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Current action name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Base data"),(0,r.kt)("td",{parentName:"tr",align:null},"Addition string data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of callback to trigger graph custom event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Name With Result"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of callback to trigger graph custom event inculde data")))),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);