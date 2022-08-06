"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1063],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},89607:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Create TransformData Unit"},o=void 0,l={unversionedId:"multiplayer-api/utility/CreateTransformDataUnit",id:"multiplayer-api/utility/CreateTransformDataUnit",title:"Create TransformData Unit",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/multiplayer-api/utility/CreateTransformDataUnit.md",sourceDirName:"multiplayer-api/utility",slug:"/multiplayer-api/utility/CreateTransformDataUnit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/utility/CreateTransformDataUnit",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-visual-scripting/multiplayer-api/utility/CreateTransformDataUnit.md",tags:[],version:"current",frontMatter:{title:"Create TransformData Unit"},sidebar:"tutorialSidebar",previous:{title:"Target Rpc Unit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/network-rpc/TargetRpc"},next:{title:"Get LocalIP Unit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/utility/GetLocalIPUnit"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:c};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2atransform data\uff08\u4f4d\u7f6e\u3001\u65cb\u8f6c\u3001\u6bd4\u4f8b\uff09\u5e76\u53d1\u9001\u7ed9\u5176\u4ed6\u5ba2\u6237\u3002"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Position"),(0,a.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,a.kt)("td",{parentName:"tr",align:null},"The position of game object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rotation"),(0,a.kt)("td",{parentName:"tr",align:null},"Quaternion"),(0,a.kt)("td",{parentName:"tr",align:null},"The rotation of game object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scale"),(0,a.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,a.kt)("td",{parentName:"tr",align:null},"The scale of game object")))))}m.isMDXComponent=!0}}]);