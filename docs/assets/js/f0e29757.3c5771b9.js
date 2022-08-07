"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[3648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:4,title:"Target Rpc"},o=void 0,p={unversionedId:"multiplayer-api/network-rpc/TargetRpc",id:"multiplayer-api/network-rpc/TargetRpc",title:"Target Rpc",description:"Description",source:"@site/docs/open-api-pure-csharp/multiplayer-api/network-rpc/TargetRpc.md",sourceDirName:"multiplayer-api/network-rpc",slug:"/multiplayer-api/network-rpc/TargetRpc",permalink:"/open-api-pure-csharp/multiplayer-api/network-rpc/TargetRpc",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-pure-csharp/multiplayer-api/network-rpc/TargetRpc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Target Rpc"},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/open-api-pure-csharp/multiplayer-api/network-rpc/Command"},next:{title:"Assign Client Authority",permalink:"/open-api-pure-csharp/multiplayer-api/utility/AssignClientAuthority"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Events",id:"events",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2}],s={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Register the target remote action receiver to listen for target rpc events. the TargetRpc function is called by the user code on the server and then on the corresponding client object on the client of the specified NetworkConnection."),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public Dictionary<string, Action<string, NetworkIdentity>> TargetRpcStringAction;\npublic Dictionary<string, Action<float, NetworkIdentity>> TargetRpcFloatAction;\npublic Dictionary<string, Action<int, NetworkIdentity>> TargetRpcIntAction;\npublic Dictionary<string, Action<bool, NetworkIdentity>> TargetRpcBoolAction;\npublic Dictionary<string, Action<Vector3, NetworkIdentity>> TargetRpcVector3Action;\npublic Dictionary<string, Action<Quaternion, NetworkIdentity>> TargetRpcQuaternionAction;\npublic Dictionary<string, Action<GameObject, NetworkIdentity>> TargetRpcGameObjectAction;\npublic Dictionary<string, Action<TransformData, NetworkIdentity>> TargetRpcTransformDataAction;\npublic Dictionary<string, Action<NetworkIdentity>> TargetRpcAction;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","eventName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Key of event dictnary")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"Incomming data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),TransformData.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="TargetRpc Trigger"',title:'"TargetRpc','Trigger"':!0},"public void TargetRpcSender(string _eventName,  NetworkIdentity _sender);\npublic void TargetRpcStringSender(string _eventName, string _parameter, NetworkIdentity _sender);\npublic void TargetRpcFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);\npublic void TargetRpcIntSender(string _eventName, int _parameter, NetworkIdentity _sender);\npublic void TargetRpcBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);\npublic void TargetRpcVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);\npublic void TargetRpcQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);\npublic void TargetRpcGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);\npublic void TargetRpcTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);\n")))}d.isMDXComponent=!0}}]);