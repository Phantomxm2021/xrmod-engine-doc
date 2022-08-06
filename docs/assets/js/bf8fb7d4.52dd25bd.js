"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9555],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,O=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return t?n.createElement(O,a(a({ref:r},d),{},{components:t})):n.createElement(O,a({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},75830:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"api-reference/protocol-api/OnARMODExit",id:"api-reference/protocol-api/OnARMODExit",title:"OnARMODExit",description:"Description",source:"@site/docs/android-sdk/api-reference/protocol-api/OnARMODExit.md",sourceDirName:"api-reference/protocol-api",slug:"/api-reference/protocol-api/OnARMODExit",permalink:"/android-sdk/api-reference/protocol-api/OnARMODExit",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/android-sdk/api-reference/protocol-api/OnARMODExit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NeedInstallARCoreService",permalink:"/android-sdk/api-reference/protocol-api/NeedInstallARCoreService"},next:{title:"OnARMODLaunch",permalink:"/android-sdk/api-reference/protocol-api/OnARMODLaunch"}},p={},l=[{value:"Description",id:"description",level:2},{value:"Method",id:"method",level:2}],d={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Execute when the AR-MOD SDK is closed"),(0,o.kt)("h2",{id:"method"},"Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void onARMODExit()\n")))}u.isMDXComponent=!0}}]);