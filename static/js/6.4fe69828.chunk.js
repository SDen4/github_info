(this.webpackJsonpgithub_info=this.webpackJsonpgithub_info||[]).push([[6],{88:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var n=function(t){var e=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),c=t.getMonth()<9?"0".concat(t.getMonth()+1):t.getMonth()+1,n=t.getFullYear();return"".concat(e,".").concat(c,".").concat(n)}},89:function(t,e,c){t.exports={shlWrapper:"SearchHistoryList_shlWrapper__J1Ajn",shlButton:"SearchHistoryList_shlButton__DY15Q",clearButton:"SearchHistoryList_clearButton__dOJWU",listHeader:"SearchHistoryList_listHeader__2KVtd",hide:"SearchHistoryList_hide__3p1bp"}},99:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return b}));c(2);var n=c(12),o=c(13),a=c(5),r=c(23),s=c(40),i=c(88),u=c(89),l=c.n(u),h=function(t){var e=t.getHours()<10?"0".concat(t.getHours()):t.getHours(),c=t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes(),n=t.getSeconds()<10?"0".concat(t.getSeconds()):t.getSeconds();return"".concat(e,":").concat(c,":").concat(n)},d=c(0),b=function(t){var e=t.searchList,c=t.currentUserLogin,u=t.favoritesList,b=t.userListOpened,j=t.reposListOpened,g=t.isMobile,O=t.loading,f=Object(n.b)();return Object(d.jsxs)("div",{className:Object(o.a)(l.a.shlWrapper,g&&O&&l.a.hide),children:[Object(d.jsxs)("header",{className:l.a.listHeader,children:[Object(d.jsx)("h3",{children:"Search list"}),Object(d.jsx)(s.a,{onClick:function(){f(Object(a.k)(!1))}})]}),Object(d.jsx)("ol",{children:e.map((function(t,n){return Object(d.jsxs)("li",{children:[Object(d.jsx)("button",{className:l.a.shlButton,type:"button",onClick:function(){return function(t){if(t===c)return b&&f(Object(a.o)(!1)),void(j&&f(Object(a.j)(!1)));f(Object(r.d)(t,e,g,u))}(t.login)},children:t.login}),Object(d.jsx)("span",{children:" (".concat(Object(i.a)(new Date(t.dateOfSearch)),", ").concat(h(new Date(t.dateOfSearch)),")")})]},"".concat(t.login," + ").concat(n))}))}),Object(d.jsx)("button",{className:l.a.clearButton,type:"button",onClick:function(){f(Object(a.i)(!0,"Are you sure to delete ".concat(e.length>1?"all":""," ").concat(e.length>1?"(".concat(e.length,")"):""," ").concat(e.length>1?"items":"the item"," of search history?"),"search"))},children:"Delete history"})]})}}}]);
//# sourceMappingURL=6.4fe69828.chunk.js.map