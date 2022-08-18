"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[8456],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905)),r=a(61422);const i={title:"How To Load Assets",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"Using ARMODAPI to load your assets",sidebar_position:2},l=void 0,s={unversionedId:"tutorial-basics/how-to-load-assets",id:"tutorial-basics/how-to-load-assets",title:"How To Load Assets",description:"Using ARMODAPI to load your assets",source:"@site/docs/experience-manual/tutorial-basics/how-to-load-assets.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/how-to-load-assets",permalink:"/zh-Hans/experience-manual/tutorial-basics/how-to-load-assets",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/tutorial-basics/how-to-load-assets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How To Load Assets",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"Using ARMODAPI to load your assets",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How To Create XRMOD Project",permalink:"/zh-Hans/experience-manual/tutorial-basics/how-create-xrmod-project"},next:{title:"How To Interact With UI",permalink:"/zh-Hans/experience-manual/tutorial-basics/how-to-interact-with-ui"}},p={},c=[{value:"Collection Assets",id:"collection-assets",level:2},{value:"Editing Script",id:"editing-script",level:2},{value:"Programmable Block",id:"programmable-block",level:2},{value:"Build XR-Experience",id:"build-xr-experience",level:2},{value:"Testing",id:"testing",level:2},{value:"Launch Simulator",id:"launch-simulator",level:3},{value:"Summary",id:"summary",level:2}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The XRMOD engine allows creators to load custom assets via CSharp scripts or visual scripts."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"But, how should we do that?")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"You must install ",(0,o.kt)("a",{parentName:"p",href:"../prepare-for-developer/install-unityengine"},"Unity Engine")," and ",(0,o.kt)("a",{parentName:"p",href:"../prepare-for-developer/install-dev-environment"},"Dev-environment"),".")),(0,o.kt)("p",null,"At the first, we need to create a XRMOD project(",(0,o.kt)("a",{parentName:"p",href:"../tutorial-basics/how-create-xrmod-project"},"How to create"),")."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"How to find XRMOD project after created?",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"../dev-tools/package-tools#project-editing"},"click here")," to know more")),(0,o.kt)("h2",{id:"collection-assets"},"Collection Assets"),(0,o.kt)("p",null,"Creative can import their own art assets or use Unity builtin assets(",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/PrimitiveObjects.html"},"Primitive Objects"),")."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ImportingAssets.html"},"click here")," to know about Unity how to import assets.")),(0,o.kt)("p",null,"Follows Steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import your art assets into ",(0,o.kt)("inlineCode",{parentName:"li"},"Your Project/Artwork")," folder"),(0,o.kt)("li",{parentName:"ol"},"Create a new folder and name it to ",(0,o.kt)("inlineCode",{parentName:"li"},"Prefabs"),". This folder will be used to store the project's prefabs"),(0,o.kt)("li",{parentName:"ol"},"Drag-and-drop art asset into ",(0,o.kt)("strong",{parentName:"li"},"Unity Scene")," or ",(0,o.kt)("strong",{parentName:"li"},"Hierarchy")),(0,o.kt)("li",{parentName:"ol"},"Processing your art assets, e.g. Rendering of models, mapping, scale, etc"),(0,o.kt)("li",{parentName:"ol"},"Drag-and-drop your art asset from ",(0,o.kt)("strong",{parentName:"li"},"Unity Scene")," or ",(0,o.kt)("strong",{parentName:"li"},"Hierarch")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Your Project/Artwork/Prefabs")," folder, it will become a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Manual/Prefabs.html"},"prefab")),(0,o.kt)("li",{parentName:"ol"},"Drag-and-drop your prefab of art work to ",(0,o.kt)("strong",{parentName:"li"},"PackageToolsEditor"),"->",(0,o.kt)("strong",{parentName:"li"},"Contents"))),(0,o.kt)(r.Z,{src:"/static/tutorial-basics/how-to-load-assets/MakePrefab.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"editing-script"},"Editing Script"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_PATH"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"Scripts"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," and open ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECTNAMEMainEntry.cs")," file(By double-clicking)."),(0,o.kt)("p",null,"Then write some code on ",(0,o.kt)("inlineCode",{parentName:"p"},"OnLoad")," meethod."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"ARMODAPI.LoadAssetAsync<GameObject",">",'("VirtualObject");')," The object name(",(0,o.kt)("inlineCode",{parentName:"p"},"VirtualObject"),") must be the same as in ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageToolsEditor"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"Contents")," assets name.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="HowToCreateProjectMainEntry.cs"',title:'"HowToCreateProjectMainEntry.cs"'},'using System;\nusing UnityEngine;\nusing System.Collections;\nusing com.Phantoms.ARMODAPI.Runtime;\nusing com.Phantoms.ActionNotification.Runtime;\n// highlight-next-line\nusing Object = UnityEngine.Object;\n\n\nnamespace HowToCreateProject.Runtime\n{\n    public class HowToCreateProjectMainEntry\n    {\n        //ARMOD API\n        internal static API ARMODAPI = new API(nameof(HowToCreateProject));\n\n        // highlight-next-line\n        public async void OnLoad()\n        {\n            // highlight-start\n            var tmp_ARVirtualObjectPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("VirtualObject");\n            Object.Instantiate(tmp_ARVirtualObjectPrefab);\n            // highlight-end\n        }\n    }\n}\n')),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"../../open-api-pure-csharp/utility-api/LoadAssetAsync"},(0,o.kt)("inlineCode",{parentName:"a"},"LoadAssetAsync"))," to load our virtual objects from the XR-Experience package by asset name and type. Because the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadAssetAsync")," method loads the asset from disk to memory, it does not instantiate the asset, so we need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate")," method to instantiate it."),(0,o.kt)("h2",{id:"programmable-block"},"Programmable Block"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"PackageToolsEditor")),(0,o.kt)("li",{parentName:"ol"},"Switch to ",(0,o.kt)("strong",{parentName:"li"},"Properties")," section"),(0,o.kt)("li",{parentName:"ol"},"Move your mouse point to free area"),(0,o.kt)("li",{parentName:"ol"},"Right click your mouse button"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Programmable"))),(0,o.kt)(r.Z,{src:"/static/tutorial-basics/how-to-load-assets/AddProgrammableBlock.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"build-xr-experience"},"Build XR-Experience"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"PackageToolsEditor")),(0,o.kt)("li",{parentName:"ol"},"Switch to ",(0,o.kt)("strong",{parentName:"li"},"Build")," section"),(0,o.kt)("li",{parentName:"ol"},"Select the platform you need to build."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Build AR-Experience")," button to start the build")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Build Platform")," and ",(0,o.kt)("strong",{parentName:"p"},"Platform Group")," The two selected platforms must be the same.")),(0,o.kt)(r.Z,{src:"/static/tutorial-basics/how-to-load-assets/BuildXRExperience.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Now we have done all the work, but we don't know if the content loads properly yet, so we need to test further to verify our results."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to testing"),"?"),(0,o.kt)("p",null,"XRMOD Engine currently provides processes such as loading tests within the Unity Editor, so we can verify all logic from within the Unity Editor. Before we can start testing we need to install the XRMOD Engine Simulator plugin via the Unity Package Manager."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"../prepare-for-developer/install-xrmod-dev-tools"},"Click here")," to learn how to install the XRMOD engine toolchain.")),(0,o.kt)("p",null,"In here, we need to install XRMOD Engine Simulator plugin."),(0,o.kt)("center",null,(0,o.kt)("coverimg",{url:a(97246),padding:"0.5rem",label:"Install XRMOD Simulator Plugin"})),(0,o.kt)("p",null,"When you finish the installation you can see an XR button in the top left corner of the Unity editor, which is mainly used to start the XRMOD Engine emulator."),(0,o.kt)("center",null,(0,o.kt)("coverimg",{url:a(9649),padding:"0.5rem",label:"Simulator"})),(0,o.kt)("h3",{id:"launch-simulator"},"Launch Simulator"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click left-top ",(0,o.kt)("strong",{parentName:"li"},"XR Play")," button to launch XRMOD Engine simulator"),(0,o.kt)("li",{parentName:"ol"},"Switch to ",(0,o.kt)("strong",{parentName:"li"},"Game")," view"),(0,o.kt)("li",{parentName:"ol"},"Typing your project name into simulator"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Fetch Project")," to loading our project")),(0,o.kt)(r.Z,{src:"/static/tutorial-basics/how-to-load-assets/Test.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this section we learned how to load an assets in XRMOD Engine. During the loading process we need to pay attention to the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Loading asset via ",(0,o.kt)("inlineCode",{parentName:"li"},"ARMODAPI.LoadAssetAsync")," methods"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ARMODAPI.LoadAssetAsync")," needs to pass in the type to be loaded and the name of the item to be loaded"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ARMODAPI.LoadAssetAsync")," is an asynchronous method that needs to be marked as async in the function and add ",(0,o.kt)("inlineCode",{parentName:"li"},"await")," before the ",(0,o.kt)("inlineCode",{parentName:"li"},"ARMODAPI.LoadAssetAsync")," method"),(0,o.kt)("li",{parentName:"ol"},"The name of the object loaded in the API must be the same as the name of the assets in ",(0,o.kt)("inlineCode",{parentName:"li"},"PackageToolsEditor"),"->",(0,o.kt)("inlineCode",{parentName:"li"},"Contents"))))}d.isMDXComponent=!0},61422:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),o=a(67294),r=a(86010);function i(e){let{src:t,mobile:a,className:i,...l}=e;return o.createElement("video",(0,n.Z)({className:(0,r.Z)(i,a&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},l,{"webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}))}},9649:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/SimualtorBtn-1a217be36641ef11ae38227d89635ad8.png"},97246:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/SimulatorPlugin-d065de041c48104148ea6f19ae4fa4f1.png"}}]);