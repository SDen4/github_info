(this.webpackJsonpgithub_info=this.webpackJsonpgithub_info||[]).push([[0],{60:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c(14),n=c.n(r),s=c(12),o=c(11),l=c(30),i=c(10),j="SEARCH_LOGIN_SAGA",u="FETCH_LOGIN",d="CARD_OPEN_FLAG",b="LOADING",O="ERROR",f={user:{name:"",login:"",followersUrl:"",followingUrl:"",avatarUrl:"",followersNum:0,followingNum:0,dataCreated:new Date,company:"",email:""},cardOpened:!1,loading:!1,error:!1},h=Object(s.b)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{user:{name:t.name,login:t.login,followersUrl:t.followers_url,followingUrl:t.following_url,avatarUrl:t.avatar_url,followersNum:t.followers,followingNum:t.following,dataCreated:t.created_at,company:t.company,email:t.email}});case d:return Object(i.a)(Object(i.a)({},e),{},{cardOpened:t.cardOPenedFlag});case b:return Object(i.a)(Object(i.a)({},e),{},{loading:t.loadingFlag});case O:return Object(i.a)(Object(i.a)({},e),{},{error:t.errorFlag});default:return e}}}),m=c(8),x=c.n(m),p=c(7),v=c(27),_=function(e){return{type:d,cardOPenedFlag:e}},g=function(e){return{type:b,loadingFlag:e}},w=function(e){return{type:O,errorFlag:e}},N=c(28),y=c.n(N).a.create({baseURL:"https://api.github.com/users/"}),C=x.a.mark(U),E=x.a.mark(S);function F(e){return D.apply(this,arguments)}function D(){return(D=Object(v.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("".concat(t)).then((function(e){return e.data}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){var t;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(p.c)(w(!1));case 3:return c.next=5,Object(p.c)(_(!1));case 5:return c.next=7,Object(p.c)(g(!0));case 7:return c.next=9,F(e.login);case 9:return t=c.sent,console.log(t),c.next=13,Object(p.c)((a=t.name,r=t.login,n=t.followers_url,s=t.following_url,o=t.followers,l=t.following,i=new Date(t.created_at),j=t.avatar_url,d=t.company,b=t.email,{type:u,name:a,login:r,followers_url:n,following_url:s,followers:o,following:l,created_at:i,avatar_url:j,company:d,email:b}));case 13:return c.next=15,Object(p.c)(g(!1));case 15:return c.next=17,Object(p.c)(_(!0));case 17:c.next=26;break;case 19:return c.prev=19,c.t0=c.catch(0),console.log(c.t0),c.next=24,Object(p.c)(g(!1));case 24:return c.next=26,Object(p.c)(w(!0));case 26:case"end":return c.stop()}var a,r,n,s,o,l,i,j,d,b}),C,null,[[0,19]])}function S(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(j,U);case 2:case"end":return e.stop()}}),E)}var k=x.a.mark(R);function R(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.b)(S)]);case 2:case"end":return e.stop()}}),k)}var A=c(13),M=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),c=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,a=e.getFullYear();return" ".concat(t,".").concat(c,".").concat(a,". ")},L=function(e){var t=(new Date).getTime()-e.getTime(),c=Math.floor(t/1e3/60/60/24/365),a=Math.floor((t-365*c*24*60*60*1e3)/1e3/60/60/24/30),r=Math.floor((t-365*c*24*60*60*1e3-30*a*24*60*60*1e3)/1e3/60/60/24),n="".concat(c,c>1?" years":" year"),s="".concat(a,a>1?" months":" month"),o="".concat(r,r>1?" days":" day");return c>=1?"".concat(n,", ").concat(s," and ").concat(o," ago"):a>=1?"".concat(s," and ").concat(o," ago"):"".concat(o," ago")},G=(c(60),c(1)),I=function(e){var t=e.user,c=Object(o.b)();return Object(G.jsxs)("div",{className:"card",children:[Object(G.jsx)("div",{className:"card_element",children:Object(G.jsx)("div",{className:"card_photo_wrapper",children:Object(G.jsx)("img",{src:t.avatarUrl,alt:"User's avatar"})})}),Object(G.jsxs)("div",{className:"card_element",children:[Object(G.jsx)("div",{className:"card_sub_element",children:Object(G.jsxs)("h2",{children:[t.name," (",t.login,")"]})}),t.company&&Object(G.jsxs)("div",{className:"card_sub_element",children:[Object(G.jsx)("span",{children:"Company:\xa0"}),Object(G.jsx)("div",{className:"card_user_info",children:t.company})]}),t.email&&Object(G.jsxs)("div",{className:"card_sub_element",children:[Object(G.jsx)("span",{children:"Email:\xa0"}),Object(G.jsx)("div",{className:"card_user_info",children:t.email})]}),Object(G.jsxs)("div",{className:"card_followers_wrapper",children:[Object(G.jsxs)("div",{className:"card_followers_unit",children:[Object(G.jsx)("span",{children:"Followers:"}),Object(G.jsx)("a",{href:"?",children:t.followersNum})]}),Object(G.jsxs)("div",{className:"card_followers_unit",children:[Object(G.jsx)("span",{children:"Following:"}),Object(G.jsx)("a",{href:"?",children:t.followingNum})]})]}),Object(G.jsxs)("div",{className:"card_sub_element",children:[Object(G.jsx)("span",{children:"Created at\xa0"}),Object(G.jsx)("div",{className:"card_user_info",children:M(t.dataCreated)}),Object(G.jsxs)("div",{className:"card_user_info",children:["\xa0(",L(t.dataCreated),")"]})]})]}),Object(G.jsx)("div",{className:"card_close_btn_wrapper",children:Object(G.jsx)("button",{className:"card_close_btn",type:"button","aria-label":"Close",onClick:function(){c(_(!1))}})})]})},T=c(29),P=(c(62),function(e){var t=e.children,c=e.disabled;return Object(G.jsx)("button",{className:Object(T.a)(c&&"button_unactive","button"),type:"submit",disabled:c,children:t})}),H=(c(63),function(e){var t=e.search,c=Object(a.useState)(""),r=Object(A.a)(c,2),n=r[0],s=r[1],l=Object(a.useState)(!0),i=Object(A.a)(l,2),u=i[0],d=i[1],b=Object(o.b)(),O=Object(a.useRef)(null);Object(a.useEffect)((function(){O.current.focus()}),[]);return Object(G.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),b({type:j,login:n}),t(n),s(""),d(!0)},children:[Object(G.jsx)("input",{ref:O,className:"input",type:"text",placeholder:"Enter the github login",value:n,onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;s(t),t.trim()?d(!1):d(!0)}}),Object(G.jsx)(P,{disabled:u,children:"Search"})]})}),J=(c(64),function(){return Object(G.jsx)("div",{className:"loader_wrapper",children:Object(G.jsxs)("div",{className:"lds-default",children:[Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{}),Object(G.jsx)("div",{})]})})}),X=(c(65),c(66),function(e){var t=e.userName;return Object(G.jsx)("div",{className:"error_wrapper",children:Object(G.jsxs)("h2",{children:["User",Object(G.jsxs)("span",{className:"error_user_info",children:[" ",t," "]}),"is not found..."]})})}),B=function(){var e=Object(o.c)((function(e){return e.search})),t=Object(a.useState)(""),c=Object(A.a)(t,2),r=c[0],n=c[1];return Object(G.jsxs)("div",{className:"root_wrapper",children:[Object(G.jsx)("header",{className:"root_header",children:"Find github's user"}),Object(G.jsx)("section",{className:"root_section",children:Object(G.jsx)(H,{search:function(e){n(e)}})}),Object(G.jsxs)("section",{className:"root_section",children:[e.loading&&Object(G.jsx)(J,{}),e.cardOpened&&Object(G.jsx)(I,{user:e.user}),e.error&&Object(G.jsx)(X,{userName:r})]})]})};c(67);var V=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(B,{})})},Y=(c(68),Object(l.a)()),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,z=Object(s.d)(h,q(Object(s.a)(Y)));Y.run(R),n.a.render(Object(G.jsx)(o.a,{store:z,children:Object(G.jsx)(V,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.2ade7cb5.chunk.js.map