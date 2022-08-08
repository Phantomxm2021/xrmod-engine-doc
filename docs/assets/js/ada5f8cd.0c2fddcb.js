"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[9064],{55312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(44681);const o={sidebar_position:2,title:"MonoBehaviour binder",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"monobehaviour in xrmod."},i=void 0,d={unversionedId:"dev-tools/binding-monobehaviour",id:"dev-tools/binding-monobehaviour",title:"MonoBehaviour binder",description:"monobehaviour in xrmod.",source:"@site/docs/experience-manual/dev-tools/binding-monobehaviour.mdx",sourceDirName:"dev-tools",slug:"/dev-tools/binding-monobehaviour",permalink:"/experience-manual/dev-tools/binding-monobehaviour",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/dev-tools/binding-monobehaviour.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"MonoBehaviour binder",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"monobehaviour in xrmod."},sidebar:"tutorialSidebar",previous:{title:"Package Tools Editor",permalink:"/experience-manual/dev-tools/package-tools"},next:{title:"Rendering Assistant",permalink:"/experience-manual/dev-tools/prefab-baker"}},u={},m=[{value:"Intro",id:"intro",level:2},{value:"How to use it",id:"how-to-use-it",level:2},{value:"Manual",id:"manual",level:3},{value:"Auto Convert",id:"auto-convert",level:3}],s={toc:m};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.html"},"MonoBehaviour")," is the base class from which every Unity script derives.When you use C#, you must explicitly derive from MonoBehaviour."),(0,r.kt)("p",null,"In XR MOD development, we cannot directly drag and drop Monobehaviour into game objects."),(0,r.kt)("coverimg",{url:a(73992)}),(0,r.kt)("p",null,"Even if the traditional drag-and-drop is not supported, we provide another way to bind MonoBehaviour. We call it Mono Binder."),(0,r.kt)("coverimg",{url:a(60263)}),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,r.kt)("h3",{id:"manual"},"Manual"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add MonoBinder to your own game object"),(0,r.kt)("li",{parentName:"ul"},"Typing your script namespace and class name"),(0,r.kt)("li",{parentName:"ul"},"Click the Binding button")),(0,r.kt)("p",null,"Well done! You have mastered how to use monobinder. You may not understand the panel parameters. Next, we will Introduction the function and usage of each parameter of the panel in detail."),(0,r.kt)("coverimg",{url:a(69923)}),(0,r.kt)("center",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"ScriptList"),(0,r.kt)("td",{parentName:"tr",align:null},"MonoBehaviour list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Element"),(0,r.kt)("td",{parentName:"tr",align:null},"MonoBehaviour binding configure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"ClassNamespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Your script namespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"ClassName"),(0,r.kt)("td",{parentName:"tr",align:null},"Your script class name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Fields"),(0,r.kt)("td",{parentName:"tr",align:null},"All public fields in the script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"FieldName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the field in the script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the field in the script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow you drag-and-drop gameobjec for it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"FieldType"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the field in the script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto-Binding"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto binding fields")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Refresh"),(0,r.kt)("td",{parentName:"tr",align:null},"Refresh bound fields and remove uselessfields")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Clean"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove all binding"))))),(0,r.kt)("h3",{id:"auto-convert"},"Auto Convert"),(0,r.kt)(l.Z,{imagePath:a(27397),mdxType:"ImageWithText"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Write a C# script"),(0,r.kt)("li",{parentName:"ul"},"Extends ",(0,r.kt)("inlineCode",{parentName:"li"},"XRMODBehaviour")," script"),(0,r.kt)("li",{parentName:"ul"},"Write logic code according to the workflow of Unity Monobehaviour"),(0,r.kt)("li",{parentName:"ul"},"Add your script to Unity-GameObject"),(0,r.kt)("li",{parentName:"ul"},"You will see this script component has a button call ",(0,r.kt)("inlineCode",{parentName:"li"},"Convert To MonoBinder")," and click it"))))}p.isMDXComponent=!0},44681:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const r="column_RQPg",l="container_GoNi";var o=a(71455);function i(e){let{children:t,imagePath:a}=e;return n.createElement("div",{className:l},n.createElement("div",{className:r},n.createElement(o.TV,null,n.createElement(o.HI,{src:a.default},n.createElement("img",{src:a.default,alt:"",style:{borderRadius:"1rem",objectFit:"fill"}})))),n.createElement("div",null,t))}},27397:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/ConvertToMonoBinder-5d3a753774d6b3001008bcea99a68350.png"},73992:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/DragAndDropMonoBehaviour-81967b6f5276a1aac480cc92e7d7be65.gif"},60263:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/MonoBinder-f59ed55d2728b84d5e3ae887a3e4838d.gif"},69923:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/MonoBinderDetail-cc53f53a0ef1beef1c07ebce577c1f69.png"}}]);