"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[8596],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||s[f]||i;return t?n.createElement(m,a(a({ref:r},d),{},{components:t})):n.createElement(m,a({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26810:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"api-reference/protocol-api/NeedInstallARCoreService",id:"api-reference/protocol-api/NeedInstallARCoreService",title:"NeedInstallARCoreService",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-android-sdk/current/api-reference/protocol-api/NeedInstallARCoreService.md",sourceDirName:"api-reference/protocol-api",slug:"/api-reference/protocol-api/NeedInstallARCoreService",permalink:"/xrmod-engine-doc/zh-Hans/android-sdk/api-reference/protocol-api/NeedInstallARCoreService",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/android-sdk/api-reference/protocol-api/NeedInstallARCoreService.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DeviceNotSupoort",permalink:"/xrmod-engine-doc/zh-Hans/android-sdk/api-reference/protocol-api/DeviceNotSupoort"},next:{title:"OnARMODExit",permalink:"/xrmod-engine-doc/zh-Hans/android-sdk/api-reference/protocol-api/OnARMODExit"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Method",id:"method",level:2}],d={toc:p};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"\u5f53\u4f60\u7684\u8bbe\u5907\u652f\u6301 ARCore \u4f46\u4f60\u6b63\u5728\u5b89\u88c5 ARCore \u670d\u52a1\u65f6\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5c06\u88ab\u6267\u884c\uff0c\u63d0\u793a\u7528\u6237\u5b89\u88c5 ARCore \u670d\u52a1\u3002"),(0,o.kt)("h2",{id:"method"},"Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void onNeedInstallARCoreService();\n")))}s.isMDXComponent=!0}}]);