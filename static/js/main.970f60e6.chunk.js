(this.webpackJsonpgithub_info=this.webpackJsonpgithub_info||[]).push([[0],{60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(13),a=n.n(c),s=n(11),l=n(10),o=n(30),i=n(12),u="SEARCH_LOGIN_SAGA",j="FETCH_LOGIN",d="CARD_OPEN_FLAG",b="LOADING",O={user:{name:"",login:"",followersUrl:"",followingUrl:"",avatarUrl:"",followersNum:0,followingNum:0},cardOpened:!1,loading:!1},f=Object(s.b)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)({},e),{},{user:{name:t.name,login:t.login,followersUrl:t.followers_url,followingUrl:t.following_url,avatarUrl:t.avatar_url,followersNum:t.followers,followingNum:t.following}});case d:return Object(i.a)(Object(i.a)({},e),{},{cardOpened:t.cardOPenedFlag});case b:return Object(i.a)(Object(i.a)({},e),{},{loading:t.loadingFlag});default:return e}}}),x=n(7),h=n.n(x),v=n(8),p=n(27),m=function(e){return{type:d,cardOPenedFlag:e}},w=function(e){return{type:b,loadingFlag:e}},_=n(28),g=n.n(_).a.create({baseURL:"https://api.github.com/users/"}),N=h.a.mark(F),y=h.a.mark(S);function E(e){return U.apply(this,arguments)}function U(){return(U=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("".concat(t)).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(v.c)(m(!1));case 3:return n.next=5,Object(v.c)(w(!0));case 5:return n.next=7,E(e.login);case 7:return t=n.sent,n.next=10,Object(v.c)((r=t.name,c=t.login,a=t.followers_url,s=t.following_url,l=t.followers,o=t.following,i=t.avatar_url,{type:j,name:r,login:c,followers_url:a,following_url:s,followers:l,following:o,avatar_url:i}));case 10:return n.next=12,Object(v.c)(w(!1));case 12:return n.next=14,Object(v.c)(m(!0));case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}var r,c,a,s,l,o,i}),N,null,[[0,16]])}function S(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(u,F);case 2:case"end":return e.stop()}}),y)}var k=h.a.mark(A);function A(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(S)]);case 2:case"end":return e.stop()}}),k)}n(60);var C=n(2),L=function(e){var t=e.user,n=Object(l.b)();return Object(C.jsxs)("div",{className:"card",children:[Object(C.jsx)("div",{className:"card_element",children:Object(C.jsx)("div",{className:"card_photo_wrapper",children:Object(C.jsx)("img",{src:t.avatarUrl,alt:"User's avatar"})})}),Object(C.jsxs)("div",{className:"card_element",children:[Object(C.jsx)("h2",{children:t.name}),Object(C.jsx)("h3",{children:t.login}),Object(C.jsxs)("div",{className:"card_followers_wrapper",children:[Object(C.jsxs)("div",{className:"card_followers_unit",children:[Object(C.jsx)("span",{children:"Followers:"}),Object(C.jsx)("a",{href:"?",children:t.followersNum})]}),Object(C.jsxs)("div",{className:"card_followers_unit",children:[Object(C.jsx)("span",{children:"Following:"}),Object(C.jsx)("a",{href:"?",children:t.followingNum})]})]})]}),Object(C.jsx)("div",{className:"card_close_btn_wrapper",children:Object(C.jsx)("button",{className:"card_close_btn",type:"button","aria-label":"Close",onClick:function(){n(m(!1))}})})]})},D=n(17),G=n(29),I=(n(62),function(e){var t=e.children,n=e.disabled;return Object(C.jsx)("button",{className:Object(G.a)(n&&"button_unactive","button"),type:"submit",disabled:n,children:t})}),R=(n(63),function(){var e=Object(r.useState)(""),t=Object(D.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!0),s=Object(D.a)(a,2),o=s[0],i=s[1],j=Object(l.b)(),d=Object(r.useRef)(null);Object(r.useEffect)((function(){d.current.focus()}),[]);return Object(C.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),j({type:u,login:n}),c(""),i(!0)},children:[Object(C.jsx)("input",{ref:d,className:"input",type:"text",placeholder:"Enter the github login",value:n,onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;c(t),t.trim()?i(!1):i(!0)}}),Object(C.jsx)(I,{disabled:o,children:"Search"})]})}),P=(n(64),function(){return Object(C.jsx)("div",{className:"loader_wrapper",children:Object(C.jsxs)("div",{className:"lds-default",children:[Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{})]})})}),T=(n(65),function(){var e=Object(l.c)((function(e){return e.search}));return Object(C.jsxs)("div",{className:"root_wrapper",children:[Object(C.jsx)("header",{className:"root_header",children:"Find github's user"}),Object(C.jsx)("section",{className:"root_section",children:Object(C.jsx)(R,{})}),Object(C.jsxs)("section",{className:"root_section",children:[e.loading&&Object(C.jsx)(P,{}),e.cardOpened&&Object(C.jsx)(L,{user:e.user})]})]})});n(66);var H=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(T,{})})},J=(n(67),Object(o.a)()),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,B=Object(s.d)(f,X(Object(s.a)(J)));J.run(A),a.a.render(Object(C.jsx)(l.a,{store:B,children:Object(C.jsx)(H,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.970f60e6.chunk.js.map