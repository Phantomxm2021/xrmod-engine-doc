"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1522],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(a),s=r,k=m["".concat(o,".").concat(s)]||m[s]||u[s]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Network Properties Sync"},i=void 0,p={unversionedId:"multiplayer-api/utility/network-properties-sync-api",id:"multiplayer-api/utility/network-properties-sync-api",title:"Network Properties Sync",description:"Description",source:"@site/docs/open-api-pure-csharp/multiplayer-api/utility/network-properties-sync-api.md",sourceDirName:"multiplayer-api/utility",slug:"/multiplayer-api/utility/network-properties-sync-api",permalink:"/open-api-pure-csharp/multiplayer-api/utility/network-properties-sync-api",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/open-api-pure-csharp/multiplayer-api/utility/network-properties-sync-api.md",tags:[],version:"current",frontMatter:{title:"Network Properties Sync"},sidebar:"tutorialSidebar",previous:{title:"Get Local Network Connection",permalink:"/open-api-pure-csharp/multiplayer-api/utility/GetLocalNetworkConnection"},next:{title:"OpenBuiltInBrowser",permalink:"/open-api-pure-csharp/native-base-api/OpenBuiltInBrowser"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CmdSubtractHealth",id:"cmdsubtracthealth",level:3},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"CmdAddHealth",id:"cmdaddhealth",level:3},{value:"Description",id:"description-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Event",id:"event",level:4},{value:"Example",id:"example",level:4},{value:"CmdLevelUp",id:"cmdlevelup",level:3},{value:"Description",id:"description-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Event",id:"event-1",level:4},{value:"Example",id:"example-1",level:4},{value:"CmdDegradeLevel",id:"cmddegradelevel",level:3},{value:"Description",id:"description-4",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Event",id:"event-2",level:4},{value:"Example",id:"example-2",level:4},{value:"CmdSetObjectName",id:"cmdsetobjectname",level:3},{value:"Description",id:"description-5",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Event",id:"event-3",level:4},{value:"Example",id:"example-3",level:4},{value:"CmdUpdateCustomProperties",id:"cmdupdatecustomproperties",level:3},{value:"Description",id:"description-6",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Event",id:"event-4",level:4},{value:"Example",id:"example-4",level:4}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The NetworkPropertiesSync component will provide properties for the NetworkGameObject. Such as the object's health, level, name, etc."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetHealth"),(0,r.kt)("td",{parentName:"tr",align:null},"Int Current"),(0,r.kt)("td",{parentName:"tr",align:null},"entity health value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetObjectLevel"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"Current entity level value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetObjectName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Current entity name value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetCustomProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Current entity custom properties value")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"Register a callback event for listen the value change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> HealthSyncedCallback;\npublic Action<int, NetworkIdentity> ObjectLevelSyncedCallback;\npublic Action<string, NetworkIdentity> ObjectNameSyncedCallback;\npublic Action<string, NetworkIdentity> CustomPropertiesSyncedCallback;\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"cmdsubtracthealth"},"CmdSubtractHealth"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Change entity health value. You can register for Health value change events to listen for value changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdSubtractHealth(int _newValue,NetworkIdentity _sender)\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connection"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","newValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of health to be subtracted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,r.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cmdaddhealth"},"CmdAddHealth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdAddHealth(int _newValue,NetworkIdentity _sender)\n")),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Change entity health value and sync to all user."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connection"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","newValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of health to be subtracted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,r.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,r.kt)("h4",{id:"event"},"Event"),(0,r.kt)("p",null,"Developer can register for Health value change event to listen for value changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> HealthSyncedCallback;\n")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().HealthSyncedCallback += (_health,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cmdlevelup"},"CmdLevelUp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdLevelUp(int _additionLevel,NetworkIdentity _sender)\n")),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"Change entity level value and sync to all user."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connection"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","additionLevel"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of level to be up")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,r.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,r.kt)("h4",{id:"event-1"},"Event"),(0,r.kt)("p",null,"Developer can register for Level value change event to listen for value changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> ObjectLevelSyncedCallback;\n")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().ObjectLevelSyncedCallback += (_level_,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cmddegradelevel"},"CmdDegradeLevel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdDegradeLevel(int _level, NetworkIdentity _sender)\n")),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"Change the entity level value. You can register Level value change events to listen for value changes."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connection"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","level"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of level to be degrade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,r.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,r.kt)("h4",{id:"event-2"},"Event"),(0,r.kt)("p",null,"Developer can register for Level value change event to listen for value changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> ObjectLevelSyncedCallback;\n")),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().ObjectLevelSyncedCallback += (_level_,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cmdsetobjectname"},"CmdSetObjectName"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdSetObjectName(string _name,NetworkIdentity _sender)\n")),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"Name your gameobject and sync to all user."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connection"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of name to set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,r.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender of the operation. e.g. Player attack to enemy, the sender is player")))),(0,r.kt)("h4",{id:"event-3"},"Event"),(0,r.kt)("p",null,"Developer can register for name value change event to listen for value changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<float, NetworkIdentity> ObjectNameSyncedCallback;\n")),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().ObjectNameSyncedCallback += (_name_,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cmdupdatecustomproperties"},"CmdUpdateCustomProperties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void CmdUpdateCustomProperties(string _customProperties,NetworkIdentity _sender)\n")),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"In addition to the above Properties, additional Properties can be added and sync to all user."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Connection"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","customProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"Incoming custom properties value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_","sender"),(0,r.kt)("td",{parentName:"tr",align:null},"NetworkIdentity"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender of the operation")))),(0,r.kt)("h4",{id:"event-4"},"Event"),(0,r.kt)("p",null,"Developer can register for custom data change event to listen for value changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Action<string, NetworkIdentity> CustomPropertiesSyncedCallback;\n")),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Getcomponent<NetworkPropertiesSync>().CustomPropertiesSyncedCallback += (_customdata,_sender)=>{\n    //TODO: YOUR Logic code here\n}\n")))}u.isMDXComponent=!0}}]);