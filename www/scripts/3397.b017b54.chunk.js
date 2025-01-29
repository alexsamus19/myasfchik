(self.webpackChunkasf_ui=self.webpackChunkasf_ui||[]).push([[3397],{3909:(t,e,s)=>{"use strict";s.d(e,{Dz:()=>a,Pk:()=>n,WL:()=>r,ej:()=>o});var i=s(5471);const a=[{name:i.Ay.i18n.translate("basic"),fields:["SteamOwnerID"]},{name:i.Ay.i18n.translate("trade"),fields:["MaxTradeHoldDuration","FilterBadBots","LicenseID"]},{name:i.Ay.i18n.translate("customization"),fields:["AutoRestart","Blacklist","CommandPrefix","CurrentCulture","SteamMessagePrefix"]},{name:i.Ay.i18n.translate("remote-access"),fields:["Headless","IPC","IPCPassword","IPCPasswordFormat"]},{name:i.Ay.i18n.translate("connection"),fields:["ConnectionTimeout","SteamProtocols","WebProxy","WebProxyPassword","WebProxyUsername"]},{name:i.Ay.i18n.translate("farming"),fields:["FarmingDelay","IdleFarmingPeriod","MaxFarmingTime","MinFarmingDelayAfterBlock","ShutdownIfPossible"]},{name:i.Ay.i18n.translate("performance"),fields:["OptimizationMode","ConfirmationsLimiterDelay","GiftsLimiterDelay","InventoryLimiterDelay","LoginLimiterDelay","WebLimiterDelay"]},{name:i.Ay.i18n.translate("updates"),fields:["UpdateChannel","UpdatePeriod"]},{name:i.Ay.i18n.translate("plugins"),fields:["PluginsUpdateMode","PluginsUpdateList"]},{name:i.Ay.i18n.translate("advanced"),fields:["Debug","DefaultBot"]}],o=[{name:i.Ay.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword","Enabled","OnlineStatus","BotBehaviour"]},{name:i.Ay.i18n.translate("security"),fields:["PasswordFormat","UseLoginKeys"]},{name:i.Ay.i18n.translate("access"),fields:["SteamUserPermissions","SteamParentalCode"]},{name:i.Ay.i18n.translate("trade"),fields:["SteamTradeToken","AcceptGifts","TradeCheckPeriod","SendTradePeriod","CompleteTypesToSend","TradingPreferences","LootableTypes","TransferableTypes","MatchableTypes"]},{name:i.Ay.i18n.translate("farming"),fields:["FarmingPreferences","FarmingOrders"]},{name:i.Ay.i18n.translate("customization"),fields:["RemoteCommunication","SteamMasterClanID","UserInterfaceMode","OnlinePreferences","OnlineFlags","RedeemingPreferences","GamesPlayedWhileIdle","CustomGamePlayedWhileFarming","CustomGamePlayedWhileIdle"]},{name:i.Ay.i18n.translate("performance"),fields:["HoursUntilCardDrops"]}],r=[{name:i.Ay.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword"]}],n=[{name:i.Ay.i18n.translate("general"),fields:[i.Ay.i18n.translate("default-page"),i.Ay.i18n.translate("notification-position"),i.Ay.i18n.translate("notify-release"),i.Ay.i18n.translate("display-categories"),i.Ay.i18n.translate("tooltip-delay")]},{name:i.Ay.i18n.translate("bots"),fields:[i.Ay.i18n.translate("bot-nicknames"),i.Ay.i18n.translate("bot-game-name"),i.Ay.i18n.translate("bot-order-numeric"),i.Ay.i18n.translate("bot-order-disabled"),i.Ay.i18n.translate("bot-fav-buttons")]},{name:i.Ay.i18n.translate("commands"),fields:[i.Ay.i18n.translate("timestamps")]},{name:i.Ay.i18n.translate("log"),fields:[i.Ay.i18n.translate("log-previous-amount"),i.Ay.i18n.translate("log-information"),i.Ay.i18n.translate("log-timestamp")]}]},234:(t,e,s)=>{"use strict";function i(t){const e=document.implementation.createHTMLDocument().createElement("html");return e.innerHTML=t,e}s.d(e,{A:()=>i})},3590:(t,e,s)=>{"use strict";s.d(e,{A:()=>u});var i=s(5896);const a=new Map,o=new Map,r=/\[[^\]]+]/g;async function n(t){if(o.has(t))return o.get(t);const e=i.Jt(`structure/${encodeURIComponent(t)}`);return o.set(t,e),e}async function l(t){const e=function(t){const e=t.match(r);return e?e.map((t=>t.slice(1,t.length-1))):[]}(t);switch(t.split("`")[0]){case"System.Boolean":return{type:"boolean"};case"System.String":case"System.Guid":return{type:"string"};case"System.Byte":return{type:"byte"};case"System.UInt32":return{type:"uint32"};case"System.UInt16":return{type:"uint16"};case"System.Collections.Generic.HashSet":case"System.Collections.Immutable.ImmutableHashSet":return{type:"hashSet",values:await l(e[0])};case"System.Collections.Immutable.ImmutableList":return{type:"list",values:await l(e[0])};case"System.UInt64":return{type:"uint64"};case"System.Collections.Generic.Dictionary":case"System.Collections.Immutable.ImmutableDictionary":return{type:"dictionary",key:await l(e[0]),value:await l(e[1])};case"System.Nullable":const{type:s}=await l(e[0]);return{type:s,nullable:!0};default:return d(t)}}function c(t){const e={};return Object.keys(t).forEach((s=>{e[s]=parseInt(t[s],10)})),e}async function d(t){"ArchiSteamFarm.Steam.Storage.BotConfig"===t&&n(t);const e=await async function(t){if(a.has(t))return a.get(t);const e=i.Jt(`type/${encodeURIComponent(t)}`);return a.set(t,e),e}(t);switch(e.Properties.BaseType){case"System.Object":return async function(t,e){const s={type:"object",body:{}},[i,a]=await Promise.all([n(t),Promise.all(Object.keys(e.Body).map((async t=>({param:t,type:await l(e.Body[t])}))))]);return a.forEach((t=>{const{param:a,type:o}=t,r="System.UInt64"!==e.Body[a]?a:`s_${a}`;s.body[a]={defaultValue:i[a],paramName:r,param:a,...o}})),s}(t,e);case"System.Enum":return{type:(e.Properties.CustomAttributes||[]).includes("System.FlagsAttribute")?"flag":"enum",values:c(e.Body)};default:return{type:"unknown",typeDefinition:e,structureDefinition:await n(t)}}}const u=d},3367:(t,e,s)=>{"use strict";s.d(e,{A:()=>o});var i=s(5896),a=s(9118);async function o(t,e,s){const o=await async function(t,e,s){const o=(0,a.A)(s),r=`www/github/wiki/page/${t}${o}`;if(!e)return r;if(e>=(await i.Jt("www/github/release")).Version)return r;const n=await i.Jt(`www/github/release/${e}`),l=new Date(n.ReleasedAt),c=await i.Jt(`www/github/wiki/history/${t}${o}`),d=Object.entries(c).map((t=>({id:t[0],releaseTime:new Date(t[1])})));d.sort(((t,e)=>new Date(e.releaseTime)-new Date(t.releaseTime)));const u=d.find((({releaseTime:t})=>t<l));return u?`${r}?revision=${u.id}`:r}(t,e,s);return i.Jt(o)}},9118:(t,e,s)=>{"use strict";function i(t){return"en-US"!==t?`-${t}`:""}s.d(e,{A:()=>i})},9067:(t,e,s)=>{"use strict";s.d(e,{A:()=>a});var i=s(6996);function a(t,e){for(const[s]of Object.entries(t)){let a=!1;if(a="object"==typeof e[s]?!(0,i.A)(e[s],t[s]):s.startsWith("s_")?e[s]!==t[s].toString():e[s]!==t[s],a)return!1}return!0}},6767:(t,e,s)=>{"use strict";s.d(e,{A:()=>n});var i=s(3367),a=s(9118),o=s(2822),r=s(234);async function n(t,e){const s=o.Jt(`cache:parameter-descriptions:${e}`);if(s){const{timestamp:t,descriptions:e}=s;if(t>Date.now()-216e5)return e}const n={},c=await(0,i.A)("Configuration",t,e),d=(0,r.A)(c);return Array.from(d.querySelectorAll("h3 > code")).forEach((t=>{const s=t.innerText,i=[];let o=t.parentElement.parentElement.nextElementSibling;for(;o&&"hr"!==o.tagName.toLowerCase();)l(o.querySelectorAll('a[href^="#"]'),"Configuration",(0,a.A)(e)),i.push(o.outerHTML),o=o.nextElementSibling;n[s]=i.join(" ")})),o.hZ(`cache:parameter-descriptions:${e}`,{timestamp:Date.now(),descriptions:n}),n}function l(t,e,s){t.forEach((t=>{t&&(t.setAttribute("href",`https://github.com/JustArchiNET/ArchiSteamFarm/wiki/${e}${s}${t.hash}`),t.setAttribute("target","_blank"))}))}},5222:(t,e,s)=>{var i=s(1601),a=s(6314)(i);a.push([t.id,".mass-editor__content-controls{display:flex}.mb{margin-bottom:1em}",""]),t.exports=a},458:(t,e,s)=>{var i=s(1601),a=s(6314)(i);a.push([t.id,"p[data-v-d2654f6a]:first-of-type{margin-top:0}",""]),t.exports=a},9877:(t,e,s)=>{var i=s(1601),a=s(6314),o=s(6647),r=a(i);r.i(o),r.push([t.id,".multiselect{border:1px solid rgba(var(--color-text-dark), 0.1);border-radius:.1875em}@media screen and (max-height: 835px),screen and (max-width: 1366px){.multiselect{min-height:20px}}@media screen and (max-height: 720px),screen and (max-width: 1000px){.multiselect{min-height:20px}}@media screen and (max-height: 835px),screen and (max-width: 1366px){.multiselect__select{height:33px}}@media screen and (max-height: 720px),screen and (max-width: 1000px){.multiselect__select{height:28px}}.multiselect,.multiselect__input,.multiselect__single{font-size:inherit;background:var(--color-background)}.multiselect__single{top:2px;font-size:14px}@media screen and (max-height: 835px),screen and (max-width: 1366px){.multiselect__single{vertical-align:sub;font-size:.9375em}}@media screen and (max-height: 720px),screen and (max-width: 1000px){.multiselect__single{vertical-align:top}}.multiselect,.multiselect__input::placeholder,.multiselect__placeholder,.multiselect__option--selected.multiselect__option--highlight{color:var(--color-text-dark)}.multiselect__tags,.multiselect__spinner{background:var(--color-background);border-color:var(--color-border)}.multiselect__content-wrapper{top:35px;background:var(--color-background);border-color:var(--color-border);color:var(--color-text-dark)}.multiselect__tags{border:none}@media screen and (max-height: 720px),screen and (max-width: 1000px){.multiselect__tags{min-height:20px;height:33px;padding:5px 40px 0 8px}}@media screen and (max-height: 835px),screen and (max-width: 1366px){.multiselect__tags{min-height:20px;height:30px;padding:5px 40px 0 8px}}.multiselect__tags>input{color:var(--color-text-dark);margin-left:-5px;margin-top:.7px}.multiselect__tag,.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:var(--color-theme)}.multiselect__tag-icon:after{color:var(--color-button-cancel);font-size:22px}.multiselect__spinner:after,.multiselect__spinner:before{border-top-color:var(--color-theme)}.multiselect__option--highlight:after{color:var(--color-theme);background:var(--color-background-light)}.multiselect__option--highlight{background:var(--color-background-light);color:var(--color-theme)}.multiselect__option--selected{color:var(--color-theme);background:var(--color-background)}.multiselect__option--selected.multiselect__option--highlight:hover{color:var(--color-button-cancel);font-weight:700}.multiselect__option--selected.multiselect__option--highlight,.multiselect__option--selected.multiselect__option--highlight:after{color:var(--color-theme);background:var(--color-background-light);font-weight:normal}.multiselect__option--selected.multiselect__option--highlight:after{color:#f44336}",""]),t.exports=r},6930:(t,e,s)=>{var i=s(1601),a=s(6314)(i);a.push([t.id,'.wizard{display:flex;padding:0;margin:1em;margin-top:.5em}@media screen and (max-width: 460px){.wizard{margin:.5em 0 1em 0}}.wizard__step{flex:1;list-style:none;position:relative;text-align:center;z-index:10}.wizard__step.active{color:var(--color-theme)}.wizard__step-wrapper{width:50%;margin:0 auto;align-items:center;display:flex;justify-content:center;flex-direction:column;cursor:pointer}.wizard__step-wrapper.disabled{cursor:not-allowed !important}.wizard__step-wrapper:hover{color:var(--color-theme)}.wizard__step-number{background:var(--color-background-modal);border-radius:50%;width:32px;height:32px;line-height:32px;border:2px solid var(--color-background-modal);display:block;text-align:center;margin:0 auto .75em auto;font-size:18px}@media screen and (max-width: 460px){.wizard__step-number{width:24px;height:24px;line-height:24px;font-size:16px}}.wizard__step-name{text-transform:uppercase}.wizard__step-line{width:100%;height:2px;content:"";position:absolute;background-color:var(--color-background-modal);top:18px;left:-45%;z-index:-1}@media screen and (max-width: 460px){.wizard__step-line{top:14px}}',""]),t.exports=a},7603:(t,e,s)=>{var i=s(1601),a=s(6314)(i);a.push([t.id,'.bots[data-v-5822141d]{display:grid;grid-gap:1em;grid-template-columns:repeat(auto-fill, minmax(150px, 1fr));min-height:0}@media screen and (max-width: 400px){.bots[data-v-5822141d]{grid-template-columns:1fr}}.bot[data-v-5822141d]{background:var(--color-background-light);border-radius:0 0 4px 4px;border:2px solid var(--color-background-light);border-top:3px solid var(--color-status);display:grid;grid-template-areas:"avatar meta buttons";grid-template-columns:min-content 1fr auto;padding:.5em;transition:border .3s ease}.selected[data-v-5822141d]{color:var(--color-theme);border:2px solid var(--color-theme);border-top:3px solid var(--color-status)}.selectable>.bot[data-v-5822141d]{cursor:pointer}.selectable>.bot__status[data-v-5822141d]{cursor:pointer}.bot__avatar[data-v-5822141d]{display:block;height:2.25em;padding-right:.5em;width:2.25em}.bot__status[data-v-5822141d]{display:flex;flex-direction:column;overflow:hidden}.bot__status-property[data-v-5822141d]{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bot__status-property--name[data-v-5822141d]{font-weight:600}.bot__status-property--text[data-v-5822141d]{font-size:.8em;font-style:italic}',""]),t.exports=a},8902:(t,e,s)=>{var i=s(1601),a=s(6314)(i);a.push([t.id,".mass-editor__title{background:var(--color-background);color:var(--color-text-dark);padding:1em;display:flex;align-items:center;border-bottom:1px solid var(--color-text-dark)}.mass-editor__navigation{display:flex;padding-left:.7em;gap:.5em}.mass-editor__content{padding:1em;background:var(--color-background-modal);display:block}.mass-editor__info{cursor:pointer;color:var(--color-theme);text-align:center}",""]),t.exports=a},5778:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>M});var i=function(){var t=this,e=t._self._c;return e("main",{staticClass:"main-container main-container--fullheight"},[e("div",{staticClass:"container"},[t.loading||t.noBotsFound?[t.loading?e("h3",{staticClass:"subtitle"},[e("FontAwesomeIcon",{attrs:{icon:"spinner",size:"lg",spin:""}})],1):t._e(),t._v(" "),t.noBotsFound?[e("h3",{staticClass:"subtitle"},[t._v("\n          "+t._s(t.$t("mass-editor-no-bots"))+"\n        ")]),t._v(" "),e("div",{staticClass:"mass-editor__info"},[e("a",{on:{click:function(e){return t.$router.push({name:"bot-create"})}}},[t._v(t._s(t.$t("mass-editor-create-bot")))])])]:t._e()]:[e("MassEditorSteps",{attrs:{steps:t.steps,currentStep:t.status,isDisabled:t.isStepDisabled,getTitle:t.getDisabledTitle},on:{setStep:t.setStatus}}),t._v(" "),"bots"===t.status?e("MassEditorBots",{attrs:{bots:t.sortedBots,selectedBots:t.selectedBots},on:{toggle:t.toggleSelectedBots,update:t.updateSelectedBots,next:function(e){return t.setStatus("properties")}}}):t._e(),t._v(" "),"properties"===t.status?e("MassEditorSelect",{attrs:{loading:t.loading,status:t.status,selectedProperties:t.selectedProperties,options:t.fields},on:{select:t.selectProperty,remove:t.removeProperty,update:t.updateModel,next:function(e){return t.setStatus("values")},back:function(e){return t.setStatus("bots")}}}):t._e(),t._v(" "),"values"===t.status?e("MassEditorValue",{attrs:{selectedProperties:t.selectedProperties,categories:t.categories,config:t.config},on:{next:function(e){return t.setStatus("check")},back:function(e){return t.setStatus("properties")}}}):t._e(),t._v(" "),"check"===t.status?e("MassEditorCheck",{attrs:{config:t.config,selectedBots:t.selectedBots,selectedProperties:t.selectedProperties},on:{back:function(e){return t.setStatus("values")}}}):t._e()]],2)])};i._withStripped=!0;var a=s(5353),o=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"wizard"},t._l(t.steps,(function(s,i){return e("li",{key:s,staticClass:"wizard__step",class:{active:t.currentStep===s}},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.getDisabledTitle(s),expression:"getDisabledTitle(step)",modifiers:{bottom:!0}}],staticClass:"wizard__step-wrapper",class:{disabled:t.isStepDisabled(s)},on:{click:function(e){return t.setStep(s)}}},[e("div",{staticClass:"wizard__step-number"},[t._v(t._s(i+1))]),t._v(" "),e("span",{staticClass:"wizard__step-name"},[t._v(t._s(s))])]),t._v(" "),0!==i?e("div",{staticClass:"wizard__step-line"}):t._e()])})),0)};o._withStripped=!0;const r={name:"MassEditorSteps",props:{steps:{type:Array,required:!0},currentStep:{type:String,required:!0},isDisabled:{type:Function,required:!0},getTitle:{type:Function,required:!0}},methods:{setStep(t){this.isStepDisabled(t)||this.$emit("setStep",t)},isStepDisabled(t){return this.isDisabled(t)},getDisabledTitle(t){return this.getTitle(t)}}};s(3867);var n=s(4486);const l=(0,n.A)(r,o,[],!1,null,null,null).exports;var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mass-editor"},[e("div",{staticClass:"mass-editor__title"},[t._v("\n    "+t._s(t.$t("mass-editor-bots"))+"\n\n    "),e("div",{staticClass:"mass-editor__navigation pull-right"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.nextTitle,expression:"nextTitle",modifiers:{left:!0}}]},[e("button",{staticClass:"button",attrs:{disabled:t.isNextDisabled},on:{click:function(e){return t.$emit("next")}}},[t._v("\n          "+t._s(t.$t("next"))+"\n        ")])])])]),t._v(" "),e("div",{staticClass:"mass-editor__content"},[e("div",{staticClass:"mass-editor__content-controls"},[e("button",{staticClass:"button button--small mb pull-right",on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.toggleBotsText))])])]),t._v(" "),e("BotsView",{attrs:{selectedBotNames:t.selectedBotNames,selectable:t.selectable,bots:t.bots},on:{update:t.update}})],1)])};c._withStripped=!0;var d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bots",class:{selectable:t.selectable}},t._l(t.bots,(function(s){return e("div",{key:s.name,staticClass:"bot",class:[`status--${s.status}`,{selected:t.botIsSelected(s)}],on:{click:function(e){return t.select(s)}}},[e("img",{directives:[{name:"tooltip",rawName:"v-tooltip",value:s.name,expression:"bot.name"}],staticClass:"bot__avatar",attrs:{src:s.avatarURL}}),t._v(" "),e("div",{staticClass:"bot__status"},[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:s.name,expression:"bot.name"}],staticClass:"bot__status-property bot__status-property--name"},[t._v(t._s(s.viewableName))]),t._v(" "),e("span",{staticClass:"bot__status-property bot__status-property--text"},[t._v(t._s(s.statusText))])])])})),0)};d._withStripped=!0;const u={name:"BotsView",props:{selectedBotNames:{type:Array},selectable:{type:Boolean,default:!0},bots:{type:Array}},methods:{select(t){this.selectable&&this.$emit("update",t)},botIsSelected(t){return!!this.selectable&&this.selectedBotNames.includes(t.name)}}};s(5482);const p=(0,n.A)(u,d,[],!1,null,"5822141d",null).exports,m={name:"MassEditorBots",components:{BotsView:p},props:{selectedBots:{type:Array,required:!0},selectable:{type:Boolean,default:!0},bots:{type:Array,required:!0}},computed:{selectedBotNames(){return this.selectedBots.map((t=>t.name))},nextTitle(){return 0===this.selectedBots.length?this.$t("mass-editor-bots-disabled"):null},isNextDisabled(){return 0===this.selectedBots.length},toggleBotsText(){return this.selectedBots.length===this.bots.length?this.$t("mass-editor-bots-deselect"):this.$t("mass-editor-bots-select")}},methods:{update(t){this.$emit("update",t)}}};s(6549);const h=(0,n.A)(m,c,[],!1,null,null,null).exports;var g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mass-editor"},[e("div",{staticClass:"mass-editor__title"},[t._v("\n    "+t._s(t.title)+"\n\n    "),e("div",{staticClass:"mass-editor__navigation pull-right"},[e("button",{staticClass:"button",on:{click:function(e){return t.$emit("back")}}},[t._v("\n        "+t._s(t.$t("back"))+"\n      ")]),t._v(" "),e("button",{staticClass:"button",on:{click:function(e){return t.$emit("next")}}},[t._v("\n        "+t._s(t.$t("next"))+"\n      ")])])]),t._v(" "),e("div",{staticClass:"mass-editor__content"},[e("ConfigEditor",{attrs:{fields:t.selectedProperties,categories:t.displayCategories?t.categories:null,model:t.config,deleteDefaultValues:!1}})],1)])};g._withStripped=!0;const _={name:"MassEditorSelect",components:{ConfigEditor:s(9872).A},props:{config:{type:Object,required:!0},categories:{type:Array,required:!0},selectedProperties:{type:Array,required:!0}},computed:{...(0,a.L8)({displayCategories:"settings/displayCategories"}),title(){return this.$t("mass-editor-values",{n:this.selectedProperties.length})}}},b=(0,n.A)(_,g,[],!1,null,null,null).exports;var f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mass-editor"},[e("div",{staticClass:"mass-editor__title"},[t._v("\n    "+t._s(t.title)+"\n\n    "),e("div",{staticClass:"mass-editor__navigation pull-right"},[t.saving?t._e():e("button",{staticClass:"button",on:{click:function(e){return t.$emit("back")}}},[t._v("\n        "+t._s(t.$t("back"))+"\n      ")])])]),t._v(" "),e("div",{staticClass:"mass-editor__content"},[e("p",[t._v(t._s(t.selectedBotsText))]),t._v(" "),e("BotsView",{attrs:{selectedBots:t.selectedBots,selectable:!1,bots:t.sortedBots}}),t._v(" "),e("p",[t._v(t._s(t.selectedPropertiesText))]),t._v(" "),e("pre",[e("code",[t._v(t._s(t.prettyConfig))])]),t._v(" "),e("div",{staticClass:"form-item"},[e("button",{staticClass:"button button--confirm",on:{click:t.onSave}},[t.saving?e("div",[e("FontAwesomeIcon",{attrs:{icon:"spinner",spin:""}}),t._v(" "),e("span",[t._v(t._s(t.savingText))])],1):e("span",[t._v(t._s(t.$t("save")))])])])],1)])};f._withStripped=!0;var v=s(5859),y=s(9067);const x={name:"MassEditorCheck",components:{BotsView:p},props:{config:{type:Object,required:!0},selectedBots:{type:Array,required:!0},selectedProperties:{type:Array,required:!0}},data:()=>({saving:!1,savingCount:0,savedConfig:!1}),computed:{title(){return this.$t("mass-editor-check",{n:this.selectedBots.length,m:this.selectedProperties.length})},selectedBotsText(){return this.$t("mass-editor-check-bots",{n:this.selectedBots.length})},selectedPropertiesText(){return this.$t("mass-editor-check-values",{n:Object.keys(this.config).length})},prettyConfig(){return JSON.stringify(this.config,null,2)},savingText(){return this.$t("mass-editor-check-saving",{current:this.savingCount,all:this.selectedBots.length})},sortedBots(){return(0,v.A)(this.selectedBots,[t=>t.name])}},methods:{async onSave(){if(!this.saving){this.saving=!0;for(const t of this.selectedBots)this.savingCount+=1,await this.saveConfigForBot(this.config,t);this.savedConfig?this.$success(this.$t("mass-editor-check-saved",{n:this.selectedBots.length})):this.$info(this.$t("mass-editor-check-not-saved",{n:this.selectedProperties.length,m:this.selectedBots.length})),this.saving=!1,this.savingCount=0,this.savedConfig=!1}},async saveConfigForBot(t,e){try{const{[e.name]:{BotConfig:s}}=await this.$http.get(`bot/${e.name}`);if((0,y.A)(t,s))return;const i={...s,...t};await this.$http.post(`bot/${e.name}`,{botConfig:i}),this.savedConfig=!0}catch(t){this.$error(t.message)}}}};s(8947);const w=(0,n.A)(x,f,[],!1,null,"d2654f6a",null).exports;var C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mass-editor"},[e("div",{staticClass:"mass-editor__title"},[t._v("\n    "+t._s(t.$t("mass-editor-properties"))+"\n\n    "),e("div",{staticClass:"mass-editor__navigation pull-right"},[e("button",{staticClass:"button",on:{click:function(e){return t.$emit("back")}}},[t._v("\n        "+t._s(t.$t("back"))+"\n      ")]),t._v(" "),e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.nextTitle,expression:"nextTitle",modifiers:{left:!0}}]},[e("button",{staticClass:"button",attrs:{disabled:t.isNextDisabled},on:{click:function(e){return t.$emit("next")}}},[t._v("\n          "+t._s(t.$t("next"))+"\n        ")])])])]),t._v(" "),e("div",{staticClass:"mass-editor__content"},[e("Multiselect",t._b({on:{select:t.selectOption,remove:t.removeOption,input:t.updateModel,open:t.openSelection,close:t.closeSelection},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},"Multiselect",t.multiselectConfig,!1),[e("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v("\n        "+t._s(t.$t("mass-editor-search-not-found"))+"\n      ")])])],1)])};C._withStripped=!0;var S=s(5262);const k={name:"MassEditorSelect",components:{Multiselect:s.n(S)()},props:{loading:{type:Boolean,required:!0},options:{type:Array,required:!0},selectedProperties:{type:Array,required:!0}},data(){return{selection:this.selectedProperties,multiselectConfig:{label:"param",trackBy:"param",loading:this.loading,multiple:!0,options:this.options,closeOnSelect:!1,placeholder:"",deselectLabel:"",selectLabel:"",selectedLabel:""}}},computed:{nextTitle(){return 0===this.selectedProperties.length?this.$t("mass-editor-properties-disabled"):null},isNextDisabled(){return 0===this.selectedProperties.length}},methods:{selectOption(t){this.$emit("select",t)},removeOption(t){this.$emit("remove",t)},updateModel(t){this.$emit("update",t)},openSelection(){this.multiselectConfig.placeholder=this.$t("mass-editor-search")},closeSelection(){this.multiselectConfig.placeholder=""}}};s(1386);const A=(0,n.A)(k,C,[],!1,null,null,null).exports;var B=s(3590),$=s(6767),P=s(3909),D=s(7825);const T={name:"MassEditor",metaInfo(){return{title:this.$t("mass-editor")}},components:{MassEditorSteps:l,MassEditorBots:h,MassEditorCheck:w,MassEditorSelect:A,MassEditorValue:b},data:()=>({loading:!0,fields:[],model:{},descriptions:{},categories:P.ej,config:{},status:"bots",selectedBots:[],selectedProperties:[],noBotsFound:!1,steps:["bots","properties","values","check"]}),computed:{...(0,a.L8)({version:"asf/version",bots:"bots/bots",orderDisabledBotsLast:"settings/orderDisabledBotsLast",orderBotsNumeric:"settings/orderBotsNumeric"}),sortedBots(){const t=this.bots.sort(this.sortDefault());return this.orderDisabledBotsLast?t.sort(this.sortByStatus()):t}},watch:{async bots(){this.bots[Object.keys(this.bots)[0]]?this.loading&&await this.loadBotConfig():(this.noBotsFound=!0,this.loading=!1)}},methods:{sortDefault(){if(this.orderBotsNumeric)return function(t,e){return t.name-e.name}},sortByStatus:()=>function(t,e){return t.status===e.status?0:t.status===D.u.DISABLED?1:e.status===D.u.DISABLED||t.status===D.u.FARMING?-1:e.status===D.u.FARMING?1:t.status===D.u.ONLINE?-1:1},async loadBotConfig(){const t=this.bots[Object.keys(this.bots)[0]],[{[t.name]:{BotConfig:e}},{body:s},i]=await Promise.all([this.$http.get(`bot/${t.name}`),(0,B.A)("ArchiSteamFarm.Steam.Storage.BotConfig"),(0,$.A)(this.version,this.$i18n.locale)]);Object.keys(e).forEach((t=>{t.startsWith("s_")&&delete e[t.substr(2)]})),this.model=e;const a={SteamLogin:{placeholder:this.$t("keep-unchanged")},SteamPassword:{placeholder:this.$t("keep-unchanged")},SteamParentalCode:{placeholder:this.$t("keep-unchanged")}};this.fields=Object.keys(s).map((t=>({description:i[t]?i[t].replace(/<a href="/g,'<a target="_blank" rel="noreferrer noopener" href="'):this.$t("description-not-found"),...s[t],...a[t]||[]}))),this.noBotsFound=!1,this.loading=!1},updateSelectedBots(t){const e=this.selectedBots.map((t=>t.name));e.includes(t.name)?this.selectedBots=this.selectedBots.filter((e=>e.name!==t.name)):this.selectedBots.push(t)},selectProperty(t){this.config[t.param]=t.defaultValue},removeProperty(t){delete this.config[t.param]},updateModel(t){this.selectedProperties=t},setStatus(t){this.status=t},toggleSelectedBots(){this.selectedBots.length===this.bots.length?this.selectedBots=[]:this.selectedBots=this.bots},isStepDisabled(t){switch(t){case"properties":return 0===this.selectedBots.length;case"values":case"check":return 0===this.selectedBots.length||0===this.selectedProperties.length;default:return!1}},getDisabledTitle(t){switch(t){case"properties":return 0===this.selectedBots.length?this.$t("mass-editor-bots-disabled"):null;case"values":case"check":return 0===this.selectedBots.length?this.$t("mass-editor-bots-disabled"):0===this.selectedProperties.length?this.$t("mass-editor-properties-disabled"):null;default:return null}}}};s(6037);const M=(0,n.A)(T,i,[],!1,null,null,null).exports},6549:(t,e,s)=>{var i=s(5222);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(534).A)("7d17d6a1",i,!1,{})},8947:(t,e,s)=>{var i=s(458);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(534).A)("2aa33405",i,!1,{})},1386:(t,e,s)=>{var i=s(9877);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(534).A)("1998b298",i,!1,{})},3867:(t,e,s)=>{var i=s(6930);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(534).A)("d6b02878",i,!1,{})},5482:(t,e,s)=>{var i=s(7603);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(534).A)("5ee002a9",i,!1,{})},6037:(t,e,s)=>{var i=s(8902);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,s(534).A)("113b2334",i,!1,{})}}]);