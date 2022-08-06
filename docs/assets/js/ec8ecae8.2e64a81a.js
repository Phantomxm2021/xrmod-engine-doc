"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),s=i,f=m["".concat(p,".").concat(s)]||m[s]||d[s]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o=void 0,l={unversionedId:"api-reference/xrmod-api/InitSDK",id:"api-reference/xrmod-api/InitSDK",title:"InitSDK",description:"Description",source:"@site/docs/unity-sdk/api-reference/xrmod-api/InitSDK.md",sourceDirName:"api-reference/xrmod-api",slug:"/api-reference/xrmod-api/InitSDK",permalink:"/xrmod-engine-doc/unity-sdk/api-reference/xrmod-api/InitSDK",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/unity-sdk/api-reference/xrmod-api/InitSDK.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dispose",permalink:"/xrmod-engine-doc/unity-sdk/api-reference/xrmod-api/Dispose"},next:{title:"Initialize",permalink:"/xrmod-engine-doc/unity-sdk/api-reference/xrmod-api/Initialize"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Method",id:"method",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Initialize ARMOD SDK with configuration information. This method will call  automatically."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"appconfigure"),(0,i.kt)("td",{parentName:"tr",align:null},"NSString"),(0,i.kt)("td",{parentName:"tr",align:null},"This is a json string. Use to init our sdk and authentication")))),(0,i.kt)("h2",{id:"method"},"Method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();\ntmp_SDKEntryPoint.InitSDK(_configuration);\n")))}d.isMDXComponent=!0}}]);