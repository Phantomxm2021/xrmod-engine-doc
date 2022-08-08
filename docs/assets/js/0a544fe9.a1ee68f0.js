"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6271],{39058:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(67294),l=a(86010),r=a(20774),o=a(87524),i=a(39960),s=a(95999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",d="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:g},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title)))))))}var E=a(13102);function f(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return n.createElement(E.Zo,{component:f,props:e})}function v(e){let{sidebar:t}=e;const a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(h,{sidebar:t}):null}function Z(e){const{sidebar:t,toc:a,children:o,...i}=e,s=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},15289:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(44996),r=a(9460);function o(e){var t;let{children:a,className:o}=e;const{frontMatter:i,assets:s}=(0,r.C)(),{withBaseUrl:c}=(0,l.C)(),m=null!=(t=s.image)?t:i.image;return n.createElement("article",{className:o,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&n.createElement("meta",{itemProp:"image",content:c(m,{absolute:!0})}),a)}},99714:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010),r=a(18780),o=a(9460),i=a(45042);function s(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,o.C)();return n.createElement("div",{id:s?r.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(i.Z,null,t))}},1916:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),l=a(86010),r=a(9460),o=a(39960);function i(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function s(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:c,email:m}=t,u=s||m&&"mailto:"+m||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},c&&n.createElement(i,{href:u,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i,{href:u,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const c="authorCol_Hf19",m="imageOnlyAuthorRow_pa_O",u="imageOnlyAuthorCol_G86a";function g(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?m:"row",t)},a.map(((e,t)=>{var a;return n.createElement("div",{className:(0,l.Z)(!i&&"col col--6",i?u:c),key:t},n.createElement(s,{author:{...e,imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL}}))})))}},57624:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),l=a(86010),r=a(95999),o=a(88824),i=a(9460);const s="container_mt6G";function c(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,o.c)();return t=>{const a=Math.ceil(t);return e(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function m(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function u(){return n.createElement(n.Fragment,null," \xb7 ")}function g(e){let{className:t}=e;const{metadata:a}=(0,i.C)(),{date:r,formattedDate:o,readingTime:g}=a;return n.createElement("div",{className:(0,l.Z)(s,"margin-vert--md",t)},n.createElement(m,{date:r,formattedDate:o}),void 0!==g&&n.createElement(n.Fragment,null,n.createElement(u,null),n.createElement(c,{readingTime:g})))}},20988:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010),r=a(39960),o=a(9460);const i="title_f1Hy";function s(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,o.C)(),{permalink:c,title:m}=a,u=s?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(i,t),itemProp:"headline"},s?m:n.createElement(r.Z,{itemProp:"url",to:c},m))}},84881:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),l=a(95999),r=a(35281),o=a(87462),i=a(86010);const s="iconEdit_Z9Sw";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010),r=a(39960);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},86233:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),l=a(86010),r=a(95999),o=a(39960);const i="tag_zVej",s="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:r}=e;return n.createElement(o.Z,{href:t,className:(0,l.Z)(i,r?c:s)},a,r&&n.createElement("span",null,r))}const u="tags_jXut",g="tag_QGVx";function d(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(u,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:g},n.createElement(m,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>o});var n=a(67294),l=a(902);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function i(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(67294),l=a(52263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}},80338:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),l=a(9460),r=a(20988),o=a(57624),i=a(1916);const s="changelogItemTitleList_Ns7h";function c(){const{isBlogPostPage:e}=(0,l.C)();return n.createElement(r.Z,{className:e?void 0:s})}function m(){return n.createElement("header",null,n.createElement(c,null),n.createElement(o.Z,null),n.createElement(i.Z,null))}var u=a(15289),g=a(99714);const d="changelogItemContainer_BqEx";function p(e){let{children:t}=e;return n.createElement(u.Z,{className:d},n.createElement(m,null),n.createElement(g.Z,null,t))}},97543:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var n=a(67294),l=a(86010),r=a(8264),o=a(35281),i=a(39058),s=a(95999),c=a(32244);function m(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(c.Z,{permalink:a,title:n.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(c.Z,{permalink:l,title:n.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var u=a(9460),g=a(15289),d=a(20988),p=a(57624),h=a(1916);function E(){return n.createElement("header",null,n.createElement(d.Z,null),n.createElement(p.Z,null),n.createElement(h.Z,null))}var f=a(99714),b=a(84881),v=a(86233),Z=a(87462),N=a(39960);function _(){return n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function k(e){const{blogPostTitle:t,...a}=e;return n.createElement(N.Z,(0,Z.Z)({"aria-label":(0,s.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(_,null))}const P="blogPostFooterDetailsFull_mRVl";function T(){const{metadata:e,isBlogPostPage:t}=(0,u.C)(),{tags:a,title:r,editUrl:o,hasTruncateMarker:i}=e,s=!t&&i,c=a.length>0;return c||s||o?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&P)},c&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":s})},n.createElement(v.Z,{tags:a})),t&&o&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(b.Z,{editUrl:o})),s&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":c})},n.createElement(k,{blogPostTitle:r,to:e.permalink}))):null}function w(e){let{children:t,className:a}=e;const r=function(){const{isBlogPostPage:e}=(0,u.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(g.Z,{className:(0,l.Z)(r,a)},n.createElement(E,null),n.createElement(f.Z,null,t),n.createElement(T,null))}function y(e){let{items:t,component:a=w}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(u.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}var C=a(90197),x=a(80338);const F="twitter_m0Mi";function L(){return n.createElement(N.Z,{href:"http://keepachangelog.com/en/1.0.0/",className:F},n.createElement(s.Z,{id:"changelog.description.keepachangelog"},"Keep a Changelog"))}function I(){return n.createElement(N.Z,{href:"http://semver.org/spec/v2.0.0.html",className:F},n.createElement(s.Z,{id:"changelog.description.semanticversioning"},"Semantic Versioning"))}function B(e){let{blogTitle:t}=e;return n.createElement("header",{className:"margin-bottom--lg"},n.createElement("h1",{style:{fontSize:"3rem"}},t),n.createElement("p",null,n.createElement(s.Z,{id:"changelog.description",values:{keepAChangelogLink:n.createElement(L,null),semanticVersioningLink:n.createElement(I,null)}},"All notable changes to this package will be documented in this file.The format is based on {keepAChangelogLink} and this project adheres to {semanticVersioningLink}")))}function R(e){const{metadata:t}=e,{blogTitle:a,blogDescription:l}=t;return n.createElement(n.Fragment,null,n.createElement(r.d,{title:a,description:l}),n.createElement(C.Z,{tag:"blog_posts_list"}))}function A(e){const{metadata:t,items:a,sidebar:l}=e,{blogTitle:r}=t;return n.createElement(i.Z,{sidebar:l},n.createElement(B,{blogTitle:r}),n.createElement(y,{items:a,component:x.Z}),n.createElement(m,{metadata:t}))}function M(e){return n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(R,e),n.createElement(A,e))}},26164:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const l="image_ODVF";var r=a(61422);function o(e){let{imagePath:t,videoPath:a,title:o,description:i,jumpUrl:s}=e;return n.createElement("a",{className:"homepage-card",href:s,target:"blank"},n.createElement("h4",null,n.createElement("b",null,o)),n.createElement("p",null,i),t&&n.createElement("img",{src:t.default,className:l}),a&&n.createElement(r.Z,{src:a,className:"custom-video-showcase"}))}},61422:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),l=a(67294),r=a(86010);function o(e){let{src:t,mobile:a,className:o,...i}=e;return l.createElement("video",(0,n.Z)({className:(0,r.Z)(o,a&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},i,{"webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true"}))}},33238:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(30702),r=a(71455);a(26164);const o={...l.Z,coverimg:e=>{let{url:t,height:a,padding:l=2,fit:o="cover",borderRadius:i="0.5rem"}=e;return n.createElement(r.TV,null,n.createElement(r.HI,{src:t.default},n.createElement("div",{style:{height:a}},n.createElement("img",{src:t.default,alt:"",style:{borderRadius:i,objectFit:o,width:"100%",height:"100%"}}))))},highlight:e=>{let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"5px",color:"#fff",padding:"0.15rem"}},t)}}}}]);