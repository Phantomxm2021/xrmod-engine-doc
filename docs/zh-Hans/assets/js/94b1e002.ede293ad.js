"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[5032],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>p});var r=t(67294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,r,n=function(e,A){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var A=r.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):i(i({},A),e)),t},c=function(e){var A=s(e.components);return r.createElement(l.Provider,{value:A},e.children)},u={inlineCode:"code",wrapper:function(e){var A=e.children;return r.createElement(r.Fragment,{},A)}},d=r.forwardRef((function(e,A){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),p=n,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return t?r.createElement(m,i(i({ref:A},c),{},{components:t})):r.createElement(m,i({ref:A},c))}));function p(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in A)hasOwnProperty.call(A,l)&&(o[l]=A[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87071:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const a={sidebar_position:4,title:"Visualizer Block"},i=void 0,o={unversionedId:"arblock/visualizer-block",id:"arblock/visualizer-block",title:"Visualizer Block",description:"Custom Plane Visualizer",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-experience-manual/current/arblock/visualizer-block.mdx",sourceDirName:"arblock",slug:"/arblock/visualizer-block",permalink:"/zh-Hans/experience-manual/arblock/visualizer-block",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/arblock/visualizer-block.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Visualizer Block"},sidebar:"tutorialSidebar",previous:{title:"Programmable Block",permalink:"/zh-Hans/experience-manual/arblock/programmable-block"},next:{title:"Features",permalink:"/zh-Hans/experience-manual/arblock/features"}},l={},s=[{value:"Custom Plane Visualizer",id:"custom-plane-visualizer",level:2},{value:"Visualizer Name",id:"visualizer-name",level:3},{value:"Point Cloud Visualizer",id:"point-cloud-visualizer",level:2},{value:"Visualizer Name",id:"visualizer-name-1",level:3}],c={toc:s};function u(e){let{components:A,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"custom-plane-visualizer"},"Custom Plane Visualizer"),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49\u5e73\u9762\u53ef\u89c6\u5316\u5668\uff0c\u901a\u8fc7 SLAM \u7b97\u6cd5\u627e\u5230\u5e73\u9762\uff0c\u5e76\u7528\u53ef\u89c6\u5316\u5668\u663e\u793a\u3002"),(0,n.kt)("coverimg",{url:t(74659),height:"25rem",padding:"2"}),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"\u5728 SLAM \u6a21\u5f0f\u4e0b\u653e\u7f6e AR \u865a\u62df\u4f53\u7684\u5fc5\u8981\u7ec4\u4ef6\uff0c\u662f\u5426\u65e0\u6cd5\u5728 AR \u4e16\u754c\u4e2d\u653e\u7f6e\u4efb\u4f55 AR \u865a\u62df\u4f53\u3002")),(0,n.kt)("h3",{id:"visualizer-name"},"Visualizer Name"),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49\u53ef\u89c6\u5316\u5668\u7684\u540d\u79f0\u5fc5\u987b\u5305\u542b\u5728 AR \u4f53\u9a8c\u5305\u4e2d\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u7684\u53ef\u89c6\u5316\u5668\u53ef\u4ee5\u901a\u8fc7\u5757\u83dc\u5355\u9009\u62e9\u3002")),(0,n.kt)("coverimg",{url:t(43965),height:"100%",padding:"0"}),(0,n.kt)("h2",{id:"point-cloud-visualizer"},"Point Cloud Visualizer"),(0,n.kt)("p",null,"\u901a\u8fc7\u5b9a\u5236\u7684\u70b9\u4e91\u53ef\u89c6\u5316\u5668\uff0cAR \u8bbe\u5907\u4f7f\u7528\u8bbe\u5907\u7684\u6444\u50cf\u5934\u548c\u56fe\u50cf\u5206\u6790\u6765\u8ffd\u8e2a\u4e16\u754c\u4e0a\u7684\u7279\u5b9a\u70b9\uff0c\u5e76\u4f7f\u7528\u8fd9\u4e9b\u70b9\u6765\u6784\u5efa\u5176\u73af\u5883\u5730\u56fe\u3002\n\u70b9\u4e91\u662f\u4e00\u7ec4\u7279\u5f81\u70b9\uff0c\u5728\u6bcf\u4e00\u5e27\u4e4b\u95f4\u90fd\u53ef\u4ee5\u6539\u53d8\u3002\u4e00\u4e9b\u5e73\u53f0\u53ea\u751f\u6210\u4e00\u4e2a\u70b9\u4e91\uff0c\u800c\u5176\u4ed6\u5e73\u53f0\u5219\u5c06\u5176\u7279\u5f81\u70b9\u7ec4\u7ec7\u5230\u7a7a\u95f4\u7684\u4e0d\u540c\u533a\u57df\u7684\u4e0d\u540c\u70b9\u4e91\u4e2d\u3002\n\u70b9\u4e91\u88ab\u8ba4\u4e3a\u662f\u53ef\u8ffd\u8e2a\u7684\uff0c\u800c\u5355\u4e2a\u7279\u5f81\u70b9\u5219\u4e0d\u662f\u3002\u7136\u800c\uff0c\u7531\u4e8e\u7279\u5f81\u70b9\u5177\u6709\u552f\u4e00\u7684\u6807\u8bc6\u7b26\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728\u5404\u5e27\u4e4b\u95f4\u8fdb\u884c\u552f\u4e00\u8bc6\u522b\u3002"),(0,n.kt)("coverimg",{url:t(56175),height:"25rem"}),(0,n.kt)("h3",{id:"visualizer-name-1"},"Visualizer Name"),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49\u53ef\u89c6\u5316\u5668\u7684\u540d\u79f0\u5fc5\u987b\u5305\u542b\u5728 AR \u4f53\u9a8c\u5305\u4e2d\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u7684\u53ef\u89c6\u5316\u5668\u53ef\u4ee5\u901a\u8fc7\u5757\u83dc\u5355\u9009\u62e9\u3002")),(0,n.kt)("coverimg",{url:t(81693),height:"100%",padding:"0"}))}u.isMDXComponent=!0},74659:(e,A,t)=>{t.r(A),t.d(A,{default:()=>r});const r=t.p+"assets/images/feathered-planes-e7fb411240cb78d552ec9a887565cd00.png"},43965:(e,A,t)=>{t.r(A),t.d(A,{default:()=>r});const r=t.p+"assets/images/plane-visualizer-block-ce2f86d27257ce6ed922b2c941bed4f3.png"},81693:(e,A,t)=>{t.r(A),t.d(A,{default:()=>r});const r="data:image/png;base64,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"},56175:(e,A,t)=>{t.r(A),t.d(A,{default:()=>r});const r=t.p+"assets/images/point-cloud-visualizer-b8a6511e8293d4873ff3597fc16bd339.png"}}]);