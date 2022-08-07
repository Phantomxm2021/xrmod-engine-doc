"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,g=u["".concat(m,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76676:(e,t,n)=>{n.d(t,{Z:()=>p});n(39960);var r=n(67294);const a="grid_ET5Y",i="section_NKLx",o="card_oMeU",s="imageContainer_R_q9",m="image_APOx";var c=n(87462),l=n(86010);const d=e=>{let{src:t,mobile:n,className:a,...i}=e;return r.createElement("video",(0,c.Z)({className:(0,l.Z)(a,n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},i))};function u(e){let{item:t,basePath:n}=e;return r.createElement("div",{className:o,key:t.img},r.createElement("div",{className:s},t.video&&r.createElement(d,{src:""+n+t.video,className:"custom-video-card"}),t.img&&r.createElement("img",{src:""+n+t.img,alt:"",className:m})),r.createElement("div",null,t.name))}function p(e){let{items:t,basePath:n="/"}=e;return t.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),r.createElement("div",{className:i},r.createElement("div",{className:a},t.map((e=>r.createElement(u,{key:e.img,item:e,basePath:n})))))}},76635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var r=n(87462),a=(n(67294),n(3905)),i=n(76676);const o={sidebar_position:1,title:"What is XRMOD engine"},s=void 0,m={unversionedId:"what-is-xrmod-engine",id:"what-is-xrmod-engine",title:"What is XRMOD engine",description:"In short, XRMODEngine is a metaverse construction system developed based on the OpenXR protocol. Not only VR (Virtual Reality), AR (Augmented Reality), MR (Mixed Reality), but also continued support for traditional screen reading methods.",source:"@site/docs/home/what-is-xrmod-engine.mdx",sourceDirName:".",slug:"/what-is-xrmod-engine",permalink:"/what-is-xrmod-engine",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/home/what-is-xrmod-engine.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"What is XRMOD engine"},sidebar:"tutorialSidebar",next:{title:"How XRMOD works",permalink:"/how-xrmod-works"}},c={},l=[{value:"Concept of XRMOD",id:"concept-of-xrmod",level:2},{value:"Features",id:"features",level:2},{value:"Social",id:"social",level:2}],d=(u="UrlGrid",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const p={toc:l};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In short, XRMODEngine is a metaverse construction system developed based on the OpenXR protocol. Not only VR (Virtual Reality), AR (Augmented Reality), MR (Mixed Reality), but also continued support for traditional screen reading methods.\nXRMOD Engine is a free watermark-free metaverse build system that supports commercial licenses (free commercial licenses)."),(0,a.kt)("h2",{id:"concept-of-xrmod"},"Concept of XRMOD"),(0,a.kt)("p",null,"MOD is both Modification. The concept is widely used in games and corresponds to modifiable video games. Famous games like Warcraft, Red Alert, Half-Life, CS, Victory Day and more!\nWe ported the MOD concept to the XRMOD Engine, giving users more freedom to create the creative interactive experience content they need! In this process, users do not need to worry about algorithm and code implementation, but only need to focus on the production of innovative interactive experience content. With just a small amount of code, you can use and create greater business value in applications that use XRMOD Engine."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)(i.Z,{basePath:"/static/features/",items:[{name:"01. Plane Detect virtual object",img:"planedetect.gif"},{name:"02. Anchor Place",img:"anchor.gif"},{name:"03. FaceMesh",img:"facemesh.gif"},{name:"04. 360 panorama",img:"360panorama.gif"},{name:"05. Image tracking",img:"imagetracking.gif"},{name:"06. AR world",img:"arworld.gif"},{name:"07. Point Cloud",img:"pointcloud.gif"},{name:"08. Meshing",img:"mesh.gif"},{name:"09. Light Estimation",img:"lightestimation.gif"},{name:"10. Environment Reflection",img:"environmentprob.gif"},{name:"11. Ocullusion",img:"ocullusion.gif"},{name:"12. Multiplayer",img:"multiplayer.webp"},{name:"13. Virtual Reality",img:"vr.gif"},{name:"14. Mixed Reality",img:"mr.gif"},{name:"15. MOD",img:"mod.webp"},{name:"16. Unity",img:"unity.png"},{name:"17. Dashboard CMS",img:"cms.gif"},{name:"18 .SDKs",img:"sdk.png"},{name:"19 .Templates",img:"templates.png"},{name:"20 .Unified Format",img:"unifiedformat.png"},{name:"21 .Cloud Base",img:"cloudbase.jpg"}],mdxType:"FeatureGrid"}),(0,a.kt)(d,{basePath:"/static/repository/",items:[{name:"AR-MOD Framework",img:"framework.jpg",sourcecode:"https://github.com/Phantomxm2021/ARMOD-Framework"},{name:"Flutter Plugin",img:"flutter_ar.jpg",sourcecode:"https://pub.dev/packages/flutter_armod_widget/versions/2.0.0-pre.1"},{name:"Unity Plugin",img:"unity_ar.jpg",sourcecode:"./experience-manual/prepare-for-developer/install-xrmod-dev-tools"}],mdxType:"UrlGrid"}),(0,a.kt)("h2",{id:"social"},"Social"),(0,a.kt)("p",null,"Discord: ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/YnHfHadjMA"},"https://discord.gg/YnHfHadjMA")),(0,a.kt)("p",null,"Github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Phantomxm2021"},"https://github.com/Phantomxm2021")),(0,a.kt)("p",null,"Wechat: Phantomxm2021"),(0,a.kt)("p",null,"QQ-Group: 827807019"))}g.isMDXComponent=!0}}]);