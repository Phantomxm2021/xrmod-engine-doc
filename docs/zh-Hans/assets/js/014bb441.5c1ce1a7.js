"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[4734],{39058:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(67294),l=n(86010),r=n(20774),o=n(87524),i=n(39960),c=n(95999);const s="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function v(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:d},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:h},e.title)))))))}var p=n(13102);function f(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return a.createElement(p.Zo,{component:f,props:e})}function b(e){let{sidebar:t}=e;const n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(E,{sidebar:t}):a.createElement(v,{sidebar:t}):null}function N(e){const{sidebar:t,toc:n,children:o,...i}=e,c=t&&t.items.length>0;return a.createElement(r.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(b,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},15289:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(44996),r=n(9460);function o(e){var t;let{children:n,className:o}=e;const{frontMatter:i,assets:c}=(0,r.C)(),{withBaseUrl:s}=(0,l.C)(),m=null!=(t=c.image)?t:i.image;return a.createElement("article",{className:o,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&a.createElement("meta",{itemProp:"image",content:s(m,{absolute:!0})}),n)}},99714:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(86010),r=n(18780),o=n(9460),i=n(45042);function c(e){let{children:t,className:n}=e;const{isBlogPostPage:c}=(0,o.C)();return a.createElement("div",{id:c?r.blogPostContainerID:void 0,className:(0,l.Z)("markdown",n),itemProp:"articleBody"},a.createElement(i.Z,null,t))}},1916:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),l=n(86010),r=n(9460),o=n(39960);function i(e){return e.href?a.createElement(o.Z,e):a.createElement(a.Fragment,null,e.children)}function c(e){let{author:t,className:n}=e;const{name:r,title:o,url:c,imageURL:s,email:m}=t,u=c||m&&"mailto:"+m||void 0;return a.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",n)},s&&a.createElement(i,{href:u,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(i,{href:u,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),o&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const s="authorCol_Hf19",m="imageOnlyAuthorRow_pa_O",u="imageOnlyAuthorCol_G86a";function d(e){let{className:t}=e;const{metadata:{authors:n},assets:o}=(0,r.C)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?m:"row",t)},n.map(((e,t)=>{var n;return a.createElement("div",{className:(0,l.Z)(!i&&"col col--6",i?u:s),key:t},a.createElement(c,{author:{...e,imageURL:null!=(n=o.authorsImageUrls[t])?n:e.imageURL}}))})))}},57624:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),l=n(86010),r=n(95999),o=n(88824),i=n(9460);const c="container_mt6G";function s(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,o.c)();return t=>{const n=Math.ceil(t);return e(n,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function m(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function u(){return a.createElement(a.Fragment,null," \xb7 ")}function d(e){let{className:t}=e;const{metadata:n}=(0,i.C)(),{date:r,formattedDate:o,readingTime:d}=n;return a.createElement("div",{className:(0,l.Z)(c,"margin-vert--md",t)},a.createElement(m,{date:r,formattedDate:o}),void 0!==d&&a.createElement(a.Fragment,null,a.createElement(u,null),a.createElement(s,{readingTime:d})))}},20988:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(86010),r=n(39960),o=n(9460);const i="title_f1Hy";function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:c}=(0,o.C)(),{permalink:s,title:m}=n,u=c?"h1":"h2";return a.createElement(u,{className:(0,l.Z)(i,t),itemProp:"headline"},c?m:a.createElement(r.Z,{itemProp:"url",to:s},m))}},32244:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),r=n(39960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:i}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},39407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(67294),r=n(86010),o=n(93743);const i="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(67294),r=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>c(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(d);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...h}=e;const v=(0,r.L)(),p=null!=m?m:v.tableOfContents.minHeadingLevel,f=null!=d?d:v.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return u((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:f}}),[c,s,p,f])),l.createElement(g,(0,a.Z)({toc:E,className:n,linkClassName:c},h))}},9460:(e,t,n)=>{n.d(t,{C:()=>i,n:()=>o});var a=n(67294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,content:n,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:l});return a.createElement(r.Provider,{value:o},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},88824:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(67294),l=n(52263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}}),[e])}function s(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}},80338:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),l=n(9460),r=n(20988),o=n(57624),i=n(1916);const c="changelogItemTitleList_Ns7h";function s(){const{isBlogPostPage:e}=(0,l.C)();return a.createElement(r.Z,{className:e?void 0:c})}function m(){return a.createElement("header",null,a.createElement(s,null),a.createElement(o.Z,null),a.createElement(i.Z,null))}var u=n(15289),d=n(99714);const g="changelogItemContainer_BqEx";function h(e){let{children:t}=e;return a.createElement(u.Z,{className:g},a.createElement(m,null),a.createElement(d.Z,null,t))}},25681:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(67294),l=n(86010),r=n(95999),o=n(39960),i=n(8264),c=n(35281),s=n(9460);function m(){var e;const{assets:t,metadata:n}=(0,s.C)(),{title:l,description:r,date:o,tags:c,authors:m,frontMatter:u}=n,{keywords:d}=u,g=null!=(e=t.image)?e:u.image;return a.createElement(i.d,{title:l,description:r,keywords:d,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var u=n(39058),d=n(80338),g=n(87462),h=n(32244);function v(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.changelog.post.paginator.navAriaLabel",message:"Changelog item navigation",description:"The ARIA label for the changelog pagination"})},n&&a.createElement(h.Z,(0,g.Z)({},n,{subLabel:a.createElement(r.Z,{id:"theme.changelog.post.paginator.newerRelease",description:"The changelog button label to navigate to the newer release"},"Newer release")})),t&&a.createElement(h.Z,(0,g.Z)({},t,{subLabel:a.createElement(r.Z,{id:"theme.changelog.post.paginator.olderRelease",description:"The changelog button label to navigate to the older release"},"Older release"),isNext:!0})))}var p=n(39407);function f(){const{metadata:e}=(0,s.C)(),{listPageLink:t}=e;return a.createElement(o.Z,{to:t},a.createElement(r.Z,{id:"changelog.backLink"},"\u2190 Back to index page"))}function E(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,s.C)(),{nextItem:o,prevItem:i,frontMatter:c}=l,{hide_table_of_contents:m,toc_min_heading_level:g,toc_max_heading_level:h}=c;return a.createElement(u.Z,{sidebar:t,toc:!m&&r.length>0?a.createElement(p.Z,{toc:r,minHeadingLevel:g,maxHeadingLevel:h}):void 0},a.createElement(f,null),a.createElement(d.Z,null,n),(o||i)&&a.createElement(v,{nextItem:o,prevItem:i}))}function b(e){const t=e.content;return a.createElement(s.n,{content:e.content,isBlogPostPage:!0},a.createElement(i.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogPostPage)},a.createElement(m,null),a.createElement(E,{sidebar:e.sidebar},a.createElement(t,null))))}},26164:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const l="image_ODVF";var r=n(61422);function o(e){let{imagePath:t,videoPath:n,title:o,description:i,jumpUrl:c}=e;return a.createElement("a",{className:"homepage-card",href:c,target:"blank"},a.createElement("h4",null,a.createElement("b",null,o)),a.createElement("p",null,i),t&&a.createElement("img",{src:t.default,className:l}),n&&a.createElement(r.Z,{src:n,className:"custom-video-showcase"}))}},61422:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),l=n(67294),r=n(86010);function o(e){let{src:t,mobile:n,className:o,...i}=e;return l.createElement("video",(0,a.Z)({className:(0,r.Z)(o,n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},i,{"webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}))}},33238:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(30702),r=n(71455);n(26164);const o={...l.Z,coverimg:e=>{let{url:t,height:n,padding:l=2,fit:o="cover",borderRadius:i="0.5rem"}=e;return a.createElement(r.TV,null,a.createElement(r.HI,{src:t.default},a.createElement("div",{style:{height:n}},a.createElement("img",{src:t.default,alt:"",style:{borderRadius:i,objectFit:o,width:"100%",height:"100%"}}))))},highlight:e=>{let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"5px",color:"#fff",padding:"0.15rem"}},t)}}}}]);