"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{500:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(434),a=t(162),u=t(184),c=function(e){var n=(0,r.I0)();return(0,u.jsxs)("li",{children:[e.name,": ",e.number,(0,u.jsx)("button",{className:"delete-button",onClick:function(){return t=e.id,void n((0,a.GK)(t));var t},children:"Delete"})]})},i=function(e){return e.contacts.items},s=function(e){var n=i(e),t=function(e){return e.filter}(e);return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},o=t(791),l=function(){var e=(0,r.I0)(),n=(0,r.v9)(i);return(0,u.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var r=t.currentTarget.name.value,u=t.currentTarget.number.value;n.find((function(e){return e.name===r}))?alert("".concat(r," is already in contacts")):e((0,a.uK)({name:r,number:u})),t.currentTarget.reset()},children:[(0,u.jsx)("h3",{children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name"}),(0,u.jsx)("h3",{children:"Number"}),(0,u.jsx)("input",{type:"tel",name:"number"}),(0,u.jsx)("button",{type:"submit",className:"button",children:"Add contact"})]})},m=t(993),d=function(){var e=(0,r.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:"Find contacts by name"}),(0,u.jsx)("input",{type:"text",onChange:function(n){var t=n.currentTarget.value;e((0,m.T)(t))}})]})},f=function(){var e=(0,r.I0)(),n=(0,r.v9)(s);return(0,o.useEffect)((function(){e((0,a.yF)())}),[e]),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(l,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(d,{}),(0,u.jsx)("ul",{children:n?n.map((function(e){return(0,u.jsx)(c,{name:e.name,number:e.number,id:e.id},e.id)})):null})]})},h=t(321),x=function(){var e=(0,r.v9)(h.gs);return(0,u.jsxs)("main",{className:"main",children:[!1===e&&(0,u.jsx)("h1",{className:"home-header",children:"Welcome to the Contact book! Please log in or sign up"}),!0===e&&(0,u.jsx)(f,{})]})}}}]);
//# sourceMappingURL=500.471b006f.chunk.js.map