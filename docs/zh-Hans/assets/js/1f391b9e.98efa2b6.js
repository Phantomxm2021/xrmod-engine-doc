"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[3085],{14247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(67294),a=n(86010),r=n(8264),c=n(35281),i=n(20774),o=n(45042),s=n(39407);const m="mdxPageWrapper_j9I6";function d(e){const{content:t}=e,{metadata:{title:n,description:d,frontMatter:u}}=t,{wrapperClassName:f,hide_table_of_contents:v}=u;return l.createElement(r.FG,{className:(0,a.Z)(null!=f?f:c.k.wrapper.mdxPages,c.k.page.mdxPage)},l.createElement(r.d,{title:n,description:d}),l.createElement(i.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,a.Z)("row",m)},l.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},l.createElement("article",null,l.createElement(o.Z,null,l.createElement(t,null)))),!v&&t.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(s.Z,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},39407:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(87462),a=n(67294),r=n(86010),c=n(93743);const i="tableOfContents_bqdL";function o(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},a.createElement(c.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(87462),a=n(67294),r=n(86668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):l.push(a)})),l}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:l}=t;const a=e.find((e=>o(e).top>=l));if(a){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:null!=(r=e[e.indexOf(a)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let a=t;a<=n;a+=1)l.push("h"+a+".anchor");return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),o=s(i,{anchorTopOffset:n.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const f=a.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const g=(0,r.L)(),h=null!=m?m:g.tableOfContents.minHeadingLevel,E=null!=u?u:g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>i({toc:c(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:h,maxHeadingLevel:E});return d((0,a.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:E}}),[o,s,h,E])),a.createElement(f,(0,l.Z)({toc:p,className:n,linkClassName:o},v))}},26164:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(67294);const a="image_ODVF";var r=n(61422);function c(e){let{imagePath:t,videoPath:n,title:c,description:i,jumpUrl:o}=e;return l.createElement("a",{className:"homepage-card",href:o,target:"blank"},l.createElement("h4",null,l.createElement("b",null,c)),l.createElement("p",null,i),t&&l.createElement("img",{src:t.default,className:a}),n&&l.createElement(r.Z,{src:n,className:"custom-video-showcase"}))}},61422:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(87462),a=n(67294),r=n(86010);function c(e){let{src:t,mobile:n,className:c,...i}=e;return a.createElement("video",(0,l.Z)({className:(0,r.Z)("dyte-video-showcase",c,n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},i))}},33238:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(67294),a=n(30702),r=n(71455);n(26164);const c={...a.Z,coverimg:e=>{let{url:t,height:n,padding:a=2,fit:c="cover",borderRadius:i="0.5rem"}=e;return l.createElement(r.TV,null,l.createElement(r.HI,{src:t.default},l.createElement("div",{style:{height:n}},l.createElement("img",{src:t.default,alt:"",style:{borderRadius:i,objectFit:c,width:"100%",height:"100%"}}))))},highlight:e=>{let{children:t,color:n}=e;return l.createElement("span",{style:{backgroundColor:n,borderRadius:"5px",color:"#fff",padding:"0.15rem"}},t)}}}}]);