"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[4810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),s=r,k=m["".concat(c,".").concat(s)]||m[s]||p[s]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(61422);const i={sidebar_position:5,title:"Features"},o=void 0,c={unversionedId:"arblock/features",id:"arblock/features",title:"Features",description:"Coaching Overlay",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-experience-manual/current/arblock/features.mdx",sourceDirName:"arblock",slug:"/arblock/features",permalink:"/zh-Hans/experience-manual/arblock/features",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/experience-manual/arblock/features.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Features"},sidebar:"tutorialSidebar",previous:{title:"Visualizer Block",permalink:"/zh-Hans/experience-manual/arblock/visualizer-block"},next:{title:"Graphics",permalink:"/zh-Hans/experience-manual/arblock/graphics"}},d={},u=[{value:"Coaching Overlay",id:"coaching-overlay",level:2},{value:"Environment Probe",id:"environment-probe",level:2},{value:"Light Estimation",id:"light-estimation",level:2},{value:"Post Processing",id:"post-processing",level:2},{value:"AR Interaction",id:"ar-interaction",level:2},{value:"Immersal Setting",id:"immersal-setting",level:2},{value:"Use Server Localizer",id:"use-server-localizer",level:3},{value:"Turn Off Server Localized",id:"turn-off-server-localized",level:3},{value:"Localization Interval",id:"localization-interval",level:3},{value:"Render Mode",id:"render-mode",level:3},{value:"Face Mesh",id:"face-mesh",level:2},{value:"Maximum Face Count",id:"maximum-face-count",level:3},{value:"Occlusion",id:"occlusion",level:2},{value:"Enable AR Occlusion",id:"enable-ar-occlusion",level:3},{value:"Environment Depth Mode",id:"environment-depth-mode",level:3},{value:"Human Segmentation Depth Mode",id:"human-segmentation-depth-mode",level:3},{value:"Human Segmentation Stencil Mode",id:"human-segmentation-stencil-mode",level:3},{value:"Occlusion Preference Mode",id:"occlusion-preference-mode",level:3},{value:"ARWorld Scale Block",id:"arworld-scale-block",level:2},{value:"Multiplayer Block",id:"multiplayer-block",level:2}],p={toc:u};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"coaching-overlay"},"Coaching Overlay"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/arkit/arcoachingoverlayview"},"\u6b64\u89c6\u56fe"),"\u4e3a\u4f60\u7684\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u6807\u51c6\u5316\u7684\u5b89\u88c5\u7a0b\u5e8f\u3002\u4f60\u53ef\u4ee5\u5c06\u6b64\u89c6\u56fe\u914d\u7f6e\u4e3a\u5728\u4f1a\u8bdd\u521d\u59cb\u5316\u548c\u6709\u9650\u8ddf\u8e2a\u671f\u95f4\u81ea\u52a8\u663e\u793a\uff0c\u540c\u65f6\u7ed9\u7528\u6237\u63d0\u4f9b\u5177\u4f53\u7684\u6307\u793a\uff0c\u4ee5\u6700\u597d\u5730\u4fc3\u8fdb ARKit \u7684\u4e16\u754c\u8ddf\u8e2a\u3002"),(0,r.kt)("coverimg",{url:a(50009),height:"25rem",padding:"0"}),(0,r.kt)("h2",{id:"environment-probe"},"Environment Probe"),(0,r.kt)("p",null,"\u73af\u5883\u68c0\u6d4b\u662f\u4e00\u79cd\u6280\u672f\uff0c\u5b83\u4ece\u6444\u50cf\u673a\u4e2d\u6355\u6349\u771f\u5b9e\u4e16\u754c\u7684\u56fe\u50cf\uff0c\u5e76\u5c06\u8fd9\u4e9b\u4fe1\u606f\u7ec4\u7ec7\u6210\u73af\u5883\u7eb9\u7406\uff0c\u5982\u7acb\u65b9\u4f53\u5730\u56fe\uff0c\u5b83\u5305\u542b\u4e86\u4ece\u573a\u666f\u4e2d\u67d0\u4e00\u7279\u5b9a\u70b9\u7684\u5404\u4e2a\u65b9\u5411\u7684\u89c6\u56fe\u3002\u4f7f\u7528\u8fd9\u79cd\u73af\u5883\u7eb9\u7406\u6765\u6e32\u67d3\u4e09\u7ef4\u7269\u4f53\u53ef\u4ee5\u5728\u6e32\u67d3\u7684\u7269\u4f53\u4e2d\u53cd\u6620\u51fa\u771f\u5b9e\u4e16\u754c\u7684\u56fe\u50cf\u3002\u5176\u7ed3\u679c\u901a\u5e38\u662f\u865a\u62df\u7269\u4f53\u7684\u771f\u5b9e\u53cd\u5c04\u548c\u7167\u660e\uff0c\u53d7\u5230\u73b0\u5b9e\u4e16\u754c\u611f\u77e5\u7684\u5f71\u54cd\u3002"),(0,r.kt)("coverimg",{url:a(12213),height:"25rem",padding:"0"}),(0,r.kt)("h2",{id:"light-estimation"},"Light Estimation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/arkit/camera_lighting_and_effects/adding_realistic_reflections_to_an_ar_experience"},"\u5149\u7ebf\u4f30\u8ba1"),"\u662f\u7ed9\u5b9a\u56fe\u50cf\u7684\u79bb\u6563\u89c6\u89c9\u7ebf\u7d22\uff0c\u5e76\u63d0\u4f9b\u5173\u4e8e\u7ed9\u5b9a\u573a\u666f\u4e2d\u7684\u7167\u660e\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u6e32\u67d3\u865a\u62df\u7269\u4f53\u65f6\u4f7f\u7528\u8fd9\u4e9b\u4fe1\u606f\uff0c\u5728\u4e0e\u653e\u7f6e\u7684\u573a\u666f\u76f8\u540c\u7684\u6761\u4ef6\u4e0b\u5bf9\u5b83\u4eec\u8fdb\u884c\u7167\u660e\uff0c\u8fd9\u6837\u8fd9\u4e9b\u7269\u4f53\u5c31\u4f1a\u6709\u66f4\u771f\u5b9e\u7684\u611f\u89c9\uff0c\u589e\u5f3a\u7528\u6237\u7684\u6c89\u6d78\u5f0f\u4f53\u9a8c\u3002"),(0,r.kt)("coverimg",{url:a(4035),height:"25rem",padding:"0"}),(0,r.kt)("h2",{id:"post-processing"},"Post Processing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/integration-with-post-processing.html"},"\u540e\u671f\u5904\u7406"),"\u662f\u5728\u6444\u50cf\u673a\u7684\u56fe\u50cf\u7f13\u51b2\u533a\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\u4e4b\u524d\u5e94\u7528\u5168\u5c4f\u6ee4\u955c\u548c\u6548\u679c\u7684\u8fc7\u7a0b\u3002\u5b83\u53ef\u4ee5\u7528\u5f88\u5c11\u7684\u8bbe\u7f6e\u65f6\u95f4\u5927\u5927\u6539\u5584\u4f60\u7684\u4ea7\u54c1\u7684\u89c6\u89c9\u6548\u679c\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528\u540e\u671f\u5904\u7406\u6548\u679c\u6765\u6a21\u62df\u7269\u7406\u76f8\u673a\u548c\u80f6\u7247\u7684\u7279\u6027\u3002"),(0,r.kt)("coverimg",{url:a(65219),height:"25rem",padding:"0"}),(0,r.kt)("h2",{id:"ar-interaction"},"AR Interaction"),(0,r.kt)("p",null,"AR \u4e92\u52a8\u662f\u4e00\u4e2a\u5148\u8fdb\u7684\u3001\u57fa\u4e8e\u7ec4\u4ef6\u7684\u4e92\u52a8\u7cfb\u7edf\u3002\u5b83\u8fd8\u5305\u542b\u8f85\u52a9\u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u4ef6\u6765\u6269\u5c55\u7ed8\u5236\u89c6\u89c9\u6548\u679c\u548c\u94a9\u4f4f\u4f60\u81ea\u5df1\u7684\u4e92\u52a8\u4e8b\u4ef6\u7684\u529f\u80fd\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AR \u624b\u52bf\u7cfb\u7edf\u5c06\u5c4f\u5e55\u89e6\u6478\u6620\u5c04\u4e3a\u624b\u52bf\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"AR \u624b\u52bf\u4e92\u52a8\u5668\u548c\u4e92\u52a8\u8f6c\u6362\u624b\u52bf\uff0c\u5982\u4f4d\u7f6e\u3001\u9009\u62e9\u3001\u8f6c\u6362\u3001\u65cb\u8f6c\u548c\u7f29\u653e\u5230\u5bf9\u8c61\u7684\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"AR \u6ce8\u91ca\u544a\u77e5\u7528\u6237\u653e\u7f6e\u5728\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684 AR \u5bf9\u8c61\u7684\u60c5\u51b5")),(0,r.kt)(l.Z,{src:"/static/videos/arinteraction.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("h2",{id:"immersal-setting"},"Immersal Setting"),(0,r.kt)("p",null,"\u4e3a\u6d88\u8d39\u8005\u3001\u5de5\u4e1a\u7528\u9014\u3001\u5e7f\u544a\u6d3b\u52a8\u7b49\u521b\u9020\u878d\u5408\u6570\u5b57\u548c\u7269\u7406\u73b0\u5b9e\u7684 AR \u4f53\u9a8c\u3002"),(0,r.kt)("coverimg",{url:a(22916),height:"25rem",padding:"0"}),(0,r.kt)("h3",{id:"use-server-localizer"},"Use Server Localizer"),(0,r.kt)("p",null,"\u901a\u8fc7\u5b58\u50a8\u5728\u4e91\u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e\u5b9a\u4f4d\u5f53\u524d\u7528\u6237\u6240\u5904\u7684\u73af\u5883\uff0c\u52a0\u8f7d\u5f53\u524d\u73af\u5883\u7684\u7f51\u683c\u56fe\u3002"),(0,r.kt)("h3",{id:"turn-off-server-localized"},"Turn Off Server Localized"),(0,r.kt)("p",null,"\u5f53\u5730\u56fe\u901a\u8fc7\u4e91\u7aef\u5b9a\u4f4d\u65f6\uff0c\u505c\u6b62\u4f7f\u7528\u4e91\u7aef\u5b9a\u4f4d\uff0c\u4ee5\u9632\u6b62\u8fc7\u591a\u7684 API \u8c03\u7528\u589e\u52a0\u6210\u672c\u3002"),(0,r.kt)("h3",{id:"localization-interval"},"Localization Interval"),(0,r.kt)("p",null,"\u4e91\u5b9a\u4f4d/\u8bbe\u5907\u5b9a\u4f4d\u7684\u95f4\u9694\u9891\u7387"),(0,r.kt)("h3",{id:"render-mode"},"Render Mode"),(0,r.kt)("p",null,"\u6e32\u67d3\u70b9\u4e91\u6570\u636e\u7684\u6a21\u5f0f\u3002"),(0,r.kt)("h2",{id:"face-mesh"},"Face Mesh"),(0,r.kt)("p",null,"\u8138\u90e8\u7f51\u683c\u662f\u4e00\u4e2a\u8138\u90e8\u7684 3D \u6a21\u578b\u3002\u5b83\u4e0e XRMOD \u5f15\u64ce\u4e2d\u7684\u8138\u90e8\u8ffd\u8e2a\u5668\u7ed3\u5408\u4f7f\u7528\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u91cd\u5efa\u67d0\u4eba\u8868\u60c5\u7684\u8868\u9762\u3002"),(0,r.kt)("coverimg",{url:a(99948),height:"25rem",padding:"0"}),(0,r.kt)("h3",{id:"maximum-face-count"},"Maximum Face Count"),(0,r.kt)("p",null,"\u53ef\u8ffd\u8e2a\u7684\u6700\u5927\u4eba\u8138\u6570"),(0,r.kt)("h2",{id:"occlusion"},"Occlusion"),(0,r.kt)("p",null,"\u906e\u6321\u3002\u5141\u8bb8\u865a\u62df\u5185\u5bb9\u88ab\u68c0\u6d4b\u5230\u7684\u73af\u5883\u6df1\u5ea6\uff08\u73af\u5883\u906e\u6321\uff09\u6216\u68c0\u6d4b\u5230\u7684\u4eba\u4f53\u6df1\u5ea6\uff08\u4eba\u4f53\u906e\u6321\uff09\u6240\u906e\u6321\u3002\u4e00\u4e9b\u8bbe\u5907\u63d0\u4f9b\u5173\u4e8e\u771f\u5b9e\u4e16\u754c\u7684\u6df1\u5165\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u6709\u4e00\u4e2a\u529f\u80fd\u53eb\u4eba\u7684\u95ed\u585e\u3002\u5e26\u6709 A12 \u4eff\u751f\u82af\u7247\u7684 iOS \u8bbe\u5907\uff08\u8f83\u65b0\uff09\u53ef\u4ee5\u5728\u589e\u5f3a\u73b0\u5b9e\u76f8\u673a\u7684\u6846\u67b6\u5185\u68c0\u6d4b\u4eba\u4f53\u7684\u6df1\u5ea6\u4fe1\u606f\u3002\u8f83\u65b0\u7684\u5b89\u5353\u624b\u673a\u548c iOS \u8bbe\u5907\u90fd\u914d\u5907\u4e86\u6fc0\u5149\u96f7\u8fbe\u626b\u63cf\u4eea\uff0c\u53ef\u4ee5\u63d0\u4f9b\u73af\u5883\u7684\u6df1\u5ea6\u56fe\u50cf\uff0c\u6bcf\u4e2a\u50cf\u7d20\u90fd\u5305\u542b\u8bbe\u5907\u548c\u7269\u7406\u73af\u5883\u4e4b\u95f4\u7684\u6df1\u5ea6\u4f30\u8ba1\u3002"),(0,r.kt)("coverimg",{url:a(81326),height:"25rem",padding:"0"}),(0,r.kt)("h3",{id:"enable-ar-occlusion"},"Enable AR Occlusion"),(0,r.kt)("p",null,"\u542f\u7528 AR Occlusion\uff0c\u5b83\u5c06\u6253\u5f00 Occlusion \u7b97\u6cd5\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u529f\u80fd\u5728\u6027\u80fd\u548c\u5185\u5b58\u65b9\u9762\u7684\u6210\u672c\u76f8\u5f53\u9ad8\uff0c\u8bf7\u614e\u91cd\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"environment-depth-mode"},"Environment Depth Mode"),(0,r.kt)("p",null,"\u73af\u5883\u5206\u5272\u6df1\u5ea6\u7b97\u6cd5\u6a21\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u73af\u5883\u6df1\u5ea6\u88ab\u7981\u7528\uff0c\u5c06\u4e0d\u4f1a\u4ea7\u751f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u73af\u5883\u6df1\u5ea6\u5df2\u542f\u7528\uff0c\u5e76\u5c06\u4ee5\u6700\u5feb\u7684\u5206\u8fa8\u7387\u751f\u6210\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Medium"),(0,r.kt)("td",{parentName:"tr",align:null},"\u73af\u5883\u6df1\u5ea6\u5df2\u542f\u7528\uff0c\u5e76\u5c06\u4ee5\u4e2d\u7b49\u5206\u8fa8\u7387\u751f\u6210\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Best"),(0,r.kt)("td",{parentName:"tr",align:null},"\u73af\u5883\u6df1\u5ea6\u5df2\u542f\u7528\uff0c\u5e76\u5c06\u4ee5\u6700\u4f73\u5206\u8fa8\u7387\u751f\u6210\u3002")))),(0,r.kt)("h3",{id:"human-segmentation-depth-mode"},"Human Segmentation Depth Mode"),(0,r.kt)("p",null,"\u4eba\u4f53\u5206\u5272\u6df1\u5ea6\u7b97\u6cd5\u6a21\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u6df1\u5ea6\u5df2\u88ab\u7981\u7528\uff0c\u4e0d\u4f1a\u751f\u6210\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u6df1\u5ea6\u5df2\u542f\u7528\uff0c\u65e0\u9700\u989d\u5916\u7684\u56fe\u50cf\u8fc7\u6ee4\u5c31\u80fd\u751f\u6210\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Best"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u6df1\u5ea6\u88ab\u542f\u7528\uff0c\u5c06\u4ea7\u751f\u989d\u5916\u7684\u56fe\u50cf\u8fc7\u6ee4\u3002")))),(0,r.kt)("h3",{id:"human-segmentation-stencil-mode"},"Human Segmentation Stencil Mode"),(0,r.kt)("p",null,"\u4eba\u4f53\u5206\u5272\u6a21\u677f\u7b97\u6cd5\u6a21\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u6a21\u677f\u88ab\u7981\u7528\uff0c\u5c06\u4e0d\u4f1a\u88ab\u751f\u6210")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fastest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u6a21\u677f\u5df2\u542f\u7528\uff0c\u5e76\u5c06\u4ee5\u6700\u5feb\u7684\u5206\u8fa8\u7387\u751f\u6210\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Medium"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u6a21\u677f\u5df2\u542f\u7528\uff0c\u5c06\u4ee5\u4e2d\u7b49\u5206\u8fa8\u7387\u751f\u6210")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Best"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u5272\u6a21\u677f\u5df2\u542f\u7528\uff0c\u5c06\u4ee5\u6700\u4f73\u5206\u8fa8\u7387\u751f\u6210")))),(0,r.kt)("h3",{id:"occlusion-preference-mode"},"Occlusion Preference Mode"),(0,r.kt)("p",null,"AR \u906e\u6321\u7b97\u6cd5\u7684\u504f\u597d\u6a21\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer Environment Occlusion"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9996\u9009\u7684\u662f\u4f7f\u7528\u73af\u5883\u6df1\u5ea6\u95ed\u585e\u7684\u65b9\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer Human Occlusion"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u4f7f\u7528\u4eba\u7c7b\u5206\u5272\u7684\u6a21\u677f\u548c\u6df1\u5ea6\u6765\u963b\u6b62")))),(0,r.kt)("h2",{id:"arworld-scale-block"},"ARWorld Scale Block"),(0,r.kt)("p",null,"AR World Scale \u6839\u636e\u5f00\u53d1\u8005\u8bbe\u5b9a\u7684\u5c3a\u5bf8\u503c\u6765\u7f29\u653e\u5f53\u524d AR \u4f53\u9a8c\u573a\u666f\u7684\u5927\u5c0f\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u89c6\u89c9\u6548\u679c\u548c\u4f53\u9a8c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AR World Scale"),(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"AR \u4f53\u9a8c\u573a\u666f\u4e16\u754c\u5728\u8fd0\u884c\u65f6\u7684\u5c3a\u5bf8\u503c\u3002Unity 1 \u4e2a\u5355\u4f4d\u7b49\u4e8e\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684 1 \u7c73\u3002\u9ed8\u8ba4\u6bd4\u4f8b\u5927\u5c0f\u4e3a 1\u3002")))),(0,r.kt)("h2",{id:"multiplayer-block"},"Multiplayer Block"),(0,r.kt)("p",null,"\u591a\u4eba\u5757\u662f\u4e00\u4e2a\u4e3a AR \u4f53\u9a8c\u5efa\u7acb\u591a\u4eba\u6e38\u620f\u80fd\u529b\u7684\u7cfb\u7edf\u3002"),(0,r.kt)("coverimg",{url:a(64333),height:"25rem",padding:"0"}))}m.isMDXComponent=!0},61422:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),r=a(67294),l=a(86010);function i(e){let{src:t,mobile:a,className:i,...o}=e;return r.createElement("video",(0,n.Z)({className:(0,l.Z)("dyte-video-showcase",i,a&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},o))}},50009:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/coachingoverlayblock-bb407aa91adc9321395ad1da054b8541.png"},12213:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/environment-probe-b747bffdf6e4a981f84dd9853e9be9fc.png"},99948:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/facemesh-22d81cb62558966b7368dd56c5ce729d.jpeg"},22916:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/immersalsdk-f892276d6b38a4211e831459a6a96b4c.jpg"},4035:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/lightestimation-e2d96d551449a562c91549c14b994550.png"},64333:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/multiplayerblock-a3a0e1e7e16cae299e0f1f4b97947420.png"},81326:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/occlusion-4b31534863bfddb09cdaac9335a70b20.jpg"},65219:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/postprocessing-e3837c1589bff76d25885637b25f9cae.jpg"}}]);