(this.webpackJsonpgithub_info=this.webpackJsonpgithub_info||[]).push([[3],{84:function(t,e,a){t.exports={closeBtn:"CloseButton_closeBtn__1TnKA",tooltip:"CloseButton_tooltip__ZMtiB",tooltipText:"CloseButton_tooltipText__2zv1M"}},85:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var c=a(2),n=a(15),o=a(84),r=a.n(o),s=a(1),i=function(t){var e=t.onClick;return Object(s.jsx)("button",{className:Object(n.a)(r.a.closeBtn,r.a.tooltip),type:"button","aria-label":"Close",onClick:e,children:Object(s.jsx)("div",{className:r.a.tooltipText,children:"Close"})})},l=Object(c.memo)(i)},86:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var c=function(t){var e=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),a=t.getMonth()<9?"0".concat(t.getMonth()+1):t.getMonth()+1,c=t.getFullYear();return"".concat(e,".").concat(a,".").concat(c)}},89:function(t,e,a){t.exports={card:"Card_card__1eE8R",cardElement:"Card_cardElement__AbY4n",cardPhotoWrapper:"Card_cardPhotoWrapper__JGmby",cardFollowersWrapper:"Card_cardFollowersWrapper__28YGT",cardFollowersUnit:"Card_cardFollowersUnit__1Mlfq",cardSubElem:"Card_cardSubElem__r5PFf",cardSubElemCreate:"Card_cardSubElemCreate__1A5KY",cardLogin:"Card_cardLogin__21tpx",cardUserInfo:"Card_cardUserInfo__3AMht",cardUserInfoWrapper:"Card_cardUserInfoWrapper__1YnO1",cardUserInfoBtn:"Card_cardUserInfoBtn__GYyKD",closeBtnWrapper:"Card_closeBtnWrapper__3rise",button:"Card_button__3MKN6",star:"Card_star__IfEy2",starActive:"Card_starActive__awoNx",downloadBtn:"Card_downloadBtn__1GDkr",addNoteBtn:"Card_addNoteBtn__1flEO",buttonActive:"Card_buttonActive__1gkQq",tooltip:"Card_tooltip__H1TtR",arrow:"Card_arrow__2jWAc",line:"Card_line__xoZxC",hide:"Card_hide__2FuXg",tooltipText:"Card_tooltipText__1ogx3"}},97:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return h}));var c=a(23),n=a(2),o=a(8),r=a(15),s=a(85),i=a(86),l=function(t){var e=(new Date).getTime()-t.getTime(),a=Math.floor(e/1e3/60/60/24/365.25),c=Math.floor((e-365.25*a*24*60*60*1e3)/1e3/60/60/24/30),n=Math.floor((e-365.25*a*24*60*60*1e3-30*c*24*60*60*1e3)/1e3/60/60/24),o="".concat(a,a>1?" years":" year"),r="";r=0===c?"":"".concat(c,1===c?" month":" months");var s="";return s=0===n?"ago":"and ".concat(n,1===n?" day ago":" days ago"),a>=1?"".concat(o," ").concat(r," ").concat(s):c>=1?"".concat(r," ").concat(s):"".concat(s)},d=a(7),b=a(22),j=a(12),u=a(21),m=a(89),f=a.n(m),O=a(1),p=function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.search.user})),a=Object(o.c)((function(t){return t.favorite.favoriteList})),n=Object(o.c)((function(t){return t.favorite.favoriteUser})),m=Object(o.c)((function(t){return t.favorite.noteBtnFlag})),p=Object(o.c)((function(t){return t.favorite.note})),h=Object(o.c)((function(t){return t.favorite.noteFlag})),_=Object(o.c)((function(t){return t.search.loading})),v=function(a){t(Object(b.a)(e.login,a))};return Object(O.jsxs)("div",{className:Object(r.a)(f.a.card,_&&f.a.hide),children:[Object(O.jsx)("aside",{className:f.a.cardElement,children:Object(O.jsx)("div",{className:f.a.cardPhotoWrapper,children:Object(O.jsx)("img",{src:e.avatarUrl,alt:"User's avatar"})})}),Object(O.jsxs)(u.a,{className:f.a.cardElement,children:[Object(O.jsx)("header",{className:f.a.cardSubElem,children:e.name?Object(O.jsxs)("a",{href:"https://github.com/".concat(e.login),className:f.a.cardLogin,children:[e.name," (",e.login,")"]}):Object(O.jsx)("a",{href:"https://github.com/".concat(e.login),className:f.a.cardLogin,children:e.login})}),e.company&&Object(O.jsxs)("div",{className:f.a.cardSubElem,children:[Object(O.jsx)("span",{children:"Company:\xa0"}),Object(O.jsx)("div",{className:f.a.cardUserInfo,children:e.company})]}),e.location&&Object(O.jsxs)("div",{className:f.a.cardSubElem,children:[Object(O.jsx)("span",{children:"Location:\xa0"}),Object(O.jsx)("div",{className:f.a.cardUserInfo,children:e.location})]}),e.email&&Object(O.jsxs)("div",{className:f.a.cardSubElem,children:[Object(O.jsx)("span",{children:"Email:\xa0"}),Object(O.jsx)("a",{href:"mailto:".concat(e.email),className:f.a.cardUserInfo,children:e.email})]}),e.reposNum?Object(O.jsxs)("div",{className:f.a.cardSubElem,children:[Object(O.jsx)("span",{children:"Public repositories:\xa0"}),Object(O.jsx)("button",{type:"button",className:Object(r.a)(f.a.cardUserInfo,f.a.cardUserInfoBtn),onClick:function(){t(Object(b.c)(e.login))},children:e.reposNum})]}):"",Object(O.jsxs)("div",{className:f.a.cardFollowersWrapper,children:[Object(O.jsxs)("div",{className:f.a.cardFollowersUnit,children:[Object(O.jsx)("span",{children:"Followers:\xa0"}),Object(O.jsx)("button",{type:"button",className:Object(r.a)(f.a.cardUserInfo,f.a.cardUserInfoBtn),onClick:function(){return v("followers")},children:e.followersNum})]}),Object(O.jsxs)("div",{className:f.a.cardFollowersUnit,children:[Object(O.jsx)("span",{children:"Following:\xa0"}),Object(O.jsx)("button",{type:"button",className:Object(r.a)(f.a.cardUserInfo,f.a.cardUserInfoBtn),onClick:function(){return v("following")},children:e.followingNum})]})]}),Object(O.jsxs)("div",{className:Object(r.a)(f.a.cardSubElem,f.a.cardSubElemCreate),children:[Object(O.jsx)("span",{children:"Created\xa0at:\xa0"}),Object(O.jsxs)("div",{className:f.a.cardUserInfoWrapper,children:[Object(O.jsx)("div",{className:f.a.cardUserInfo,children:Object(i.a)(e.dataCreated)}),Object(O.jsxs)("div",{className:f.a.cardUserInfo,children:["(",l(e.dataCreated),")"]})]})]}),e.lastActivityDate&&Object(O.jsxs)("div",{className:f.a.cardSubElem,children:[Object(O.jsx)("span",{children:"Last\xa0activity\xa0at:\xa0"}),Object(O.jsx)("div",{className:f.a.cardUserInfo,children:Object(i.a)(new Date(e.lastActivityDate))})]})]}),Object(O.jsxs)("div",{className:f.a.closeBtnWrapper,children:[Object(O.jsxs)("button",{type:"button",className:Object(r.a)(m&&f.a.buttonActive,f.a.button,f.a.addNoteBtn,f.a.tooltip),onClick:function(){h||t(Object(j.g)(!0))},children:[Object(O.jsx)("span",{children:"\u270e"}),Object(O.jsx)("div",{className:f.a.tooltipText,children:m?"Show note":"Add note"})]}),Object(O.jsxs)("button",{type:"button",className:Object(r.a)(f.a.button,f.a.downloadBtn,f.a.tooltip),onClick:function(){var t=document.createElement("a"),a=function(t,e){var a="-";return"\n    User information report for ".concat(Object(i.a)(new Date),".\n\n\n    Login: ").concat(t.login,", name: ").concat(t.name||a,"\n    \n    Followers quantity: ").concat(t.followersNum,". Following quantity: ").concat(t.followingNum,"\n\n    Location: ").concat(t.location||a,"\n\n    Company: ").concat(t.company||a,"\n\n    Email: ").concat(t.email||a,"\n\n    Date of creation Github account: ").concat(Object(i.a)(t.dataCreated)||a,"\n    (").concat(l(t.dataCreated),")\n\n    Date of last activity on Github: ").concat(t.lastActivityDate&&Object(i.a)(new Date(t.lastActivityDate))||a,"\n\n    Public repositories quantity: ").concat(t.reposNum||a,"\n\n\n    Links.\n    \n    User page: https://github.com/").concat(t.login,"\n\n    Repositories: ").concat(t.reposUrl,"\n\n    Avatar: ").concat(t.avatarUrl,"\n\n    Followers: ").concat(t.followersUrl,"\n\n    Following: ").concat(t.followingUrl,'\n\n    \n    Your notes:\n\n    "').concat(e,'"\n    ')}(e,p);t.setAttribute("href","data:text/plain;charset=utf-8,".concat(encodeURIComponent(a))),t.setAttribute("download","".concat(e.login,".doc")),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},children:[Object(O.jsx)("span",{className:f.a.arrow,children:"\u2193"}),Object(O.jsx)("div",{className:f.a.line}),Object(O.jsx)("div",{className:f.a.tooltipText,children:"Download .doc file"})]}),Object(O.jsxs)("button",{type:"button",className:Object(r.a)(f.a.button,f.a.tooltip),onClick:function(){if(n){var o=a.filter((function(t){return t.name!==e.login}));t(Object(j.b)(!1)),t(Object(j.c)(o)),localStorage.setItem("favorite",JSON.stringify(o))}else{t(Object(j.b)(!0));var r={name:e.login};t(Object(j.d)(r)),localStorage.setItem("favorite",JSON.stringify([].concat(Object(c.a)(a),[r]))),t(Object(j.i)(!0))}},children:[Object(O.jsx)("span",{className:Object(r.a)(n&&f.a.starActive,f.a.star),children:"\u2605"}),Object(O.jsx)("div",{className:f.a.tooltipText,children:n?"Remove from favorites":"Add to favorites"})]}),Object(O.jsx)(s.a,{onClick:function(){t(Object(d.a)(!1)),t(Object(d.d)("","","","",0,0,new Date,"","","",0,"","")),h&&t(Object(j.g)(!1))}})]})]})},h=Object(n.memo)(p)}}]);
//# sourceMappingURL=3.05430df3.chunk.js.map