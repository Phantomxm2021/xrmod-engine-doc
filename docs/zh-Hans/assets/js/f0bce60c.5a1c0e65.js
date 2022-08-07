"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[4487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"api-reference/xrmod-api/SetUIInterfaceOrientation",id:"api-reference/xrmod-api/SetUIInterfaceOrientation",title:"SetUIInterfaceOrientation",description:"Description",source:"@site/docs/ios-sdk/api-reference/xrmod-api/SetUIInterfaceOrientation.md",sourceDirName:"api-reference/xrmod-api",slug:"/api-reference/xrmod-api/SetUIInterfaceOrientation",permalink:"/zh-Hans/ios-sdk/api-reference/xrmod-api/SetUIInterfaceOrientation",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/ios-sdk/api-reference/xrmod-api/SetUIInterfaceOrientation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RegisterAPIforNativeCalls",permalink:"/zh-Hans/ios-sdk/api-reference/xrmod-api/RegisterAPIforNativeCalls"},next:{title:"ShowARMODWindow",permalink:"/zh-Hans/ios-sdk/api-reference/xrmod-api/ShowARMODWindow"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Method",id:"method",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Set the ar view to follow the orientation of the app itself"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"orientation"),(0,a.kt)("td",{parentName:"tr",align:null},"UIInterfaceOrientation"),(0,a.kt)("td",{parentName:"tr",align:null},"Current app's orientation")))),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)setUIInterfaceOrientation:(UIInterfaceOrientation)orientation\n")))}d.isMDXComponent=!0}}]);