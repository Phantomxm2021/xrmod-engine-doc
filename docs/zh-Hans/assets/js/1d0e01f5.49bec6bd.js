"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2374],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(g,c(c({ref:r},s),{},{components:t})):n.createElement(g,c({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92597:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},c=void 0,i={unversionedId:"api-reference/xrmod-api/ConnectArgcArgv",id:"api-reference/xrmod-api/ConnectArgcArgv",title:"ConnectArgcArgv",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-ios-sdk/current/api-reference/xrmod-api/ConnectArgcArgv.md",sourceDirName:"api-reference/xrmod-api",slug:"/api-reference/xrmod-api/ConnectArgcArgv",permalink:"/zh-Hans/ios-sdk/api-reference/xrmod-api/ConnectArgcArgv",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/ios-sdk/api-reference/xrmod-api/ConnectArgcArgv.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConnectARMOD",permalink:"/zh-Hans/ios-sdk/api-reference/xrmod-api/ConnectARMOD"},next:{title:"ConnectLaunchOpts",permalink:"/zh-Hans/ios-sdk/api-reference/xrmod-api/ConnectLaunchOpts"}},p={},l=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Method",id:"method",level:2}],s={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u7ee7\u627f\u5f53\u524d APP \u7684 Argc \u548c Argv"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gArgc"),(0,a.kt)("td",{parentName:"tr",align:null},"argument count.\u5b83\u8868\u793a\u6709\u591a\u5c11\u4e2a\u53c2\u6570\u88ab\u4f20\u5165\u53ef\u6267\u884c\u6587\u4ef6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gArgv"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53c2\u6570\u503c\u3002\u5b83\u662f\u4e00\u4e2a\u6307\u5411\u5b57\u7b26\u6570\u7ec4\u7684\u6307\u9488\u3002")))),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) connectArgcArgv:(int)gArgc setgArgv:(char **) gArgv\n")))}u.isMDXComponent=!0}}]);