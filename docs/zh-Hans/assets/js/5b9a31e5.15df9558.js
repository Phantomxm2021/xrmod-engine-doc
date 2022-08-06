"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,d=m["".concat(o,".").concat(y)]||m[y]||s[y]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Spawn Prefab Unit"},l=void 0,p={unversionedId:"multiplayer-api/utility/SpawnPrefabUnit",id:"multiplayer-api/utility/SpawnPrefabUnit",title:"Spawn Prefab Unit",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/multiplayer-api/utility/SpawnPrefabUnit.md",sourceDirName:"multiplayer-api/utility",slug:"/multiplayer-api/utility/SpawnPrefabUnit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/utility/SpawnPrefabUnit",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-visual-scripting/multiplayer-api/utility/SpawnPrefabUnit.md",tags:[],version:"current",frontMatter:{title:"Spawn Prefab Unit"},sidebar:"tutorialSidebar",previous:{title:"Spawn Player Unit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/utility/SpawnPlayerUnit"},next:{title:"Spawn Sync Unit",permalink:"/xrmod-engine-doc/zh-Hans/open-api-visual-scripting/multiplayer-api/utility/SpawnSyncUnit"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u5c06\u751f\u6210\u7684\u6e38\u620f\u5bf9\u8c61\u4e0e\u6240\u6709\u5176\u4ed6\u8054\u7f51\u7684\u6e38\u620f\u5bf9\u8c61\u4e00\u8d77\u7ba1\u7406\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u53e6\u4e00\u4e2a\u5ba2\u6237\u7aef\u540e\u6765\u52a0\u5165\u6e38\u620f\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u5728\u8be5\u5ba2\u6237\u7aef\u4e0a\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u3002"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Network GameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"The network gameobject want to spawn")))))}s.isMDXComponent=!0}}]);