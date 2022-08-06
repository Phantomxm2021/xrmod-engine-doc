"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,O=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(O,o(o({ref:t},u),{},{components:n})):a.createElement(O,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"OnUpdate"},o=void 0,c={unversionedId:"callbacl-api/OnUpdate",id:"callbacl-api/OnUpdate",title:"OnUpdate",description:"Description",source:"@site/docs/open-api-pure-csharp/callbacl-api/OnUpdate.md",sourceDirName:"callbacl-api",slug:"/callbacl-api/OnUpdate",permalink:"/xrmod-engine-doc/open-api-pure-csharp/callbacl-api/OnUpdate",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-pure-csharp/callbacl-api/OnUpdate.md",tags:[],version:"current",frontMatter:{title:"OnUpdate"},sidebar:"tutorialSidebar",previous:{title:"OnLoad",permalink:"/xrmod-engine-doc/open-api-pure-csharp/callbacl-api/OnLoad"},next:{title:"Connect To ServerByDiscovery",permalink:"/xrmod-engine-doc/open-api-pure-csharp/multiplayer-api/connection/ConnectToServerByDiscovery"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"OnUpdate method running every frame when ARExperience package is loaded. OnUpdate is the same as Update in Unity.OnUpdate is executed after \u200bSince OnUpdate is running every frame it is quite performance intensive."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'private bool placed;\nprivate Vector3 position;\nprivate Quaternion rotation;\n\u200b\nprivate const string CONST_CANVAS = "Canvas";\nprivate const string CONST_PROJECT_NAME = "PortalExample";\npublic static readonly API API = new API();\nprivate GameObject canvas;\nprivate GameObject tipsUI;\nprivate GameObject augmentedRealityVirtualObject;\nprivate Transform augmentedRealityVisualizerTransform;\nprivate Transform mainCameraTrans;\n\u200b\n//Please delete the function if it is not used\npublic void OnLoad()\n{\n    //Loading the UGUI\n    API.LoadGameObject(CONST_PROJECT_NAME, CONST_CANVAS,\n        _canvas =>\n        {\n            canvas = API.InstanceGameObject(_canvas, "", null);\n            tipsUI = API.FindGameObjectByName("Tips");\n            tipsUI.SetActive(true);\n        });\n\n    //Get MainCamera(ARCamera)\n    mainCameraTrans = GameObject.FindWithTag("MainCamera").transform;\n\n    //Loding AR virutal object\n    API.LoadGameObject(CONST_PROJECT_NAME, CONST_PROJECT_NAME, _augmentedRealityVirutalObject =>\n    {\n        augmentedRealityVirtualObject = API.InstanceGameObject(_augmentedRealityVirutalObject, "", null);\n        augmentedRealityVisualizerTransform = augmentedRealityVirtualObject.transform;\n        augmentedRealityVirtualObject.SetActive(false);\n    });\n}\n\u200b\n//Please delete the function if it is not used\npublic void OnUpdate()\n{\n    if (placed) return;\n    if (!Input.GetMouseButtonDown(0)) return;\n    tipsAlphaAnimation.StartFade(0);\n    AnchorNotificationData tmp_AnchorData = new AnchorNotificationData\n    {\n        Offset = mainCameraTrans.forward * 2.5f,\n        Position = Input.mousePosition,\n        StickType = AnchorNotificationData.StickTypeEnum.ByScreen,\n        TrackableType = AnchorNotificationData.TrackableTypeEnum.All,\n        ControllerTargetNode = augmentedRealityVirtualObject,\n        ActionName = "AnchorPlace",\n        NotificationAct = () =>\n        {\n            API.FindGameObjectByName("PortalMesh").AddComponent<PortalInteractor>();\n            API.FindGameObjectByName(CONST_PROJECT_NAME).GetComponentInChildren<Animator>().SetTrigger("Open");\n            augmentedRealityVirtualObject.SetActive(true);\n            placed = true;\n        }\n    };\n    API.StickObject(tmp_AnchorData);\n}\n')))}s.isMDXComponent=!0}}]);