"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2131],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17791:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"api-reference/protocol-api/NeedInstallARCoreService",id:"api-reference/protocol-api/NeedInstallARCoreService",title:"NeedInstallARCoreService",description:"Description",source:"@site/docs/flutter-sdk/api-reference/protocol-api/NeedInstallARCoreService.md",sourceDirName:"api-reference/protocol-api",slug:"/api-reference/protocol-api/NeedInstallARCoreService",permalink:"/zh-Hans/flutter-sdk/api-reference/protocol-api/NeedInstallARCoreService",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/flutter-sdk/api-reference/protocol-api/NeedInstallARCoreService.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DeviceNotSupoort",permalink:"/zh-Hans/flutter-sdk/api-reference/protocol-api/DeviceNotSupoort"},next:{title:"OpenBuiltInBrowser",permalink:"/zh-Hans/flutter-sdk/api-reference/protocol-api/OpenBuiltInBrowser"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Method",id:"method",level:2}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"When your device supports ARCore but you are installing the ARCore service, this method will be executed, prompting the user to install the ARCore service."),(0,o.kt)("h2",{id:"method"},"Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"}," void onNeedInstallARCoreService();\n")))}u.isMDXComponent=!0}}]);