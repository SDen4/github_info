"use strict";(self.webpackChunkgithub_info=self.webpackChunkgithub_info||[]).push([[57],{57:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var s=n(2982),a=n(885),l=n(2791),r=n(6030),i=n(8182),o=n(9082),c=n(619),u=n(4280),f=n(9076),d="styles_component__9t3ni",_="styles_form__aUaL1",m="styles_buttonDel__bnquf",h="styles_buttonUnactive__yDK7E",v="styles_btnsWrapper__AHt0O",g="styles_noteModal__TYDXc",y="styles_btnsModalWrapper__hsWae",b="styles_colorText__OKtNF",x="styles_formFooter__NGy0w",p="styles_lettersQuantity__-l2zy",j=n(184),N=function(){var e=(0,r.I0)(),t=(0,l.useRef)(),n=(0,r.v9)(u.si),N=(0,r.v9)(c.xe),S=(0,r.v9)(c.$X);(0,l.useEffect)((function(){t.current.focus(),t.current.setSelectionRange(t.current.value.length,t.current.value.length)}),[]);var C=(0,l.useState)(N),k=(0,a.Z)(C,2),O=k[0],D=k[1],U=(0,l.useState)(!1),Z=(0,a.Z)(U,2),F=Z[0],X=Z[1],w=function(t){if(t){D("");var s=S.map((function(e){return e.name===n.login?{name:n.login}:e}));localStorage.setItem("favorite",JSON.stringify(s)),e((0,f.FX)("")),e((0,f.L1)(s)),e((0,f.U3)(!1)),e((0,f.iO)(!1))}else X(!1)};return(0,j.jsxs)(o.k,{className:d,children:[(0,j.jsxs)("form",{className:_,onSubmit:function(t){if(t.preventDefault(),S.find((function(e){return e.name===n.login}))){e((0,f.FX)(O.trim())),e((0,f.U3)(!1)),e((0,f.iO)(!0)),D("");var a={name:n.login,note:O},l=S.find((function(e){return e.name===n.login})),r=S.indexOf(l),i=(0,s.Z)(S);i[r]=a,e((0,f.L1)(i)),localStorage.setItem("favorite",JSON.stringify(i))}else{e((0,f.FX)(O.trim())),e((0,f.U3)(!1)),e((0,f.iO)(!0)),D("");var o={name:n.login,note:O};e((0,f.L1)([].concat((0,s.Z)(S),[o]))),localStorage.setItem("favorite",JSON.stringify([].concat((0,s.Z)(S),[o]))),e((0,f.vw)(!0)),e((0,f.d1)(!0))}},children:[(0,j.jsx)("textarea",{onChange:function(e){" "===e.target.value&&0===O.length||D(e.target.value)},value:O,ref:t}),(0,j.jsxs)("footer",{className:x,children:[(0,j.jsx)("div",{className:p,children:O.length?"Characters: ".concat(O.length):""}),(0,j.jsxs)("div",{className:v,children:[(0,j.jsx)("button",{type:"button",onClick:function(){e((0,f.U3)(!1)),D("")},children:"Cancel"}),O&&(0,j.jsx)("button",{type:"button",className:m,onClick:function(){return X(!0)},children:"Delete"}),(0,j.jsx)("button",{type:"submit",className:(0,i.Z)(!O&&h),disabled:!O,children:"Save and add to favorite list"})]})]})]}),F&&(0,j.jsxs)("div",{className:g,children:[(0,j.jsxs)("span",{children:["Are you sure to delete the note of"," ",(0,j.jsx)("span",{className:b,children:n.login}),"?"]}),(0,j.jsxs)("div",{className:y,children:[(0,j.jsx)("button",{type:"button",onClick:function(){return w(!0)},children:"Delete"}),(0,j.jsx)("button",{type:"button",onClick:function(){return w(!1)},children:"Cansel"})]})]})]})},S=(0,l.memo)(N)}}]);
//# sourceMappingURL=57.f246e798.chunk.js.map