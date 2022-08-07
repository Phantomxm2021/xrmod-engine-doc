"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6082],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,g=u["".concat(d,".").concat(h)]||u[h]||s[h]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={sidebar_position:1,title:"Create First ARExperience"},i=void 0,l={unversionedId:"tutorial-basics/create-first-arexperience",id:"tutorial-basics/create-first-arexperience",title:"Create First ARExperience",description:"Introduce",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-experience-manual/current/tutorial-basics/create-first-arexperience.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-first-arexperience",permalink:"/zh-Hans/experience-manual/tutorial-basics/create-first-arexperience",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/tutorial-basics/create-first-arexperience.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create First ARExperience"},sidebar:"tutorialSidebar",previous:{title:"Graphics",permalink:"/zh-Hans/experience-manual/arblock/graphics"},next:{title:"Offical Examples",permalink:"/zh-Hans/experience-manual/examples/offical-examples"}},d={},p=[{value:"Introduce",id:"introduce",level:2},{value:"Prepare",id:"prepare",level:2},{value:"Create an XRMOD project",id:"create-an-xrmod-project",level:2},{value:"Start Creating",id:"start-creating",level:3},{value:"Deploy",id:"deploy",level:2}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduce"},"Introduce"),(0,o.kt)("p",null,"This article will introduce the AR experience of IKEA Place furniture placement in Focus SLAM mode. Focus SLAM is a focused SLAM algorithm that places the AR virtual body on the position of the indicator."),(0,o.kt)("h2",{id:"prepare"},"Prepare"),(0,o.kt)("p",null,"Before starting to create AR experiences, the following software and development kits must be installed:"),(0,o.kt)("p",null,"Content Dev-Tool:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unity.com/"},"Unity Engine 2021.3f1")),(0,o.kt)("li",{parentName:"ul"},"Script code editor",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/rider/"},"Rider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual studio code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Visual studio"))))),(0,o.kt)("p",null,"XRMOD tools chain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"XRMOD API"),(0,o.kt)("li",{parentName:"ul"},"XRMOD IL code"),(0,o.kt)("li",{parentName:"ul"},"XRMOD Simulator"),(0,o.kt)("li",{parentName:"ul"},"XRMOD Handheld AR"),(0,o.kt)("li",{parentName:"ul"},"XRMOD Package tools"),(0,o.kt)("li",{parentName:"ul"},"XRMOD Engine Setgings"),(0,o.kt)("li",{parentName:"ul"},"XRMOD Render Assistant"),(0,o.kt)("li",{parentName:"ul"},"ARFoundation (ARKit/ARCore/ARKit FaceTracking)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("h4",{parentName:"admonition",id:"how-do-i-get-a-development-kit"},"How do I get a development kit?"),(0,o.kt)("p",{parentName:"admonition"},"You can read ",(0,o.kt)("a",{parentName:"p",href:"/zh-Hans/experience-manual/prepare-for-developer/install-xrmod-dev-tools"},"this article")," to install it!"),(0,o.kt)("h3",{parentName:"admonition",id:"how-to-create-a-unity-project"},"How to create a Unity project?"),(0,o.kt)("p",{parentName:"admonition"},"You can read ",(0,o.kt)("a",{parentName:"p",href:"/zh-Hans/experience-manual/prepare-for-developer/install-unityengine#extras"},"this article")," to create it!")),(0,o.kt)("h2",{id:"create-an-xrmod-project"},"Create an XRMOD project"),(0,o.kt)("p",null,"Before starting to create, you need to understand the XR-MOD project directory structure. When we use PackageTools to create the structure as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"FocusExample\n    \u251c\u2500Artwork      \n    \u251c\u2500AutomaticGenerated    \n    \u251c\u2500Configures\n    \u2514\u2500Scripts\n      \u251c\u2500Editor\n      \u2514\u2500Runtime\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Describe"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FocusExample"),(0,o.kt)("td",{parentName:"tr",align:null},"Project name for the XR-MOD project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Artwork"),(0,o.kt)("td",{parentName:"tr",align:null},"Store and manage art resources, you can create subfolders for classified management")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AutomaticGenerated"),(0,o.kt)("td",{parentName:"tr",align:null},"When building the package body, such as MOD dll, AR function configuration files, etc. are automatically generated and are necessary configurations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Configures"),(0,o.kt)("td",{parentName:"tr",align:null},"Automatically created when the project is created to cache the configuration of the AR function. After the project is created, it cannot be deleted, otherwise an error will be reported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Scripts"),(0,o.kt)("td",{parentName:"tr",align:null},"The location where all the code of the project is stored")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Editor"),(0,o.kt)("td",{parentName:"tr",align:null},"It is only used in the Unity Editor, generally stores auxiliary resource scripts such as the quick configuration panel of the project, and does not participate in runtime construction")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Runtime"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores the runtime code of AR projects, more scripts can be created to implement more interesting logic")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"XR-MOD will not automatically load the resources in the AR experience package, and the script needs to load it by itself")),(0,o.kt)("h3",{id:"start-creating"},"Start Creating"),(0,o.kt)("p",null,"Through the previous introduction and preparation, we have a clear understanding of XRMOD Engine, and then we will lead you to create the first XRMOD Engine project. First, we open the XRMOD Engine project builder through ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"XRMOD"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"Package Tools Editor"),", as shown in the following figure."),(0,o.kt)("coverimg",{url:a(71006)}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you don't know how to use Package Tools Editor, please ",(0,o.kt)("a",{parentName:"p",href:"/zh-Hans/experience-manual/dev-tools/package-tools"},"click here")," to check.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a project by right-clicking in the ",(0,o.kt)("inlineCode",{parentName:"li"},"project area")," and selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"New Project")," from the popup menu"),(0,o.kt)("li",{parentName:"ol"},"At this point, another interface will pop up, as shown in the following figure."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"IKEA STYLE")," template to create, then enter the project name and project storage location on the left"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE")," button in the lower right corner to start creating the project")),(0,o.kt)("coverimg",{url:a(67134),fit:"scale-down",height:"30rem"}),(0,o.kt)("p",null,"After waiting for the project to be created, we click ",(0,o.kt)("inlineCode",{parentName:"p"},"Build")," in the right interface of the creator to build our XR project experience content package, as shown in the following figure."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Build Platform and Platform Group must be consistent, otherwise an error will occur.")),(0,o.kt)("coverimg",{url:a(66046)}),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Show in file browser")," button to go to the XR experience package directory after your XRMOD project build.You will see the following file:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"focusexample.arexperience"),(0,o.kt)("td",{parentName:"tr",align:null},"arexperience"),(0,o.kt)("td",{parentName:"tr",align:null},"All experience inculded, e.g. 3DModels,Textures,Scripts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"focusexample.json"),(0,o.kt)("td",{parentName:"tr",align:null},"json"),(0,o.kt)("td",{parentName:"tr",align:null},"ARExperience file detail and all contents information")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"buildlogtep.json"),(0,o.kt)("td",{parentName:"tr",align:null},"json"),(0,o.kt)("td",{parentName:"tr",align:null},"Build detail")))),(0,o.kt)("coverimg",{url:a(63150),fit:"contain"}),(0,o.kt)("p",null,"We just need to upload ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECT_NAME.arexperience")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECT_NAME.json")," files. ",(0,o.kt)("inlineCode",{parentName:"p"},"build.json")," is the project build log file, so we do not upload it."),(0,o.kt)("p",null,"Now you can upload your build assets to the XRMOD cloud.To learn more about XRMOD Cloud ",(0,o.kt)("a",{parentName:"p",href:"/zh-Hans/experience-manual/dev-tools/dashboard"},"click here")," for more information."))}s.isMDXComponent=!0},71006:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r="data:image/png;base64,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"},66046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/tutor-basics-template-build-549849afadd9b09d0513f9305d50b71a.png"},63150:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/tutor-basics-template-result-1cc48bf8cf544f46328418ae853da717.png"},67134:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"assets/images/tutor-basics-template-select-4856de98e20f8e48be0fe033590fc310.png"}}]);