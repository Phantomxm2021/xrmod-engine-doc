"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[8285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"How To Mapping The World"},i=void 0,p={unversionedId:"tutorial-basics/how-to-mapping-the-world",id:"tutorial-basics/how-to-mapping-the-world",title:"How To Mapping The World",description:"A Feature Point is a distinct, high-contrast visual feature in an image. A corner of a poster on the wall, the grain on a wooden floor or a detail in the facade of a building.",source:"@site/docs/experience-manual/tutorial-basics/how-to-mapping-the-world.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/how-to-mapping-the-world",permalink:"/zh-Hans/experience-manual/tutorial-basics/how-to-mapping-the-world",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/tutorial-basics/how-to-mapping-the-world.md",tags:[],version:"current",frontMatter:{title:"How To Mapping The World"},sidebar:"tutorialSidebar",previous:{title:"Create An AR World Experience",permalink:"/zh-Hans/experience-manual/tutorial-basics/create-an-ar-world-experience"},next:{title:"Offical Examples",permalink:"/zh-Hans/experience-manual/examples/offical-examples"}},l={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A ",(0,a.kt)("strong",{parentName:"p"},"Feature Point")," is a distinct, high-contrast visual feature in an image. A corner of a poster on the wall, the grain on a wooden floor or a detail in the facade of a building.")),(0,a.kt)("p",null,"Map construction works by finding the same ",(0,a.kt)("strong",{parentName:"p"},"Feature Points")," in multiple images from different viewpoints and estimating the 3D structure of scene by triangulating those feature points."),(0,a.kt)("p",null,"It is important to try to cover the target environment from multiple viewpoints and possibly different distances if necessary."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You should aim to have even as much as 50% overlap between images you want to match.",(0,a.kt)("br",{parentName:"p"}),"\n","For best results, the same Feature Points should be matched in at least 3 different images")),(0,a.kt)("p",null,"When mapping, our ",(0,a.kt)("strong",{parentName:"p"},"Mapping App")," will notify you if subsequent images can be connected by matching ",(0,a.kt)("strong",{parentName:"p"},"Feature Points"),"."),(0,a.kt)("p",null,"Below is an illustration of 9 captured images and how they connect to each other."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Keep in mind that not all sequential images need to connect!",(0,a.kt)("br",{parentName:"p"}),"\n","The above images were captured in sequence, and images 3 and 4 are not connected to each other. That does not matter as, for example,  image 3 will connect to 1, 2 and 9 when the map is constructed.")))}u.isMDXComponent=!0}}]);