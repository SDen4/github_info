(this.webpackJsonpgithub_info=this.webpackJsonpgithub_info||[]).push([[0],{12:function(e,t,r){e.exports={root_wrapper:"Root_root_wrapper__1z6jA",root_header:"Root_root_header__2Q2gf",root_section:"Root_root_section__wVSmS",root_sub_section_left:"Root_root_sub_section_left__w7859",root_sub_section_right:"Root_root_sub_section_right__2_xzV",root_section_search:"Root_root_section_search__1UtNK",root_btn:"Root_root_btn__3LWn4",buttonsWrapper:"Root_buttonsWrapper__2E3GA"}},15:function(e,t,r){e.exports={repoItemWrapper:"RepoItem_repoItemWrapper__2Fu_3",repoItemUnit:"RepoItem_repoItemUnit__2qFx0",repoItemUnitDates:"RepoItem_repoItemUnitDates__1qPn2",repoSubUnit:"RepoItem_repoSubUnit__fB19o",repoItemLink:"RepoItem_repoItemLink__2qkow",repoLink:"RepoItem_repoLink__V_ZRc"}},21:function(e,t,r){e.exports={user_item_wrapper:"UserItem_user_item_wrapper__-S_MD",user_item_photo_wrapper:"UserItem_user_item_photo_wrapper__3o12w",user_info:"UserItem_user_info__2XGUt",user_info_unit:"UserItem_user_info_unit__NXUAs"}},22:function(e,t,r){e.exports={list_wrapper:"UsersList_list_wrapper__nSqQh",list_wrapper_ul:"UsersList_list_wrapper_ul__1J9t2",list_error:"UsersList_list_error__3ILG7",list_error_login:"UsersList_list_error_login__227Wx"}},23:function(e,t,r){e.exports={shl_wrapper:"SearchHistoryList_shl_wrapper__2U7Jf",shl_button:"SearchHistoryList_shl_button__1M9Sp",clearButton:"SearchHistoryList_clearButton__dOJWU",closeBtnWrapper:"SearchHistoryList_closeBtnWrapper__m_SYn"}},24:function(e,t,r){e.exports={shl_wrapper:"FavoriteList_shl_wrapper__eUWAO",shl_button:"FavoriteList_shl_button__1PS1k",clearButton:"FavoriteList_clearButton__1Gswu",closeBtnWrapper:"FavoriteList_closeBtnWrapper__finpP"}},25:function(e,t,r){e.exports={modalWrapper:"Modal_modalWrapper__VFEZN",modal:"Modal_modal__P3_V5",btnsWrapper:"Modal_btnsWrapper__1VvdY",closeBtnWrapper:"Modal_closeBtnWrapper__2jGIJ"}},29:function(e,t,r){e.exports={button:"FavoriteButton_button__dHVyF",button_active:"FavoriteButton_button_active__3T88l",star:"FavoriteButton_star__HPvj8"}},32:function(e,t,r){e.exports={error_wrapper:"Error_error_wrapper__n50-v",error_user_info:"Error_error_user_info__1rfOr"}},33:function(e,t,r){e.exports={button:"SubmitButton_button__1jVPC",button_unactive:"SubmitButton_button_unactive__2Zxfo"}},34:function(e,t,r){e.exports={form:"SearchForm_form__qWosj",input:"SearchForm_input__zWLnu"}},35:function(e,t,r){e.exports={shh_wrapper:"SearchHistoryHeader_shh_wrapper__1srK3",shh_wrapper_active:"SearchHistoryHeader_shh_wrapper_active__1Mrzr"}},36:function(e,t,r){e.exports={loader_wrapper:"Loader_loader_wrapper__3aoS5",lds_default:"Loader_lds_default__4yQ63"}},37:function(e,t,r){e.exports={reposWrapper:"ReposList_reposWrapper__1jFch",reposItem:"ReposList_reposItem__1-Utc"}},48:function(e,t,r){e.exports={close_btn:"CloseButton_close_btn__qWf0r"}},8:function(e,t,r){e.exports={card:"Card_card__1eE8R",card_element:"Card_card_element__3GM1L",card_photo_wrapper:"Card_card_photo_wrapper__1vD-m",card_followers_wrapper:"Card_card_followers_wrapper__KJHwU",card_followers_unit:"Card_card_followers_unit__20nId",card_sub_element:"Card_card_sub_element__gi5oY",card_sub_element_create:"Card_card_sub_element_create__8nolq",card_user_info:"Card_card_user_info__3FZH1",card_user_info_wrapper:"Card_card_user_info_wrapper__EpTU8",card_user_info_btn:"Card_card_user_info_btn__1ZOjp",closeBtnWrapper:"Card_closeBtnWrapper__3rise",button:"Card_button__3MKN6",star:"Card_star__IfEy2",star_active:"Card_star_active__8mQXD"}},80:function(e,t,r){},81:function(e,t,r){},82:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(26),s=r.n(n),c=r(17),o=r(9),i=r(49),l=r(16),u=r(5),_="SEARCH_LOGIN_SAGA",p="FETCH_ALL_HISTORY",j="FETCH_SEARCH_HISTORY",b="SEARCH_HISTORY_LIST_FLAG",d="SEARCH_HISTORY_MODAL_FLAG",O="GET_LOCAL_HISTORY_SAGA",h="FETCH_LOGIN",f="FETCH_USERS_LIST",m="FETCH_USERS_LIST_SAGA",x="USERS_LIST_OPENED_FLAG",v="CARD_OPEN_FLAG",g="LOADING",y="ERROR",L="REPOS_LIST_SAGA",w="FETCH_REPOS_LIST",N="REPOS_OPENED_LIST_FLAG",S={user:{name:"",login:"",followersUrl:"",followingUrl:"",avatarUrl:"",followersNum:0,followingNum:0,dataCreated:new Date,company:"",email:"",reposNum:0,reposUrl:"",location:""},usersList:[],reposList:[],lastRequestType:"",usersListOpened:!1,reposListOpened:!1,cardOpened:!1,loading:!1,error:!1,searchHistory:[],searchHistoryListFlag:!1,modalFlag:!1,modalText:"",modalType:"search"},F="FAVORITE_BTN_FLAG",I="FAVORITE_LIST_SAGA",C="FAVORITE_LIST_FLAG",U="FAVORITE_LIST_ADD",T="FAVORITE_LIST",k="FAVORITE_USER_FLAG",R={favoriteBtnFlag:!1,favoriteListFlag:!1,favoriteList:[],favoriteUser:!1},H=Object(c.b)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{user:{name:t.name,login:t.login,followersUrl:t.followers_url,followingUrl:t.following_url,avatarUrl:t.avatar_url,followersNum:t.followers,followingNum:t.following,dataCreated:t.created_at,company:t.company,email:t.email,reposNum:t.public_repos,reposUrl:t.repos_url,location:t.location}});case v:return Object(u.a)(Object(u.a)({},e),{},{cardOpened:t.cardOPenedFlag});case g:return Object(u.a)(Object(u.a)({},e),{},{loading:t.loadingFlag});case y:return Object(u.a)(Object(u.a)({},e),{},{error:t.errorFlag});case x:return Object(u.a)(Object(u.a)({},e),{},{usersListOpened:t.userListFlag});case f:return Object(u.a)(Object(u.a)({},e),{},{usersList:t.usersList,lastRequestType:t.lastRequestType});case j:return Object(u.a)(Object(u.a)({},e),{},{searchHistory:[].concat(Object(l.a)(e.searchHistory),[t.searchHistory])});case p:return Object(u.a)(Object(u.a)({},e),{},{searchHistory:t.allSearchHistory});case b:return Object(u.a)(Object(u.a)({},e),{},{searchHistoryListFlag:t.searchHistoryListFlag});case w:return Object(u.a)(Object(u.a)({},e),{},{reposList:t.reposList});case N:return Object(u.a)(Object(u.a)({},e),{},{reposListOpened:t.reposListFlag});case d:return Object(u.a)(Object(u.a)({},e),{},{modalFlag:t.modalFlag,modalText:t.text,modalType:t.modalType});default:return e}},favorite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(u.a)(Object(u.a)({},e),{},{favoriteBtnFlag:t.favoriteBtnFlag});case T:return Object(u.a)(Object(u.a)({},e),{},{favoriteList:t.favoriteList});case U:return Object(u.a)(Object(u.a)({},e),{},{favoriteList:[].concat(Object(l.a)(e.favoriteList),[t.favoriteList])});case C:return Object(u.a)(Object(u.a)({},e),{},{favoriteListFlag:t.favoriteListFlag});case k:return Object(u.a)(Object(u.a)({},e),{},{favoriteUser:t.favoriteUserFlag});default:return e}}}),E=r(7),A=r.n(E),B=r(4),W=r(18),D=function(e){return{type:T,favoriteList:e}},G=function(e){return{type:C,favoriteListFlag:e}},M=function(e){return{type:k,favoriteUserFlag:e}},q=function(e,t,r){return{type:_,login:e,history:t,favoritesList:r}},P=function(e,t,r,a,n,s,c,o,i,l,u,_,p){return{type:h,name:e,login:t,followers_url:r,following_url:a,followers:n,following:s,created_at:c,avatar_url:o,company:i,email:l,public_repos:u,repos_url:_,location:p}},V=function(e){return{type:v,cardOPenedFlag:e}},J=function(e){return{type:g,loadingFlag:e}},Y=function(e){return{type:y,errorFlag:e}},X=function(e){return{type:x,userListFlag:e}},Z=function(e){return{type:b,searchHistoryListFlag:e}},z=function(e){return{type:p,allSearchHistory:e}},K=function(e){return{type:w,reposList:e}},Q=function(e){return{type:N,reposListFlag:e}},$=function(e,t,r){return{type:d,modalFlag:e,text:t,modalType:r}},ee=r(47),te=r.n(ee).a.create({baseURL:"https://api.github.com/users/"}),re=A.a.mark(ce),ae=A.a.mark(oe);function ne(e){return se.apply(this,arguments)}function se(){return(se=Object(W.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.get("".concat(t)).then((function(e){return e.data}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){var t,r,a;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(B.c)(Y(!1));case 3:return n.next=5,Object(B.c)(X(!1));case 5:return n.next=7,Object(B.c)(V(!1));case 7:return n.next=9,Object(B.c)(Q(!1));case 9:return n.next=11,Object(B.c)(K([]));case 11:return n.next=13,Object(B.c)(J(!0));case 13:return n.next=15,ne(e.login);case 15:return r=n.sent,n.next=18,Object(B.c)(P(r.name,r.login,r.followers_url,r.following_url,r.followers,r.following,new Date(r.created_at),r.avatar_url,r.company,r.email,r.public_repos,r.repos_url,r.location));case 18:if(!(null===(t=e.favoritesList)||void 0===t?void 0:t.find((function(e){return e===r.login})))){n.next=23;break}return n.next=21,Object(B.c)(M(!0));case 21:n.next=25;break;case 23:return n.next=25,Object(B.c)(M(!1));case 25:return n.next=27,{login:r.login,dateOfSearch:new Date};case 27:return a=n.sent,n.next=30,Object(B.c)({type:j,searchHistory:a});case 30:return n.next=32,localStorage.setItem("saves",JSON.stringify([].concat(Object(l.a)(e.history),[a])));case 32:return n.next=34,Object(B.c)(J(!1));case 34:return n.next=36,Object(B.c)(V(!0));case 36:n.next=45;break;case 38:return n.prev=38,n.t0=n.catch(0),console.log(n.t0),n.next=43,Object(B.c)(J(!1));case 43:return n.next=45,Object(B.c)(Y(!0));case 45:case"end":return n.stop()}}),re,null,[[0,38]])}function oe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(_,ce);case 2:case"end":return e.stop()}}),ae)}var ie=A.a.mark(pe),le=A.a.mark(je);function ue(e,t){return _e.apply(this,arguments)}function _e(){return(_e=Object(W.a)(A.a.mark((function e(t,r){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.get("".concat(t,"/").concat(r)).then((function(e){return e.data}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e){var t;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(B.c)(V(!1));case 3:return r.next=5,Object(B.c)(J(!0));case 5:return r.next=7,ue(e.login,e.requestType);case 7:return t=r.sent,r.next=10,Object(B.c)((a=t,n=e.requestType,{type:f,usersList:a,lastRequestType:n}));case 10:return r.next=12,Object(B.c)(J(!1));case 12:return r.next=14,Object(B.c)(X(!0));case 14:r.next=21;break;case 16:return r.prev=16,r.t0=r.catch(0),console.log(r.t0),r.next=21,Object(B.c)(J(!1));case 21:case"end":return r.stop()}var a,n}),ie,null,[[0,16]])}function je(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(m,pe);case 2:case"end":return e.stop()}}),le)}var be=A.a.mark(Oe),de=A.a.mark(he);function Oe(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,JSON.parse(localStorage.getItem("saves")||"[]");case 3:return e=t.sent,t.next=6,Object(B.c)(z(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),be,null,[[0,8]])}function he(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(O,Oe);case 2:case"end":return e.stop()}}),de)}var fe=A.a.mark(ge),me=A.a.mark(ye);function xe(e){return ve.apply(this,arguments)}function ve(){return(ve=Object(W.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.get("".concat(t,"/repos")).then((function(e){return e.data}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){var t;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(B.c)(V(!1));case 3:return r.next=5,Object(B.c)(J(!0));case 5:return r.next=7,xe(e.login);case 7:return t=r.sent,r.next=10,Object(B.c)(K(t));case 10:return r.next=12,Object(B.c)(Q(!0));case 12:return r.next=14,Object(B.c)(J(!1));case 14:r.next=21;break;case 16:return r.prev=16,r.t0=r.catch(0),console.log(r.t0),r.next=21,Object(B.c)(J(!1));case 21:case"end":return r.stop()}}),fe,null,[[0,16]])}function ye(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(L,ge);case 2:case"end":return e.stop()}}),me)}var Le=A.a.mark(Ne),we=A.a.mark(Se);function Ne(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,JSON.parse(localStorage.getItem("favorite")||"[]");case 3:return e=t.sent,t.next=6,Object(B.c)(D(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),Le,null,[[0,8]])}function Se(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(I,Ne);case 2:case"end":return e.stop()}}),we)}var Fe=A.a.mark(Ie);function Ie(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Object(B.b)(oe),Object(B.b)(je),Object(B.b)(he),Object(B.b)(ye),Object(B.b)(Se)]);case 2:case"end":return e.stop()}}),Fe)}var Ce=r(20),Ue=r(10),Te=r(48),ke=r.n(Te),Re=r(0),He=function(e){var t=e.onClick;return Object(Re.jsx)("button",{className:ke.a.close_btn,type:"button","aria-label":"Close",onClick:t})},Ee=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),r=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,a=e.getFullYear();return"".concat(t,".").concat(r,".").concat(a)},Ae=function(e){var t=(new Date).getTime()-e.getTime(),r=Math.floor(t/1e3/60/60/24/365.25),a=Math.floor((t-365.25*r*24*60*60*1e3)/1e3/60/60/24/30),n=Math.floor((t-365.25*r*24*60*60*1e3-30*a*24*60*60*1e3)/1e3/60/60/24),s="".concat(r,r>1?" years":" year"),c="";c=0===a?"":"".concat(a,1===a?" month":" months");var o="";return o=0===n?"ago":"and ".concat(n,1===n?" day ago":" days ago"),r>=1?"".concat(s," ").concat(c," ").concat(o):a>=1?"".concat(c," ").concat(o):"".concat(o)},Be=r(8),We=r.n(Be),De=function(e){var t=e.user,r=e.favorites,a=e.favoriteUserStatus,n=Object(o.b)(),s=function(e){n(function(e,t){return{type:m,login:e,requestType:t}}(t.login,e))};return Object(Re.jsxs)("div",{className:We.a.card,children:[Object(Re.jsx)("div",{className:We.a.card_element,children:Object(Re.jsx)("div",{className:We.a.card_photo_wrapper,children:Object(Re.jsx)("img",{src:t.avatarUrl,alt:"User's avatar"})})}),Object(Re.jsxs)("div",{className:We.a.card_element,children:[Object(Re.jsx)("div",{className:We.a.card_sub_element,children:t.name?Object(Re.jsxs)("h2",{children:[t.name," (",t.login,")"]}):Object(Re.jsx)("h2",{children:t.login})}),t.company&&Object(Re.jsxs)("div",{className:We.a.card_sub_element,children:[Object(Re.jsx)("span",{children:"Company:\xa0"}),Object(Re.jsx)("div",{className:We.a.card_user_info,children:t.company})]}),t.location&&Object(Re.jsxs)("div",{className:We.a.card_sub_element,children:[Object(Re.jsx)("span",{children:"Location:\xa0"}),Object(Re.jsx)("div",{className:We.a.card_user_info,children:t.location})]}),t.email&&Object(Re.jsxs)("div",{className:We.a.card_sub_element,children:[Object(Re.jsx)("span",{children:"Email:\xa0"}),Object(Re.jsx)("a",{href:"mailto:".concat(t.email),className:We.a.card_user_info,children:t.email})]}),t.reposNum?Object(Re.jsxs)("div",{className:We.a.card_sub_element,children:[Object(Re.jsx)("span",{children:"Public repositories:\xa0"}),Object(Re.jsx)("button",{type:"button",className:Object(Ue.a)(We.a.card_user_info,We.a.card_user_info_btn),onClick:function(){var e;n((e=t.login,{type:L,login:e}))},children:t.reposNum})]}):"",Object(Re.jsxs)("div",{className:We.a.card_followers_wrapper,children:[Object(Re.jsxs)("div",{className:We.a.card_followers_unit,children:[Object(Re.jsx)("span",{children:"Followers:\xa0"}),Object(Re.jsx)("button",{type:"button",className:Object(Ue.a)(We.a.card_user_info,We.a.card_user_info_btn),onClick:function(){return s("followers")},children:t.followersNum})]}),Object(Re.jsxs)("div",{className:We.a.card_followers_unit,children:[Object(Re.jsx)("span",{children:"Following:\xa0"}),Object(Re.jsx)("button",{type:"button",className:Object(Ue.a)(We.a.card_user_info,We.a.card_user_info_btn),onClick:function(){return s("following")},children:t.followingNum})]})]}),Object(Re.jsxs)("div",{className:Object(Ue.a)(We.a.card_sub_element,We.a.card_sub_element_create),children:[Object(Re.jsx)("span",{children:"Created\xa0at:\xa0"}),Object(Re.jsxs)("div",{className:We.a.card_user_info_wrapper,children:[Object(Re.jsx)("div",{className:We.a.card_user_info,children:Ee(t.dataCreated)}),Object(Re.jsxs)("div",{className:We.a.card_user_info,children:["(",Ae(t.dataCreated),")"]})]})]})]}),Object(Re.jsxs)("div",{className:We.a.closeBtnWrapper,children:[Object(Re.jsx)("button",{type:"button",className:We.a.button,onClick:function(){if(a){var e=r.filter((function(e){return e!==t.login}));n(M(!1)),n(G(!1)),n(D(e)),localStorage.setItem("favorite",JSON.stringify(e))}else n(M(!0)),n((s=t.login,{type:U,favoriteList:s})),localStorage.setItem("favorite",JSON.stringify([].concat(Object(l.a)(r),[t.login]))),n({type:F,favoriteBtnFlag:!0});var s},children:Object(Re.jsx)("span",{className:Object(Ue.a)(a&&We.a.star_active,We.a.star),children:"\u2605"})}),Object(Re.jsx)(He,{onClick:function(){n(V(!1)),n(P("","","","",0,0,new Date,"","","",0,"",""))}})]})]})},Ge=r(32),Me=r.n(Ge),qe=function(e){var t=e.userName;return Object(Re.jsx)("div",{className:Me.a.error_wrapper,children:Object(Re.jsxs)("h2",{children:["User",Object(Re.jsxs)("span",{className:Me.a.error_user_info,children:[" ",t," "]}),"is not found..."]})})},Pe=r(21),Ve=r.n(Pe),Je=function(e){var t=e.user,r=e.history,a=Object(o.b)();return Object(Re.jsxs)("div",{className:Ve.a.user_item_wrapper,children:[Object(Re.jsx)("div",{className:Ve.a.user_item_photo_wrapper,children:Object(Re.jsx)("img",{src:t.avatar_url,alt:"User's avatar"})}),Object(Re.jsx)("div",{className:Ve.a.user_info,children:Object(Re.jsx)("div",{className:Ve.a.user_info_unit,children:Object(Re.jsx)("button",{type:"button",onClick:function(){a(q(t.login,r))},children:Object(Re.jsx)("h2",{children:t.login})})})})]})},Ye=r(22),Xe=r.n(Ye),Ze=function(e){var t=e.users,r=e.login,a=e.requestType,n=e.history;return Object(Re.jsx)("div",{className:Xe.a.list_wrapper,children:t.length?Object(Re.jsx)("ul",{className:Xe.a.list_wrapper_ul,children:t.map((function(e){return Object(Re.jsx)("li",{children:Object(Re.jsx)(Je,{user:e,history:n})},e.login)}))}):Object(Re.jsx)("div",{className:Xe.a.list_error,children:Object(Re.jsxs)("h2",{children:["It seems the user",Object(Re.jsxs)("span",{className:Xe.a.list_error_login,children:[" ",r," "]}),"hasn't any ",a]})})})},ze=r(33),Ke=r.n(ze),Qe=function(e){var t=e.children,r=e.disabled;return Object(Re.jsx)("button",{className:Object(Ue.a)(r&&Ke.a.button_unactive,Ke.a.button),type:"submit",disabled:r,children:t})},$e=r(34),et=r.n($e),tt=function(e){var t=e.search,r=e.history,n=e.favoritesList,s=Object(a.useState)(""),c=Object(Ce.a)(s,2),i=c[0],l=c[1],u=Object(a.useState)(!0),_=Object(Ce.a)(u,2),p=_[0],j=_[1],b=Object(o.b)(),d=Object(a.useRef)(null);Object(a.useEffect)((function(){d.current.focus()}),[]);return Object(Re.jsxs)("form",{className:et.a.form,onSubmit:function(e){e.preventDefault(),b(q(i,r,n)),t(i),l(""),j(!0)},children:[Object(Re.jsx)("input",{ref:d,className:et.a.input,type:"text",placeholder:"Enter the github login",value:i,onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;l(t),t.trim()?j(!1):j(!0)}}),Object(Re.jsx)(Qe,{disabled:p,children:"Search"})]})},rt=r(23),at=r.n(rt),nt=function(e){var t=e.searchList,r=e.currentUserLogin,a=e.favoritesList,n=Object(o.b)();return Object(Re.jsxs)("div",{className:at.a.shl_wrapper,children:[Object(Re.jsx)("h3",{children:"Search list"}),Object(Re.jsx)("div",{className:at.a.closeBtnWrapper,children:Object(Re.jsx)(He,{onClick:function(){n(Z(!1))}})}),Object(Re.jsx)("ol",{children:t.map((function(e,s){return Object(Re.jsxs)("li",{children:[Object(Re.jsx)("button",{className:at.a.shl_button,type:"button",onClick:function(){var s;(s=e.login)!==r&&n(q(s,t,a))},children:e.login}),Object(Re.jsxs)("span",{children:[" (",Ee(new Date(e.dateOfSearch)),")"]})]},"".concat(e.login," + ").concat(s))}))}),Object(Re.jsx)("button",{className:at.a.clearButton,type:"button",onClick:function(){n($(!0,"Are you sure to delete ".concat(t.length>1?"all":""," ").concat(t.length>1?"(".concat(t.length,")"):""," ").concat(t.length>1?"items":"the item"," of search history?"),"search"))},children:"Delete history"})]})},st=r(35),ct=r.n(st),ot=function(e){var t=e.historyLength,r=e.historyBtnStatus,a=e.searchHistoryListStatus,n=Object(o.b)();return Object(Re.jsxs)("button",{type:"button",className:Object(Ue.a)(a&&ct.a.shh_wrapper_active,ct.a.shh_wrapper),onClick:function(){r?n(Z(!1)):(n(G(!1)),n(Z(!0)))},children:["Search history ",Object(Re.jsxs)("span",{children:["(",t,")"]})]})},it=r(36),lt=r.n(it),ut=function(){return Object(Re.jsx)("div",{className:lt.a.loader_wrapper,children:Object(Re.jsxs)("div",{className:lt.a.lds_default,children:[Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{}),Object(Re.jsx)("div",{})]})})},_t=r(37),pt=r.n(_t),jt=r(15),bt=r.n(jt),dt=function(e){var t=e.repoItem;return Object(Re.jsxs)("div",{className:bt.a.repoItemWrapper,children:[Object(Re.jsxs)("div",{className:bt.a.repoItemUnit,children:[Object(Re.jsx)("a",{href:t.html_url,className:bt.a.repoItemLink,target:"_blank",rel:"noreferrer",children:t.name}),Object(Re.jsx)("span",{children:t.description})]}),Object(Re.jsxs)("div",{className:Object(Ue.a)(bt.a.repoItemUnit,bt.a.repoItemUnitDates),children:[Object(Re.jsxs)("div",{className:bt.a.repoSubUnit,children:[Object(Re.jsx)("span",{children:"Create at:"}),Object(Re.jsx)("span",{children:Ee(new Date(t.created_at))})]}),Object(Re.jsxs)("div",{className:bt.a.repoSubUnit,children:[Object(Re.jsx)("span",{children:"Update at:"}),Object(Re.jsx)("span",{children:Ee(new Date(t.updated_at))})]}),Object(Re.jsxs)("div",{className:bt.a.repoSubUnit,children:[Object(Re.jsx)("span",{children:"Language: "}),Object(Re.jsx)("span",{children:t.language})]})]})]})},Ot=function(e){var t=e.reposList;return Object(Re.jsx)("ul",{className:pt.a.reposWrapper,children:t.map((function(e){return Object(Re.jsx)("li",{className:pt.a.reposItem,children:Object(Re.jsx)(dt,{repoItem:e})},e.name)}))})},ht=r(24),ft=r.n(ht),mt=function(e){var t=e.favoriteList,r=e.searchList,a=e.currentUserLogin,n=Object(o.b)();return Object(Re.jsxs)("div",{className:ft.a.shl_wrapper,children:[Object(Re.jsx)("h3",{children:"Favorite list"}),Object(Re.jsx)("div",{className:ft.a.closeBtnWrapper,children:Object(Re.jsx)(He,{onClick:function(){n(G(!1))}})}),Object(Re.jsx)("ol",{children:t.map((function(e){return Object(Re.jsx)("li",{children:Object(Re.jsx)("button",{className:ft.a.shl_button,type:"button",onClick:function(){var s;(s=e)!==a&&n(q(s,r,t))},children:e})},e)}))}),Object(Re.jsx)("button",{className:ft.a.clearButton,type:"button",onClick:function(){n($(!0,"Are you sure to delete ".concat(t.length>1?"all":""," your ").concat(t.length>1?"(".concat(t.length,")"):""," favorite ").concat(t.length>1?"users":"user","?"),"favorite"))},children:"Delete all favorite users"})]})},xt=r(29),vt=r.n(xt),gt=function(e){var t=e.starNum,r=e.favoriteListStatus,a=Object(o.b)();return Object(Re.jsxs)("button",{type:"button",className:Object(Ue.a)(r&&vt.a.button_active,vt.a.button),onClick:function(){r?a(G(!1)):(a(G(!0)),a(Z(!1)))},children:[Object(Re.jsx)("span",{className:vt.a.star,children:"\u2605"}),Object(Re.jsx)("span",{children:t})]})},yt=r(25),Lt=r.n(yt),wt=function(e){var t=e.textModal,r=e.type,a=Object(o.b)(),n=function(e){e?("search"===r?(a(Z(!1)),a(z([])),localStorage.removeItem("saves")):"favorite"===r&&(a(G(!1)),a(M(!1)),a(D([])),localStorage.removeItem("favorite")),a($(!1,"","search"))):a($(!1,"","search"))};return Object(Re.jsx)("div",{className:Lt.a.modalWrapper,children:Object(Re.jsxs)("div",{className:Lt.a.modal,children:[Object(Re.jsx)("span",{children:t}),Object(Re.jsxs)("div",{className:Lt.a.btnsWrapper,children:[Object(Re.jsx)("button",{type:"button",onClick:function(){return n(!0)},children:"Delete"}),Object(Re.jsx)("button",{type:"button",onClick:function(){return n(!1)},children:"Cansel"})]}),Object(Re.jsx)("div",{className:Lt.a.closeBtnWrapper,children:Object(Re.jsx)(He,{onClick:function(){return n(!1)}})})]})})},Nt=r(12),St=r.n(Nt),Ft=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.search})),r=Object(o.c)((function(e){return e.favorite})),n=Object(a.useState)(""),s=Object(Ce.a)(n,2),c=s[0],i=s[1];Object(a.useEffect)((function(){e({type:O}),e({type:I})}),[e]);return Object(Re.jsxs)("div",{className:St.a.root_wrapper,children:[Object(Re.jsxs)("header",{className:St.a.root_header,children:[Object(Re.jsx)("h1",{children:"Find github's user"}),Object(Re.jsxs)("div",{className:St.a.buttonsWrapper,children:[t.searchHistory.length?Object(Re.jsx)(ot,{historyLength:t.searchHistory.length,searchHistoryListStatus:t.searchHistoryListFlag,historyBtnStatus:t.searchHistoryListFlag}):"",r.favoriteList.length?Object(Re.jsx)(gt,{starNum:r.favoriteList.length,favoriteListStatus:r.favoriteListFlag}):""]})]}),Object(Re.jsxs)("section",{className:St.a.root_section,children:[Object(Re.jsxs)("div",{className:Object(Ue.a)(St.a.root_sub_section,St.a.root_sub_section_left),children:[Object(Re.jsxs)("section",{className:Object(Ue.a)(St.a.root_section,St.a.root_section_search),children:[Object(Re.jsx)(tt,{search:function(e){i(e)},history:t.searchHistory,favoritesList:r.favoriteList}),(t.usersListOpened||t.reposListOpened)&&Object(Re.jsx)("button",{type:"button",onClick:function(){e(X(!1)),e(Q(!1)),e(V(!0))},className:St.a.root_btn,children:"Back"})]}),t.loading&&Object(Re.jsx)(ut,{}),t.cardOpened&&Object(Re.jsx)(De,{user:t.user,favorites:r.favoriteList,favoriteUserStatus:r.favoriteUser}),t.usersListOpened&&Object(Re.jsx)(Ze,{users:t.usersList,login:t.user.login,requestType:t.lastRequestType,history:t.searchHistory}),t.reposListOpened&&Object(Re.jsx)(Ot,{reposList:t.reposList}),t.error&&Object(Re.jsx)(qe,{userName:c})]}),t.searchHistoryListFlag&&Object(Re.jsx)("div",{className:Object(Ue.a)(St.a.root_sub_section,St.a.root_sub_section_right),children:Object(Re.jsx)(nt,{searchList:t.searchHistory,favoritesList:r.favoriteList,currentUserLogin:t.user.login})}),r.favoriteListFlag&&Object(Re.jsx)("div",{className:Object(Ue.a)(St.a.root_sub_section,St.a.root_sub_section_right),children:Object(Re.jsx)(mt,{favoriteList:r.favoriteList,searchList:t.searchHistory,currentUserLogin:t.user.login})})]}),t.modalFlag&&Object(Re.jsx)(wt,{textModal:t.modalText,type:t.modalType})]})};r(80);var It=function(){return Object(Re.jsx)("div",{className:"App",children:Object(Re.jsx)(Ft,{})})},Ct=(r(81),Object(i.a)()),Ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,Tt=Object(c.d)(H,Ut(Object(c.a)(Ct)));Ct.run(Ie),s.a.render(Object(Re.jsx)(o.a,{store:Tt,children:Object(Re.jsx)(It,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.b9242436.chunk.js.map