"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9147],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(a),s=l,k=u["".concat(o,".").concat(s)]||u[s]||m[s]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"Network Properties Sync"},i=void 0,p={unversionedId:"multiplayer-api/network-properties-sync-api",id:"multiplayer-api/network-properties-sync-api",title:"Network Properties Sync",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-open-api-visual-scripting/current/multiplayer-api/network-properties-sync-api.md",sourceDirName:"multiplayer-api",slug:"/multiplayer-api/network-properties-sync-api",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/network-properties-sync-api",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-doc/tree/main/docs/open-api-visual-scripting/multiplayer-api/network-properties-sync-api.md",tags:[],version:"current",frontMatter:{title:"Network Properties Sync"},sidebar:"tutorialSidebar",previous:{title:"ServerCallbacks Unit",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/network-callbacks/ServerCallbacks"},next:{title:"ClientRpc Unit",permalink:"/zh-Hans/open-api-visual-scripting/multiplayer-api/network-rpc/ClientRpc"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CmdSubtractHealth",id:"cmdsubtracthealth",level:3},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"CmdAddHealth",id:"cmdaddhealth",level:3},{value:"Description",id:"description-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Event",id:"event",level:4},{value:"Example",id:"example",level:4},{value:"CmdLevelUp",id:"cmdlevelup",level:3},{value:"Description",id:"description-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Event",id:"event-1",level:4},{value:"Example",id:"example-1",level:4},{value:"CmdDegradeLevel",id:"cmddegradelevel",level:3},{value:"Description",id:"description-4",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Event",id:"event-2",level:4},{value:"Example",id:"example-2",level:4},{value:"CmdSetObjectName",id:"cmdsetobjectname",level:3},{value:"Description",id:"description-5",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Event",id:"event-3",level:4},{value:"Example",id:"example-3",level:4},{value:"CmdUpdateCustomProperties",id:"cmdupdatecustomproperties",level:3},{value:"Description",id:"description-6",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Event",id:"event-4",level:4},{value:"Example",id:"example-4",level:4}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"NetworkPropertiesSync\u7ec4\u4ef6\u5c06\u4e3aNetworkGameObject\u63d0\u4f9b\u5c5e\u6027\u3002\u5982\u5bf9\u8c61\u7684\u5065\u5eb7\u72b6\u51b5\u3001\u7b49\u7ea7\u3001\u540d\u79f0\u7b49\u3002"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GetHealth"),(0,l.kt)("td",{parentName:"tr",align:null},"Int Current"),(0,l.kt)("td",{parentName:"tr",align:null},"entity health value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GetObjectLevel"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"Current entity level value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GetObjectName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Current entity name value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GetCustomProperties"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Current entity custom properties value")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"Register a callback event for listen the value change."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> HealthSyncedCallback;\npublic Action<int, NetworkIdentity> ObjectLevelSyncedCallback;\npublic Action<string, NetworkIdentity> ObjectNameSyncedCallback;\npublic Action<string, NetworkIdentity> CustomPropertiesSyncedCallback;\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"cmdsubtracthealth"},"CmdSubtractHealth"),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,"\u6539\u53d8\u5b9e\u4f53\u5065\u5eb7\u503c\u3002\u4f60\u53ef\u4ee5\u6ce8\u518c\u5065\u5eb7\u503c\u53d8\u5316\u4e8b\u4ef6\u6765\u76d1\u542c\u503c\u7684\u53d8\u5316\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdSubtractHealth(int _newValue,NetworkIdentity _sender)\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connection"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","newValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of health to be subtracted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,l.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cmdaddhealth"},"CmdAddHealth"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdAddHealth(int _newValue,NetworkIdentity _sender)\n")),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"Change entity health value and sync to all user."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connection"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","newValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of health to be subtracted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,l.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,l.kt)("h4",{id:"event"},"Event"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u6ce8\u518c\u5065\u5eb7\u503c\u53d8\u5316\u4e8b\u4ef6\u6765\u76d1\u542c\u503c\u7684\u53d8\u5316\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> HealthSyncedCallback;\n")),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().HealthSyncedCallback += (_health,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cmdlevelup"},"CmdLevelUp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdLevelUp(int _additionLevel,NetworkIdentity _sender)\n")),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,"Change entity level value and sync to all user."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connection"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","additionLevel"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of level to be up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,l.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,l.kt)("h4",{id:"event-1"},"Event"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u6ce8\u518cLevel\u503c\u53d8\u5316\u4e8b\u4ef6\u6765\u76d1\u542c\u503c\u7684\u53d8\u5316\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> ObjectLevelSyncedCallback;\n")),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().ObjectLevelSyncedCallback += (_level_,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cmddegradelevel"},"CmdDegradeLevel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdDegradeLevel(int _level, NetworkIdentity _sender)\n")),(0,l.kt)("h4",{id:"description-4"},"Description"),(0,l.kt)("p",null,"\u6539\u53d8\u5b9e\u4f53\u7684\u7ea7\u522b\u503c\u3002\u4f60\u53ef\u4ee5\u6ce8\u518c\u7ea7\u522b\u503c\u53d8\u5316\u4e8b\u4ef6\u6765\u76d1\u542c\u503c\u7684\u53d8\u5316\u3002"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connection"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","level"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of level to be degrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,l.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,l.kt)("h4",{id:"event-2"},"Event"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u6ce8\u518cLevel\u503c\u53d8\u5316\u4e8b\u4ef6\u6765\u76d1\u542c\u503c\u7684\u53d8\u5316\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> ObjectLevelSyncedCallback;\n")),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().ObjectLevelSyncedCallback += (_level_,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cmdsetobjectname"},"CmdSetObjectName"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdSetObjectName(string _name,NetworkIdentity _sender)\n")),(0,l.kt)("h4",{id:"description-5"},"Description"),(0,l.kt)("p",null,"\u547d\u540d\u4f60\u7684\u6e38\u620f\u5bf9\u8c61\u5e76\u540c\u6b65\u7ed9\u6240\u6709\u7528\u6237\u3002"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connection"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of name to set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,l.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,l.kt)("h4",{id:"event-3"},"Event"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u6ce8\u518c\u540d\u79f0\u4ef7\u503c\u53d8\u5316\u4e8b\u4ef6\u6765\u76d1\u542c\u4ef7\u503c\u53d8\u5316\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> ObjectNameSyncedCallback;\n")),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().ObjectNameSyncedCallback += (_name_,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cmdupdatecustomproperties"},"CmdUpdateCustomProperties"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdUpdateCustomProperties(string _customProperties,NetworkIdentity _sender)\n")),(0,l.kt)("h4",{id:"description-6"},"Description"),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u5c5e\u6027\u5916\uff0c\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u989d\u5916\u7684\u5c5e\u6027\u5e76\u540c\u6b65\u7ed9\u6240\u6709\u7528\u6237\u3002"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connection"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","customProperties"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"Incoming custom properties value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,l.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,l.kt)("td",{parentName:"tr",align:null},"The sender of the operation")))),(0,l.kt)("h4",{id:"event-4"},"Event"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u6ce8\u518c\u81ea\u5b9a\u4e49\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u6765\u76d1\u542c\u503c\u7684\u53d8\u5316\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<string, NetworkIdentity> CustomPropertiesSyncedCallback;\n")),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().CustomPropertiesSyncedCallback += (_customdata,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")))}m.isMDXComponent=!0}}]);