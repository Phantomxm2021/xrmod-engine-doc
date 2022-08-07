"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[5519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(r),d=a,y=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:3,title:"Command Unit"},i=void 0,l={unversionedId:"multiplayer-api/network-rpc/Command",id:"multiplayer-api/network-rpc/Command",title:"Command Unit",description:"Description",source:"@site/docs/open-api-visual-scripting/multiplayer-api/network-rpc/Command.md",sourceDirName:"multiplayer-api/network-rpc",slug:"/multiplayer-api/network-rpc/Command",permalink:"/open-api-visual-scripting/multiplayer-api/network-rpc/Command",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-visual-scripting/multiplayer-api/network-rpc/Command.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Command Unit"},sidebar:"tutorialSidebar",previous:{title:"ClientRpc Unit",permalink:"/open-api-visual-scripting/multiplayer-api/network-rpc/ClientRpc"},next:{title:"Target Rpc Unit",permalink:"/open-api-visual-scripting/multiplayer-api/network-rpc/TargetRpc"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Register a command remote operation receiver to listen for command events. Commands are sent from the player object on the client to the player object on the server. By default, for security reasons, commands can only be sent from your player object, so you cannot control other player objects."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),TransformData.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Event Target"),(0,a.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"Where is the EventName event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"object(System)"),(0,a.kt)("td",{parentName:"tr",align:null},"Incomming Data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EventName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Name for response event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Remote Action"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkRemoteAction"),(0,a.kt)("td",{parentName:"tr",align:null},"Remote action component")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sender"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))))}u.isMDXComponent=!0}}]);