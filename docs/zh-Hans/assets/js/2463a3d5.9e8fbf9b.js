"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return a?r.createElement(k,l(l({ref:t},s),{},{components:a})):r.createElement(k,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),o=a(61422);const l={sidebar_position:1,title:"Package Tools Editor",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"\u6253\u5305\u5de5\u5177\u7f16\u8f91\u5668\u6559\u7a0b"},i=void 0,p={unversionedId:"dev-tools/package-tools",id:"dev-tools/package-tools",title:"Package Tools Editor",description:"\u6253\u5305\u5de5\u5177\u7f16\u8f91\u5668\u6559\u7a0b",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-experience-manual/current/dev-tools/package-tools.md",sourceDirName:"dev-tools",slug:"/dev-tools/package-tools",permalink:"/zh-Hans/experience-manual/dev-tools/package-tools",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/dev-tools/package-tools.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Package Tools Editor",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"\u6253\u5305\u5de5\u5177\u7f16\u8f91\u5668\u6559\u7a0b"},sidebar:"tutorialSidebar",previous:{title:"Initialize Visual Scripting",permalink:"/zh-Hans/experience-manual/prepare-for-developer/initialize-visual-scripting"},next:{title:"MonoBehaviour binder",permalink:"/zh-Hans/experience-manual/dev-tools/binding-monobehaviour"}},d={},s=[{value:"What is the Package Tools",id:"what-is-the-package-tools",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"\u5982\u4f55\u4f7f\u7528\u8f6f\u4ef6\u5305\u5de5\u5177",id:"\u5982\u4f55\u4f7f\u7528\u8f6f\u4ef6\u5305\u5de5\u5177",level:2},{value:"\u521b\u5efa\u4e00\u4e2a XRMOD \u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a-xrmod-\u9879\u76ee",level:3},{value:"\u589e\u52a0 AR \u4f53\u9a8c\u529f\u80fd",id:"\u589e\u52a0-ar-\u4f53\u9a8c\u529f\u80fd",level:3},{value:"\u6536\u96c6 AR \u5bf9\u8c61",id:"\u6536\u96c6-ar-\u5bf9\u8c61",level:3},{value:"Build AR Experience",id:"build-ar-experience",level:3},{value:"Summary",id:"summary",level:2}],c={toc:s};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-the-package-tools"},"What is the Package Tools"),(0,n.kt)("p",null,"\u5305\u5de5\u5177\u662f AR-MOD \u6846\u67b6\u4e2d\u4e0d\u53ef\u7f3a\u5c11\u7684\u5185\u5bb9\u521b\u5efa\u5de5\u5177\u3002\u8ba9\u6211\u4eec\u8f7b\u677e\u5730\u7ba1\u7406\u8d44\u6e90\u3001\u7b97\u6cd5\u3001\u538b\u7f29\u7b49\u3002\u4f7f\u7528\u5b83\u4eec\u53ef\u4ee5\u5c06\u6211\u4eec\u7684\u5185\u5bb9\u53d1\u5e03\u5230\u6240\u6709\u4f7f\u7528 AR-MOD \u6846\u67b6\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("h2",{id:"user-interface"},"User Interface"),(0,n.kt)("coverimg",{url:a(73973),height:"100%",padding:"0.5rem"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Color"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9ec4\u8272"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u5217\u8868\uff0c\u7528\u4e8e\u5c55\u793a\u672c\u5730\u9879\u76ee"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6d45\u7d2b\u8272"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u9009\u9879\u83dc\u5355\uff0c\u5c5e\u6027\u3002AR \u529f\u80fd\uff0c\u7528\u4e8e\u914d\u7f6e\u5404\u79cd AR \u7b97\u6cd5\u529f\u80fd\u7b49\uff1b\u5185\u5bb9\uff1a\u7528\u4e8e\u7ba1\u7406 AR \u4f53\u9a8c\u5305\u4e2d\u7684\u8d44\u6e90\uff1b\u6784\u5efa\uff1a\u6784\u5efa\u4e00\u4e2a AR \u521b\u610f\u4f53\u9a8c\u4e92\u52a8\u5305"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6d45\u7ea2\u8272"),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5de5\u4f5c\u533a\uff0c\u7528\u4e8e\u914d\u7f6e\u5f53\u524d\u7684 AR \u4f53\u9a8c\u3001\u5185\u5bb9\u3001\u5305\u88c5\u7b49"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3002")))),(0,n.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u8f6f\u4ef6\u5305\u5de5\u5177"},"\u5982\u4f55\u4f7f\u7528\u8f6f\u4ef6\u5305\u5de5\u5177"),(0,n.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-xrmod-\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a XRMOD \u9879\u76ee"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"Tools"),"-> ",(0,n.kt)("inlineCode",{parentName:"p"},"AR-MOD"),"-> ",(0,n.kt)("inlineCode",{parentName:"p"},"Package Tools Editor"),"\u6253\u5f00\u8f6f\u4ef6\u5305\u5de5\u5177\u754c\u9762\u3002"),(0,n.kt)("coverimg",{url:a(71006),height:"100%",padding:"0.5rem"}),(0,n.kt)("p",null,"\u5c06\u9f20\u6807\u79fb\u5230\u5de6\u8fb9\u7684\u9879\u76ee\u533a\uff0c\u7136\u540e\u70b9\u51fb\u53f3\u952e\uff0c\u5728\u9879\u76ee\u5de5\u4f5c\u533a\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"New Project"),"\uff0c\u5f39\u51fa\u4e00\u4e2a\u9879\u76ee\u5411\u5bfc\uff0c\u9009\u62e9\u4e00\u4e2a\u6a21\u677f\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u9879\u76ee\u540d\u79f0\u4e0d\u5141\u8bb8\u4f7f\u7528\u6570\u5b57\u6216\u7b26\u53f7\uff0c\u5fc5\u987b\u4ee5 A-Z/a-z \u5b57\u7b26\u5f00\u59cb\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9879\u76ee\u7684\u4fdd\u5b58\u8def\u5f84\u5fc5\u987b\u5728 Unity/Assets \u6587\u4ef6\u5939\u4e2d\u3002"))),(0,n.kt)("coverimg",{url:a(81981),height:"100%",padding:"0.5rem"}),(0,n.kt)("coverimg",{url:a(93232),height:"100%",padding:"0.5rem"}),(0,n.kt)("h3",{id:"\u589e\u52a0-ar-\u4f53\u9a8c\u529f\u80fd"},"\u589e\u52a0 AR \u4f53\u9a8c\u529f\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e AR \u7b97\u6cd5 am \u7b97\u6cd5\uff08\u5fc5\u586b\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u903b\u8f91\u811a\u672c\u548c\u6761\u76ee \u53ef\u7f16\u7a0b(\u9700\u8981)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57df\u540d\u5fc5\u987b\u7b26\u5408\u9879\u76ee\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"MAIN \u6761\u76ee\u521b\u5efa\u9879\u76ee\u540d\u79f0+MAINENTRY"))),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6240\u9700\u7684\u529f\u80fd\uff08\u6309\u9700\uff09\u3002")),(0,n.kt)(o.Z,{src:"/static/videos/AddFeatures.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"How to add new feature block?"),(0,n.kt)("br",{parentName:"p"}),"\n","\u7f16\u8f91\u60a8\u7684\u9879\u76ee\u5e76\u5207\u6362\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"Properties"),"\u90e8\u5206\uff0c\u7136\u540e\u5728\u7a7a\u767d\u533a\u57df\u4e2d",(0,n.kt)("inlineCode",{parentName:"p"},"\u53f3\u952e\u5355\u51fb\uff08\u9f20\u6807\uff09"),"\u3002\u60a8\u5c06\u770b\u5230\u5f39\u51fa\u7684\u83dc\u5355\u3002")),(0,n.kt)("h3",{id:"\u6536\u96c6-ar-\u5bf9\u8c61"},"\u6536\u96c6 AR \u5bf9\u8c61"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8f6c\u5230 Content \u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u4ece Unity Assets \u9762\u677f\u62d6\u52a8 AR \u5185\u5bb9\u8d44\u6e90\u5230\u5185\u5bb9\uff1b\u5e76\u4f7f\u7528\u77ed\u540d\u79f0\u547d\u540d\u3002\u4f60\u53ef\u4ee5\u5728\u8d44\u6e90\u4e0a\u70b9\u51fb\u53f3\u952e\uff0c\u9009\u62e9\u77ed\u540d\u79f0")),(0,n.kt)("coverimg",{url:a(37850),height:"100%",padding:"0.5rem"}),(0,n.kt)("h3",{id:"build-ar-experience"},"Build AR Experience"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8f6c\u5230\u6784\u5efa\u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u9700\u8981\u5efa\u7acb\u7684\u5e73\u53f0\u548c gorup"),(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u538b\u7f29\u65b9\u6cd5\uff08\u63a8\u8350 LZ4\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u6784\u5efa\u6309\u94ae\uff0c\u5f00\u59cb\u6784\u5efa AREExperience")),(0,n.kt)("coverimg",{url:a(86298),height:"100%",padding:"0.5rem"}),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u5efa\u8bbe\u5e73\u53f0\u548c\u5e73\u53f0\u7ec4\u5fc5\u987b\u662f\u76f8\u540c\u7684!"),(0,n.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u573a\u666f\u5df2\u88ab\u4fdd\u5b58\u6216\u672a\u88ab\u4fee\u6539\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u6253\u5305\u6210\u529f\u3002"))),(0,n.kt)("p",null,"\u81f3\u6b64\uff0cAR \u521b\u610f\u4e92\u52a8\u4f53\u9a8c\u8d44\u6e90\u5305\u5df2\u7ecf\u5efa\u6210\uff0c\u4ee5\u540e\u53ef\u4ee5\u90e8\u7f72\u5230",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/experience-manual/dev-tools/dashboard"},"Dashboard"),"\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"AR \u521b\u610f\u4f53\u9a8c\u5185\u5bb9\u5305\u5c06\u88ab\u8f93\u51fa\u5230\u4f60\u7684\u9879\u76ee\u6839\u76ee\u5f55 ServerData/package \u5e73\u53f0\uff08\u5982\uff1aiOS/\u9879\u76ee\u540d\u79f0\u4e0b\uff09\u3002"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u60a8\u7684\u9879\u76ee\u540d\u79f0.arexperience"),(0,n.kt)("li",{parentName:"ul"},"\u4f60\u7684\u9879\u76ee\u540d\u79f0.json\n\u8fd9\u4e9b\u6587\u4ef6\u7a0d\u540e\u5c06\u88ab\u4e0a\u4f20\u5230\u6211\u4eec\u7684\u4eea\u8868\u677f\u3002"))),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"\u4f7f\u7528\u8f6f\u4ef6\u5305\u5de5\u5177\u7f16\u8f91\u5668\uff0c\u5feb\u901f\u521b\u5efa XR-MOD \u4f53\u9a8c\u9879\u76ee\uff0c\u5e76\u4e3a\u6211\u4eec\u7684 XR \u4f53\u9a8c\u5feb\u901f\u8bbe\u7f6e\u548c\u6784\u5efa\u3002\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5efa\u7acb\u81ea\u5df1\u7684\u6a21\u677f\uff0c\u5e76\u4e0e\u4e16\u754c\u5404\u5730\u7684\u521b\u4f5c\u8005\u5206\u4eab\u8fd9\u4e9b\u6a21\u677f\u3002"))}m.isMDXComponent=!0},61422:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(87462),n=a(67294),o=a(86010);function l(e){let{src:t,mobile:a,className:l,...i}=e;return n.createElement("video",(0,r.Z)({className:(0,o.Z)(l,a&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},i,{"webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}))}},71006:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-editor-bd4b56dbd4fe7ddc8caec4bc594ad703.png"},86298:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-tool-build-project-37d763821a4642d76b96f17e32aa87f3.png"},81981:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-tool-create-project-fad9160aeca3a694bb6943f1d9696df9.png"},37850:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-tools-collect-objects-eee478a4d9d5e6563359c71a6cd8fd27.png"},93232:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-tools-select-template-a59f4a2beea5e8bd745e8735e15db5dd.png"},73973:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/user-interface-ee9cfc0e8de4e60bad26865d17a209d5.png"}}]);