"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1058],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return o?a.createElement(m,i(i({ref:t},u),{},{components:o})):a.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},73914:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const r={sidebar_position:7,title:"Object Capture"},i=void 0,l={unversionedId:"dev-tools/object-capture",id:"dev-tools/object-capture",title:"Object Capture",description:"Turn photos from your iPhone or iPad into high\u2011quality 3D models that are optimized for AR using the new Object Capture API on macOS Monterey. Object Capture uses photogrammetry to turn a series of pictures taken on your iPhone or iPad into USDZ files that can be viewed in AR Quick Look, seamlessly integrated into your Xcode project, or used in professional 3D content workflows.",source:"@site/docs/experience-manual/dev-tools/object-capture.mdx",sourceDirName:"dev-tools",slug:"/dev-tools/object-capture",permalink:"/experience-manual/dev-tools/object-capture",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/experience-manual/dev-tools/object-capture.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Object Capture"},sidebar:"tutorialSidebar",previous:{title:"Simulator",permalink:"/experience-manual/dev-tools/simulator"},next:{title:"AR Algorithm Block",permalink:"/experience-manual/arblock/ar-algorithm-block"}},s={},c=[{value:"Get Started",id:"get-started",level:2},{value:"Select the object you want to generate",id:"select-the-object-you-want-to-generate",level:3},{value:"Take a group shot around an object",id:"take-a-group-shot-around-an-object",level:3},{value:"Load image to create 3D model",id:"load-image-to-create-3d-model",level:3},{value:"Start building",id:"start-building",level:3},{value:"Take Photo Guide",id:"take-photo-guide",level:2},{value:"Subject selection",id:"subject-selection",level:2},{value:"Environment",id:"environment",level:2},{value:"Camera Movement",id:"camera-movement",level:3},{value:"Object Moving",id:"object-moving",level:3},{value:"Shooting Tips",id:"shooting-tips",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Turn photos from your iPhone or iPad into high\u2011quality 3D models that are optimized for AR using the new Object Capture API on macOS Monterey. Object Capture uses photogrammetry to turn a series of pictures taken on your iPhone or iPad into USDZ files that can be viewed in AR Quick Look, seamlessly integrated into your Xcode project, or used in professional 3D content workflows."),(0,n.kt)("h2",{id:"get-started"},"Get Started"),(0,n.kt)("h3",{id:"select-the-object-you-want-to-generate"},"Select the object you want to generate"),(0,n.kt)("p",null,"In the selection of objects, choose static objects that are not easy to bend or deform, and avoid using very thin, transparent or translucent objects; at the same time, there may be problems in the generation of objects with solid colors, smooth surfaces, and reflective materials"),(0,n.kt)("h3",{id:"take-a-group-shot-around-an-object"},"Take a group shot around an object"),(0,n.kt)("p",null,"Move the camera around the object and take photos from different angles and heights, with at least 70% overlap between adjacent photos. It is recommended to take at least 30 photos"),(0,n.kt)("coverimg",{url:o(70431),height:"100%"}),(0,n.kt)("h3",{id:"load-image-to-create-3d-model"},"Load image to create 3D model"),(0,n.kt)("coverimg",{url:o(64702),height:"100%"}),(0,n.kt)("coverimg",{url:o(90229),height:"100%"}),(0,n.kt)("h3",{id:"start-building"},"Start building"),(0,n.kt)("p",null,"Start building the model by clicking the Process button; the parameter settings on the left can refine the model structure and effects. The output path of the built model must be placed in the image source folder."),(0,n.kt)("coverimg",{url:o(69494),height:"100%"}),(0,n.kt)("h2",{id:"take-photo-guide"},"Take Photo Guide"),(0,n.kt)("h2",{id:"subject-selection"},"Subject selection"),(0,n.kt)("p",null,"The following descriptions apply to most cases, and there are special cases in a small number of cases. In theory, the quality of photo shooting can improve the modeling effect of the generated objects."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Quality"),(0,n.kt)("th",{parentName:"tr",align:null},"Requirements"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Good"),(0,n.kt)("td",{parentName:"tr",align:null},"Rich texture, non-reflective, medium size"),(0,n.kt)("td",{parentName:"tr",align:null},"Shoes, food, some figures, plush toys, bronzes, stones, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Normal"),(0,n.kt)("td",{parentName:"tr",align:null},"Objects are weak texture, slightly reflective, thin, hollow"),(0,n.kt)("td",{parentName:"tr",align:null},"Beverages, green plants, ceramic utensils, cars, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Good"),(0,n.kt)("td",{parentName:"tr",align:null},"Repeated textures, ultra-thin and ultra-fine objects, no textures/large reflections, flexible objects, transparent, hollow, looking up, etc."),(0,n.kt)("td",{parentName:"tr",align:null},"Glasses, stationery pens, books, mobile phones, etc.")))),(0,n.kt)("h2",{id:"environment"},"Environment"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The environment will directly affect the model quality, please arrange the environment before shooting.")),(0,n.kt)("h3",{id:"camera-movement"},"Camera Movement"),(0,n.kt)("p",null,"Fix the object to be photographed, and take pictures from different angles by moving the camera. In this shooting mode, choose a clean, solid color background, such as a white wall, etc. It is recommended to use a stabilizer and other equipment to ensure the quality of the photos taken."),(0,n.kt)("h3",{id:"object-moving"},"Object Moving"),(0,n.kt)("p",null,"Turntable shooting, place the object on the turntable, turn the turntable, and keep the mobile phone stationary for shooting. To ensure a clean background, it is recommended to choose a white wall or cover the background."),(0,n.kt)("h3",{id:"shooting-tips"},"Shooting Tips"),(0,n.kt)("p",null,"The screen ratio of the object in the shooting should be as large and complete as possible, and it is required to ensure that the shooting has no virtual focus, no motion blur, and no jitter blur. Comprehensive and multi-perspective shooting of objects, including looking up, looking up, looking down, etc."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lighting: need to ensure adequate lighting and avoid a lot of shadows"),(0,n.kt)("li",{parentName:"ul"},"Shooting equipment: camera, mobile phone can be used to avoid blurred objects due to depth of field, disable flash")),(0,n.kt)("coverimg",{url:o(53475),fit:"contain",height:"25rem"}),(0,n.kt)("coverimg",{url:o(903),fit:"contain",height:"25rem"}),(0,n.kt)("p",null,"Provide multiple photos of the same object from different angles, as shown in the figure, take a circle at each angle, and provide 3 to 4 angle pictures; if you need to generate a position that cannot be photographed, such as the bottom, you need to further provide the model's side lying. Take pictures."),(0,n.kt)("p",null,"When moving around the subject, there should be at least 70% overlap between adjacent photos. It is recommended to take at least 30 photos to provide more pictures and help generate higher quality 3D models."))}d.isMDXComponent=!0},70431:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const a=o.p+"assets/images/all-photos-d08ad7311a1be75f43ae79d7098a87ad.png"},64702:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const a=o.p+"assets/images/objectcapture-1-a31badb8dbcc1ab31ca6903c0836a53e.png"},90229:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const a=o.p+"assets/images/objectcapture-2-5b9a7bb880cca64241a42ee9de01396c.png"},69494:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const a=o.p+"assets/images/objectcapture-3-306ab75919dacda9ba43316c574601f6.png"},53475:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const a=o.p+"assets/images/objectcapture-4-033e75d10b152cdff876612bcf31d7e3.png"},903:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const a=o.p+"assets/images/objectcapture-5-db46212ac9200427deeed594ea4f5a8e.png"}}]);