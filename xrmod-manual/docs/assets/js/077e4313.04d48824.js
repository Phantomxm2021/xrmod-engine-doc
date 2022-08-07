"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[3506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,y=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2,title:"ClientRpc"},o=void 0,l={unversionedId:"multiplayer-api/network-rpc/ClientRpc",id:"multiplayer-api/network-rpc/ClientRpc",title:"ClientRpc",description:"Description",source:"@site/docs/open-api-pure-csharp/multiplayer-api/network-rpc/ClientRpc.md",sourceDirName:"multiplayer-api/network-rpc",slug:"/multiplayer-api/network-rpc/ClientRpc",permalink:"/open-api-pure-csharp/multiplayer-api/network-rpc/ClientRpc",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-doc/tree/main/docs/open-api-pure-csharp/multiplayer-api/network-rpc/ClientRpc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"ClientRpc"},sidebar:"tutorialSidebar",previous:{title:"Intruduce",permalink:"/open-api-pure-csharp/multiplayer-api/network-rpc/Intro"},next:{title:"Command",permalink:"/open-api-pure-csharp/multiplayer-api/network-rpc/Command"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Events",id:"events",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Register the client remote operation receiver to listen for client rpc events. ClientRpc calls are sent from an object on the server to an object on the client. They can be sent from any server object that has a generated NetworkIdentity. Since the server has permissions, there is no security issue with the server object being able to send these calls."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public Dictionary<string, Action<string, NetworkIdentity>> ClientRpcStringAction;\npublic Dictionary<string, Action<float, NetworkIdentity>> ClientRpcFloatAction;\npublic Dictionary<string, Action<int, NetworkIdentity>> ClientRpcIntAction;\npublic Dictionary<string, Action<bool, NetworkIdentity>> ClientRpcBoolAction;\npublic Dictionary<string, Action<Vector3, NetworkIdentity>> ClientRpcVector3Action;\npublic Dictionary<string, Action<Quaternion, NetworkIdentity>> ClientRpcQuaternionAction;\npublic Dictionary<string, Action<GameObject, NetworkIdentity>> ClientRpcGameObjectAction;\npublic Dictionary<string, Action<TransformData, NetworkIdentity>> ClientRpcTransformDataAction;\npublic Dictionary<string, Action<NetworkIdentity>> ClientRpcAction;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_","eventName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Key of event dictnary")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_","parameter"),(0,i.kt)("td",{parentName:"tr",align:null},"Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject"),(0,i.kt)("td",{parentName:"tr",align:null},"Incomming data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,i.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,i.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),TransformData.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Client Rpc Trigger"',title:'"Client',Rpc:!0,'Trigger"':!0},"public void ClientRpcSender(string _eventName,  NetworkIdentity _sender);\npublic void ClientRpcStringSender(string _eventName, string _parameter, NetworkIdentity _sender);\npublic void ClientRpcFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);\npublic void ClientRpcIntSender(string _eventName, int _parameter, NetworkIdentity _sender);\npublic void ClientRpcBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);\npublic void ClientRpcVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);\npublic void ClientRpcQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);\npublic void ClientRpcGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);\npublic void ClientRpcTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);\n")))}m.isMDXComponent=!0}}]);