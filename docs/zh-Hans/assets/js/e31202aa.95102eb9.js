"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[4420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},l=void 0,o={unversionedId:"ar-base-api/ARRaycast",id:"ar-base-api/ARRaycast",title:"ARRaycast",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/ar-base-api/ARRaycast.md",sourceDirName:"ar-base-api",slug:"/ar-base-api/ARRaycast",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/ar-base-api/ARRaycast",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-visual-scripting/ar-base-api/ARRaycast.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ARMODAPIUnit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/ar-base-api/ARMODAPIUnit"},next:{title:"CheckARAvailabilityUnit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/ar-base-api/CheckARAvailabilityUnit"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u4e5f\u88ab\u79f0\u4e3a\u547d\u4e2d\u6d4b\u8bd5\uff0c\u5c04\u7ebf\u6295\u5c04\u5141\u8bb8\u4f60\u786e\u5b9a\u4e00\u4e2a\uff08\u7531\u539f\u70b9\u548c\u65b9\u5411\u5b9a\u4e49\uff09\u4e0e\u4e00\u4e2a.\u7684\u76f8\u4ea4\u4f4d\u7f6e\u3002 \u76ee\u524d\u7684\u5c04\u7ebf\u6295\u5c04\u63a5\u53e3\u53ea\u9488\u5bf9\u70b9\u4e91\u4e2d\u7684\u5e73\u9762\u548c\u70b9\u8fdb\u884c\u6d4b\u8bd5\u3002\u5c04\u7ebf\u6295\u5c04\u63a5\u53e3\u7c7b\u4f3c\u4e8eUnity\u7269\u7406\u6a21\u5757\u4e2d\u7684\u63a5\u53e3\uff0c\u4f46\u662f\u7531\u4e8eAR\u8ffd\u8e2a\u5668\u4e0d\u4e00\u5b9a\u5728\u7269\u7406\u4e16\u754c\u4e2d\u5b58\u5728\uff0cAR MOD\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5355\u72ec\u7684\u63a5\u53e3\u3002"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input Trigger"),(0,a.kt)("td",{parentName:"tr",align:null},"Start invoke this unit logic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Out Trigger"),(0,a.kt)("td",{parentName:"tr",align:null},"Logical execution ends will perform the next operation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API"),(0,a.kt)("td",{parentName:"tr",align:null},"Help creator to accessing the XR-MOD SDK features")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EventName"),(0,a.kt)("td",{parentName:"tr",align:null},"Called after raycast hit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Trackable Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Which type will be raycast hit")))))}u.isMDXComponent=!0}}]);