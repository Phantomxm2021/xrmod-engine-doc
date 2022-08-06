"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),s=n,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"CheckFeatureAvailability"},i=void 0,o={unversionedId:"ar-base-api/CheckFeatureAvailability",id:"ar-base-api/CheckFeatureAvailability",title:"CheckFeatureAvailability",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-pure-csharp/current/ar-base-api/CheckFeatureAvailability.md",sourceDirName:"ar-base-api",slug:"/ar-base-api/CheckFeatureAvailability",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/ar-base-api/CheckFeatureAvailability",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-pure-csharp/ar-base-api/CheckFeatureAvailability.md",tags:[],version:"current",frontMatter:{title:"CheckFeatureAvailability"},sidebar:"tutorialSidebar",previous:{title:"CheckARAvailablility",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/ar-base-api/CheckARAvailablility"},next:{title:"ExitAR",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/ar-base-api/ExitAR"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Method",id:"method",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"\u68c0\u6d4b\u5f53\u524d\u8bbe\u5907\u662f\u5426\u652f\u6301\u8be5 XR \u7279\u6027"),(0,n.kt)("h2",{id:"return"},"Return"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("highlight",{color:"#6F5DF6"},"Bool")),(0,n.kt)("td",{parentName:"tr",align:null},"True:\u652f\u6301,False:\u4e0d\u652f\u6301")))),(0,n.kt)("h2",{id:"method"},"Method"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public bool CheckFeatureAvailability(string _featureName)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"FeatureName"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SimpleAR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ImageTracking")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Anchors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CpuImages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EnvironmentProbes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ARCollaborationData")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ARKitCoachingOverlay")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ObjectTracking")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FaceTracking")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BodyTracking")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BasicLightEstimation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HDRLightEstimation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PlaneClassification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Meshing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Depth")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ThermalState")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TryAcquireAROcclusionFrame")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'internal static API ARMODAPI = new API(nameof(APITest));\nprivate void OnLoad()\n{\n    if(ARMODAPI.CheckFeatureAvailability("SimpleAR")){\n        Debug.Log("SimpleAR Availability");\n    }\n}\n')))}m.isMDXComponent=!0}}]);