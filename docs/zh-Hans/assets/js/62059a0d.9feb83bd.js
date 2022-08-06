"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9540],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,y=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return t?n.createElement(y,a(a({ref:r},l),{},{components:t})):n.createElement(y,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},72724:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const i={title:"Introduce",sidebar_position:1},a=void 0,c={unversionedId:"api-reference/introduce",id:"api-reference/introduce",title:"Introduce",description:"\u8fd9\u4e2aAPI\u662fXMROD\u5f15\u64ce\u4e3aUnity\u5e73\u53f0\u63d0\u4f9b\u7684\u6240\u6709\u5f00\u653e\u63a5\u53e3\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u597d\u5730\u5c06XRMOD\u5d4c\u5165\u5230\u4ed6\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-unity-sdk/current/api-reference/introduce.md",sourceDirName:"api-reference",slug:"/api-reference/introduce",permalink:"/xrmod-engine-doc/zh-Hans/unity-sdk/api-reference/introduce",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/unity-sdk/api-reference/introduce.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduce",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5728Unity\u5185\u4f7f\u7528",permalink:"/xrmod-engine-doc/zh-Hans/unity-sdk/embed-unity"},next:{title:"AddLoadingOverlay",permalink:"/xrmod-engine-doc/zh-Hans/unity-sdk/api-reference/protocol-api/AddLoadingOverlay"}},u={},p=[],l={toc:p};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u4e2aAPI\u662fXMROD\u5f15\u64ce\u4e3aUnity\u5e73\u53f0\u63d0\u4f9b\u7684\u6240\u6709\u5f00\u653e\u63a5\u53e3\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u597d\u5730\u5c06XRMOD\u5d4c\u5165\u5230\u4ed6\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002"),(0,o.kt)("p",null,"\u8be5API\u5206\u4e3a\u4e24\u90e8\u5206\uff1a\u7b2c\u4e00\u90e8\u5206\u662f\u5e94\u7528\u7a0b\u5e8f\u8c03\u7528XRMOD\u5f15\u64ce\u7684API\uff1b\u7b2c\u4e8c\u90e8\u5206\u662fXRMOD\u542f\u52a8\u540e\u7684\u6240\u6709\u4e8b\u4ef6\u53cd\u9988\uff08\u5373\u59d4\u6258\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u76f8\u5e94\u7684\u56de\u8c03\u4e2d\u5efa\u7acb\u81ea\u5df1\u7684\u903b\u8f91\u548c\u6027\u80fd\uff09\u3002"))}d.isMDXComponent=!0}}]);