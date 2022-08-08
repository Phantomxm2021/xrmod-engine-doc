"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[7630],{19261:(e,t,o)=>{o.d(t,{d:()=>r});const r={chat:"Chat",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all"}},37630:(e,t,o)=>{o.r(t),o.d(t,{dyte_polls:()=>a});var r=o(42619),s=o(80335),i=o(20975),l=o(88514);o(19261);const a=class{constructor(e){(0,r.r)(this,e),this.iconPack=s.d,this.t=(0,i.u)(),this.create=!1}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.meeting}meetingChanged(e){this.polls=null==e?void 0:e.polls.items,e.polls.on("pollsUpdate",(e=>{this.polls=[...e.polls]})),this.onCreate=async t=>{this.create=!1,await e.polls.create(t.question,t.options,t.anonymous,t.hideVotes)},this.onVote=async(t,o)=>{await e.polls.vote(t,o)}}toggleCreateState(){this.create=!this.create}componentDidRender(){(0,l.s)(this.pollEl)}render(){return(0,r.h)(r.H,null,(0,r.h)("div",{class:"ctr",part:"container"},(0,r.h)("div",{class:"polls-view scrollbar",ref:e=>this.pollEl=e,part:"polls"},this.polls.map((e=>{var t;return(0,r.h)("dyte-poll",{key:e.id,poll:e,onDyteVotePoll:e=>{this.onVote(e.detail.id,e.detail.index)},self:null===(t=this.meeting)||void 0===t?void 0:t.self.id})})),this.create&&(0,r.h)("dyte-poll-form",{part:"poll-form",onDyteCreatePoll:e=>{this.onCreate(e.detail)}})),(0,r.h)("dyte-button",{kind:"wide",onClick:()=>this.toggleCreateState(),variant:this.create?"secondary":"primary",part:"button"},this.create?this.t("Cancel Poll Creation"):this.t("Create New Poll"))))}static get watchers(){return{meeting:["meetingChanged"]}}};a.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-family:var(--dyte-font-family, sans-serif);font-size:14px}*{box-sizing:border-box}.ctr{box-sizing:border-box;padding:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);display:flex;flex:1 1 0%;flex-direction:column}.polls-view{overflow-y:auto;flex:1 1 0%;flex-basis:0}"},20975:(e,t,o)=>{o.d(t,{g:()=>s,u:()=>i});var r=o(19261);const s=async e=>{if(null==e||"en"===e||""===e.trim())return r.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},r.d,await t.json()):r.d}catch(t){return r.d}},i=(e=r.d)=>t=>{var o;return null!==(o=e[t])&&void 0!==o?o:t}},88514:(e,t,o)=>{o.d(t,{s:()=>r});const r=e=>{null!=e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}}}]);