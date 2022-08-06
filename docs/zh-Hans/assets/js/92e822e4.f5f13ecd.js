"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[4660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,y=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},18565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3,title:"Command"},o=void 0,l={unversionedId:"multiplayer-api/network-rpc/Command",id:"multiplayer-api/network-rpc/Command",title:"Command",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-pure-csharp/current/multiplayer-api/network-rpc/Command.md",sourceDirName:"multiplayer-api/network-rpc",slug:"/multiplayer-api/network-rpc/Command",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/multiplayer-api/network-rpc/Command",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-pure-csharp/multiplayer-api/network-rpc/Command.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Command"},sidebar:"tutorialSidebar",previous:{title:"ClientRpc",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/multiplayer-api/network-rpc/ClientRpc"},next:{title:"Target Rpc",permalink:"/xrmod-engine-doc/zh-Hans/open-api-pure-csharp/multiplayer-api/network-rpc/TargetRpc"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Events",id:"events",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u6ce8\u518c\u4e00\u4e2a\u547d\u4ee4\u8fdc\u7a0b\u64cd\u4f5c\u63a5\u6536\u5668\u6765\u76d1\u542c\u547d\u4ee4\u4e8b\u4ef6\u3002\u547d\u4ee4\u4ece\u5ba2\u6237\u7aef\u7684\u73a9\u5bb6\u5bf9\u8c61\u53d1\u9001\u81f3\u670d\u52a1\u5668\u4e0a\u7684\u73a9\u5bb6\u5bf9\u8c61\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u547d\u4ee4\u53ea\u80fd\u4ece\u4f60\u7684\u73a9\u5bb6\u5bf9\u8c61\u53d1\u9001\uff0c\u6240\u4ee5\u4f60\u4e0d\u80fd\u63a7\u5236\u5176\u4ed6\u73a9\u5bb6\u5bf9\u8c61\u3002"),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public Dictionary<string, Action<string, NetworkIdentity>> CmdStringAction;\npublic Dictionary<string, Action<float, NetworkIdentity>> CmdFloatAction;\npublic Dictionary<string, Action<int, NetworkIdentity>> CmdIntAction;\npublic Dictionary<string, Action<bool, NetworkIdentity>> CmdBoolAction;\npublic Dictionary<string, Action<Vector3, NetworkIdentity>> CmdVector3Action;\npublic Dictionary<string, Action<Quaternion, NetworkIdentity>> CmdQuaternionAction;\npublic Dictionary<string, Action<GameObject, NetworkIdentity>> CmdGameObjectAction;\npublic Dictionary<string, Action<TransformData, NetworkIdentity>> CmdTransformDataAction;\npublic Dictionary<string, Action<NetworkIdentity>> CmdAction;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","eventName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Key of event dictnary")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject"),(0,a.kt)("td",{parentName:"tr",align:null},"Incomming data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,a.kt)("td",{parentName:"tr",align:null},"Who sent this remote action")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),TransformData.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Cmd Trigger"',title:'"Cmd','Trigger"':!0},"public void CmdSender(string _eventName,  NetworkIdentity _sender);\npublic void CmdStringSender(string _eventName, string _parameter, NetworkIdentity _sender);\npublic void CmdFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);\npublic void CmdIntSender(string _eventName, int _parameter, NetworkIdentity _sender);\npublic void CmdBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);\npublic void CmdVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);\npublic void CmdQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);\npublic void CmdGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);\npublic void CmdTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);\n")))}d.isMDXComponent=!0}}]);