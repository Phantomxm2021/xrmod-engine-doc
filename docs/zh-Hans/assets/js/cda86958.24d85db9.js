"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"TryAcquireLightEstimateValue"},o=void 0,l={unversionedId:"ar-base-api/TryAcquireLightEstimateValue",id:"ar-base-api/TryAcquireLightEstimateValue",title:"TryAcquireLightEstimateValue",description:"Description",source:"@site/docs/open-api-pure-csharp/ar-base-api/TryAcquireLightEstimateValue.md",sourceDirName:"ar-base-api",slug:"/ar-base-api/TryAcquireLightEstimateValue",permalink:"/zh-Hans/open-api-pure-csharp/ar-base-api/TryAcquireLightEstimateValue",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-pure-csharp/ar-base-api/TryAcquireLightEstimateValue.md",tags:[],version:"current",frontMatter:{title:"TryAcquireLightEstimateValue"},sidebar:"tutorialSidebar",previous:{title:"TryAcquireCurrentFrame",permalink:"/zh-Hans/open-api-pure-csharp/ar-base-api/TryAcquireCurrentFrame"},next:{title:"TryAcquireSDKVersion",permalink:"/zh-Hans/open-api-pure-csharp/ar-base-api/TryAcquireSDKVersion"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Method",id:"method",level:2},{value:"Example",id:"example",level:3}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Get light estimate value."),(0,n.kt)("h2",{id:"return"},"Return"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("highlight",{color:"#F8D258"},"light")),(0,n.kt)("td",{parentName:"tr",align:null},"A light of unity")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It maybe null, plz attention")),(0,n.kt)("h2",{id:"method"},"Method"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Light TryAcquireLightEstimateValue()\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'private void OnUpdate(){\n    Debug.Log($"LightEstimate:{ARMODAPI.TryAcquireLightEstimateValue()?.intensity}");\n}\n')))}s.isMDXComponent=!0}}]);