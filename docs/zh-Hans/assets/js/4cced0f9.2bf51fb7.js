"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),i=a(61422),l=a(65488),o=a(85162);const p={title:"Create An AR World Experience",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"Cloning the Earth using AR technology",sidebar_position:9},s=void 0,d={unversionedId:"tutorial-advanced/create-an-ar-world-experience",id:"tutorial-advanced/create-an-ar-world-experience",title:"Create An AR World Experience",description:"Cloning the Earth using AR technology",source:"@site/docs/experience-manual/tutorial-advanced/create-an-ar-world-experience.md",sourceDirName:"tutorial-advanced",slug:"/tutorial-advanced/create-an-ar-world-experience",permalink:"/zh-Hans/experience-manual/tutorial-advanced/create-an-ar-world-experience",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/tutorial-advanced/create-an-ar-world-experience.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Create An AR World Experience",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"Cloning the Earth using AR technology",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Create First ARExperience",permalink:"/zh-Hans/experience-manual/tutorial-advanced/create-first-arexperience"},next:{title:"Offical Examples",permalink:"/zh-Hans/experience-manual/examples/offical-examples"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"What is the AR World?",id:"what-is-the-ar-world",level:3},{value:"Prepare",id:"prepare",level:2},{value:"Tools",id:"tools",level:3},{value:"Mapping Physical World",id:"mapping-physical-world",level:3},{value:"Create An XRMOD Project",id:"create-an-xrmod-project",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"Start Creating",id:"start-creating",level:3},{value:"Import Assets",id:"import-assets",level:3},{value:"Create ARMap Visualizer",id:"create-armap-visualizer",level:3},{value:"Align Virtual Object",id:"align-virtual-object",level:3},{value:"Localizer Event",id:"localizer-event",level:3},{value:"Configuration experience",id:"configuration-experience",level:2},{value:"Collection Objects",id:"collection-objects",level:2},{value:"Loading Asset At Runtime",id:"loading-asset-at-runtime",level:2},{value:"Build",id:"build",level:2},{value:"Deploy",id:"deploy",level:2}],m={toc:u};function k(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In the last article we have created the first XR-mod experience, in this section we will create an AR world experience from ",(0,r.kt)("strong",{parentName:"p"},"zero to one"),"."),(0,r.kt)("h3",{id:"what-is-the-ar-world"},"What is the AR World?"),(0,r.kt)("p",null,"In short, the AR world is a virtual world, or call it the earth Clone Project. We use computer technology to clone the earth and digitize all the physical objects on the earth. Then the digital the earth is matched one-to-one with the real the earth. We can see the enhancement of the digital earth to the real the earth through XR headset."),(0,r.kt)("coverimg",{url:a(50407),label:"The AR World layers"}),(0,r.kt)("p",null,"We are in the pre-change phase, so cloning the entire the earth is difficult for us. Although we cannot clone the whole earth, we can clone a small part of it, such as buildings, shopping areas, parks, and landmarks."),(0,r.kt)("coverimg",{url:a(78163),label:"Copyright @Snapchat, AR World of landmark"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prepare"},"Prepare"),(0,r.kt)("h3",{id:"tools"},"Tools"),(0,r.kt)("p",null,"Before starting to create AR experiences, the following software and development kits must be installed:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Content Dev-Tools"),(0,r.kt)("th",null,"XRMOD tools chain")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://unity.com/"},"Unity Engine 2021.3f1")),(0,r.kt)("li",{parentName:"ul"},"Script code editor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/rider/"},"Rider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual studio code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Visual studio")))))),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"XRMOD API"),(0,r.kt)("li",{parentName:"ul"},"XRMOD IL code"),(0,r.kt)("li",{parentName:"ul"},"XRMOD Simulator"),(0,r.kt)("li",{parentName:"ul"},"XRMOD Handheld AR"),(0,r.kt)("li",{parentName:"ul"},"XRMOD Package tools"),(0,r.kt)("li",{parentName:"ul"},"XRMOD Engine Setgings"),(0,r.kt)("li",{parentName:"ul"},"XRMOD Render Assistant"),(0,r.kt)("li",{parentName:"ul"},"ARFoundation (ARKit/ARCore/ARKit FaceTracking)"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"how-do-i-get-a-development-kit"},"How do I get a development kit?"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You can read ",(0,r.kt)("a",{parentName:"li",href:"../prepare-for-developer/install-xrmod-dev-tools"},"this article")," to install it!")),(0,r.kt)("h4",{parentName:"admonition",id:"how-to-create-a-unity-project"},"How to create a Unity project?"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You can read ",(0,r.kt)("a",{parentName:"li",href:"../prepare-for-developer/install-unityengine#extras"},"this article")," to create it!"))),(0,r.kt)("h3",{id:"mapping-physical-world"},"Mapping Physical World"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you don't know how to mapping the world, you can click ",(0,r.kt)("a",{parentName:"p",href:"../tutorial-basics/how-to-mapping-the-world"},"here")," to read more.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"create-an-xrmod-project"},"Create An XRMOD Project"),(0,r.kt)("h3",{id:"introduction-1"},"Introduction"),(0,r.kt)("p",null,"Before starting to create, you need to understand the XR-MOD project directory structure. When we use PackageTools to create the structure as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"ARWorldCase\n    \u251c\u2500Artwork\n    \u251c\u2500AutomaticGenerated\n    \u251c\u2500Configures\n    \u2514\u2500Scripts\n      \u251c\u2500Editor\n      \u2514\u2500Runtime\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARWorldCase"),(0,r.kt)("td",{parentName:"tr",align:null},"Project name for the XR-MOD project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Artwork"),(0,r.kt)("td",{parentName:"tr",align:null},"Store and manage art resources, you can create subfolders for classified management")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutomaticGenerated"),(0,r.kt)("td",{parentName:"tr",align:null},"When building the package body, such as MOD dll, AR function configuration files, etc. are automatically generated and are necessary configurations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Configures"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically created when the project is created to cache the configuration of the AR function. After the project is created, it cannot be deleted, otherwise an error will be reported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scripts"),(0,r.kt)("td",{parentName:"tr",align:null},"The location where all the code of the project is stored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Editor"),(0,r.kt)("td",{parentName:"tr",align:null},"It is only used in the Unity Editor, generally stores auxiliary resource scripts such as the quick configuration panel of the project, and does not participate in runtime construction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Runtime"),(0,r.kt)("td",{parentName:"tr",align:null},"Stores the runtime code of AR projects, more scripts can be created to implement more interesting logic")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"XR-MOD will not automatically load the resources in the AR experience package, and the script needs to load it by itself")),(0,r.kt)("h3",{id:"start-creating"},"Start Creating"),(0,r.kt)("p",null,"Through the previous introduction and preparation, we have a clear understanding of XRMOD Engine, and then we will lead you to create the first XRMOD Engine project. First, we open the XRMOD Engine project builder through ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"XRMOD"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Package Tools Editor"),", as shown in the following figure."),(0,r.kt)("coverimg",{url:a(71006),label:"Open Package Tools Editor"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you don't know how to use Package Tools Editor, please ",(0,r.kt)("a",{parentName:"p",href:"../dev-tools/package-tools"},"click here")," to check.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a project by right-clicking in the ",(0,r.kt)("inlineCode",{parentName:"li"},"project area")," and selecting ",(0,r.kt)("inlineCode",{parentName:"li"},"New Project")," from the popup menu"),(0,r.kt)("li",{parentName:"ol"},"At this point, another interface will pop up, as shown in the following figure."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"BLANK")," template to create, then typing the ",(0,r.kt)("inlineCode",{parentName:"li"},"project name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"project storage location")," on the right"),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE")," button in the lower right corner to start creating the project")),(0,r.kt)("coverimg",{url:a(93232),label:"Create Blank Project"}),(0,r.kt)("h3",{id:"import-assets"},"Import Assets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Art Assets"),(0,r.kt)("br",{parentName:"li"}),"Import your own art resources and store them in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Artwork")," folder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Map Data"),(0,r.kt)("br",{parentName:"li"}),"Download the mapp data from our cloud, then import to our XRMOD project; Put it to ",(0,r.kt)("inlineCode",{parentName:"li"},"Artwork/Mapdata"),".")),(0,r.kt)("coverimg",{url:a(22716)}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you don't have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapdata")," folder in your project, you have to create one yourself.")),(0,r.kt)("h3",{id:"create-armap-visualizer"},"Create ARMap Visualizer"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If your compture is Apple Slicon version,you can't saw the ARMap Visualizer. Because our framework does not currently support Apple Slicon, we will release a supported version in the next quarter.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new scene;"),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"Hierachy")," to create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Empty GameObject")," and rename to ",(0,r.kt)("inlineCode",{parentName:"li"},"ARMap"),";"),(0,r.kt)("li",{parentName:"ol"},"Script for adding a new ",(0,r.kt)("inlineCode",{parentName:"li"},"ARMap")," component via the ",(0,r.kt)("inlineCode",{parentName:"li"},"AddComponent")," button. When the script is added, we will automatically create an ARSpace for the ARMap and set the ARMap as a child node of the ARSpace;"),(0,r.kt)("li",{parentName:"ol"},"Drag and drop our map data into the ",(0,r.kt)("inlineCode",{parentName:"li"},"MapFile")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ARMap")," script;"),(0,r.kt)("li",{parentName:"ol"},"Drag the ARSpace in the scene to the Artwork/Prefabs folder of the XRMOD Project in the Unity Project Panel to make it a Prefab.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend that creatives create a new scene to build the ARMap.")),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/CreateARMap.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("h3",{id:"align-virtual-object"},"Align Virtual Object"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If your compture is Apple Slicon version,you can't saw the ARMap Visualizer. Because our framework does not currently support Apple Slicon, we will release a supported version in the next quarter.")),(0,r.kt)("p",null,"Now we pair the virtual object with our point cloud data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Drag and drop virtual objects into the Scene"),(0,r.kt)("li",{parentName:"ol"},"Expand ARSpace to see ARMap GameObject; place the virtual object inside ARMap GameObject, which becomes ARMap sub-object."),(0,r.kt)("li",{parentName:"ol"},"Adjust the position of the virtual object to align with our point cloud for the position (you can align it as you like over here).")),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/AlignVirtualObject.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("p",null,"The virtual object is now aligned with the point cloud so that we can see the virtual object appear at the specified location once we recognize the collected space."),(0,r.kt)("p",null,"Finally save our Prefab edit results by selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"ARSpace")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Inspector")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Overrider")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply All"),"."),(0,r.kt)("h3",{id:"localizer-event"},"Localizer Event"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If your compture is Apple Slicon version,you can't saw the ARMap Visualizer. Because our framework does not currently support Apple Slicon, we will release a supported version in the next quarter.")),(0,r.kt)("p",null,"Currently as soon as the ARMap is loaded, our virtual objects are shown, which is obviously not the effect we expect. The correct effect should be to recognize the space and then show the virtual object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"And how should I do it? Do I need to write code?")),(0,r.kt)("p",null,"We don't need to write code, we just need to set the active state of the ARMap sub-object (our virtual object) to False."),(0,r.kt)("p",null,"Select ARMap and find ARMap component in ",(0,r.kt)("inlineCode",{parentName:"p"},"Inspector"),", find Event in ARMap component click ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," in the lower right corner to add a reference slot, drag and drop ",(0,r.kt)("inlineCode",{parentName:"p"},"our virtual object")," into it, then select ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),", function set to ",(0,r.kt)("inlineCode",{parentName:"p"},"GameObject/SetActive")," and set its value to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("p",null,"Then set our ",(0,r.kt)("inlineCode",{parentName:"p"},"virtual object Active")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,r.kt)("p",null,"Finally we need to save the results of our Prefab edits, which can be done by ",(0,r.kt)("strong",{parentName:"p"},"selecting ARSapce GameObject")," in the ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," and choosing ",(0,r.kt)("inlineCode",{parentName:"p"},"Overrider-> Apply All"),"."),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/LocalizerEvent.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"configuration-experience"},"Configuration experience"),(0,r.kt)("p",null,"In the previous step we have already created all the necessary resources, next start the configuration, set XR-MOD Project Properties:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Device Type")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"XR Algorithm")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Handheld AR")),(0,r.kt)("li",{parentName:"ol"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},"XR Algorithm")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Immersal")),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"Programmable")),(0,r.kt)("li",{parentName:"ol"},"Keep all default")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To learn more about attribute feature blocks, please see the following links:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../experience-manual/arblock/version-check-block"},"Version Checker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../experience-manual/arblock/features#arworld-scale-block"},"AR World Scale")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../experience-manual/arblock/features#immersal-setting"},"Immersal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../experience-manual/arblock/programmable-block"},"Programmable")))),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/SetupConfigure.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"collection-objects"},"Collection Objects"),(0,r.kt)("p",null,"All configurations have been completed. Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contents")," section, then go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Prefabs"),"folder and drag-and-drop ",(0,r.kt)("inlineCode",{parentName:"p"},"ARSpace"),"Prefab to ",(0,r.kt)("inlineCode",{parentName:"p"},"Contents"),"area."),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/DADContents.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("h2",{id:"loading-asset-at-runtime"},"Loading Asset At Runtime"),(0,r.kt)("p",null,"With the above introduction, we know that XR-MOD will not automatically load our resources; next let's write a simple script to implement it."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"XRMOD provides both C# and visual scripting, and you can choose either one for implementation.")),(0,r.kt)("p",null,"Double click through ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECT"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Scripts"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Runtime"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECTMainEntry.cs")," to open our script."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then add two lines of code inside the script's ",(0,r.kt)("inlineCode",{parentName:"li"},"OnLoad")," function."),(0,r.kt)("li",{parentName:"ul"},"Comment out any functions that you don't need to use first.")),(0,r.kt)("coverimg",{url:a(66776)}),(0,r.kt)(l.Z,{defaultValue:"cs",values:[{label:"C#",value:"cs"},{label:"VisualScripting",value:"vs"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="ImmersalTestMainEntry.cs"',title:'"ImmersalTestMainEntry.cs"'},'using System;\nusing UnityEngine;\nusing System.Collections;\nusing com.Phantoms.ARMODAPI.Runtime;\nusing com.Phantoms.ActionNotification.Runtime;\n\nnamespace ImmersalTest\n{\n    public class ImmersalTestMainEntry\n    {\n        //ARMOD API\n        internal static API ARMODAPI = new API(nameof(ImmersalTest));\n\n        private GameObject ARSpace;\n\n        public async void OnLoad()\n        {\n            //Use this for initialization. Please delete the function if it is not used\n            // highlight-start\n            var tmp_ARSpacec = await ARMODAPI.LoadAssetAsync<GameObject>("AR Space");\n            ARSpace = GameObject.Instantiate(tmp_ARSpacec);\n            // highlight-end\n        }\n\n        // public void OnEvent(BaseNotificationData _data)\n        // {\n        //     //General event callback. Please delete the function if it is not used\n        // }\n\n        // public void OnUpdate()\n        // {\n        //     //Like Unity Update method. Please delete the function if it is not used\n        // }\n\n        // public void ReleaseMemory()\n        // {\n        //     //Release Memory after AR close. Please delete the function if it is not used\n        // }\n    }\n}\n'))),(0,r.kt)(o.Z,{value:"vs",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Name can be set according to preference")),(0,r.kt)("p",null,"Create a visual scripting graph(",(0,r.kt)("inlineCode",{parentName:"p"},"SciptGraph"),") into your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"Scripting/Runtime")," folder and rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"ARWorldVS"),"."),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/CreateVS.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("p",null,"Now let's implement the logic of the visualization script."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"ARMOD API")," node to the visual canvas"),(0,r.kt)("li",{parentName:"ul"},"Typing your name of project in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectName")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ARMOD API")," node"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"Load Assets(Async)")," node to the visual canvas"),(0,r.kt)("li",{parentName:"ul"},"Typing the name of the game object you want to load to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Name")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Load Assets(Aysnc)")," node"),(0,r.kt)("li",{parentName:"ul"},"Connection ",(0,r.kt)("inlineCode",{parentName:"li"},"ARMOD API")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Load Assets(Async)")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"On Start")," node to the visual canvas"),(0,r.kt)("li",{parentName:"ul"},"Connection ",(0,r.kt)("inlineCode",{parentName:"li"},"On Start")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ARMOD API")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"On Start")," node and set ",(0,r.kt)("inlineCode",{parentName:"li"},"Coroutine")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," on the left side panel")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Load Assets(Async) node must use coroutine to start it.")),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/WriteVS.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Visual Scripting GameObject")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then create an empty gameobject in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hierarchy")," and rename to ",(0,r.kt)("inlineCode",{parentName:"li"},"ARWorldVS")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"Script Machine")," component to your gameobject via ",(0,r.kt)("inlineCode",{parentName:"li"},"AddComponent")," button"),(0,r.kt)("li",{parentName:"ul"},"Drag-and-drop your visual scripting graph file into ",(0,r.kt)("inlineCode",{parentName:"li"},"Graph")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Script Machine")," component"),(0,r.kt)("li",{parentName:"ul"},"Drag your visual scripting gameobject into project panel to make it Prefab"),(0,r.kt)("li",{parentName:"ul"},"Drag your visual scripting gameobject prefab to ",(0,r.kt)("inlineCode",{parentName:"li"},"PackageToolsEditor"),"->",(0,r.kt)("inlineCode",{parentName:"li"},"Contents")," section")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Visual Scripting Entry")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open PackageToolsEditor and editing your XRMOD project"),(0,r.kt)("li",{parentName:"ul"},"Typing your VisualScripting game object name into ",(0,r.kt)("inlineCode",{parentName:"li"},"Main Visual Scripting")," field"),(0,r.kt)("li",{parentName:"ul"},"Swtich to ",(0,r.kt)("inlineCode",{parentName:"li"},"Properties")," section"),(0,r.kt)("li",{parentName:"ul"},"Find the ",(0,r.kt)("inlineCode",{parentName:"li"},"Programmable")," block"),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"Programmable Type")," block of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Programmable")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"CSharp")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"VisualScripting"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"VisualScripting gameobject name must be the same as the name in ",(0,r.kt)("inlineCode",{parentName:"p"},"Contents")," section")),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/SetVS.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"Now that we have all the configuration done, next we need to build it into an experience package."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new scene with short-key ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+N")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Command+N"),", we don't save the current scene"),(0,r.kt)("li",{parentName:"ul"},"Switch to ",(0,r.kt)("inlineCode",{parentName:"li"},"Build")," section"),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"build platform")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"platform group")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"compression format")," according to your desired platform"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Build AR-Experience")," button to trigger build process")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Build Platform and Platform Group must be consistent, otherwise an error will occur.")),(0,r.kt)(i.Z,{src:"/static/videos/tutorials/arworld/Build.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Our sdk provide many plans. Broadly divided into two categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Online plans"),(0,r.kt)("li",{parentName:"ul"},"Offline plans")),(0,r.kt)("p",null,"The process of deploying XR experience for these two plans is different, and we will explain the different deployment modes in the two models below."),(0,r.kt)(l.Z,{defaultValue:"ol",values:[{label:"Online Plan",value:"ol"},{label:"Offline Plan",value:"of"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ol",mdxType:"TabItem"},(0,r.kt)("p",null,"The online plan is relatively simple, just go to the XRMOD Cloud back office and login to your account to deploy."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new App if app don't exist"),(0,r.kt)("li",{parentName:"ul"},"Create a new Project if project don't exist"),(0,r.kt)("li",{parentName:"ul"},"Upload your XR-Experience package to your desired platform"),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Show in file browser")," button to go to the XR experience package directory after your XRMOD project build.You will see the following files:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"focusexample.arexperience"),(0,r.kt)("td",{parentName:"tr",align:null},"arexperience"),(0,r.kt)("td",{parentName:"tr",align:null},"All experience inculded, e.g. 3DModels,Textures,Scripts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"focusexample.json"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"ARExperience file detail and all contents information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buildlogtep.json"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"Build detail")))),(0,r.kt)("p",null,"We just need to upload ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECT_NAME.arexperience")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECT_NAME.json")," files. ",(0,r.kt)("inlineCode",{parentName:"p"},"build.json")," is the project build log file, so we do not upload it."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"desired platform")," means the platform you choose when ",(0,r.kt)("a",{parentName:"p",href:"#build"},"building"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Now you can upload your build assets to the XRMOD cloud.To learn more about XRMOD Cloud ",(0,r.kt)("a",{parentName:"p",href:"../dev-tools/dashboard"},"click here")," for more information."))),(0,r.kt)(o.Z,{value:"of",mdxType:"TabItem"},(0,r.kt)("p",null,"As the name suggests, the offline plan cannot be loaded using the network, so we need to put the XR-Experience package inside the APP package.\nHere we have specified a specific directory:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Path"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:null},'"jar:file://" + Application.dataPath + "!/assets"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iOS"),(0,r.kt)("td",{parentName:"tr",align:null},'Application.dataPath + "/Raw"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unity"),(0,r.kt)("td",{parentName:"tr",align:null},"StreammingAssets/PLATFORM/PROJECT/")))),(0,r.kt)("p",null,"We need to copy all the contents of the platform folder to the corresponding path in the table above."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Where can I found the XR-Experience package?"),"\nGo to ",(0,r.kt)("inlineCode",{parentName:"p"},"Build")," Section and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Show in file browser")," button, you will see them.")))))}k.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),l=a(72389),o=a(67392),p=a(7094),s=a(12466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,a;const{lazy:l,block:u,defaultValue:m,values:k,groupId:h,className:N}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,p.U)(),[C,A]=(0,r.useState)(y),R=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=h){const e=v[h];null!=e&&e!==C&&f.some((t=>t.value===e))&&A(e)}const O=e=>{const t=e.currentTarget,a=R.indexOf(t),n=f[a].value;n!==C&&(j(t),A(n),null!=h&&w(h,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=R.indexOf(e.currentTarget)+1;a=null!=(n=R[t])?n:R[0];break}case"ArrowLeft":{var r;const t=R.indexOf(e.currentTarget)-1;a=null!=(r=R[t])?r:R[R.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},N)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>R.push(e),onKeyDown:x,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},61422:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(87462),r=a(67294),i=a(86010);function l(e){let{src:t,mobile:a,className:l,...o}=e;return r.createElement("video",(0,n.Z)({className:(0,i.Z)(l,a&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},o,{"webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}))}},71006:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/package-editor-bd4b56dbd4fe7ddc8caec4bc594ad703.png"},93232:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/package-tools-select-template-a59f4a2beea5e8bd745e8735e15db5dd.png"},50407:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/arworld-90f17f6a8ded5ea44ef1a69bc3e9edef.jpg"},78163:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/landmark-8237e0861bc8d8add67ce390a2c76ac9.png"},22716:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/tutor-basics-import-assets-bccd34db535d29f94f5b877bea61d3ee.png"},66776:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/tutor-basics-open-scripting-4b94900051a094833894d46aea553ad3.png"}}]);