(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"79o7":function(e,a,t){e.exports={dropDown:"b48ae24f8464b65a423c5b195979f688-scss"}},D4j4:function(e,a,t){e.exports={container:"_34c9e3cac659d52a33c187662a45e267-scss",form:"_35aa5a899d4228af6722960260c52451-scss",formInput:"_96cda1ee3762ab43f2a6915f1afb89aa-scss",errorMessage:"a14a96c121a6c404b538d317a7c03718-scss"}},aTwR:function(e,a,t){"use strict";t.r(a),t.d(a,"InAppMessagingPreviewTool",(function(){return u}));var n=t("mXGw"),s=t.n(n),l=t("/m4v"),c=t("335f"),i=t("w/+f"),r=t("34YF"),o=t("D4j4"),d=t.n(o);const p=[{label:"Production",value:"prod"},{label:"Development",value:"dev"}],u=()=>{const e=Object(l.c)(),a=Object(l.d)(e=>e.inAppMessaging.env),t=Object(l.d)(e=>e.inAppMessaging.message),[o,u]=Object(n.useState)(""),[m,v]=Object(n.useState)(""),[g,f]=Object(n.useState)(!1);Object(n.useEffect)(()=>{t&&g&&f(!1)},[t,g]);const b=!t&&g;return s.a.createElement("div",{className:d.a.container},s.a.createElement("h1",null,"In-App Messaging Preview"),s.a.createElement("div",{className:d.a.form},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"desktop.settings.inAppMessagingEnv"},"Mode (endpoint):")),s.a.createElement(i.a,{dir:"auto",value:a,id:"desktop.settings.inAppMessagingEnv",onSelect:function(a){"prod"!==a&&"dev"!==a||e(Object(c.d)(a))}},p.map(({label:e,value:a})=>s.a.createElement("option",{key:a,value:a},e))),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"desktop.settings.inAppMessagingCreativeId"},"Creative Id:")),s.a.createElement("div",null,s.a.createElement("input",{className:d.a.formInput,placeholder:"(eg. 12123434)",id:"desktop.settings.inAppMessagingCreativeId",name:"Creative Id",type:"text",value:o,onChange:function(e){u(e.target.value),f(!1)}})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"desktop.settings.inAppMessagingAppUri"},"URI for Dynamic Content (optional):")),s.a.createElement("div",null,s.a.createElement("input",{className:d.a.formInput,placeholder:"(eg. spotify:artist:123)",id:"desktop.settings.inAppMessagingAppUri",name:"App Uri",type:"text",value:m,onChange:function(e){v(e.target.value),f(!1)}})),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement(r.a,{version:"secondary",onClick:function(a){a.preventDefault(),e(Object(c.c)(o,m)),f(!1),window.setTimeout(()=>{f(!0)},1e3)}},"Get Preview")),b&&s.a.createElement("div",{className:d.a.errorMessage},"No Messsage found")))};a.default=u},"w/+f":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("mXGw"),s=t.n(n),l=t("79o7"),c=t.n(l);const i=({value:e,id:a,children:t,disabled:n,onSelect:l,className:i,dir:r})=>s.a.createElement("span",{className:i},s.a.createElement("select",{className:c.a.dropDown,value:null==e?void 0:e.toString(),id:a,disabled:n,onBlur:()=>{},onChange:e=>{l(e.target.value)},dir:r},t))}}]);