"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(87462),o=(a(67294),a(3905)),n=a(61422);const i={sidebar_position:1,title:"Package Tools Editor",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"package tools editor tutorial"},l=void 0,c={unversionedId:"dev-tools/package-tools",id:"dev-tools/package-tools",title:"Package Tools Editor",description:"package tools editor tutorial",source:"@site/docs/experience-manual/dev-tools/package-tools.md",sourceDirName:"dev-tools",slug:"/dev-tools/package-tools",permalink:"/experience-manual/dev-tools/package-tools",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/dev-tools/package-tools.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Package Tools Editor",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"package tools editor tutorial"},sidebar:"tutorialSidebar",previous:{title:"Initialize Visual Scripting",permalink:"/experience-manual/prepare-for-developer/initialize-visual-scripting"},next:{title:"MonoBehaviour binder",permalink:"/experience-manual/dev-tools/binding-monobehaviour"}},s={},p=[{value:"What is the Package Tools",id:"what-is-the-package-tools",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"How to use Package Tools",id:"how-to-use-package-tools",level:2},{value:"Create A XRMOD Project",id:"create-a-xrmod-project",level:3},{value:"Add AR Experience Features",id:"add-ar-experience-features",level:3},{value:"Collect AR Objects",id:"collect-ar-objects",level:3},{value:"Build AR Experience",id:"build-ar-experience",level:3},{value:"Summary",id:"summary",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-package-tools"},"What is the Package Tools"),(0,o.kt)("p",null,"Package Tools is an indispensable content creation tool in the Ar-MOD framework. Let us easily manage resources, algorithms, compression, etc. Use them to release our content to all applications using the AR-MOD framework."),(0,o.kt)("h2",{id:"user-interface"},"User Interface"),(0,o.kt)("coverimg",{url:a(73973),height:"100%",padding:"0.5rem"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Color"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,o.kt)("td",{parentName:"tr",align:null},"Project list, used to present local projects")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Light purple"),(0,o.kt)("td",{parentName:"tr",align:null},"Configuration options menu, Property: AR features, used to configure various AR algorithm features, etc.; Contents: used to manage the resources in the AR experience package; Build: build an AR creative experience interactive package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Light Red"),(0,o.kt)("td",{parentName:"tr",align:null},"Configuration workspace, used to configure the current AR experience, content, packaging, etc.")))),(0,o.kt)("h2",{id:"how-to-use-package-tools"},"How to use Package Tools"),(0,o.kt)("h3",{id:"create-a-xrmod-project"},"Create A XRMOD Project"),(0,o.kt)("p",null,"At first, open the packageTools tool interface by ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools"),"-> ",(0,o.kt)("inlineCode",{parentName:"p"},"AR-MOD"),"-> ",(0,o.kt)("inlineCode",{parentName:"p"},"Package Tools Editor")),(0,o.kt)("coverimg",{url:a(71006),height:"100%",padding:"0.5rem"}),(0,o.kt)("p",null,"Move mouse to left side's project area and right click, Select ",(0,o.kt)("inlineCode",{parentName:"p"},"New Project")," in the project workspace. to popup a project waizard and select a template to create a new project."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Project name is not allowed to use numbers or symbol, must start with A-Z/a-z characters."),(0,o.kt)("li",{parentName:"ol"},"The project save path must be in the Unity/Assets folder"))),(0,o.kt)("coverimg",{url:a(81981),height:"100%",padding:"0.5rem"}),(0,o.kt)("coverimg",{url:a(93232),height:"100%",padding:"0.5rem"}),(0,o.kt)("h3",{id:"add-ar-experience-features"},"Add AR Experience Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the AR algorithm am Algorithm (required)"),(0,o.kt)("li",{parentName:"ul"},"Set logical scripts and entry Programmable (required)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Domain Name must match the project name"),(0,o.kt)("li",{parentName:"ul"},"MAIN Entry Create Project Name + MAINENTRY"))),(0,o.kt)("li",{parentName:"ul"},"Set the required features (on-demand)")),(0,o.kt)(n.Z,{src:"/static/videos/AddFeatures.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"How to add new feature block?"),(0,o.kt)("br",{parentName:"p"}),"\n","Edit your project and switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties")," section, then ",(0,o.kt)("inlineCode",{parentName:"p"},"right-click (mouse)")," in an blank area. You will see the menu pop up.")),(0,o.kt)("h3",{id:"collect-ar-objects"},"Collect AR Objects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to Content Section"),(0,o.kt)("li",{parentName:"ul"},"Drag the AR content resource from the Unity Assets panel to Content; and use short name naming. You can right click on the resource to select Short Name")),(0,o.kt)("coverimg",{url:a(37850),height:"100%",padding:"0.5rem"}),(0,o.kt)("h3",{id:"build-ar-experience"},"Build AR Experience"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to build Section"),(0,o.kt)("li",{parentName:"ul"},"Settings need to build a platform and gorup"),(0,o.kt)("li",{parentName:"ul"},"Set compression method  (recommended LZ4)"),(0,o.kt)("li",{parentName:"ul"},"Clilck build button to start build ARExperience")),(0,o.kt)("coverimg",{url:a(86298),height:"100%",padding:"0.5rem"}),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Build Platform and Platform Group must be the same!"),(0,o.kt)("li",{parentName:"ol"},"Make sure the scene has been saved or not modified, otherwise it will not be packaged successfully."))),(0,o.kt)("p",null,"So far, the AR creative interactive experience resource package has been built, and it can be deployed to the ",(0,o.kt)("a",{parentName:"p",href:"/experience-manual/dev-tools/dashboard"},"Dashboard"),"  later."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The AR creative experience content package will be output to your project root directory ServerData/package platform (such as: iOS)/project name under"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Your Project Name.arexperience"),(0,o.kt)("li",{parentName:"ul"},"Your Project Name.json\nThese  files will be upload to our dashboard later."))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Use the Package Tools Editor to quickly create an XR-MOD experience project, and quickly set up and build for our XR experience. In addition, you can build your own templates and share them with creators all over the world."))}u.isMDXComponent=!0},61422:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(87462),o=a(67294),n=a(86010);function i(e){let{src:t,mobile:a,className:i,...l}=e;return o.createElement("video",(0,r.Z)({className:(0,n.Z)(i,a&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},l,{"webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}))}},71006:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-editor-bd4b56dbd4fe7ddc8caec4bc594ad703.png"},86298:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-tool-build-project-37d763821a4642d76b96f17e32aa87f3.png"},81981:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-tool-create-project-fad9160aeca3a694bb6943f1d9696df9.png"},37850:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-tools-collect-objects-eee478a4d9d5e6563359c71a6cd8fd27.png"},93232:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-tools-select-template-a59f4a2beea5e8bd745e8735e15db5dd.png"},73973:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/user-interface-ee9cfc0e8de4e60bad26865d17a209d5.png"}}]);