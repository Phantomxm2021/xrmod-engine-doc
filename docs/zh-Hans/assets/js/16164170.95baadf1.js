"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76676:(e,t,n)=>{n.d(t,{Z:()=>d});n(39960);var r=n(67294);const a="grid_ET5Y",i="section_NKLx",o="card_oMeU",m="imageContainer_R_q9",l="image_APOx";var c=n(87462),s=n(86010);const p=e=>{let{src:t,mobile:n,className:a,...i}=e;return r.createElement("video",(0,c.Z)({className:(0,s.Z)(a,n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},i))};function u(e){let{item:t,basePath:n}=e;return r.createElement("div",{className:o,key:t.img},r.createElement("div",{className:m},t.video&&r.createElement(p,{src:""+n+t.video,className:"custom-video-card"}),t.img&&r.createElement("img",{src:""+n+t.img,alt:"",className:l})),r.createElement("div",null,t.name))}function d(e){let{items:t,basePath:n="/"}=e;return t.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),r.createElement("div",{className:i},r.createElement("div",{className:a},t.map((e=>r.createElement(u,{key:e.img,item:e,basePath:n})))))}},55611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),i=n(76676);const o={sidebar_position:1,title:"\u4ec0\u4e48\u662fXRMOD\u5f15\u64ce"},m=void 0,l={unversionedId:"what-is-xrmod-engine",id:"what-is-xrmod-engine",title:"\u4ec0\u4e48\u662fXRMOD\u5f15\u64ce",description:"\u7b80\u800c\u8a00\u4e4b\uff0cXRMODEngine\u662f\u4e00\u4e2a\u57fa\u4e8eOpenXR\u534f\u8bae\u5f00\u53d1\u7684\u5143\u7a7a\u95f4\u6784\u5efa\u7cfb\u7edf\u3002\u4e0d\u4ec5\u6709VR\uff08\u865a\u62df\u73b0\u5b9e\uff09\u3001AR\uff08\u589e\u5f3a\u73b0\u5b9e\uff09\u3001MR\uff08\u6df7\u5408\u73b0\u5b9e\uff09\uff0c\u800c\u4e14\u8fd8\u7ee7\u7eed\u652f\u6301\u4f20\u7edf\u7684\u8bfb\u5c4f\u65b9\u5f0f\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/what-is-xrmod-engine.mdx",sourceDirName:".",slug:"/what-is-xrmod-engine",permalink:"/zh-Hans/what-is-xrmod-engine",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-doc/tree/main/docs/home/what-is-xrmod-engine.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4ec0\u4e48\u662fXRMOD\u5f15\u64ce"},sidebar:"tutorialSidebar",next:{title:"XRMOD\u5de5\u4f5c\u539f\u7406",permalink:"/zh-Hans/how-xrmod-works"}},c={},s=[{value:"XRMOD\u7684\u6982\u5ff5",id:"xrmod\u7684\u6982\u5ff5",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"Social",id:"social",level:2}],p=(u="UrlGrid",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:s};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0cXRMODEngine\u662f\u4e00\u4e2a\u57fa\u4e8eOpenXR\u534f\u8bae\u5f00\u53d1\u7684\u5143\u7a7a\u95f4\u6784\u5efa\u7cfb\u7edf\u3002\u4e0d\u4ec5\u6709VR\uff08\u865a\u62df\u73b0\u5b9e\uff09\u3001AR\uff08\u589e\u5f3a\u73b0\u5b9e\uff09\u3001MR\uff08\u6df7\u5408\u73b0\u5b9e\uff09\uff0c\u800c\u4e14\u8fd8\u7ee7\u7eed\u652f\u6301\u4f20\u7edf\u7684\u8bfb\u5c4f\u65b9\u5f0f\u3002\nXRMOD\u5f15\u64ce\u662f\u4e00\u4e2a\u514d\u8d39\u7684\u65e0\u6c34\u5370\u5143\u7a7a\u95f4\u6784\u5efa\u7cfb\u7edf\uff0c\u652f\u6301\u5546\u4e1a\u8bb8\u53ef\uff08\u514d\u8d39\u5546\u4e1a\u8bb8\u53ef\uff09\u3002"),(0,a.kt)("h2",{id:"xrmod\u7684\u6982\u5ff5"},"XRMOD\u7684\u6982\u5ff5"),(0,a.kt)("p",null,"MOD\u65e2\u662f\u4fee\u6539\u7684\u610f\u601d\u3002\u8fd9\u4e2a\u6982\u5ff5\u5728\u6e38\u620f\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\uff0c\u5bf9\u5e94\u7684\u662f\u53ef\u4fee\u6539\u7684\u89c6\u9891\u6e38\u620f\u3002\u8457\u540d\u7684\u6e38\u620f\u5982\u300a\u9b54\u517d\u300b\u3001\u300a\u7ea2\u8272\u8b66\u6212\u300b\u3001\u300a\u534a\u6761\u547d\u300b\u3001\u300aCS\u300b\u3001\u300a\u80dc\u5229\u65e5\u300b\u7b49\u7b49!\n\u6211\u4eec\u5c06MOD\u7684\u6982\u5ff5\u79fb\u690d\u5230XRMOD\u5f15\u64ce\u4e0a\uff0c\u8ba9\u7528\u6237\u6709\u66f4\u591a\u7684\u81ea\u7531\u6765\u521b\u9020\u4ed6\u4eec\u9700\u8981\u7684\u521b\u9020\u6027\u7684\u4e92\u52a8\u4f53\u9a8c\u5185\u5bb9! \u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u4e0d\u9700\u8981\u62c5\u5fc3\u7b97\u6cd5\u548c\u4ee3\u7801\u7684\u5b9e\u73b0\uff0c\u800c\u53ea\u9700\u8981\u4e13\u6ce8\u4e8e\u521b\u65b0\u4e92\u52a8\u4f53\u9a8c\u5185\u5bb9\u7684\u5236\u4f5c\u3002\u53ea\u9700\u8981\u5c11\u91cf\u7684\u4ee3\u7801\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728\u4f7f\u7528XRMOD\u5f15\u64ce\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5e76\u521b\u9020\u66f4\u5927\u7684\u5546\u4e1a\u4ef7\u503c\u3002"),(0,a.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.kt)(i.Z,{basePath:"./static/features/",items:[{name:"01. Plane Detect virtual object",img:"planedetect.gif"},{name:"02. Anchor Place",img:"anchor.gif"},{name:"03. FaceMesh",img:"facemesh.gif"},{name:"04. 360 panorama",img:"360panorama.gif"},{name:"05. Image tracking",img:"imagetracking.gif"},{name:"06. AR world",img:"arworld.gif"},{name:"07. Point Cloud",img:"pointcloud.gif"},{name:"08. Meshing",img:"mesh.gif"},{name:"09. Light Estimation",img:"lightestimation.gif"},{name:"10. Environment Reflection",img:"environmentprob.gif"},{name:"11. Ocullusion",img:"ocullusion.gif"},{name:"12. Multiplayer",img:"multiplayer.webp"},{name:"13. Virtual Reality",img:"vr.gif"},{name:"14. Mixed Reality",img:"mr.gif"},{name:"15. MOD",img:"mod.webp"},{name:"16. Unity",img:"unity.png"},{name:"17. Dashboard CMS",img:"cms.gif"},{name:"18 .SDKs",img:"sdk.png"},{name:"19 .Templates",img:"templates.png"},{name:"20 .Unified Format",img:"unifiedformat.png"},{name:"21 .Cloud Base",img:"cloudbase.jpg"}],mdxType:"FeatureGrid"}),(0,a.kt)(p,{basePath:"/static/repository/",items:[{name:"AR-MOD Framework",img:"framework.jpg",sourcecode:"https://github.com/Phantomxm2021/ARMOD-Framework"},{name:"Flutter Plugin",img:"flutter_ar.jpg",sourcecode:"https://pub.dev/packages/flutter_armod_widget/versions/2.0.0-pre.1"},{name:"Unity Plugin",img:"unity_ar.jpg",sourcecode:"./experience-manual/prepare-for-developer/install-xrmod-dev-tools"}],mdxType:"UrlGrid"}),(0,a.kt)("h2",{id:"social"},"Social"),(0,a.kt)("p",null,"Discord: ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/YnHfHadjMA"},"https://discord.gg/YnHfHadjMA")),(0,a.kt)("p",null,"Github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Phantomxm2021"},"https://github.com/Phantomxm2021")),(0,a.kt)("p",null,"Wechat: Phantomxm2021"),(0,a.kt)("p",null,"QQ-Group: 827807019"))}g.isMDXComponent=!0}}]);