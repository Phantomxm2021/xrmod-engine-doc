"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[8359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(b,i(i({ref:t},s),{},{components:a})):r.createElement(b,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),o=a(61422);const i={title:"ARRaycast"},l=void 0,c={unversionedId:"ar-base-api/ARRaycast",id:"ar-base-api/ARRaycast",title:"ARRaycast",description:"Description",source:"@site/docs/open-api-pure-csharp/ar-base-api/ARRaycast.md",sourceDirName:"ar-base-api",slug:"/ar-base-api/ARRaycast",permalink:"/open-api-pure-csharp/ar-base-api/ARRaycast",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/open-api-pure-csharp/ar-base-api/ARRaycast.md",tags:[],version:"current",frontMatter:{title:"ARRaycast"},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/open-api-pure-csharp/"},next:{title:"ChangeARAlgorithmLife",permalink:"/open-api-pure-csharp/ar-base-api/ChangeARAlgorithmLife"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Method",id:"method",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{src:"/static/videos/ARRaycast.mp4",className:"custom-video-showcase",mdxType:"VideoPlayer"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Cast a ray from a point in screen space against trackables, i.e., detected features such as planes."),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"_","screenPoint"),(0,n.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,n.kt)("td",{parentName:"tr",align:null},"The point, in device screen pixels, from which to cast.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"_","trackableType"),(0,n.kt)("td",{parentName:"tr",align:null},"TrackableTypeEnum"),(0,n.kt)("td",{parentName:"tr",align:null},"The types of trackables to cast against.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"_","callback"),(0,n.kt)("td",{parentName:"tr",align:null},"Action","<","Pose",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Contents are replaced with the raycast results, if successful.")))),(0,n.kt)("h3",{id:"method"},"Method"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void ARRaycast(Vector3 _screenPoint,TrackableTypeEnum _trackableType,Action%<%Pose%>% _callback)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'internal static API ARMODAPI = new API(nameof(APITest));\nprivate GameObject cubePrefab;\npublic async void OnLoad()\n{\n    cubePrefab = await ARMODAPI.LoadAssetAsync<GameObject>("Cube");\n}\npublic void OnUpdate()\n{\n    if (!Input.GetMouseButtonDown(0)) return;\n    ARMODAPI.ARRaycast(Input.mousePosition, TrackableTypeEnum.AllTypes, _pose =>\n    {\n        var tmp_CubeClone = GameObject.Instantiate(cubePrefab);\n        tmp_CubeClone.SetActive(false);\n        var tmp_CubeCloneTrans = tmp_CubeClone.transform;\n        tmp_CubeCloneTrans.SetPositionAndRotation(_pose.position, _pose.rotation);\n        tmp_CubeClone.SetActive(true);\n    });\n}\n')))}m.isMDXComponent=!0},61422:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(87462),n=a(67294),o=a(86010);function i(e){let{src:t,mobile:a,className:i,...l}=e;return n.createElement("video",(0,r.Z)({className:(0,o.Z)("dyte-video-showcase",i,a&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},l))}}}]);