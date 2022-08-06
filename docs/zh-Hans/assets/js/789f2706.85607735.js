"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[7136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"SaveKeyAndValue"},o=void 0,l={unversionedId:"utility-api/SaveKeyAndValue",id:"utility-api/SaveKeyAndValue",title:"SaveKeyAndValue",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-pure-csharp/current/utility-api/SaveKeyAndValue.md",sourceDirName:"utility-api",slug:"/utility-api/SaveKeyAndValue",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/utility-api/SaveKeyAndValue",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-pure-csharp/utility-api/SaveKeyAndValue.md",tags:[],version:"current",frontMatter:{title:"SaveKeyAndValue"},sidebar:"tutorialSidebar",previous:{title:"RemoveKeyAndValue",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/utility-api/RemoveKeyAndValue"},next:{title:"SetScreenOrientation",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/utility-api/SetScreenOrientation"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Parmaters",id:"parmaters",level:2},{value:"Method",id:"method",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Store temporary data locally. ",(0,a.kt)("inlineCode",{parentName:"p"},"SaveKeyAndValue")," is a method that stores Experience case preferences between project sessions. It can store string into the user\u2019s platform registry."),(0,a.kt)("p",null,"Sets a single string value for the preference identified by the given key and project. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ARMODAPI.GetValueByKey")," to retrieve this value."),(0,a.kt)("h2",{id:"parmaters"},"Parmaters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","projectName"),(0,a.kt)("td",{parentName:"tr",align:null},"Use ProjectName+Key storage to prevent Key from being occupied")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","key"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique Name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","value"),(0,a.kt)("td",{parentName:"tr",align:null},"Data tha nedds to be saved")))),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public void SaveKeyAndValue(string _projectName, string _key, string _value)\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'internal static API ARMODAPI = new API(nameof(APITest));\nprivate void OnLoad(){\n    ARMODAPI.SaveKeyAndValue(nameof(APITest),"StoreKey","StoreValue");\n    Debug.Log(ARMODAPI.GetValueByKey(nameof(APITest),"StoreKey"));\n}\n')))}s.isMDXComponent=!0}}]);