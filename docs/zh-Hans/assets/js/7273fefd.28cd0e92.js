"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[3287],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(v,o(o({ref:t},s),{},{components:r})):n.createElement(v,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:4,title:"Server"},o=void 0,l={unversionedId:"multiplayer-api/network-callbacks/Server",id:"multiplayer-api/network-callbacks/Server",title:"Server",description:"Description",source:"@site/docs/open-api-pure-csharp/multiplayer-api/network-callbacks/Server.md",sourceDirName:"multiplayer-api/network-callbacks",slug:"/multiplayer-api/network-callbacks/Server",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/network-callbacks/Server",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-pure-csharp/multiplayer-api/network-callbacks/Server.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Server"},sidebar:"tutorialSidebar",previous:{title:"ClientCallback",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/network-callbacks/ClientCallbacks"},next:{title:"ServerCallbacks",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/network-callbacks/ServerCallbacks"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters",level:3}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Register a server event receiver to listen for client network callbacks.\nOnly the server can call this Method (a warning or error is raised when called by the client)."),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public Dictionary<string, Action<NetworkIdentity>> ServerAction;\npublic Dictionary<string, Action<string, NetworkIdentity>> ServerStringAction;\npublic Dictionary<string, Action<float, NetworkIdentity>> ServerFloatAction;\npublic Dictionary<string, Action<int, NetworkIdentity>> ServerIntAction;\npublic Dictionary<string, Action<bool, NetworkIdentity>> ServerBoolAction;\npublic Dictionary<string, Action<Vector3, NetworkIdentity>> ServerVector3Action;\npublic Dictionary<string, Action<Quaternion, NetworkIdentity>> ServerQuaternionAction;\npublic Dictionary<string, Action<GameObject, NetworkIdentity>> ServerGameObjectAction;\npublic Dictionary<string, Action<TransformData, NetworkIdentity>> ServerTransformDataAction;\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("p",null,"Only a server can call the method (throws a warning or an error when called on a client)."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),\nTransformData.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Server Trigger"',title:'"Server','Trigger"':!0},"public void ServerSender(string _eventName,  NetworkIdentity _sender);\npublic void ServerStringSender(string _eventName, string _parameter, NetworkIdentity _sender);\npublic void ServerFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);\npublic void ServerIntSender(string _eventName, int _parameter, NetworkIdentity _sender);\npublic void ServerBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);\npublic void ServerVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);\npublic void ServerQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);\npublic void ServerGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);\npublic void ServerTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","eventName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Key of event dictnary")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"Incomming data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))))}d.isMDXComponent=!0}}]);