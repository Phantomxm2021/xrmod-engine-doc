"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2903],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,f=u["".concat(s,".").concat(m)]||u[m]||l[m]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},94270:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:2,title:"How XRMOD works",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"Introducing how xrmod works, so you can understand more about xrmod."},i=void 0,c={unversionedId:"how-xrmod-works",id:"how-xrmod-works",title:"How XRMOD works",description:"Introducing how xrmod works, so you can understand more about xrmod.",source:"@site/docs/home/how-xrmod-works.md",sourceDirName:".",slug:"/how-xrmod-works",permalink:"/how-xrmod-works",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/home/how-xrmod-works.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"How XRMOD works",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"Introducing how xrmod works, so you can understand more about xrmod."},sidebar:"tutorialSidebar",previous:{title:"What is XRMOD engine",permalink:"/what-is-xrmod-engine"}},s={},d=[],p={toc:d};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"XRMOD Engine is a metaverse construction system developed based on the OpenXR protocol. And XR-Experience content create by Unity Editor.  "),(0,n.kt)("p",null,"XRMOD Engine can embed to a native App or build a standalone app with Unity Editor."),(0,n.kt)("coverimg",{url:o(33270)}),(0,n.kt)("p",null,"The image above demonstrates how your app interacts with the XRMOD Engine and with the XRMOD Cloud. Allows you to add your own logic to the events that occur between ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR APP")," <-> ",(0,n.kt)("inlineCode",{parentName:"p"},"XRMOD"),"; logic inside XRMOD such as how to obtain XR-Experience and display it or execute custom code, etc, ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR APP")," No action is required and the XRMOD Engine takes over."),(0,n.kt)("p",null,"In order to reduce the size of the application installation package, we designed to separate ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR APP")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"XR-Experience")," content, in addition to making our XR-Experience more flexible."),(0,n.kt)("p",null,"As mentioned above, XR-Experience is not included in the installation package. The purpose of this is to allow our application to carry more XR-Experience.\nYou do not need to change the logic code of the original app when adjusting the content of XR-Experience. You just need to make adjustments for your specific XR-Experience."),(0,n.kt)("p",null,"XR-Experience can be built using the Unity Editor, and we also offer a number of toolchains for Unity ideas.\nIf you want to learn how to build an XR experience, ",(0,n.kt)("a",{parentName:"p",href:"../experience-manual/tutorial-basics/create-first-arexperience"},"click here")," to read the article."))}l.isMDXComponent=!0},33270:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r=o.p+"assets/images/xrmodworks-1d820790292a8d450aa56d33f705ecf1.png"}}]);