"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2,description:"Install the XRMOD Engine development kit to build XR experience content with a standardized process."},l="Install Dev-tools",o={unversionedId:"prepare-for-developer/install-xrmod-dev-tools",id:"prepare-for-developer/install-xrmod-dev-tools",title:"Install Dev-tools",description:"Install the XRMOD Engine development kit to build XR experience content with a standardized process.",source:"@site/docs/experience-manual/prepare-for-developer/install-xrmod-dev-tools.md",sourceDirName:"prepare-for-developer",slug:"/prepare-for-developer/install-xrmod-dev-tools",permalink:"/experience-manual/prepare-for-developer/install-xrmod-dev-tools",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/experience-manual/prepare-for-developer/install-xrmod-dev-tools.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Install the XRMOD Engine development kit to build XR experience content with a standardized process."},sidebar:"tutorialSidebar",previous:{title:"Install Unity Engine",permalink:"/experience-manual/prepare-for-developer/install-unityengine"},next:{title:"Initialize Visual Scripting",permalink:"/experience-manual/prepare-for-developer/initialize-visual-scripting"}},p={},s=[{value:"Add Registries",id:"add-registries",level:2},{value:"Install packages",id:"install-packages",level:2},{value:"Initialize the project",id:"initialize-the-project",level:2}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-dev-tools"},"Install Dev-tools"),(0,r.kt)("p",null,"In the previous chapter, we have installed Unity and created a Unity project. Next, we need to install the XRMOD development kit. Before the project starts, we need to install the XRMOD Kit using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Unity Package Manager")," ."),(0,r.kt)("h2",{id:"add-registries"},"Add Registries"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Unity Editor and create an URP project"),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Unity Package Manager")," registries through ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit"),"->",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectSetting"),"->",(0,r.kt)("inlineCode",{parentName:"li"},"Package Manager")),(0,r.kt)("li",{parentName:"ol"},"Typing inthe form below in ",(0,r.kt)("inlineCode",{parentName:"li"},"Package Manager"),"->",(0,r.kt)("inlineCode",{parentName:"li"},"Scoped Registries"),", checked the ",(0,r.kt)("inlineCode",{parentName:"li"},"enable Preview Packages")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Enable Pre-release Packages"),", then click Apply to save your setings.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Scope(s)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PhantomsXR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://registry.npmjs.org"},"https://registry.npmjs.org")),(0,r.kt)("td",{parentName:"tr",align:null},"com.phantomsxr")))),(0,r.kt)("coverimg",{url:n(28998)}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"Unity Package Manager")," via ",(0,r.kt)("inlineCode",{parentName:"li"},"Window")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"Package Manager")," in the top menu bar"),(0,r.kt)("li",{parentName:"ol"},"Switch the ",(0,r.kt)("inlineCode",{parentName:"li"},"registry")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"My Registries")," again and you will see all development packages.")),(0,r.kt)("coverimg",{url:n(53511)}),(0,r.kt)("h2",{id:"install-packages"},"Install packages"),(0,r.kt)("p",null,"Initialize our Unity project by installing ",(0,r.kt)("inlineCode",{parentName:"p"},"XRMOD Engine Settings"),", and then install the corresponding Package according to the platform you need to develop."),(0,r.kt)("coverimg",{url:n(27479)}),(0,r.kt)("admonition",{title:"s",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Here is an example of handheldAR:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"XRMOD Engine SEtgings")),(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"HandHeldAR")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"XRMOD IL Core")))),(0,r.kt)("h2",{id:"initialize-the-project"},"Initialize the project"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectSettings")," panel via ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectSettings"),". Then to find the PhantomsXR tab and expand it, switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"XR-MOD Engine SDK Settings"),". Select the platform you want to develop on in the SDK settings, then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply")," button in the upper right corner to save your choice."),(0,r.kt)("coverimg",{url:n(17490)}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If there is a red ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," icon under Environment Settings, please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fix")," button on the right to fix it.")))}c.isMDXComponent=!0},17490:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/unity-Initialize-xrmod-fcecafb347370ed2b2a4c5df68b1bd19.png"},27479:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/unity-install-packages-2b9ecaf8dc5350aa719f930450580477.png"},28998:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/unity-package-registries-setup-9c22b63c95e61696c259f5ca21e40b1b.png"},53511:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/unity-swtich-registries-6a96e2e10cbd9b11adf26f00bc6b1d5a.jpg"}}]);