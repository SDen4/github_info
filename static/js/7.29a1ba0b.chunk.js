(this.webpackJsonpgithub_info=this.webpackJsonpgithub_info||[]).push([[7],{83:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),n=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,r=e.getFullYear();return"".concat(t,".").concat(n,".").concat(r)}},87:function(e,t,n){e.exports={repoItemWrapper:"RepoItem_repoItemWrapper__2Fu_3",repoItemUnit:"RepoItem_repoItemUnit__2qFx0",repoItemUnitDates:"RepoItem_repoItemUnitDates__1qPn2",repoSubUnit:"RepoItem_repoSubUnit__fB19o",repoSubUnitRow:"RepoItem_repoSubUnitRow__3lHRC",repoItemLink:"RepoItem_repoItemLink__2qkow",repoLink:"RepoItem_repoLink__V_ZRc"}},88:function(e,t,n){e.exports={reposWrapper:"ReposList_reposWrapper__1jFch",reposItem:"ReposList_reposItem__1-Utc"}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(2),a=n(8),c=n(15),s=n(87),o=n.n(s),i=n(83),p=n(1),j=function(e){var t=e.repoItem;return Object(p.jsxs)("div",{className:o.a.repoItemWrapper,children:[Object(p.jsxs)("div",{className:o.a.repoItemUnit,children:[Object(p.jsx)("a",{href:t.html_url,className:o.a.repoItemLink,target:"_blank",rel:"noreferrer",children:t.name}),Object(p.jsx)("span",{children:t.description})]}),Object(p.jsxs)("div",{className:Object(c.a)(o.a.repoItemUnit,o.a.repoItemUnitDates),children:[Boolean(null===t||void 0===t?void 0:t.forks)&&Object(p.jsxs)("div",{className:Object(c.a)(o.a.repoSubUnit,o.a.repoSubUnitRow),children:[Object(p.jsx)("span",{children:"Forks: "}),Object(p.jsx)("span",{children:" "}),Object(p.jsx)("span",{children:t.forks})]}),Boolean(null===t||void 0===t?void 0:t.watchers)&&Object(p.jsxs)("div",{className:Object(c.a)(o.a.repoSubUnit,o.a.repoSubUnitRow),children:[Object(p.jsx)("span",{children:"Watchers: "}),Object(p.jsx)("span",{children:" "}),Object(p.jsx)("span",{children:t.watchers})]}),Object(p.jsxs)("div",{className:o.a.repoSubUnit,children:[Object(p.jsx)("span",{children:"Create at:"}),Object(p.jsx)("span",{children:Object(i.a)(new Date(t.created_at))})]}),Object(p.jsxs)("div",{className:o.a.repoSubUnit,children:[Object(p.jsx)("span",{children:"Update at:"}),Object(p.jsx)("span",{children:Object(i.a)(new Date(t.updated_at))})]}),Object(p.jsx)("div",{className:o.a.repoSubUnit,children:t.language&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:"Language: "}),Object(p.jsx)("span",{children:t.language})]})})]})]})},l=Object(r.memo)(j),b=n(88),d=n.n(b),m=function(){var e=Object(a.c)((function(e){return e.search.reposList}));return Object(p.jsx)("ul",{className:d.a.reposWrapper,children:e.map((function(e){return Object(p.jsx)("li",{className:d.a.reposItem,children:Object(p.jsx)(l,{repoItem:e})},e.name)}))})},u=Object(r.memo)(m)}}]);
//# sourceMappingURL=7.29a1ba0b.chunk.js.map