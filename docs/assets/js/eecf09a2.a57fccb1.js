"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6077],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,l(l({ref:e},s),{},{components:a})):n.createElement(f,l({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58796:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"notification-data-api/FaceMeshDataResponseUnit",id:"notification-data-api/FaceMeshDataResponseUnit",title:"FaceMeshDataResponseUnit",description:"Description",source:"@site/docs/open-api-visual-scripting/notification-data-api/FaceMeshDataResponseUnit.md",sourceDirName:"notification-data-api",slug:"/notification-data-api/FaceMeshDataResponseUnit",permalink:"/open-api-visual-scripting/notification-data-api/FaceMeshDataResponseUnit",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-visual-scripting/notification-data-api/FaceMeshDataResponseUnit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CreateryAcquireCurrentFrameDataUnit",permalink:"/open-api-visual-scripting/notification-data-api/CreateryAcquireCurrentFrameDataUnit"},next:{title:"FocusDataResponseUnit",permalink:"/open-api-visual-scripting/notification-data-api/FocusDataResponseUnit"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:c};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Subclass of BaseNotificationData. When using image tracking, the ARMOD SDK Event Receiver function will receive this type of data."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TrackingId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Current map id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FaceGameObject"),(0,r.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,r.kt)("td",{parentName:"tr",align:null},"You should set trackabletype when stick type is ByTackableTYpe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FaceTrackingState"),(0,r.kt)("td",{parentName:"tr",align:null},"FaceTrackingState"),(0,r.kt)("td",{parentName:"tr",align:null},"Current face tracking state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vertices"),(0,r.kt)("td",{parentName:"tr",align:null},"NativeArray<Vector3",">"),(0,r.kt)("td",{parentName:"tr",align:null},"face mesh vertices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indices"),(0,r.kt)("td",{parentName:"tr",align:null},"NativeArray<int",">"),(0,r.kt)("td",{parentName:"tr",align:null},"face mesh indices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"normals"),(0,r.kt)("td",{parentName:"tr",align:null},"NativeArray<Vector3",">"),(0,r.kt)("td",{parentName:"tr",align:null},"face mesh normals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uvs"),(0,r.kt)("td",{parentName:"tr",align:null},"NaativeArray<Vector2",">"),(0,r.kt)("td",{parentName:"tr",align:null},"face mesh uvs")))),(0,r.kt)("p",null,"\u200b"))}u.isMDXComponent=!0}}]);