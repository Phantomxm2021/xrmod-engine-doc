"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2646],{3905:(e,t,a)=>{a.d(t,{Zo:()=>S,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),k=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},S=function(e){var t=k(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,S=i(e,["components","mdxType","originalType","parentName"]),m=k(a),d=n,s=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(s,o(o({ref:t},S),{},{components:a})):r.createElement(s,o({ref:t},S))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var k=2;k<l;k++)o[k]=a[k];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var r=a(87462),n=(a(67294),a(3905));const l={title:"Create First ARExperience",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"create your first xr(ar/vr/mr) experience case with xrmod engine",sidebar_position:1},o=void 0,i={unversionedId:"tutorial-advanced/create-first-arexperience",id:"tutorial-advanced/create-first-arexperience",title:"Create First ARExperience",description:"create your first xr(ar/vr/mr) experience case with xrmod engine",source:"@site/docs/experience-manual/tutorial-advanced/create-first-arexperience.md",sourceDirName:"tutorial-advanced",slug:"/tutorial-advanced/create-first-arexperience",permalink:"/zh-Hans/experience-manual/tutorial-advanced/create-first-arexperience",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/tutorial-advanced/create-first-arexperience.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create First ARExperience",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"create your first xr(ar/vr/mr) experience case with xrmod engine",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How To Mapping The World",permalink:"/zh-Hans/experience-manual/tutorial-basics/how-to-mapping-the-world"},next:{title:"Create An AR World Experience",permalink:"/zh-Hans/experience-manual/tutorial-advanced/create-an-ar-world-experience"}},p={},k=[{value:"Introduction",id:"introduction",level:2},{value:"Prepare",id:"prepare",level:2},{value:"Create an XRMOD project",id:"create-an-xrmod-project",level:2},{value:"Start Creating",id:"start-creating",level:3},{value:"Deploy",id:"deploy",level:2}],S={toc:k};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},S,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This article will Introduction  the AR experience of IKEA Place furniture placement in Focus SLAM mode. Focus SLAM is a focused SLAM algorithm that places the AR virtual body on the position of the indicator."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"prepare"},"Prepare"),(0,n.kt)("p",null,"Before starting to create AR experiences, the following software and development kits must be installed:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Content Dev-Tools"),(0,n.kt)("th",null,"XRMOD tools chain")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://unity.com/"},"Unity Engine 2021.3f1")),(0,n.kt)("li",{parentName:"ul"},"Script code editor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/rider/"},"Rider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual studio code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Visual studio")))))),(0,n.kt)("td",null,(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"XRMOD API"),(0,n.kt)("li",{parentName:"ul"},"XRMOD IL code"),(0,n.kt)("li",{parentName:"ul"},"XRMOD Simulator"),(0,n.kt)("li",{parentName:"ul"},"XRMOD Handheld AR"),(0,n.kt)("li",{parentName:"ul"},"XRMOD Package tools"),(0,n.kt)("li",{parentName:"ul"},"XRMOD Engine Setgings"),(0,n.kt)("li",{parentName:"ul"},"XRMOD Render Assistant"),(0,n.kt)("li",{parentName:"ul"},"ARFoundation (ARKit/ARCore/ARKit FaceTracking)"))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h4",{parentName:"admonition",id:"how-do-i-get-a-development-kit"},"How do I get a development kit?"),(0,n.kt)("p",{parentName:"admonition"},"You can read ",(0,n.kt)("a",{parentName:"p",href:"../prepare-for-developer/install-xrmod-dev-tools"},"this article")," to install it!"),(0,n.kt)("h3",{parentName:"admonition",id:"how-to-create-a-unity-project"},"How to create a Unity project?"),(0,n.kt)("p",{parentName:"admonition"},"You can read ",(0,n.kt)("a",{parentName:"p",href:"../prepare-for-developer/install-unityengine#extras"},"this article")," to create it!")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"create-an-xrmod-project"},"Create an XRMOD project"),(0,n.kt)("p",null,"Before starting to create, you need to understand the XR-MOD project directory structure. When we use PackageTools to create the structure as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"FocusExample\n    \u251c\u2500Artwork      \n    \u251c\u2500AutomaticGenerated    \n    \u251c\u2500Configures\n    \u2514\u2500Scripts\n      \u251c\u2500Editor\n      \u2514\u2500Runtime\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FocusExample"),(0,n.kt)("td",{parentName:"tr",align:null},"Project name for the XR-MOD project")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Artwork"),(0,n.kt)("td",{parentName:"tr",align:null},"Store and manage art resources, you can create subfolders for classified management")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AutomaticGenerated"),(0,n.kt)("td",{parentName:"tr",align:null},"When building the package body, such as MOD dll, AR function configuration files, etc. are automatically generated and are necessary configurations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Configures"),(0,n.kt)("td",{parentName:"tr",align:null},"Automatically created when the project is created to cache the configuration of the AR function. After the project is created, it cannot be deleted, otherwise an error will be reported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scripts"),(0,n.kt)("td",{parentName:"tr",align:null},"The location where all the code of the project is stored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Editor"),(0,n.kt)("td",{parentName:"tr",align:null},"It is only used in the Unity Editor, generally stores auxiliary resource scripts such as the quick configuration panel of the project, and does not participate in runtime construction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Runtime"),(0,n.kt)("td",{parentName:"tr",align:null},"Stores the runtime code of AR projects, more scripts can be created to implement more interesting logic")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"XR-MOD will not automatically load the resources in the AR experience package, and the script needs to load it by itself")),(0,n.kt)("h3",{id:"start-creating"},"Start Creating"),(0,n.kt)("p",null,"Through the previous introduction and preparation, we have a clear understanding of XRMOD Engine, and then we will lead you to create the first XRMOD Engine project. First, we open the XRMOD Engine project builder through ",(0,n.kt)("inlineCode",{parentName:"p"},"Tools"),"->",(0,n.kt)("inlineCode",{parentName:"p"},"XRMOD"),"->",(0,n.kt)("inlineCode",{parentName:"p"},"Package Tools Editor"),", as shown in the following figure."),(0,n.kt)("coverimg",{url:a(71006)}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you don't know how to use Package Tools Editor, please ",(0,n.kt)("a",{parentName:"p",href:"../dev-tools/package-tools"},"click here")," to check.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a project by right-clicking in the ",(0,n.kt)("inlineCode",{parentName:"li"},"project area")," and selecting ",(0,n.kt)("inlineCode",{parentName:"li"},"New Project")," from the popup menu"),(0,n.kt)("li",{parentName:"ol"},"At this point, another interface will pop up, as shown in the following figure."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("inlineCode",{parentName:"li"},"IKEA STYLE")," template to create, then enter the project name and project storage location on the left"),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"CREATE")," button in the lower right corner to start creating the project")),(0,n.kt)("coverimg",{url:a(67134),fit:"scale-down",height:"30rem"}),(0,n.kt)("p",null,"After waiting for the project to be created, we click ",(0,n.kt)("inlineCode",{parentName:"p"},"Build")," in the right interface of the creator to build our XR project experience content package, as shown in the following figure."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Build Platform and Platform Group must be consistent, otherwise an error will occur.")),(0,n.kt)("coverimg",{url:a(66046)}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Show in file browser")," button to go to the XR experience package directory after your XRMOD project build.You will see the following files:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"focusexample.arexperience"),(0,n.kt)("td",{parentName:"tr",align:null},"arexperience"),(0,n.kt)("td",{parentName:"tr",align:null},"All experience inculded, e.g. 3DModels,Textures,Scripts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"focusexample.json"),(0,n.kt)("td",{parentName:"tr",align:null},"json"),(0,n.kt)("td",{parentName:"tr",align:null},"ARExperience file detail and all contents information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buildlogtep.json"),(0,n.kt)("td",{parentName:"tr",align:null},"json"),(0,n.kt)("td",{parentName:"tr",align:null},"Build detail")))),(0,n.kt)("coverimg",{url:a(63150),fit:"contain"}),(0,n.kt)("p",null,"We just need to upload ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECT_NAME.arexperience")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECT_NAME.json")," files. ",(0,n.kt)("inlineCode",{parentName:"p"},"build.json")," is the project build log file, so we do not upload it."),(0,n.kt)("p",null,"Now you can upload your build assets to the XRMOD cloud.To learn more about XRMOD Cloud ",(0,n.kt)("a",{parentName:"p",href:"../dev-tools/dashboard"},"click here")," for more information."))}c.isMDXComponent=!0},71006:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/package-editor-bd4b56dbd4fe7ddc8caec4bc594ad703.png"},66046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r="data:image/png;base64,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"},63150:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/tutor-basics-template-result-2f92d78a9226aea147e89cae4dad6bcd.png"},67134:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/tutor-basics-template-select-c75a7f3ce73534b5d30766f75d5d42e4.png"}}]);