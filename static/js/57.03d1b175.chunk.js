"use strict";(self.webpackChunkgithub_info=self.webpackChunkgithub_info||[]).push([[57],{57:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var s=n(2982),a=n(885),l=n(2791),r=n(6030),i=n(8182),o=n(892),c=n(4101),u=n(4680),f=n(1931),d="styles_component__z0CvV",_="styles_form__ASCNU",h="styles_buttonDel__jnDbf",m="styles_buttonUnactive__hhhJJ",v="styles_btnsWrapper__Kc8xY",g="styles_noteModal__+mg9N",b="styles_btnsModalWrapper__vJeHE",y="styles_colorText__y44qa",x="styles_formFooter__a4Ihe",p="styles_lettersQuantity__DR9Si",j=n(184),N=function(){var e=(0,r.I0)(),t=(0,l.useRef)(),n=(0,r.v9)(f.si),N=(0,r.v9)(u.xe),S=(0,r.v9)(u.$X);(0,l.useEffect)((function(){t.current.focus(),t.current.setSelectionRange(t.current.value.length,t.current.value.length)}),[]);var C=(0,l.useState)(N),k=(0,a.Z)(C,2),O=k[0],D=k[1],J=(0,l.useState)(!1),U=(0,a.Z)(J,2),Z=U[0],I=U[1],F=function(t){if(t){D("");var s=S.map((function(e){return e.name===n.login?{name:n.login}:e}));localStorage.setItem("favorite",JSON.stringify(s)),e((0,c.FX)("")),e((0,c.L1)(s)),e((0,c.U3)(!1)),e((0,c.iO)(!1))}else I(!1)};return(0,j.jsxs)(o.k,{className:d,children:[(0,j.jsxs)("form",{className:_,onSubmit:function(t){if(t.preventDefault(),S.find((function(e){return e.name===n.login}))){e((0,c.FX)(O.trim())),e((0,c.U3)(!1)),e((0,c.iO)(!0)),D("");var a={name:n.login,note:O},l=S.find((function(e){return e.name===n.login})),r=S.indexOf(l),i=(0,s.Z)(S);i[r]=a,e((0,c.L1)(i)),localStorage.setItem("favorite",JSON.stringify(i))}else{e((0,c.FX)(O.trim())),e((0,c.U3)(!1)),e((0,c.iO)(!0)),D("");var o={name:n.login,note:O};e((0,c.ZE)(o)),localStorage.setItem("favorite",JSON.stringify([].concat((0,s.Z)(S),[o]))),e((0,c.vw)(!0)),e((0,c.d1)(!0))}},children:[(0,j.jsx)("textarea",{onChange:function(e){" "===e.target.value&&0===O.length||D(e.target.value)},value:O,ref:t}),(0,j.jsxs)("footer",{className:x,children:[(0,j.jsx)("div",{className:p,children:O.length?"Characters: ".concat(O.length):""}),(0,j.jsxs)("div",{className:v,children:[(0,j.jsx)("button",{type:"button",onClick:function(){e((0,c.U3)(!1)),D("")},children:"Cancel"}),O&&(0,j.jsx)("button",{type:"button",className:h,onClick:function(){return I(!0)},children:"Delete"}),(0,j.jsx)("button",{type:"submit",className:(0,i.Z)(!O&&m),disabled:!O,children:"Save and add to favorite list"})]})]})]}),Z&&(0,j.jsxs)("div",{className:g,children:[(0,j.jsxs)("span",{children:["Are you sure to delete the note of"," ",(0,j.jsx)("span",{className:y,children:n.login}),"?"]}),(0,j.jsxs)("div",{className:b,children:[(0,j.jsx)("button",{type:"button",onClick:function(){return F(!0)},children:"Delete"}),(0,j.jsx)("button",{type:"button",onClick:function(){return F(!1)},children:"Cansel"})]})]})]})},S=(0,l.memo)(N)}}]);
//# sourceMappingURL=57.03d1b175.chunk.js.map