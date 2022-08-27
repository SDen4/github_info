"use strict";(self.webpackChunkgithub_info=self.webpackChunkgithub_info||[]).push([[108],{3108:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var a=e(2982),s=e(2791),c=e(6030),o=e(8182),l=e(8790),i=function(n){var t=(new Date).getTime()-n.getTime(),e=Math.floor(t/1e3/60/60/24/365.25),a=Math.floor((t-365.25*e*24*60*60*1e3)/1e3/60/60/24/30),s=Math.floor((t-365.25*e*24*60*60*1e3-30*a*24*60*60*1e3)/1e3/60/60/24),c="".concat(e,e>1?" years":" year"),o="";o=0===a?"":"".concat(a,1===a?" month":" months");var l="";return l=0===s?"ago":"and ".concat(s,1===s?" day ago":" days ago"),e>=1?"".concat(c," ").concat(o," ").concat(l):a>=1?"".concat(o," ").concat(l):"".concat(l)},r=e(8569),d=e(9082),m=e(4101),u=e(4680),_=e(1295),h=e(9128),v=e(1931),f="styles_card__AJQqw",p="styles_cardElement__XezU+",y="styles_cardPhotoWrapper__qbtyn",x="styles_cardFollowersWrapper__ekWHu",j="styles_cardFollowersUnit__Ispdj",N="styles_cardSubElem__7KSeQ",g="styles_cardSubElemCreate__jsrQX",b="styles_cardLogin__Wa7OJ",w="styles_cardUserInfo__+5TYv",C="styles_cardUserInfoWrapper__o-008",U="styles_cardUserInfoBtn__Z29cc",k="styles_closeBtnWrapper__unXtQ",D="styles_button__rEmb3",A="styles_star__+Y4bR",Z="styles_starActive__GSap6",S="styles_downloadBtn__tMOXA",I="styles_addNoteBtn__rUgrc",L="styles_buttonActive__LtXgS",E="styles_tooltip__jLsHM",F="styles_arrow__n0Y9I",X="styles_line__OwoYf",M="styles_hide__iHX86",B="styles_tooltipText__LQHsC",W=e(184),Y=function(){var n=(0,c.I0)(),t=(0,c.v9)(u.$X),e=(0,c.v9)(u.xe),s=(0,c.v9)(v.si),Y=(0,c.v9)(u.Je),q=(0,c.v9)(v.pH),O=(0,c.v9)(u.IB),H=(0,c.v9)(u._),J=function(t){n((0,h.wR)(t))};return(0,W.jsxs)("div",{className:(0,o.Z)(f,q&&M),children:[(0,W.jsx)("aside",{className:p,children:(0,W.jsx)("div",{className:y,children:(0,W.jsx)("img",{src:s.avatarUrl,alt:"User's avatar"})})}),(0,W.jsxs)(d.k,{className:p,children:[(0,W.jsx)("header",{className:N,children:s.name?(0,W.jsxs)("a",{href:"https://github.com/".concat(s.login),className:b,children:[s.name," (",s.login,")"]}):(0,W.jsx)("a",{href:"https://github.com/".concat(s.login),className:b,children:s.login})}),s.company&&(0,W.jsxs)("div",{className:N,children:[(0,W.jsx)("span",{children:"Company:\xa0"}),(0,W.jsx)("div",{className:w,children:s.company})]}),s.location&&(0,W.jsxs)("div",{className:N,children:[(0,W.jsx)("span",{children:"Location:\xa0"}),(0,W.jsx)("div",{className:w,children:s.location})]}),s.email&&(0,W.jsxs)("div",{className:N,children:[(0,W.jsx)("span",{children:"Email:\xa0"}),(0,W.jsx)("a",{href:"mailto:".concat(s.email),className:w,children:s.email})]}),s.reposNum?(0,W.jsxs)("div",{className:N,children:[(0,W.jsx)("span",{children:"Public repositories:\xa0"}),(0,W.jsx)("button",{type:"button",className:(0,o.Z)(w,U),onClick:function(){n((0,h.gN)())},children:s.reposNum})]}):"",(0,W.jsxs)("div",{className:x,children:[(0,W.jsxs)("div",{className:j,children:[(0,W.jsx)("span",{children:"Followers:\xa0"}),(0,W.jsx)("button",{type:"button",className:(0,o.Z)(w,U),onClick:function(){return J("followers")},children:s.followersNum})]}),(0,W.jsxs)("div",{className:j,children:[(0,W.jsx)("span",{children:"Following:\xa0"}),(0,W.jsx)("button",{type:"button",className:(0,o.Z)(w,U),onClick:function(){return J("following")},children:s.followingNum})]})]}),(0,W.jsxs)("div",{className:(0,o.Z)(N,g),children:[(0,W.jsx)("span",{children:"Created\xa0at:\xa0"}),(0,W.jsxs)("div",{className:C,children:[(0,W.jsx)("div",{className:w,children:(0,l.v)(s.dataCreated)}),(0,W.jsxs)("div",{className:w,children:["(",i(s.dataCreated),")"]})]})]}),s.lastActivityDate&&(0,W.jsxs)("div",{className:N,children:[(0,W.jsx)("span",{children:"Last\xa0activity\xa0at:\xa0"}),(0,W.jsx)("div",{className:w,children:(0,l.v)(new Date(s.lastActivityDate))})]})]}),(0,W.jsxs)("div",{className:k,children:[(0,W.jsxs)("button",{type:"button",className:(0,o.Z)(O&&L,D,I,E),onClick:function(){Y||n((0,m.U3)(!0))},children:[(0,W.jsx)("span",{children:"\u270e"}),(0,W.jsx)("div",{className:B,children:O?"Show note":"Add note"})]}),(0,W.jsxs)("button",{type:"button",className:(0,o.Z)(D,S,E),onClick:function(){var n=document.createElement("a"),t=function(n,t){var e="-";return"\n    User information report for ".concat((0,l.v)(new Date),".\n\n\n    Login: ").concat(n.login,", name: ").concat(n.name||e,"\n    \n    Followers quantity: ").concat(n.followersNum,". Following quantity: ").concat(n.followingNum,"\n\n    Location: ").concat(n.location||e,"\n\n    Company: ").concat(n.company||e,"\n\n    Email: ").concat(n.email||e,"\n\n    Date of creation Github account: ").concat((0,l.v)(n.dataCreated)||e,"\n    (").concat(i(n.dataCreated),")\n\n    Date of last activity on Github: ").concat(n.lastActivityDate&&(0,l.v)(new Date(n.lastActivityDate))||e,"\n\n    Public repositories quantity: ").concat(n.reposNum||e,"\n\n\n    Links.\n    \n    User page: https://github.com/").concat(n.login,"\n\n    Repositories: ").concat(n.reposUrl,"\n\n    Avatar: ").concat(n.avatarUrl,"\n\n    Followers: ").concat(n.followersUrl,"\n\n    Following: ").concat(n.followingUrl,'\n\n    \n    Your notes:\n\n    "').concat(t,'"\n    ')}(s,e);n.setAttribute("href","data:text/plain;charset=utf-8,".concat(encodeURIComponent(t))),n.setAttribute("download","".concat(s.login,".doc")),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},children:[(0,W.jsx)("span",{className:F,children:"\u2193"}),(0,W.jsx)("div",{className:X}),(0,W.jsx)("div",{className:B,children:"Download .doc file"})]}),(0,W.jsxs)("button",{type:"button",className:(0,o.Z)(D,E),onClick:function(){if(H){var e=t.filter((function(n){return n.name!==s.login}));n((0,m.vw)(!1)),n((0,m.L1)(e)),localStorage.setItem("favorite",JSON.stringify(e))}else{n((0,m.vw)(!0));var c={name:s.login};n((0,m.ZE)(c)),localStorage.setItem("favorite",JSON.stringify([].concat((0,a.Z)(t),[c]))),n((0,m.d1)(!0))}},children:[(0,W.jsx)("span",{className:(0,o.Z)(H&&Z,A),children:"\u2605"}),(0,W.jsx)("div",{className:B,children:H?"Remove from favorites":"Add to favorites"})]}),(0,W.jsx)(r.P,{onClick:function(){n((0,_.hh)(!1)),n((0,_.XB)("","","","",0,0,new Date,"","","",0,"","")),Y&&n((0,m.U3)(!1))}})]})]})},q=(0,s.memo)(Y)},8569:function(n,t,e){e.d(t,{P:function(){return r}});var a=e(2791),s=e(8182),c="styles_closeBtn__X+jYU",o="styles_tooltip__OqpEW",l="styles_tooltipText__-fVSx",i=e(184),r=(0,a.memo)((function(n){var t=n.onClick;return(0,i.jsx)("button",{className:(0,s.Z)(c,o),type:"button","aria-label":"Close",onClick:t,children:(0,i.jsx)("div",{className:l,children:"Close"})})}))},8790:function(n,t,e){e.d(t,{v:function(){return a}});var a=function(n){var t=n.getDate()<10?"0".concat(n.getDate()):n.getDate(),e=n.getMonth()<9?"0".concat(n.getMonth()+1):n.getMonth()+1,a=n.getFullYear();return"".concat(t,".").concat(e,".").concat(a)}}}]);
//# sourceMappingURL=108.6074ca00.chunk.js.map