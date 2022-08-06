"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[3361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2,title:"Client"},l=void 0,o={unversionedId:"multiplayer-api/network-callbacks/Client",id:"multiplayer-api/network-callbacks/Client",title:"Client",description:"Description",source:"@site/docs/open-api-pure-csharp/multiplayer-api/network-callbacks/Client.md",sourceDirName:"multiplayer-api/network-callbacks",slug:"/multiplayer-api/network-callbacks/Client",permalink:"/open-api-pure-csharp/multiplayer-api/network-callbacks/Client",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-pure-csharp/multiplayer-api/network-callbacks/Client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Client"},sidebar:"tutorialSidebar",previous:{title:"Intruduce",permalink:"/open-api-pure-csharp/multiplayer-api/network-callbacks/Intro"},next:{title:"ClientCallback",permalink:"/open-api-pure-csharp/multiplayer-api/network-callbacks/ClientCallbacks"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Register client-side event receivers to listen for client-side network callbacks.\nOnly the client can call this Method (a warning or error is raised when called on the server)."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Client event"',title:'"Client','event"':!0},"public Dictionary<string, Action<string, NetworkIdentity>> ClientStringAction;\npublic Dictionary<string, Action<float, NetworkIdentity>> ClientFloatAction;\npublic Dictionary<string, Action<int, NetworkIdentity>> ClientIntAction;\npublic Dictionary<string, Action<bool, NetworkIdentity>> ClientBoolAction;\npublic Dictionary<string, Action<Vector3, NetworkIdentity>> ClientVector3Action;\npublic Dictionary<string, Action<Quaternion, NetworkIdentity>> ClientQuaternionAction;\npublic Dictionary<string, Action<GameObject, NetworkIdentity>> ClientGameObjectAction;\npublic Dictionary<string, Action<TransformData, NetworkIdentity>> ClientTransformDataAction;\npublic Dictionary<string, Action<NetworkIdentity>> ClientAction;\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h4",{id:"description-1"},"Description"),(0,i.kt)("p",null,"Only the client can call this Method (a warning or error will be raised if called on the server)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),\nTransformData.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Client Trigger"',title:'"Client','Trigger"':!0},"public void ClientSender(string _eventName,  NetworkIdentity _sender);\npublic void ClientStringSender(string _eventName, string _parameter, NetworkIdentity _sender);\npublic void ClientFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);\npublic void ClientIntSender(string _eventName, int _parameter, NetworkIdentity _sender);\npublic void ClientBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);\npublic void ClientVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);\npublic void ClientQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);\npublic void ClientGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);\npublic void ClientTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_","eventName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Key of event dictnary")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_","parameter"),(0,i.kt)("td",{parentName:"tr",align:null},"Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject"),(0,i.kt)("td",{parentName:"tr",align:null},"Incomming data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,i.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,i.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))))}d.isMDXComponent=!0}}]);