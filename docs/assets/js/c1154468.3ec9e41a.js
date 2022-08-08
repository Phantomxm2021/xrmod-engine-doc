"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2659],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(i),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return i?n.createElement(g,o(o({ref:t},c),{},{components:i})):n.createElement(g,o({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},41037:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(87462),r=(i(67294),i(3905)),a=i(61422);const o={sidebar_position:3,keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"using visual scripting in unity to develop xrmod experience case"},s="Initialize Visual Scripting",l={unversionedId:"prepare-for-developer/initialize-visual-scripting",id:"prepare-for-developer/initialize-visual-scripting",title:"Initialize Visual Scripting",description:"using visual scripting in unity to develop xrmod experience case",source:"@site/docs/experience-manual/prepare-for-developer/initialize-visual-scripting.mdx",sourceDirName:"prepare-for-developer",slug:"/prepare-for-developer/initialize-visual-scripting",permalink:"/experience-manual/prepare-for-developer/initialize-visual-scripting",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/prepare-for-developer/initialize-visual-scripting.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"using visual scripting in unity to develop xrmod experience case"},sidebar:"tutorialSidebar",previous:{title:"Install Dev-tools",permalink:"/experience-manual/prepare-for-developer/install-xrmod-dev-tools"},next:{title:"Package Tools Editor",permalink:"/experience-manual/dev-tools/package-tools"}},p={},c=[{value:"About Visual Scripting",id:"about-visual-scripting",level:2},{value:"Why use visual programming?",id:"why-use-visual-programming",level:2},{value:"What is the Unity Scripting API?",id:"what-is-the-unity-scripting-api",level:2},{value:"Interested in programming?",id:"interested-in-programming",level:2},{value:"Install",id:"install",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"initialize-visual-scripting"},"Initialize Visual Scripting"),(0,r.kt)("h2",{id:"about-visual-scripting"},"About Visual Scripting"),(0,r.kt)("p",null,"Unity's visual scripting allows you to create logic for your Unity project without writing actual code. Traditional scripting in Unity is done using the C# programming language, while Visual Scripting is a visual \"language\" that allows you to draw a graph of instructions. For example, these two scripts do the same thing - they're just written in two different languages."),(0,r.kt)("h2",{id:"why-use-visual-programming"},"Why use visual programming?"),(0,r.kt)("p",null,"Visual Scripting brings the power of Unity scripting to non-coders and future coders. For the visually oriented, it makes it easier to learn and understand scripting concepts and even watch your script run in real time. It enables non-coders to extend or modify C# scripts and gives coders a way to collaborate better with artists and designers. Coders can also use Visual Scripting to create extensions, templates, and tools for other Unity users, so that everyone can customize their Unity projects, whether they know C# or not."),(0,r.kt)("h2",{id:"what-is-the-unity-scripting-api"},"What is the Unity Scripting API?"),(0,r.kt)("p",null,"Visual Scripting also provides non-coders with access to the entire Unity scripting API - a fully defined set of classes, events, methods (behaviors) and properties (settings) that you can manipulate in Unity scripts. For example, the API includes the MonoBehaviours class, which has Start and Update methods available for each GameObject. While the API is large, you can do a lot in scripts with just a few basics. In Visual Scripting, you can find any class, event, method, and property in the API through a series of menus, making it easier to find and discover what you need. The best way to learn more about the API is to look it up (in the Unity Scripting API reference, or even in Visual Scripting) and experiment as you create your own scripts."),(0,r.kt)("h2",{id:"interested-in-programming"},"Interested in programming?"),(0,r.kt)("p",null,"If you're particularly interested in Unity programming, try the Beginner Programming Pathway (if you haven't already). You'll have a solid foundation in Unity programming - Visual Scripting can be another tool in your toolbox."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have already installed the XR-MOD dev-tools, you can skip this step.")),(0,r.kt)("p",null,"Reading the ",(0,r.kt)("a",{parentName:"p",href:"install-xrmod-dev-tools"},"how to install the dev-tools article")," to install the XR-MOD Vislau Scripting wrapper."),(0,r.kt)("coverimg",{url:i(53405),height:"100%",padding:"0.5rem"}),(0,r.kt)("h1",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Go to Menu bar and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"VisualScripting"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Init XR-MOD"),". The initialization process will take place automatically."),(0,r.kt)("coverimg",{url:i(20575),height:"100%",padding:"0.5rem"}),(0,r.kt)("p",null,"Well done. Here you have finished the visual scripting setup and initialization, Now you can enjoy creating to your heart's content."),(0,r.kt)("h1",{id:"testing"},"Testing"),(0,r.kt)("p",null,"In Unity Editor Project Panel Right-Click to create a new file of Bolt graph by ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Bolt"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"VisualScripting")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow Graph"),". Selete the Graph and Double Click or click the Edit Graph in Inspector ,  you will see the graph window is appears."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Why are there bolt folders and keywords?"),(0,r.kt)("br",{parentName:"p"}),"\n","Because Bolt was acquired by Unity and renamed Visualscripting.")),(0,r.kt)(a.Z,{src:"/static/videos/CreateVisualScripting.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("p",null,"Now we need to add new unit to our graph. Right-Click  in the graph view you will see the pop-up menu. If you see AR-MOID in the menu, it proves that our configuration has been successful. Then you can use your imagination and creativity to build an unparalleled AR experience."),(0,r.kt)("coverimg",{url:i(45337)}))}d.isMDXComponent=!0},61422:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(87462),r=i(67294),a=i(86010);function o(e){let{src:t,mobile:i,className:o,...s}=e;return r.createElement("video",(0,n.Z)({className:(0,a.Z)(o,i&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},s,{"webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}))}},20575:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n=i.p+"assets/images/unity-initialize-vswrapper-1dd55aa00f70188b6db2f10f794bea45.png"},53405:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n=i.p+"assets/images/unity-visualscripting-install-6f42c2c16fecb14fbd893fc0d0d34f2b.png"},45337:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n=i.p+"assets/images/unity-xrmod-menu-test-53731172bf2172c40612e5c50014f470.jpg"}}]);