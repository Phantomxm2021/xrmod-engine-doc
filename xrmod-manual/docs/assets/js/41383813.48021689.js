"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6013],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(y,o(o({ref:e},s),{},{components:n})):r.createElement(y,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75417:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"utility-api/LoadAssetAsyncUnit",id:"utility-api/LoadAssetAsyncUnit",title:"LoadAssetAsyncUnit",description:"Description",source:"@site/docs/open-api-visual-scripting/utility-api/LoadAssetAsyncUnit.md",sourceDirName:"utility-api",slug:"/utility-api/LoadAssetAsyncUnit",permalink:"/open-api-visual-scripting/utility-api/LoadAssetAsyncUnit",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-doc/tree/main/docs/open-api-visual-scripting/utility-api/LoadAssetAsyncUnit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KVLocalStoreUnit",permalink:"/open-api-visual-scripting/utility-api/KVLocalStoreUnit"},next:{title:"SetScreenOrientationUnit",permalink:"/open-api-visual-scripting/utility-api/SetScreenOrientationUnit"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:u};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Asynchronously load a single asset from our package through the project name, and hope to load the asset name."),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("p",null,"Your asset of T type"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input Trigger"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Start invoke this unit logic"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Out Trigger"),(0,a.kt)("td",{parentName:"tr",align:null},"Logical execution ends will perform the next operation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API"),(0,a.kt)("td",{parentName:"tr",align:null},"Help creator to accessing the AR-MOD SDK features")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"You want to load's unique asset name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"Your asset of T type")))))}c.isMDXComponent=!0}}]);