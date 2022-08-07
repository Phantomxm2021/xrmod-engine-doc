"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),y=a,d=s["".concat(p,".").concat(y)]||s[y]||m[y]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},36894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"GetValueByKey"},l=void 0,o={unversionedId:"utility-api/GetValueByKey",id:"utility-api/GetValueByKey",title:"GetValueByKey",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-pure-csharp/current/utility-api/GetValueByKey.mdx",sourceDirName:"utility-api",slug:"/utility-api/GetValueByKey",permalink:"/zh-Hans/open-api-pure-csharp/utility-api/GetValueByKey",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-doc/tree/main/docs/open-api-pure-csharp/utility-api/GetValueByKey.mdx",tags:[],version:"current",frontMatter:{title:"GetValueByKey"},sidebar:"tutorialSidebar",previous:{title:"GetSystemLanguage",permalink:"/zh-Hans/open-api-pure-csharp/utility-api/GetSystemLanguage"},next:{title:"IsPointerOverUi",permalink:"/zh-Hans/open-api-pure-csharp/utility-api/IsPointerOverUi"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Method",id:"method",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Read data temporarily stored on the device"),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("highlight",{color:"#AE6221"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"The data queried")))),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","projectName"),(0,a.kt)("td",{parentName:"tr",align:null},"Use ProjectName+Key storage to prevent Key from being occupied")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","key"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique name")))),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public string GetValueByKey(string _projectName, string _key)\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'internal static API ARMODAPI = new API(nameof(APITest));\nprivate void OnLoad(){\n    ARMODAPI.SaveKeyAndValue(nameof(APITest),"StoreKey","StoreValue");\n    Debug.Log(ARMODAPI.GetValueByKey(nameof(APITest),"StoreKey"));\n}\n')))}m.isMDXComponent=!0}}]);