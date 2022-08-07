"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[1591],{19261:(e,t,i)=>{i.d(t,{d:()=>r});const r={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},8976:(e,t,i)=>{i.d(t,{d:()=>r});const r={designTokens:{spacingBase:4,googleFont:"Inter"},styles:{"dyte-header":{display:"grid",height:"48px",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"dyte-header.sm":{display:"grid",gridArea:"header",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"1fr",alignItems:"center"},"div#header-left":{display:"flex",alignItems:"center",height:"48px"},"dyte-logo":{height:"26px"},"div#header-center":{display:"flex",alignItems:"center",justifyContent:"center"},"div#header-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-stage":{display:"flex",flex:"1"},"dyte-grid":{flex:"1",height:"auto"},"dyte-controlbar":{display:"grid",height:"76px",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"1fr",alignItems:"center",padding:"8px"},"dyte-controlbar.sm":{display:"flex",position:"relative",backgroundColor:"rgb(var(--dyte-colors-background-1000, 0 0 0))"},"div#controlbar-left":{display:"flex",alignItems:"center"},"div#controlbar-center":{display:"flex",alignItems:"center",justifyContent:"center"},"div#controlbar-mobile":{display:"flex",flex:"1",alignItems:"center",justifyContent:"center"},"div#controlbar-right":{display:"flex",alignItems:"center",justifyContent:"flex-end"},"dyte-settings":{width:"720px",height:"480px"},"div#more-menu":{position:"absolute",boxSizing:"border-box",top:"0",left:"0",width:"100%",transform:"translateY(-100%)",backgroundColor:"var(--dyte-colors-background-1000, #000)",padding:"16px 12px",borderRadius:"18px 18px 0 0"},"div#setupcontrols-media":{position:"absolute",bottom:"8px",right:"8px",display:"flex"},"div#setupcontrols-settings":{position:"absolute",top:"8px",right:"8px"}},root:{"dyte-meeting":{state:"meeting",states:["activeSidebar"]},"dyte-meeting[meeting=waiting]":["dyte-waiting-screen"],"dyte-meeting[meeting=idle]":["dyte-idle-screen"],"dyte-meeting[meeting=setup]":["dyte-setup-screen","dyte-dialog-manager"],"dyte-meeting[meeting=joined]":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager"],"dyte-meeting[meeting=joined].activeSidebar.sm":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager",["dyte-sidebar",{view:"full-screen"}]],"dyte-meeting[meeting=joined].activeSidebar.md":["dyte-header","dyte-stage","dyte-controlbar","dyte-participants-audio","dyte-dialog-manager",["dyte-sidebar",{view:"full-screen"}]],"dyte-meeting[meeting=ended]":["dyte-ended-screen"],"dyte-header":{children:["div#header-left","div#header-center","div#header-right"]},"dyte-header.sm":["div#header-left","div#header-right"],"div#header-left":["dyte-logo","dyte-recording-indicator"],"div#header-center":["dyte-meeting-title"],"div#header-right":["dyte-grid-pagination","dyte-clock","dyte-participant-count"],"dyte-logo":{props:{logo:"",config:{designTokens:{logo:"https://app.dyte.io/dyte-logo/dyte.svg"}}}},"dyte-stage":{states:["activeSidebar"],children:["dyte-grid","dyte-notifications"]},"dyte-stage.activeSidebar":["dyte-grid","dyte-notifications",["dyte-sidebar",{view:"sidebar"}]],"dyte-stage.activeSidebar.sm":["dyte-grid","dyte-notifications"],"dyte-grid":{states:["activeScreenShare","activePlugin","activeSpotlight"],children:["dyte-simple-grid"]},"dyte-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-grid.activeScreenShare":["dyte-mixed-grid"],"dyte-grid.activePlugin":["dyte-mixed-grid"],"dyte-grid.activeScreenShare.activeSpotlight":["dyte-mixed-grid"],"dyte-grid.activePlugin.activeSpotlight":["dyte-mixed-grid"],"dyte-mixed-grid":{states:["activeSpotlight"],children:["dyte-simple-grid"]},"dyte-mixed-grid.activeSpotlight":["dyte-spotlight-grid"],"dyte-participant-tile":{state:"meeting",children:["dyte-name-tag","dyte-avatar"]},"dyte-participant-tile[meeting=setup]":{children:["dyte-avatar","div#setupcontrols-settings","div#setupcontrols-media"]},"div#setupcontrols-media":[["dyte-mic-toggle",{size:"sm"}],["dyte-camera-toggle",{size:"sm"}]],"div#setupcontrols-settings":[["dyte-settings-toggle",{size:"sm"}]],"dyte-screenshare-view":{children:["dyte-name-tag"]},"dyte-name-tag":[["dyte-audio-visualizer",{slot:"start"}]],"dyte-controlbar":{states:["activeMoreMenu"],props:{variant:"solid"},children:["div#controlbar-left","div#controlbar-center","div#controlbar-right"]},"dyte-controlbar.sm":["div#controlbar-mobile"],"dyte-controlbar.md":["div#controlbar-mobile"],"dyte-controlbar.activeMoreMenu.sm":["div#controlbar-mobile","div#more-menu"],"dyte-controlbar.activeMoreMenu.md":["div#controlbar-mobile","div#more-menu"],"div#controlbar-mobile":["dyte-mic-toggle","dyte-camera-toggle","dyte-leave-button","dyte-more-toggle"],"div#more-menu":[["dyte-chat-toggle",{variant:"horizontal"}],["dyte-participants-toggle",{variant:"horizontal"}],["dyte-polls-toggle",{variant:"horizontal"}],["dyte-plugins-toggle",{variant:"horizontal"}],["dyte-fullscreen-toggle",{variant:"horizontal"}],["dyte-screenshare-toggle",{variant:"horizontal"}],["dyte-settings-toggle",{variant:"horizontal"}]],"div#controlbar-left":["dyte-leave-button","dyte-screen-share-toggle","dyte-fullscreen-toggle","dyte-recording-toggle"],"div#controlbar-center":["dyte-mic-toggle","dyte-camera-toggle","dyte-settings-toggle"],"div#controlbar-right":["dyte-chat-toggle","dyte-polls-toggle","dyte-participants-toggle","dyte-plugins-toggle"]},config:{notification_sounds:{participant_left:!1},participant_joined_sound_notification_limit:10,participant_chat_message_sound_notification_limit:10,videoFit:"cover"}}},41591:(e,t,i)=>{i.r(t),i.d(t,{dyte_spotlight_grid:()=>d});var r=i(42619),s=i(8976),a=i(80335),n=i(20975),o=i(30790);i(19261);const d=class{constructor(e){(0,r.r)(this,e),this.participants=[],this.pinnedParticipants=[],this.aspectRatio="16:9",this.gap=8,this.config=s.d,this.iconPack=a.d,this.t=(0,n.u)()}render(){const e={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t},t=this.participants.filter((e=>!this.pinnedParticipants.includes(e)));return(0,r.h)(r.H,null,(0,r.h)("main",null,(0,r.h)(o.R,{element:"dyte-simple-grid",defaults:e,props:{participants:this.pinnedParticipants,aspectRatio:this.aspectRatio,gap:this.gap,size:"md"}})),(0,r.h)("aside",null,(0,r.h)(o.R,{element:"dyte-simple-grid",defaults:e,props:{participants:t,aspectRatio:this.aspectRatio,gap:this.gap,size:"sm"}})))}get host(){return(0,r.g)(this)}};d.style=":host{display:flex;height:100%;width:100%}main{flex:1 1 0%}aside{width:50%;max-width:var(--dyte-space-96, 384px)}:host([size='sm']),:host([size='md']){flex-direction:column}:host([size='sm']) aside,:host([size='md']) aside{height:50%;max-height:var(--dyte-space-96, 384px);width:100%;max-width:100%}"},20975:(e,t,i)=>{i.d(t,{g:()=>s,u:()=>a});var r=i(19261);const s=async e=>{if(null==e||"en"===e||""===e.trim())return r.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},r.d,await t.json()):r.d}catch(t){return r.d}},a=(e=r.d)=>t=>{var i;return null!==(i=e[t])&&void 0!==i?i:t}},30790:(e,t,i)=>{i.d(t,{R:()=>a});var r=i(42619);const s=({elements:e,defaults:t,props:i={},deepProps:s=!1})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,r.h)(a,{element:e,defaults:t,props:i,childProps:s&&i}))):null,a=({element:e,defaults:t,childProps:i={},props:a={},onlyChildren:n=!1,asHost:o=!1,deepProps:d=!1},l)=>{var c;const{config:g,size:p,states:y}=t;let h,m={};Array.isArray(e)?[h,m]=e:h=e;const u=null===(c=null==g?void 0:g.root)||void 0===c?void 0:c[h];null!=u&&"props"in u&&(a=Object.assign(Object.assign({},u.props),a)),a=Object.assign(Object.assign({},a),m);const f=(({element:e,size:t,states:i={},config:r={}})=>{let s=[];const a=null==r?void 0:r.root[e],n=e=>{s.push(e),"string"==typeof t&&s.push(`${e}.${t}`)};if(n(e),"object"==typeof a&&!Array.isArray(a)&&null!==a){const{state:t,states:r}=a;let s=e,o=[];if(Array.isArray(r)){o=r.filter((e=>i[e])),o.sort();for(const e of o)n(`${s}.${e}`);o.length>1&&n([s,...o].join("."))}if("string"==typeof t){const r=`${e}[${t}=${i[t]}]`;n(r);for(const e of o)n(`${r}.${e}`);o.length>1&&n([r,...o].join("."))}}return s})({element:h,size:p,states:y,config:g}),v=(({selectors:e,root:t})=>{if(!Array.isArray(e)||null==t)return[];for(let i=e.length-1;i>=0;i--){const r=t[e[i]];if(Array.isArray(r))return r;if(Array.isArray(null==r?void 0:r.children))return r.children}return[]})({selectors:f,root:g.root});if(n)return(0,r.h)(s,{elements:v,defaults:t,props:i,deepProps:d});const b=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const i={};for(const r of e){const e=t[r];null!=e&&Object.assign(i,e)}return i})({selectors:f,styles:g.styles});if(o)return(0,r.h)(r.H,Object.assign({},t,{style:b},a),(0,r.h)(s,{elements:v,defaults:t,props:i,deepProps:d}),l);if(h.startsWith("dyte-"))return(0,r.h)(h,Object.assign({},t,{style:b},a),(0,r.h)(s,{elements:v,defaults:t,props:i,deepProps:d}),l);{const[e,a]=h.split("#");return(0,r.h)(e,{id:a,style:b},(0,r.h)(s,{elements:v,defaults:t,props:i,deepProps:d}),l)}}}}]);