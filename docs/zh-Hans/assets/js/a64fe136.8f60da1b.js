"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(h,r(r({ref:t},m),{},{components:n})):o.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=n(87462),a=(n(67294),n(3905)),i=n(61422);const r={title:"How To Use MonoBehaviour",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"Uisng Package Tools Editor to create a XRMOD proejct.",sidebar_position:4},l=void 0,s={unversionedId:"tutorial-basics/how-to-use-monobehaviour",id:"tutorial-basics/how-to-use-monobehaviour",title:"How To Use MonoBehaviour",description:"Uisng Package Tools Editor to create a XRMOD proejct.",source:"@site/docs/experience-manual/tutorial-basics/how-to-use-monobehaviour.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/how-to-use-monobehaviour",permalink:"/zh-Hans/experience-manual/tutorial-basics/how-to-use-monobehaviour",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/tutorial-basics/how-to-use-monobehaviour.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How To Use MonoBehaviour",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"Uisng Package Tools Editor to create a XRMOD proejct.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How To Interact With UI",permalink:"/zh-Hans/experience-manual/tutorial-basics/how-to-interact-with-ui"},next:{title:"How To Bake Light Into Prefab",permalink:"/zh-Hans/experience-manual/tutorial-basics/how-to-bake-light"}},c={},m=[{value:"How To Do",id:"how-to-do",level:2},{value:"Primitive Objects",id:"primitive-objects",level:2},{value:"Mounting MonoBehaviour",id:"mounting-monobehaviour",level:2},{value:"Convert And Become A Prefab",id:"convert-and-become-a-prefab",level:2},{value:"Collection Assets",id:"collection-assets",level:2},{value:"Loading Cube",id:"loading-cube",level:2},{value:"Build XR-Experience",id:"build-xr-experience",level:2},{value:"Testing",id:"testing",level:2},{value:"Launch Simulator",id:"launch-simulator",level:3},{value:"Summary",id:"summary",level:2}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have learned how to load art resources and interact with the UI in the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"./how-to-load-assets"},"How To Load Assets"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"./how-to-interact-with-ui"},"How To Interact With UI"))," sections. Next we will use the same project for creation."),(0,a.kt)("p",null,"MonoBehaviour is the base class from which every Unity script derives. It allows creatives to easily write code for making interactive logic."),(0,a.kt)("p",null,"But. In XRMOD the platform (policy) restrictions lead to the inability to drag and drop MonoBehaviour onto the GameObject as in traditional Unity development."),(0,a.kt)("p",null,"There is a sayingIn other words well:",(0,a.kt)("strong",{parentName:"p"},'"In the end thing will mend"'),", so we use another way to mount MonoBehaviour on GameObject."),(0,a.kt)("p",null,"This approach we call ",(0,a.kt)("a",{parentName:"p",href:"../dev-tools/binding-monobehaviour"},(0,a.kt)("strong",{parentName:"a"},"MonoBinder")),". "),(0,a.kt)("h2",{id:"how-to-do"},"How To Do"),(0,a.kt)("p",null,"At the first, we need to write a class that inherits from ",(0,a.kt)("strong",{parentName:"p"},"MonoBehaviour"),". Let's do it!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"YOURPROJECT/Script/Runtime")),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("strong",{parentName:"li"},"C# Script")," class and call it ",(0,a.kt)("inlineCode",{parentName:"li"},"RotateCubeMonoBehaviour")),(0,a.kt)("li",{parentName:"ol"},"Double-click on the script to open")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="RotateCubeMonoBehaviour.cs"',title:'"RotateCubeMonoBehaviour.cs"'},"using System;\nusing System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\nnamespace HowToCreateProject.Runtime\n{\n    public class RotateCubeMonobehaviour : MonoBehaviour\n    {\n        // highlight-start\n        private Transform selfTransform;\n        private float currentTime;\n        // highlight-end\n\n        // highlight-start\n        public float timeToDisplay = 5;\n        public float RotateSpeed = 5;\n        public GameObject ChildGameObject;\n        // highlight-end\n\n        private void Start()\n        {\n            // highlight-next-line\n            selfTransform = this.transform;\n        }\n\n\n        private void Update()\n        {\n            // highlight-start\n            if (selfTransform == null) return;\n\n            selfTransform.Rotate(Vector3.up, Time.deltaTime * RotateSpeed);\n\n            currentTime += Time.deltaTime;\n            if (currentTime >= timeToDisplay)\n            {\n                currentTime = 0;\n                ChildGameObject.SetActive(true);\n            }\n            else\n            {\n                if (ChildGameObject.activeSelf)\n                {\n                    ChildGameObject.SetActive(false);\n                }\n            }\n            // highlight-end\n        }\n    }\n}\n")),(0,a.kt)(i.Z,{src:"/static/tutorial-basics/how-to-use-monobehaviour/CreateScript.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"primitive-objects"},"Primitive Objects"),(0,a.kt)("p",null,"When we are done editing ",(0,a.kt)("strong",{parentName:"p"},"RotateCubeMonoBehaviour"),", back to Unity. Use the shortcut keys (Mac: Command+N, Win: Ctrl+N) to create a new scene and create an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/PrimitiveObjects.html"},"Unity Primitive Objects")," in the new scene; create a Cube object by right-click ",(0,a.kt)("inlineCode",{parentName:"p"},"Hierarchy"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"3D Objects"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"Cube")," , select the Cube again, and create a child object for it ",(0,a.kt)("inlineCode",{parentName:"p"},"Sphere")," and adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"scale")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"position"),"."),(0,a.kt)(i.Z,{src:"/static/tutorial-basics/how-to-use-monobehaviour/PrimitiveObjects.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"mounting-monobehaviour"},"Mounting MonoBehaviour"),(0,a.kt)("p",null,"Next, drag and drop the ",(0,a.kt)("strong",{parentName:"p"},"RotateCubeMonoBehaviour")," to mount the ",(0,a.kt)("strong",{parentName:"p"},"Cube")," game object. Filling the child of ",(0,a.kt)("strong",{parentName:"p"},"Shpere")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"Child Game Object")," field of ",(0,a.kt)("strong",{parentName:"p"},"RotateCubeMonoBehaviour"),". Then set the active state of the child objects of the ",(0,a.kt)("strong",{parentName:"p"},"Sphere")," game object to ",(0,a.kt)("inlineCode",{parentName:"p"},"deactivated"),"."),(0,a.kt)(i.Z,{src:"/static/tutorial-basics/how-to-use-monobehaviour/MountAndFilling.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"convert-and-become-a-prefab"},"Convert And Become A Prefab"),(0,a.kt)("p",null,"We have finished setting up the RotateCubeMonoBehaviour script, but it doesn't run on the XRMOD Engine yet; so we need to configure it further."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The conversion process is fully automatic, so there is no need for the creator to set it up manually.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Cube")," game object"),(0,a.kt)("li",{parentName:"ol"},"Find ",(0,a.kt)("strong",{parentName:"li"},"RotateCubeMonoBehaviour")," component"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Convert to MonoBinder")," to start the conversion process"),(0,a.kt)("li",{parentName:"ol"},"Drag-and-drop Cube to ",(0,a.kt)("inlineCode",{parentName:"li"},"YOURPROJECT"),"->",(0,a.kt)("inlineCode",{parentName:"li"},"Artwork"),"->",(0,a.kt)("inlineCode",{parentName:"li"},"Prefabs"),", let it become a prefab")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Certain restrictions currently exist, ",(0,a.kt)("a",{parentName:"p",href:"../dev-tools/binding-monobehaviour#limitation"},"click here")," for more information.")),(0,a.kt)(i.Z,{src:"/static/tutorial-basics/how-to-use-monobehaviour/ConvertAndPrefab.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"collection-assets"},"Collection Assets"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open PackageToolsEditor"),(0,a.kt)("li",{parentName:"ol"},"Switch to ",(0,a.kt)("strong",{parentName:"li"},"Contents")," section"),(0,a.kt)("li",{parentName:"ol"},"Drag-and-drop ",(0,a.kt)("strong",{parentName:"li"},"Cube")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"YOURPROJECT/Artwork/Prefabs")," to ",(0,a.kt)("strong",{parentName:"li"},"Contents")," of PackageTools Editor")),(0,a.kt)("center",null,(0,a.kt)("coverimg",{url:n(42924),padding:"0.5rem",label:"Collection Assets"})),(0,a.kt)("h2",{id:"loading-cube"},"Loading Cube"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT_PATH"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"Scripts"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime")," and open ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECTNAMEMainEntry.cs")," file(By double-clicking)."),(0,a.kt)("p",null,"Then write some code on ",(0,a.kt)("inlineCode",{parentName:"p"},"OnLoad")," meethod."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"ARMODAPI.LoadAssetAsync<GameObject",">",'("Cube");')," The object name(",(0,a.kt)("inlineCode",{parentName:"p"},"Cube"),") must be the same as in ",(0,a.kt)("inlineCode",{parentName:"p"},"PackageToolsEditor"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"Contents")," assets name.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="PROJECTNAMEMainEntry.cs"',title:'"PROJECTNAMEMainEntry.cs"'},'using System;\nusing UnityEngine;\nusing System.Collections;\nusing com.Phantoms.ARMODAPI.Runtime;\nusing com.Phantoms.ActionNotification.Runtime;\nusing UnityEngine.UI;\nusing Object = UnityEngine.Object;\n\nnamespace HowToCreateProject.Runtime\n{\n    public class HowToCreateProjectMainEntry\n    {\n        //ARMOD API        \n        internal static API ARMODAPI = new API(nameof(HowToCreateProject));\n\n        public async void OnLoad()\n        {\n            //Use this for initialization. Please delete the function if it is not used\n            var tmp_ARVirtualObjectPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("VirtualObject");\n            Object.Instantiate(tmp_ARVirtualObjectPrefab);\n\n            var tmp_UICanvasPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("UICanvas");\n            var tmp_UICanvas = Object.Instantiate(tmp_UICanvasPrefab);\n            var tmp_ClickMeGo = tmp_UICanvas.transform.Find("ClickMe");\n            var tmp_ClickMeBtn = tmp_ClickMeGo.GetComponent<Button>();\n            tmp_ClickMeBtn.onClick.AddListener(() => { Debug.Log("Clicked me!!!"); });\n\n            // highlight-start\n            var tmp_CubePrefab = await ARMODAPI.LoadAssetAsync<GameObject>("Cube");\n            var tmp_Cube = Object.Instantiate(tmp_CubePrefab);\n            // highlight-end\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"build-xr-experience"},"Build XR-Experience"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"PackageToolsEditor")," "),(0,a.kt)("li",{parentName:"ol"},"Switch to ",(0,a.kt)("strong",{parentName:"li"},"Build")," section"),(0,a.kt)("li",{parentName:"ol"},"Select the platform you need to build."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Build AR-Experience")," button to start the build")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Build Platform")," and ",(0,a.kt)("strong",{parentName:"p"},"Platform Group")," The two selected platforms must be the same.")),(0,a.kt)(i.Z,{src:"/static/tutorial-basics/how-to-load-assets/BuildXRExperience.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Now we have done all the work, but we don't know if the content loads properly yet, so we need to test further to verify our results."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How to testing"),"?"),(0,a.kt)("p",null,"XRMOD Engine currently provides processes such as loading tests within the Unity Editor, so we can verify all logic from within the Unity Editor. Before we can start testing we need to install the XRMOD Engine Simulator plugin via the Unity Package Manager."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"../prepare-for-developer/install-xrmod-dev-tools"},"Click here")," to learn how to install the XRMOD engine toolchain.")),(0,a.kt)("p",null,"In here, we need to install XRMOD Engine Simulator plugin. "),(0,a.kt)("center",null,(0,a.kt)("coverimg",{url:n(97246),padding:"0.5rem",label:"Install XRMOD Simulator Plugin"})),(0,a.kt)("p",null,"When you finish the installation you can see an XR button in the top left corner of the Unity editor, which is mainly used to start the XRMOD Engine emulator."),(0,a.kt)("center",null,(0,a.kt)("coverimg",{url:n(9649),padding:"0.5rem",label:"Simulator"})),(0,a.kt)("h3",{id:"launch-simulator"},"Launch Simulator"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click left-top ",(0,a.kt)("strong",{parentName:"li"},"XR Play")," button to launch XRMOD Engine simulator"),(0,a.kt)("li",{parentName:"ol"},"Switch to ",(0,a.kt)("strong",{parentName:"li"},"Game")," view"),(0,a.kt)("li",{parentName:"ol"},"Typing your project name into simulator"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Fetch Project")," to loading our project")),(0,a.kt)(i.Z,{src:"/static/tutorial-basics/how-to-use-monobehaviour/Test.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this section we learned how to use MonoBehaviour in XRMOD Engine. Using MonoBehaviour in XRMOD Engine has only one more step, which is to convert MonoBehaviour to MonoBinder."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"It is also known that MonoBinder has certain limitations, which can be reviewed ",(0,a.kt)("a",{parentName:"p",href:"../dev-tools/binding-monobehaviour#limitation"},"here"),".")))}u.isMDXComponent=!0},61422:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(87462),a=n(67294),i=n(86010);function r(e){let{src:t,mobile:n,className:r,...l}=e;return a.createElement("video",(0,o.Z)({className:(0,i.Z)(r,n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},l,{"webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}))}},9649:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o=n.p+"assets/images/SimualtorBtn-1a217be36641ef11ae38227d89635ad8.png"},97246:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o=n.p+"assets/images/SimulatorPlugin-d065de041c48104148ea6f19ae4fa4f1.png"},42924:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o=n.p+"assets/images/CollectionAssets-1707d8ec6e8e58f36179da9cdf067865.png"}}]);