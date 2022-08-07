"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"GetDeviceInfo"},o=void 0,l={unversionedId:"utility-api/GetDeviceInfo",id:"utility-api/GetDeviceInfo",title:"GetDeviceInfo",description:"Description",source:"@site/docs/open-api-pure-csharp/utility-api/GetDeviceInfo.mdx",sourceDirName:"utility-api",slug:"/utility-api/GetDeviceInfo",permalink:"/open-api-pure-csharp/utility-api/GetDeviceInfo",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-pure-csharp/utility-api/GetDeviceInfo.mdx",tags:[],version:"current",frontMatter:{title:"GetDeviceInfo"},sidebar:"tutorialSidebar",previous:{title:"DoCompareTag",permalink:"/open-api-pure-csharp/utility-api/DoCompareTag"},next:{title:"GetGameObjectByTag",permalink:"/open-api-pure-csharp/utility-api/GetGameObjectByTag"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Method",id:"method",level:2},{value:"Example",id:"example",level:2},{value:"Relation",id:"relation",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Access system and hardware information."),(0,a.kt)("p",null,"Use this method to figure out capabilities of the underlying platform and hardware. For example, you can check which RenderTexture formats are supported (SupportsRenderTextureFormat), how many CPU threads are available (processorCount), and so on."),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("highlight",{color:"#AE6221"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"devices info-Json")))),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public string GetDeviceInfo()\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"internal static API ARMODAPI = new API(nameof(APITest));\nprivate void OnLoad(){\n    //You can also use LitJson to mapping it to a class.\n    //Litjson is already in XRMOD, You just need to add the dependence.\n    Debug.Log(ARMODAPI.GetDeviceInfo());\n}\n")),(0,a.kt)("h2",{id:"relation"},"Relation"),(0,a.kt)("p",null,"If you want to use Litjson in your XRMOD case, you can click ",(0,a.kt)("a",{parentName:"p",href:"#"},"here")," to read more about it."))}s.isMDXComponent=!0}}]);