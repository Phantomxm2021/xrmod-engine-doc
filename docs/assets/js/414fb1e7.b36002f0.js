"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[5486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,c(c({ref:t},s),{},{components:n})):r.createElement(y,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2,title:"Connect To Server Unit"},c=void 0,a={unversionedId:"multiplayer-api/connection/ConnectToServer",id:"multiplayer-api/connection/ConnectToServer",title:"Connect To Server Unit",description:"Description",source:"@site/docs/open-api-visual-scripting/multiplayer-api/connection/ConnectToServer.md",sourceDirName:"multiplayer-api/connection",slug:"/multiplayer-api/connection/ConnectToServer",permalink:"/open-api-visual-scripting/multiplayer-api/connection/ConnectToServer",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-visual-scripting/multiplayer-api/connection/ConnectToServer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Connect To Server Unit"},sidebar:"tutorialSidebar",previous:{title:"Connect By Discovery Unit",permalink:"/open-api-visual-scripting/multiplayer-api/connection/ConnectToServerByDiscovery"},next:{title:"Disconnected",permalink:"/open-api-visual-scripting/multiplayer-api/connection/Disconnected"}},p={},l=[{value:"Description",id:"description",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Disconnect the client from the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public void ConnectToServer(string _iPAddress,string _port)\n")))}u.isMDXComponent=!0}}]);