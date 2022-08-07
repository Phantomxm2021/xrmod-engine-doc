"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[5047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"ar-base-api/ARRaycast",id:"ar-base-api/ARRaycast",title:"ARRaycast",description:"Description",source:"@site/docs/open-api-visual-scripting/ar-base-api/ARRaycast.md",sourceDirName:"ar-base-api",slug:"/ar-base-api/ARRaycast",permalink:"/zh-Hans/open-api-visual-scripting/ar-base-api/ARRaycast",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-visual-scripting/ar-base-api/ARRaycast.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ARMODAPIUnit",permalink:"/zh-Hans/open-api-visual-scripting/ar-base-api/ARMODAPIUnit"},next:{title:"CheckARAvailabilityUnit",permalink:"/zh-Hans/open-api-visual-scripting/ar-base-api/CheckARAvailabilityUnit"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Also known as hit testing, ray casting allows you to determine where a (defined by an origin and direction) intersects with a . The current ray cast interface only tests against planes and points in the point cloud. The ray cast interface is similar to the one in the Unity Physics module, but since AR trackables don't necessarily have a presence in the physics world, AR MOD provides a separate interface."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Connection"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input Trigger"),(0,n.kt)("td",{parentName:"tr",align:null},"Start invoke this unit logic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Out Trigger"),(0,n.kt)("td",{parentName:"tr",align:null},"Logical execution ends will perform the next operation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"API"),(0,n.kt)("td",{parentName:"tr",align:null},"Help creator to accessing the XR-MOD SDK features")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EventName"),(0,n.kt)("td",{parentName:"tr",align:null},"Called after raycast hit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Trackable Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Which type will be raycast hit")))))}u.isMDXComponent=!0}}]);