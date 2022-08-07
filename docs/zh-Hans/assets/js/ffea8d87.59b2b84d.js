"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[4192],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=l(t),m=o,v=y["".concat(p,".").concat(m)]||y[m]||u[m]||i;return t?r.createElement(v,c(c({ref:n},s),{},{components:t})):r.createElement(v,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=y;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={title:"Connect By Discovery Unit"},c=void 0,a={unversionedId:"multiplayer-api/connection/ConnectToServerByDiscovery",id:"multiplayer-api/connection/ConnectToServerByDiscovery",title:"Connect By Discovery Unit",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/multiplayer-api/connection/ConnectToServerByDiscovery.md",sourceDirName:"multiplayer-api/connection",slug:"/multiplayer-api/connection/ConnectToServerByDiscovery",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/connection/ConnectToServerByDiscovery",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-visual-scripting/multiplayer-api/connection/ConnectToServerByDiscovery.md",tags:[],version:"current",frontMatter:{title:"Connect By Discovery Unit"},sidebar:"tutorialSidebar",previous:{title:"Connect To Server Unit",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/connection/ConnectToServer"},next:{title:"Disconnected",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/connection/Disconnected"}},p={},l=[{value:"Description",id:"description",level:3}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"\u5047\u8bbe\u4f60\u65c1\u8fb9\u6709\u4e00\u4e2a\u670b\u53cb\u3002\u4ed6\u5728\u4e3b\u673a\u6a21\u5f0f\u4e0b\u5f00\u59cb\u6e38\u620f\uff0c\u4f60\u60f3\u52a0\u5165\u4ed6\u3002\u4f60\u7684\u624b\u673a\u5982\u4f55\u5b9a\u4f4d\u4ed6\u7684\uff1f\u627e\u51fa\u4ed6\u7684IP\u5730\u5740\u5e76\u4e0d\u5b8c\u5168\u662f\u76f4\u89c2\u7684\uff0c\u4e5f\u4e0d\u662f\u5b69\u5b50\u4eec\u80fd\u505a\u7684\u4e8b\u3002"),(0,o.kt)("p",null,'\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7f51\u7edc\u53d1\u73b0\u3002\u5f53\u4f60\u7684\u6e38\u620f\u5f00\u59cb\u65f6\uff0c\u5b83\u4f1a\u5728\u4f60\u5f53\u524d\u7684\u7f51\u7edc\u4e2d\u53d1\u9001\u4e00\u6761\u4fe1\u606f\uff0c\u8be2\u95ee "\u662f\u5426\u6709\u4efb\u4f55\u670d\u52a1\u5668\u53ef\u7528\uff1f"\u3002\u540c\u4e00\u7f51\u7edc\u5185\u7684\u4efb\u4f55\u670d\u52a1\u5668\u90fd\u4f1a\u56de\u590d\uff0c\u5e76\u63d0\u4f9b\u5173\u4e8e\u5982\u4f55\u8fde\u63a5\u5b83\u7684\u4fe1\u606f\u3002'))}u.isMDXComponent=!0}}]);