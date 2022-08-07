"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[4131],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=m(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},79629:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={title:"Command Unit"},o=void 0,l={unversionedId:"multiplayer-api/network-rpc/Command",id:"multiplayer-api/network-rpc/Command",title:"Command Unit",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/multiplayer-api/network-rpc/Command.md",sourceDirName:"multiplayer-api/network-rpc",slug:"/multiplayer-api/network-rpc/Command",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/network-rpc/Command",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/open-api-visual-scripting/multiplayer-api/network-rpc/Command.md",tags:[],version:"current",frontMatter:{title:"Command Unit"},sidebar:"tutorialSidebar",previous:{title:"ClientRpc Unit",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/network-rpc/ClientRpc"},next:{title:"Intruduce",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/network-rpc/Intro"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:m};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u6ce8\u518c\u4e00\u4e2a\u547d\u4ee4\u8fdc\u7a0b\u64cd\u4f5c\u63a5\u6536\u5668\u6765\u76d1\u542c\u547d\u4ee4\u4e8b\u4ef6\u3002\u547d\u4ee4\u4ece\u5ba2\u6237\u7aef\u7684\u73a9\u5bb6\u5bf9\u8c61\u53d1\u9001\u81f3\u670d\u52a1\u5668\u4e0a\u7684\u73a9\u5bb6\u5bf9\u8c61\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u547d\u4ee4\u53ea\u80fd\u4ece\u4f60\u7684\u73a9\u5bb6\u5bf9\u8c61\u53d1\u9001\uff0c\u6240\u4ee5\u4f60\u4e0d\u80fd\u63a7\u5236\u5176\u4ed6\u73a9\u5bb6\u5bf9\u8c61\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),TransformData.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Event Target"),(0,a.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"Where is the EventName event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"object(System)"),(0,a.kt)("td",{parentName:"tr",align:null},"Incomming Data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EventName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name for response event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Remote Action"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkRemoteAction"),(0,a.kt)("td",{parentName:"tr",align:null},"Remote action component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sender"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))))}u.isMDXComponent=!0}}]);