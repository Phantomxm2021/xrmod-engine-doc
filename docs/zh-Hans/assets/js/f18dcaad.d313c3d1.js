"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1515],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98128:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={},i=void 0,l={unversionedId:"api-reference/protocol-api/OpenBuiltInBrowser",id:"api-reference/protocol-api/OpenBuiltInBrowser",title:"OpenBuiltInBrowser",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-android-sdk/current/api-reference/protocol-api/OpenBuiltInBrowser.md",sourceDirName:"api-reference/protocol-api",slug:"/api-reference/protocol-api/OpenBuiltInBrowser",permalink:"/zh-Hans/android-sdk/api-reference/protocol-api/OpenBuiltInBrowser",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/android-sdk/api-reference/protocol-api/OpenBuiltInBrowser.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OnAddLoadingOverlay",permalink:"/zh-Hans/android-sdk/api-reference/protocol-api/OnAddLoadingOverlay"},next:{title:"PackageSizeMoreThanPresetSize",permalink:"/zh-Hans/android-sdk/api-reference/protocol-api/PackageSizeMoreThanPresetSize"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Method",id:"method",level:2}],u={toc:c};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 URL"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u6253\u5f00\u7684 URL")))),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void onOpenBuiltInBrowser(String _url);\n")))}s.isMDXComponent=!0}}]);