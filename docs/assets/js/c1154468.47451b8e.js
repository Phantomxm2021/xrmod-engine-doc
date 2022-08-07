"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2659],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(i),d=r,h=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},41037:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(87462),r=(i(67294),i(3905));const a={sidebar_position:3,description:"Using Visual scripting in Unity With XRMOD."},o="Initialize Visual Scripting",s={unversionedId:"prepare-for-developer/initialize-visual-scripting",id:"prepare-for-developer/initialize-visual-scripting",title:"Initialize Visual Scripting",description:"Using Visual scripting in Unity With XRMOD.",source:"@site/docs/experience-manual/prepare-for-developer/initialize-visual-scripting.mdx",sourceDirName:"prepare-for-developer",slug:"/prepare-for-developer/initialize-visual-scripting",permalink:"/experience-manual/prepare-for-developer/initialize-visual-scripting",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/prepare-for-developer/initialize-visual-scripting.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Using Visual scripting in Unity With XRMOD."},sidebar:"tutorialSidebar",previous:{title:"Install Dev-tools",permalink:"/experience-manual/prepare-for-developer/install-xrmod-dev-tools"},next:{title:"Package Tools Editor",permalink:"/experience-manual/dev-tools/package-tools"}},l={},p=[{value:"About Visual Scripting",id:"about-visual-scripting",level:2},{value:"Why use visual programming?",id:"why-use-visual-programming",level:2},{value:"What is the Unity Scripting API?",id:"what-is-the-unity-scripting-api",level:2},{value:"Interested in programming?",id:"interested-in-programming",level:2},{value:"Install",id:"install",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"initialize-visual-scripting"},"Initialize Visual Scripting"),(0,r.kt)("h2",{id:"about-visual-scripting"},"About Visual Scripting"),(0,r.kt)("p",null,"Unity's visual scripting allows you to create logic for your Unity project without writing actual code. Traditional scripting in Unity is done using the C# programming language, while Visual Scripting is a visual \"language\" that allows you to draw a graph of instructions. For example, these two scripts do the same thing - they're just written in two different languages."),(0,r.kt)("h2",{id:"why-use-visual-programming"},"Why use visual programming?"),(0,r.kt)("p",null,"Visual Scripting brings the power of Unity scripting to non-coders and future coders. For the visually oriented, it makes it easier to learn and understand scripting concepts and even watch your script run in real time. It enables non-coders to extend or modify C# scripts and gives coders a way to collaborate better with artists and designers. Coders can also use Visual Scripting to create extensions, templates, and tools for other Unity users, so that everyone can customize their Unity projects, whether they know C# or not."),(0,r.kt)("h2",{id:"what-is-the-unity-scripting-api"},"What is the Unity Scripting API?"),(0,r.kt)("p",null,"Visual Scripting also provides non-coders with access to the entire Unity scripting API - a fully defined set of classes, events, methods (behaviors) and properties (settings) that you can manipulate in Unity scripts. For example, the API includes the MonoBehaviours class, which has Start and Update methods available for each GameObject. While the API is large, you can do a lot in scripts with just a few basics. In Visual Scripting, you can find any class, event, method, and property in the API through a series of menus, making it easier to find and discover what you need. The best way to learn more about the API is to look it up (in the Unity Scripting API reference, or even in Visual Scripting) and experiment as you create your own scripts."),(0,r.kt)("h2",{id:"interested-in-programming"},"Interested in programming?"),(0,r.kt)("p",null,"If you're particularly interested in Unity programming, try the Beginner Programming Pathway (if you haven't already). You'll have a solid foundation in Unity programming - Visual Scripting can be another tool in your toolbox."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have already installed the XR-MOD dev-tools, you can skip this step.")),(0,r.kt)("p",null,"Reading the ",(0,r.kt)("a",{parentName:"p",href:"install-xrmod-dev-tools"},"how to install the dev-tools article")," to install the XR-MOD Vislau Scripting wrapper."),(0,r.kt)("coverimg",{url:i(53405),height:"100%",padding:"0.5rem"}),(0,r.kt)("h1",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Go to Menu bar and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"VisualScripting"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Init XR-MOD"),". The initialization process will take place automatically."),(0,r.kt)("coverimg",{url:i(20575),height:"100%",padding:"0.5rem"}),(0,r.kt)("p",null,"Well done. Here you have finished the visual scripting setup and initialization, Now you can enjoy creating to your heart's content."),(0,r.kt)("h1",{id:"testing"},"Testing"),(0,r.kt)("p",null,"In Unity Editor Project Panel Right-Click to create a new file of Bolt graph by Create > Bolt > Flow Graph. Selete the Graph and Double Click or click the Edit Graph in Inspector ,  you will see the graph window is appears."),(0,r.kt)("coverimg",{url:i(73087),height:"100%",padding:"0.5rem"}),(0,r.kt)("p",null,"Now we need to add new unit to our graph. Right-Click  in the graph view you will see the pop-up menu. If you see AR-MOID in the menu, it proves that our configuration has been successful. Then you can use your imagination and creativity to build an unparalleled AR experience."),(0,r.kt)("coverimg",{url:i(49960),height:"10%",padding:"0.5rem"}))}c.isMDXComponent=!0},20575:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n=i.p+"assets/images/unity-initialize-vswrapper-1dd55aa00f70188b6db2f10f794bea45.png"},53405:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n=i.p+"assets/images/unity-visualscripting-install-6f42c2c16fecb14fbd893fc0d0d34f2b.png"},73087:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n=i.p+"assets/images/unity-vs-testing-93b84d45bb39ecb4e3522fe83bfcba2b.png"},49960:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n="data:image/png;base64,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"}}]);