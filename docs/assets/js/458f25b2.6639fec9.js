"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6197],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=c(a),s=r,f=m["".concat(l,".").concat(s)]||m[s]||d[s]||i;return a?n.createElement(f,o(o({ref:e},u),{},{components:a})):n.createElement(f,o({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},597:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,p={unversionedId:"notification-data-api/CreateTryAcquireAppInfoDataUnit",id:"notification-data-api/CreateTryAcquireAppInfoDataUnit",title:"CreateTryAcquireAppInfoDataUnit",description:"Description",source:"@site/docs/open-api-visual-scripting/notification-data-api/CreateTryAcquireAppInfoDataUnit.md",sourceDirName:"notification-data-api",slug:"/notification-data-api/CreateTryAcquireAppInfoDataUnit",permalink:"/open-api-visual-scripting/notification-data-api/CreateTryAcquireAppInfoDataUnit",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-visual-scripting/notification-data-api/CreateTryAcquireAppInfoDataUnit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CreateOpenBuiltInBrowserDataUnit",permalink:"/open-api-visual-scripting/notification-data-api/CreateOpenBuiltInBrowserDataUnit"},next:{title:"CreateryAcquireCurrentFrameDataUnit",permalink:"/open-api-visual-scripting/notification-data-api/CreateryAcquireCurrentFrameDataUnit"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:c};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Subclass of BaseNotificationData. When you are call the method will be need pass this data to ARMOD SDK."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h2",{parentName:"admonition",id:"how-to-get-the-data-from-native-app"},"How to get the data from native app?"),(0,r.kt)("p",{parentName:"admonition"},"write callback action to Event name With Result")),(0,r.kt)("h2",{id:"return"},"Return"),(0,r.kt)("p",null,"\u200b\u200bTry acquire App Info Data"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connection"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetInfoType"),(0,r.kt)("td",{parentName:"tr",align:null},"Opcode to get app info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Target"),(0,r.kt)("td",{parentName:"tr",align:null},"Objects stored in response to events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Current action name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Base data"),(0,r.kt)("td",{parentName:"tr",align:null},"Addition string data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of callback to trigger graph custom event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Name With Result"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of callback to trigger graph custom event inculde data")))))}d.isMDXComponent=!0}}]);