"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"Intruduce"},i=void 0,l={unversionedId:"multiplayer-api/network-callbacks/Intro",id:"multiplayer-api/network-callbacks/Intro",title:"Intruduce",description:"There are a number of events relating to network behaviours that can occur over the course of a normal multiplayer game. These include events such as the host starting up, a player joining, or a player leaving. Each of these possible events has an associated callback that you can implement in your own code to take action when the event occurs.",source:"@site/docs/open-api-pure-csharp/multiplayer-api/network-callbacks/Intro.md",sourceDirName:"multiplayer-api/network-callbacks",slug:"/multiplayer-api/network-callbacks/Intro",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/network-callbacks/Intro",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-pure-csharp/multiplayer-api/network-callbacks/Intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intruduce"},sidebar:"tutorialSidebar",previous:{title:"Start as a server",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/connection/StartAsServer"},next:{title:"Client",permalink:"/zh-Hans/open-api-pure-csharp/multiplayer-api/network-callbacks/Client"}},c={},s=[{value:"Example",id:"example",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are a number of events relating to network behaviours that can occur over the course of a normal multiplayer game. These include events such as the host starting up, a player joining, or a player leaving. Each of these possible events has an associated callback that you can implement in your own code to take action when the event occurs."),(0,a.kt)("p",null,"When you add NetworkingCallbacks to your game object, you can access all the Networking callbacks events and register your own methods for what should happen when those events occur. To do this, you register to implement custom logic with the corresponding Callbacks events of the NetworkingCallbacks component, i.e. what should happen when a given event occurs."),(0,a.kt)("p",null,"Event sinks use the delegation design model. The purpose is to respond to RPC and Attribute synchronization in the network framework.XR-MOD is divided into two parts: ",(0,a.kt)("inlineCode",{parentName:"p"},"event implementation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"event triggering"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All event callbacks registered must be in OnEnable or Awake.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example we have two parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We register ",(0,a.kt)("inlineCode",{parentName:"li"},"ClientStringAction")," on OnEnable or Awake Method and implement event logic"),(0,a.kt)("li",{parentName:"ol"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"ClientStringSender")," (execute logic on the client side)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Register event"',title:'"Register','event"':!0},'private void Awake()\n{\n    networkCallbacks.ClientStringAction ??= new Dictionary<string, Action<string, NetworkIdentity>>();\n    networkCallbacks.ClientStringAction.TryAdd(CONST_SHOOTING_EVENT, (_data, _sender) =>\n    {\n        //TODO: Game Logic will to sync\n        Debug.Log($"The Traffica Light color is {_data}");\n    });\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Trigger event"',title:'"Trigger','event"':!0},'internal void SendTrafficLightCommand()\n{\n    //Trigger event\n    networkCallbacks.ClientStringSender(CONST_SHOOTING_EVENT, "Red Light", this.NetworkIdentity);\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientStringSender")," method, it should be noted that the name of the event triggered by the method must be the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"registered event name"),", otherwise it cannot be executed.")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);