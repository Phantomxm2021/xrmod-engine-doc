"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},83396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"api-reference/xrmod-api/GetLayoutInflater",id:"api-reference/xrmod-api/GetLayoutInflater",title:"GetLayoutInflater",description:"Description",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-android-sdk/current/api-reference/xrmod-api/GetLayoutInflater.md",sourceDirName:"api-reference/xrmod-api",slug:"/api-reference/xrmod-api/GetLayoutInflater",permalink:"/xrmod-engine-doc/zh-Hans/android-sdk/api-reference/xrmod-api/GetLayoutInflater",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/android-sdk/api-reference/xrmod-api/GetLayoutInflater.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetARMODFrameLayout",permalink:"/xrmod-engine-doc/zh-Hans/android-sdk/api-reference/xrmod-api/GetARMODFrameLayout"},next:{title:"InitARMOD",permalink:"/xrmod-engine-doc/zh-Hans/android-sdk/api-reference/xrmod-api/InitARMOD"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Return",id:"return",level:2},{value:"Method",id:"method",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"\u5c06\u4e00\u4e2a\u5e03\u5c40\u7684 XML \u6587\u4ef6\u5b9e\u4f8b\u5316\u4e3a\u5176\u76f8\u5e94\u7684 android.view.View \u5bf9\u8c61\u3002\u5b83\u4ece\u4e0d\u88ab\u76f4\u63a5\u4f7f\u7528\u3002\u76f8\u53cd\uff0c\u4f7f\u7528 android.app.Activity#getLayoutInflater()\u6216 Context#getSystemService \u6765\u68c0\u7d22\u4e00\u4e2a\u6807\u51c6\u7684 LayoutInflater \u5b9e\u4f8b\uff0c\u8be5\u5b9e\u4f8b\u5df2\u7ecf\u4e0e\u5f53\u524d\u4e0a\u4e0b\u6587\u6302\u94a9\uff0c\u5e76\u4e3a\u4f60\u6240\u8fd0\u884c\u7684\u8bbe\u5907\u6b63\u786e\u914d\u7f6e\u3002\u8981\u4e3a\u81ea\u5df1\u7684\u89c6\u56fe\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u989d\u5916\u5de5\u5382\u7684\u65b0 LayoutInflater\uff0c\u53ef\u4ee5\u4f7f\u7528 cloneInContext \u6765\u514b\u9686\u4e00\u4e2a\u73b0\u6709\u7684 ViewFactory\uff0c\u7136\u540e\u5bf9\u5176\u8c03\u7528 setFactory \u4ee5\u5305\u542b\u4f60\u7684\u5de5\u5382\u3002\u7531\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u89c6\u56fe\u81a8\u80c0\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u4f9d\u8d56\u4e8e\u5728\u6784\u5efa\u65f6\u5bf9 XML \u6587\u4ef6\u7684\u9884\u5904\u7406\u3002\u56e0\u6b64\uff0c\u76ee\u524d\u4e0d\u53ef\u80fd\u5728\u8fd0\u884c\u65f6\u5c06 LayoutInflater \u4e0e XmlPullParser \u4e00\u8d77\u4f7f\u7528\u5728\u4e00\u4e2a\u666e\u901a\u7684 XML \u6587\u4ef6\u4e0a\uff1b\u5b83\u53ea\u9002\u7528\u4e8e\u4ece\u7f16\u8bd1\u7684\u8d44\u6e90\u4e2d\u8fd4\u56de\u7684 XmlPullParser"),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LayoutInflater"),(0,a.kt)("td",{parentName:"tr",align:null},"android view objects")))),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public LayoutInflater getLayoutInflater()\n")))}d.isMDXComponent=!0}}]);