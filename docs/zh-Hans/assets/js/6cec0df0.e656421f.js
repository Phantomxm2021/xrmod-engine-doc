"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[8729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3,title:"ClientCallback"},l=void 0,o={unversionedId:"multiplayer-api/network-callbacks/ClientCallbacks",id:"multiplayer-api/network-callbacks/ClientCallbacks",title:"ClientCallback",description:"ClientCallbacks",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-pure-csharp/current/multiplayer-api/network-callbacks/ClientCallbacks.md",sourceDirName:"multiplayer-api/network-callbacks",slug:"/multiplayer-api/network-callbacks/ClientCallbacks",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/network-callbacks/ClientCallbacks",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-doc/tree/main/docs/open-api-pure-csharp/multiplayer-api/network-callbacks/ClientCallbacks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"ClientCallback"},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/network-callbacks/Client"},next:{title:"Server",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/network-callbacks/Server"}},c={},p=[{value:"ClientCallbacks",id:"clientcallbacks",level:2},{value:"Description",id:"description",level:3},{value:"Events",id:"events",level:3},{value:"Methods",id:"methods",level:3},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"clientcallbacks"},"ClientCallbacks"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u6ce8\u518cClient\u4e8b\u4ef6\u63a5\u6536\u5668\u4ee5\u76d1\u542cClient\u7684\u7f51\u7edc\u56de\u8c03\u3002\u4e0eClient\u76f8\u540c\uff0c\u4f46\u5728Server\u4e0a\u8c03\u7528\u65f6\u6ca1\u6709\u8b66\u544a\u3002"),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public Dictionary<string, Action<string, NetworkIdentity>> ClientCallbackStringAction;\npublic Dictionary<string, Action<float, NetworkIdentity>> ClientCallbackFloatAction;\npublic Dictionary<string, Action<int, NetworkIdentity>> ClientCallbackIntAction;\npublic Dictionary<string, Action<bool, NetworkIdentity>> ClientCallbackBoolAction;\npublic Dictionary<string, Action<Vector3, NetworkIdentity>> ClientCallbackVector3Action;\npublic Dictionary<string, Action<Quaternion, NetworkIdentity>> ClientCallbackQuaternionAction;\npublic Dictionary<string, Action<GameObject, NetworkIdentity>> ClientCallbackGameObjectAction;\npublic Dictionary<string, Action<TransformData, NetworkIdentity>> ClientCallbackTransformDataAction;\npublic Dictionary<string, Action<NetworkIdentity>> ClientCallbackAction;\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("p",null,"\u4e0eClient\u76f8\u540c\uff0c\u4f46\u5728Server\u4e0a\u8c03\u7528\u65f6\u4e0d\u4f1a\u4ea7\u751f\u8b66\u544a\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),\nTransformData.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Clientcallback Trigger"',title:'"Clientcallback','Trigger"':!0},"public void ClientCallbackSender(string _eventName,  NetworkIdentity _sender);\npublic void ClientCallbackStringSender(string _eventName, string _parameter, NetworkIdentity _sender);\npublic void ClientCallbackFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);\npublic void ClientCallbackIntSender(string _eventName, int _parameter, NetworkIdentity _sender);\npublic void ClientCallbackBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);\npublic void ClientCallbackVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);\npublic void ClientCallbackQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);\npublic void ClientCallbackGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);\npublic void ClientCallbackTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","eventName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Key of event dictnary")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"Incomming data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))))}d.isMDXComponent=!0}}]);