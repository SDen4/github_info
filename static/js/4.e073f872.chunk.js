(this.webpackJsonpgithub_info=this.webpackJsonpgithub_info||[]).push([[4],{94:function(e,r,s){e.exports={userItemWrapper:"UserItem_userItemWrapper__2GDfe",userItemPhotoWrapper:"UserItem_userItemPhotoWrapper__14XSX",userInfo:"UserItem_userInfo__1dr7S",userInfoUnit:"UserItem_userInfoUnit__UCmvR"}},95:function(e,r,s){e.exports={listWrapper:"UsersList_listWrapper__3pjUv",listWrapperUl:"UsersList_listWrapperUl__jxoPR",listError:"UsersList_listError__3_KCr",listErrorLogin:"UsersList_listErrorLogin__5_6ct",cardLogin:"UsersList_cardLogin__36km4",hide:"UsersList_hide__Au0Y2"}},98:function(e,r,s){"use strict";s.r(r),s.d(r,"default",(function(){return d}));var t=s(2),i=s(12),n=s(13),c=s(4),a=s(23),o=s(94),l=s.n(o),j=s(0),u=function(e){var r=e.user,s=e.history,t=e.isMobile,n=Object(i.b)();return Object(j.jsxs)("div",{className:l.a.userItemWrapper,children:[Object(j.jsx)("div",{className:l.a.userItemPhotoWrapper,children:Object(j.jsx)("img",{src:r.avatar_url,alt:"User's avatar"})}),Object(j.jsx)("div",{className:l.a.userInfo,children:Object(j.jsx)("div",{className:l.a.userInfoUnit,children:Object(j.jsx)("button",{type:"button",onClick:function(){n(Object(a.d)(r.login,s,t))},children:Object(j.jsx)("h2",{children:r.login})})})})]})},b=Object(t.memo)(u),p=s(95),_=s.n(p),h=function(e){var r=e.users,s=e.login,t=e.requestType,a=e.history,o=e.isMobile,l=e.loading,u=Object(i.b)();return Object(j.jsx)("div",{className:Object(n.a)(_.a.listWrapper,l&&_.a.hide),children:r.length?Object(j.jsx)("ul",{className:_.a.listWrapperUl,children:r.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(b,{user:e,history:a,isMobile:o})},e.login)}))}):Object(j.jsx)("div",{className:_.a.listError,children:Object(j.jsxs)("h2",{children:["It seems the user",Object(j.jsxs)("span",{className:_.a.listErrorLogin,children:[" ",Object(j.jsx)("button",{type:"button",onClick:function(){u(Object(c.o)(!1)),u(Object(c.j)(!1)),u(Object(c.a)(!0))},className:_.a.cardLogin,children:s})," "]}),"hasn't any ",t]})})})},d=Object(t.memo)(h)}}]);
//# sourceMappingURL=4.e073f872.chunk.js.map