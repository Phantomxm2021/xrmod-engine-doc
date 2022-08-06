"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1443],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(f,o(o({ref:e},u),{},{components:n})):a.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75765:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"notification-data-api/CreateAROcclusionDataUnit",id:"notification-data-api/CreateAROcclusionDataUnit",title:"CreateAROcclusionDataUnit",description:"Description",source:"@site/docs/open-api-visual-scripting/notification-data-api/CreateAROcclusionDataUnit.md",sourceDirName:"notification-data-api",slug:"/notification-data-api/CreateAROcclusionDataUnit",permalink:"/xrmod-engine-doc/open-api-visual-scripting/notification-data-api/CreateAROcclusionDataUnit",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-visual-scripting/notification-data-api/CreateAROcclusionDataUnit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CreateARAlgorithmLifeDataUnit",permalink:"/xrmod-engine-doc/open-api-visual-scripting/notification-data-api/CreateARAlgorithmLifeDataUnit"},next:{title:"CreateAnchorDataUnit",permalink:"/xrmod-engine-doc/open-api-visual-scripting/notification-data-api/CreateAnchorDataUnit"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Subclass of BaseNotificationData. When you are call the method will be need pass this data to ARMOD SDK."),(0,r.kt)("h2",{id:"return"},"Return"),(0,r.kt)("p",null,"\u200b\u200bAR Occlusion Data"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connection"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Occlusion Data Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Human Stencil / Depth or Enviroment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Target"),(0,r.kt)("td",{parentName:"tr",align:null},"Objects stored in response to events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Current action name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Base data"),(0,r.kt)("td",{parentName:"tr",align:null},"Addition string data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of callback to trigger graph custom event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Name With Result"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of callback to trigger graph custom event inculde data")))))}s.isMDXComponent=!0}}]);