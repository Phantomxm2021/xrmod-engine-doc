"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[3641],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,y=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37338:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={title:"TryAcquireSDKVersion"},o=void 0,p={unversionedId:"ar-base-api/TryAcquireSDKVersion",id:"ar-base-api/TryAcquireSDKVersion",title:"TryAcquireSDKVersion",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-pure-csharp/current/ar-base-api/TryAcquireSDKVersion.md",sourceDirName:"ar-base-api",slug:"/ar-base-api/TryAcquireSDKVersion",permalink:"/zh-Hans/open-api-pure-csharp/ar-base-api/TryAcquireSDKVersion",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/open-api-pure-csharp/ar-base-api/TryAcquireSDKVersion.md",tags:[],version:"current",frontMatter:{title:"TryAcquireSDKVersion"},sidebar:"tutorialSidebar",previous:{title:"TryAcquireLightEstimateValue",permalink:"/zh-Hans/open-api-pure-csharp/ar-base-api/TryAcquireLightEstimateValue"},next:{title:"OnEvent",permalink:"/zh-Hans/open-api-pure-csharp/callbacl-api/OnEvent"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Method",id:"method",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u83b7\u53d6\u5f53\u524dXRMOD\u5f15\u64ce\u7684\u7248\u672c\u3002\u7528\u4e8eXR\u5185\u5bb9\u5bf9\u7279\u5b9aSDK\u7248\u672c\u6267\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\u5f39\u51fa\u6846\u63d0\u793a\u7528\u6237\u4e3a\u4f4e\u4e8e2.0.0\u7248\u672c\u7684SDK\u5347\u7ea7\u5e94\u7528\u7a0b\u5e8f\u7b49\u3002"),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("highlight",{color:"#AD6224"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"XRRMOD Engine \u7684\u7248\u672c","[e.g.0.0.1]",".")))),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public string TryAcquireSDKVersion()\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'ARMODAPI API = new ARMODAPI("TEST_PROJECT");\npublic void OnLoad(){\n    //Call to get the sdk version of xrmod engine\n    var tmp_CurSDKVersion = API.TryAcquireSDKVersion();\n\n    //Print the result\n    Debug.Log(tmp_CurSDKVersion);\n\n    //Compare them\n    if(tmp_CurSDKVersion != "2.0.0-pre.1"){\n        return;\n    }\n\n    Debug.Log($"SDK Version is {tmp_CurSDKVersion}");\n}\n')))}s.isMDXComponent=!0}}]);