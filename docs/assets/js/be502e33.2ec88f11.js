"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[7193],{3905:(e,r,a)=>{a.d(r,{Zo:()=>s,kt:()=>d});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),m=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},s=function(e){var r=m(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return a?t.createElement(f,i(i({ref:r},s),{},{components:a})):t.createElement(f,i({ref:r},s))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<o;m++)i[m]=a[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51398:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=a(87462),n=(a(67294),a(3905)),o=a(14053);const i={sidebar_position:1,title:"Offical Examples",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"all xrmod example case"},c=void 0,l={unversionedId:"examples/offical-examples",id:"examples/offical-examples",title:"Offical Examples",description:"all xrmod example case",source:"@site/docs/experience-manual/examples/offical-examples.mdx",sourceDirName:"examples",slug:"/examples/offical-examples",permalink:"/experience-manual/examples/offical-examples",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/examples/offical-examples.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Offical Examples",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"all xrmod example case"},sidebar:"tutorialSidebar",previous:{title:"Create An AR World Experience",permalink:"/experience-manual/tutorial-advanced/create-an-ar-world-experience"},next:{title:"Unity Limited",permalink:"/experience-manual/limition/unity-limit"}},m={},s=[],p={toc:s};function u(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{basePath:"/static/examples/offical",items:[{name:"Placeing virtual object",img:"placevirtualobject.jpg",sourcecode:""},{name:"Anchor place",img:"anchor.jpg",sourcecode:""},{name:"Glasses try on",img:"glassestryon.jpg",sourcecode:""},{name:"360 panorama",img:"360panorama.jpg",sourcecode:""},{name:"Image tracking",img:"imagetracking.jpg",sourcecode:""},{name:"AR world",img:"arworld.jpg"},{name:"SurvivalShooter AR",img:"SurvivalShooter.jpg",sourcecode:""},{name:"Stack AR",img:"stackar.jpg"},{name:"Multiplayer",img:"multiplayerar.jpg",sourcecode:""}],mdxType:"UrlGrid"}))}u.isMDXComponent=!0},14053:(e,r,a)=>{a.d(r,{Z:()=>s});a(39960);var t=a(67294);const n="grid_iSBr",o="section__4FW",i="card_q0bt",c="imageContainer_eeNN",l="image_Adm2";function m(e){let{item:r,basePath:a}=e;return t.createElement("a",{className:i,href:r.sourcecode,target:"blank",key:r.img},t.createElement("div",{className:c},t.createElement("img",{src:a+"/"+r.img,alt:"",className:l})),t.createElement("div",null,r.name))}function s(e){let{items:r,basePath:a="/"}=e;return r.sort(((e,r)=>e.name<r.name?-1:e.name>r.name?1:0)),t.createElement("div",{className:o},t.createElement("div",{className:n},r.map((e=>t.createElement(m,{key:e.img,item:e,basePath:a})))))}}}]);