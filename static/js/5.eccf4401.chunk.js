(this.webpackJsonpgithub_info=this.webpackJsonpgithub_info||[]).push([[5],{81:function(t,e,i){t.exports={closeBtn:"CloseButton_closeBtn__1TnKA",tooltip:"CloseButton_tooltip__ZMtiB",tooltipText:"CloseButton_tooltipText__2zv1M"}},82:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i(2),o=i(15),c=i(81),s=i.n(c),r=i(1),a=function(t){var e=t.onClick;return Object(r.jsx)("button",{className:Object(o.a)(s.a.closeBtn,s.a.tooltip),type:"button","aria-label":"Close",onClick:e,children:Object(r.jsx)("div",{className:s.a.tooltipText,children:"Close"})})},l=Object(n.memo)(a)},85:function(t,e,i){t.exports={shlWrapper:"FavoriteList_shlWrapper__3V_gW",list:"FavoriteList_list__2QGkZ",itemWrapper:"FavoriteList_itemWrapper__2s9iZ",shlButton:"FavoriteList_shlButton__2f6sJ",clearButton:"FavoriteList_clearButton__1Gswu",deleteListItemBtn:"FavoriteList_deleteListItemBtn__3v20o",miniModal:"FavoriteList_miniModal__1ywE8",btnsWrapper:"FavoriteList_btnsWrapper__kMS9P",deletedUserLogin:"FavoriteList_deletedUserLogin__2poIW",icon:"FavoriteList_icon__2KEFF",tooltip:"FavoriteList_tooltip__3XDot",tooltipText:"FavoriteList_tooltipText__kS8vW",downloadBtn:"FavoriteList_downloadBtn__1Y5nZ",tooltipTextDownload:"FavoriteList_tooltipTextDownload__2RGyT",listHeader:"FavoriteList_listHeader__1bpEX",hide:"FavoriteList_hide__3uErZ"}},98:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return p}));var n=i(19),o=i(2),c=i(8),s=i(15),r=i(82),a=i(7),l=i(21),u=i(12),b=i(85),j=i.n(b),d=i(1),_=function(){var t=Object(c.b)(),e=Object(c.c)((function(t){return t.favorite.favoriteList})),i=Object(c.c)((function(t){return t.search.searchHistory})),b=Object(c.c)((function(t){return t.search.user.login})),_=Object(c.c)((function(t){return t.search.usersListOpened})),p=Object(c.c)((function(t){return t.search.reposListOpened})),O=Object(c.c)((function(t){return t.search.isMobile})),h=Object(c.c)((function(t){return t.search.loading})),v=Object(o.useState)(!1),f=Object(n.a)(v,2),m=f[0],x=f[1],L=Object(o.useState)(""),F=Object(n.a)(L,2),B=F[0],N=F[1];return Object(d.jsxs)("div",{className:Object(s.a)(j.a.shlWrapper,O&&h&&j.a.hide),children:[Object(d.jsxs)("div",{className:j.a.listHeader,children:[Object(d.jsx)("h3",{children:"Favorite list"}),Object(d.jsx)(r.a,{onClick:function(){t(Object(u.a)(!1))}})]}),Object(d.jsx)("ol",{className:j.a.list,children:e.map((function(n){return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:j.a.itemWrapper,children:[Object(d.jsx)("button",{className:j.a.shlButton,type:"button",onClick:function(){return function(n){if(n===b)return _&&t(Object(a.p)(!1)),void(p&&t(Object(a.j)(!1)));t(Object(l.d)(n,i,O,e))}(n.name)},children:n.name}),n.note&&Object(d.jsx)("div",{className:j.a.icon,children:"\u270e"}),Object(d.jsx)("button",{type:"button",className:Object(s.a)(j.a.deleteListItemBtn,j.a.tooltip),onClick:function(){return t=n.name,x(!0),void N(t);var t},children:Object(d.jsx)("div",{className:j.a.tooltipText,children:"Delete"})})]})},n.name)}))}),Object(d.jsx)("button",{className:j.a.clearButton,type:"button",onClick:function(){t(Object(a.i)(!0,"Are you sure to delete ".concat(e.length>1?"all":""," your ").concat(e.length>1?"(".concat(e.length,")"):""," favorite ").concat(e.length>1?"users":"user","?"),"favorite"))},children:"Delete all favorite users"}),m&&Object(d.jsxs)("div",{className:j.a.miniModal,children:[Object(d.jsxs)("span",{children:["Are you sure to delete user"," ",Object(d.jsx)("span",{className:j.a.deletedUserLogin,children:B})," from favorite list?"]}),Object(d.jsxs)("div",{className:j.a.btnsWrapper,children:[Object(d.jsx)("button",{type:"button",onClick:function(){return function(i){var n=e.filter((function(t){return t.name!==i}));t(Object(u.c)(n)),localStorage.setItem("favorite",JSON.stringify(n)),b===i&&t(Object(u.b)(!1)),x(!1),N("")}(B)},children:"Delete"}),Object(d.jsx)("button",{type:"button",onClick:function(){return x(!1),void N("")},children:"Cansel"})]})]})]})},p=Object(o.memo)(_)}}]);
//# sourceMappingURL=5.eccf4401.chunk.js.map