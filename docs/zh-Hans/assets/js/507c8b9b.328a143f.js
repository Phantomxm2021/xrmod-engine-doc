"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2072],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"ServerCallbacks Unit"},i=void 0,o={unversionedId:"multiplayer-api/network-callbacks/ServerCallbacks",id:"multiplayer-api/network-callbacks/ServerCallbacks",title:"ServerCallbacks Unit",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/multiplayer-api/network-callbacks/ServerCallbacks.md",sourceDirName:"multiplayer-api/network-callbacks",slug:"/multiplayer-api/network-callbacks/ServerCallbacks",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/network-callbacks/ServerCallbacks",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-visual-scripting/multiplayer-api/network-callbacks/ServerCallbacks.md",tags:[],version:"current",frontMatter:{title:"ServerCallbacks Unit"},sidebar:"tutorialSidebar",previous:{title:"Server Unit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/network-callbacks/Server"},next:{title:"Network Properties Sync",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/network-properties-sync-api"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u6ce8\u518c\u4e00\u4e2aServer\u4e8b\u4ef6\u63a5\u6536\u5668\u6765\u76d1\u542c\u5ba2\u6237\u7aef\u7684\u7f51\u7edc\u56de\u8c03\u3002\n\u4e0eServer\u76f8\u540c\uff0c\u4f46\u5728\u88ab\u5ba2\u6237\u7aef\u8c03\u7528\u65f6\u6ca1\u6709\u8b66\u544a\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),\nTransformData.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0eServer\u76f8\u540c\uff0c\u4f46\u5728\u5ba2\u6237\u7aef\u8c03\u7528\u65f6\u4e0d\u629b\u51fa\u8b66\u544a\u3002")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EventTarget"),(0,a.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"Where is the EventName event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"object(System)"),(0,a.kt)("td",{parentName:"tr",align:null},"Incomming data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EventName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name for response event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RemoteAction"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkRemoteAction"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkRemoteAction component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sender"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))))}s.isMDXComponent=!0}}]);