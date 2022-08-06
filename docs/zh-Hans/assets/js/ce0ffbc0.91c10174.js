"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[944],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(r),g=i,d=s["".concat(p,".").concat(g)]||s[g]||m[g]||a;return r?n.createElement(d,o(o({ref:e},c),{},{components:r})):n.createElement(d,o({ref:e},c))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},10312:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"Network Animator Trigger Unit"},o=void 0,l={unversionedId:"multiplayer-api/utility/NetworkAnimatorTriggerUnit",id:"multiplayer-api/utility/NetworkAnimatorTriggerUnit",title:"Network Animator Trigger Unit",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/multiplayer-api/utility/NetworkAnimatorTriggerUnit.md",sourceDirName:"multiplayer-api/utility",slug:"/multiplayer-api/utility/NetworkAnimatorTriggerUnit",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/utility/NetworkAnimatorTriggerUnit",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-visual-scripting/multiplayer-api/utility/NetworkAnimatorTriggerUnit.md",tags:[],version:"current",frontMatter:{title:"Network Animator Trigger Unit"},sidebar:"tutorialSidebar",previous:{title:"Is Server Unit",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/utility/IsServerUnit"},next:{title:"Network Animator Trigger Unit",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/utility/NetworkObjectDestroyUnit"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:u};function m(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"\u540c\u6b65Animator.Trigger\u7684\u65b9\u6cd5\u3002\u56e0\u4e3aNetworkAnimator\u7ec4\u4ef6\u6ca1\u6709\u540c\u6b65Trigger\u72b6\u6001\u3002"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Connection"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Trigger Name"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Need to trigger state condition name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Trigger Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Enum"),(0,i.kt)("td",{parentName:"tr",align:null},"Set trigger or reset trigger of condition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Animator"),(0,i.kt)("td",{parentName:"tr",align:null},"Animator"),(0,i.kt)("td",{parentName:"tr",align:null},"The animator component")))))}m.isMDXComponent=!0}}]);