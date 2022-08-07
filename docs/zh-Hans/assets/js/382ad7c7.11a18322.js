"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(r),d=l,k=s["".concat(c,".").concat(d)]||s[d]||p[d]||n;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<n;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},45075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var a=r(87462),l=(r(67294),r(3905));const n={sidebar_position:1,title:"AR Algorithm Block"},i=void 0,o={unversionedId:"arblock/ar-algorithm-block",id:"arblock/ar-algorithm-block",title:"AR Algorithm Block",description:"AR Algorithm",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-experience-manual/current/arblock/ar-algorithm-block.mdx",sourceDirName:"arblock",slug:"/arblock/ar-algorithm-block",permalink:"/zh-Hans/experience-manual/arblock/ar-algorithm-block",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-doc/tree/main/docs/experience-manual/arblock/ar-algorithm-block.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AR Algorithm Block"},sidebar:"tutorialSidebar",previous:{title:"Object Capture",permalink:"/zh-Hans/experience-manual/dev-tools/object-capture"},next:{title:"Version Check Block",permalink:"/zh-Hans/experience-manual/arblock/version-check-block"}},c={},m=[{value:"AR Algorithm",id:"ar-algorithm",level:2},{value:"Algorithm Auto Start",id:"algorithm-auto-start",level:2},{value:"Focus Slam",id:"focus-slam",level:3},{value:"Plane Detection Mode",id:"plane-detection-mode",level:3},{value:"Anchor",id:"anchor",level:3},{value:"Gyro",id:"gyro",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Image Tracking",id:"image-tracking",level:3},{value:"Max Moving Of Tracking",id:"max-moving-of-tracking",level:3},{value:"Immersal",id:"immersal",level:3},{value:"Immersal \u7279\u70b9\u4ecb\u7ecd:",id:"immersal-\u7279\u70b9\u4ecb\u7ecd",level:4},{value:"Face Mesh",id:"face-mesh",level:3}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ar-algorithm"},"AR Algorithm"),(0,l.kt)("p",null,"\u7528\u4e8e\u914d\u7f6e AR \u4f53\u9a8c\u7684\u4e3b\u7b97\u6cd5\uff1b\u6bcf\u4e2a AR \u4f53\u9a8c\u90fd\u5fc5\u987b\u7528\u4e3b\u7b97\u6cd5\u8fdb\u884c\u914d\u7f6e\u3002\u5f53\u4e3b\u7b97\u6cd5\u8fd0\u884c\u5931\u8d25\u65f6\u8fdb\u884c\u66ff\u6362\u3002(\u53ea\u652f\u6301\u542f\u52a8\u3001\u5173\u95ed\u548c\u8fd0\u884c\u65f6\u7684\u9644\u52a0\u7b97\u6cd5)"),(0,l.kt)("h2",{id:"algorithm-auto-start"},"Algorithm Auto Start"),(0,l.kt)("p",null,"\u4e3b\u7b97\u6cd5\u81ea\u52a8\u542f\u52a8\uff0c\u4e0d\u9700\u8981\u8c03\u7528\u811a\u672c\u3002"),(0,l.kt)("h3",{id:"focus-slam"},"Focus Slam"),(0,l.kt)("p",null,"\u805a\u7126\u7684 SLAM \u7b97\u6cd5\uff0cAR \u865a\u62df\u4f53\u88ab\u653e\u7f6e\u5728\u6307\u6807\u7684\u4f4d\u7f6e\u4e0a\u3002"),(0,l.kt)("coverimg",{url:r(93546),height:"25rem",padding:"0"}),(0,l.kt)("h3",{id:"plane-detection-mode"},"Plane Detection Mode"),(0,l.kt)("p",null,"SLAM \u5bfb\u627e\u5e73\u9762\u7684\u7b97\u6cd5\uff0c\u6709\u6c34\u5e73\u3001\u5782\u76f4\u548c\u4e24\u8005\u9009\u9879\u3002"),(0,l.kt)("coverimg",{url:r(16034),height:"25rem",padding:"0"}),(0,l.kt)("h3",{id:"anchor"},"Anchor"),(0,l.kt)("p",null,"\u951a\u70b9\u5f0f SLAM \u7b97\u6cd5\u5c06 AR \u865a\u62df\u4f53\u94c6\u5728\u951a\u70b9\u4e0a\u3002"),(0,l.kt)("h3",{id:"gyro"},"Gyro"),(0,l.kt)("p",null,"\u53ea\u6709 3Dof \u7b97\u6cd5\u7684 AR \u6a21\u5f0f\u88ab\u6253\u5f00\uff0c\u4f53\u9a8c\u8005\u53ea\u80fd\u901a\u8fc7 360\xb0 \u65cb\u8f6c\u6765\u89c2\u770b\uff0c\u6ca1\u6709\u7a7a\u95f4\u8fd0\u52a8\u7684\u611f\u77e5\u3002"),(0,l.kt)("h3",{id:"fixed"},"Fixed"),(0,l.kt)("p",null,"\u8d34\u7eb8\u6a21\u5f0f\uff0c\u5c06 AR \u7684\u865a\u62df\u548c\u601d\u8003\u653e\u5728\u5c4f\u5e55\u4e0a\u3002\u4e0d\u80fd\u6709 6D \u7684\u77e5\u89c9\u3002"),(0,l.kt)("h3",{id:"image-tracking"},"Image Tracking"),(0,l.kt)("p",null,"\u56fe\u50cf\u8ddf\u8e2a\uff0c\u5c06 AR \u865a\u62df\u4f53\u548c\u56fe\u50cf\u8054\u7cfb\u5728\u4e00\u8d77\uff0c\u5f53\u56fe\u7247\u79fb\u52a8\u65f6\uff0c\u865a\u62df\u4f53\u4e5f\u4f1a\u968f\u4e4b\u79fb\u52a8\u3002"),(0,l.kt)("coverimg",{url:r(51854),height:"25rem",padding:"0"}),(0,l.kt)("h3",{id:"max-moving-of-tracking"},"Max Moving Of Tracking"),(0,l.kt)("p",null,"\u5728 AR \u4f53\u9a8c\u4e2d\u53ef\u4ee5\u8ffd\u8e2a\u7684\u6700\u5927\u56fe\u7247\u6570\u91cf\u3002"),(0,l.kt)("h3",{id:"immersal"},"Immersal"),(0,l.kt)("p",null,"Immersal \u662f\u4e00\u5bb6\u4e13\u6ce8\u4e8e AR \u4e91\u7684\u6280\u672f\u516c\u53f8\uff1b\u5b83\u4f7f\u7528 Immersal SDK \u5efa\u7acb\u5398\u7c73\u7ea7\u3001\u8010\u7528\u7684\u591a\u7528\u6237 AR \u5e94\u7528\uff0c\u53ef\u4ee5\u5728\u652f\u6301 AR \u7684\u79fb\u52a8\u8bbe\u5907\u548c\u773c\u955c\u4e0a\u4f7f\u7528\u3002"),(0,l.kt)("coverimg",{url:r(22916),height:"25rem",padding:"0"}),(0,l.kt)("h4",{id:"immersal-\u7279\u70b9\u4ecb\u7ecd"},"Immersal \u7279\u70b9\u4ecb\u7ecd:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5feb\u901f\u89c6\u89c9\u5b9a\u4f4d\uff0c\u7cfb\u7edf\u5f00\u9500\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u53ef\u5728\u8bbe\u5907\u4e0a\u79bb\u7ebf\u8fd0\u884c\u6216\u5728\u4e91\u7aef\u5728\u7ebf\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"iOS\u3001Android \u548c\u4e0e\u534e\u4e3a AR \u5f15\u64ce\u517c\u5bb9\u7684\u8bbe\u5907\u4e0a\u7684\u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"Immersal \u4e91\u670d\u52a1\u7684 REST API \u9002\u7528\u4e8e\u4efb\u4f55\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u5728 App Store \u4e0a\u6709\u9884\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u7528\u4e8e\u7ed8\u5236\u771f\u5b9e\u4e16\u754c\u7684\u4f4d\u7f6e\u56fe"),(0,l.kt)("li",{parentName:"ul"},"\u751a\u81f3\u53ef\u4ee5\u7ed8\u5236\u5ba4\u5185\u548c\u5ba4\u5916\u5927\u578b\u57ce\u5e02\u533a\u57df\u7684\u5730\u56fe"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u5e38\u5c0f\u7684\u5730\u56fe\u6587\u4ef6\u683c\u5f0f\uff0c\u6781\u5176\u4f18\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709\u5171\u4eab\u9009\u9879\u7684\u79c1\u4eba/\u516c\u5171\u5730\u56fe"),(0,l.kt)("li",{parentName:"ul"},"\u5168\u7403\u5730\u56fe\u534f\u8c03\u652f\u6301 WGS84 \u548c ECEF"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 GPS \u5750\u6807\u6765\u6807\u8bb0\u548c\u641c\u7d22\u5730\u56fe"),(0,l.kt)("li",{parentName:"ul"},"\u70b9\u4e91\u7684\u7eb9\u7406\u7f51\u683c\u548c\u53ef\u7528\u7684\u6d4b\u7ed8\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u540c\u4e00\u7a7a\u95f4\u5185\u540c\u65f6\u652f\u6301\u591a\u5f20\u5730\u56fe"),(0,l.kt)("li",{parentName:"ul"},"\u6613\u4e8e\u4f7f\u7528\u7684 Unity \u8303\u4f8b\uff0c\u5e26\u6709\u5ba4\u5185\u5bfc\u822a\u7b49\u6a21\u677f"),(0,l.kt)("li",{parentName:"ul"},"\u8be6\u7ec6\u7684\u6587\u6863\u5e2e\u52a9\u5f00\u53d1\u8005\u5f00\u59cb\u5de5\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 3D \u5730\u56fe\u67e5\u770b\u5668\u6765\u5f00\u53d1\u95e8\u6237"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u4ee4\u724c"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Immersal Dashboard \u83b7\u5f97\u7684\u5f00\u53d1\u8005\u4ee4\u724c\u3002\u7528\u4e8e\u8fde\u63a5\u5230 Immersal \u670d\u52a1\u5668\u8fdb\u884c\u8ba4\u8bc1\u3002")),(0,l.kt)("h3",{id:"face-mesh"},"Face Mesh"),(0,l.kt)("p",null,"Face Mesh\u662f\u4e00\u4e2a\u8138\u90e8\u51e0\u4f55\u89e3\u51b3\u65b9\u6848\uff1b\u5b83\u5c06\u5b9e\u65f6\u6784\u5efa\u4e00\u4e2a\u8138\u90e8\u7f51\u683c\uff0c\u5e76\u4e3a\u8138\u90e8\u751f\u6210\u4e00\u4e2a\u4e13\u5c5e\u7684\u8138\u90e8\u6a21\u578b\u3002"))}p.isMDXComponent=!0},93546:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r.p+"assets/images/focus-slam-fd5155b3f75d7cc2fa736181702b0df3.png"},51854:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r.p+"assets/images/image-tracking-9f747be241f61d5552714ebeaff7dc74.jpeg"},22916:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r.p+"assets/images/immersalsdk-f892276d6b38a4211e831459a6a96b4c.jpg"},16034:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r.p+"assets/images/plane-detection-1f3dd40a7db147b1b0fa2cd655d310da.png"}}]);