(this["webpackJsonphomeworks-alex-vel"]=this["webpackJsonphomeworks-alex-vel"]||[]).push([[0],{11:function(e,n,t){e.exports={error:"Error404_error__3958q",number_error:"Error404_number_error__2rDiU",text_error:"Error404_text_error__1JXCG",img:"Error404_img__1KYLz"}},12:function(e,n,t){e.exports={input:"SuperInputText_input__3r8kn",superInput:"SuperInputText_superInput__2wQMQ",errorInput:"SuperInputText_errorInput__2Dhno",error:"SuperInputText_error__ywNza"}},15:function(e,n,t){e.exports={default:"SuperButton_default__1ZadW",red:"SuperButton_red__2GSR1"}},20:function(e,n,t){},21:function(e,n,t){e.exports={span:"SuperEditableSpan_span__1RLwA"}},28:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(19),o=t.n(a),s=(t(28),t(20)),i=t.n(s),j=t(9),u=t(2),l=t(11),b=t.n(l),O=t(0);var d=function(){return Object(O.jsxs)("div",{className:b.a.error,children:[Object(O.jsx)("div",{className:b.a.number_error,children:"404"}),Object(O.jsx)("div",{className:b.a.text_error,children:"Page not found!"}),Object(O.jsx)("div",{className:b.a.img,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},x=t(8),h=t(6),p=t(5),v=t(12),m=t.n(v),_=function(e){e.type;var n=e.onChange,t=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,o=e.className,s=e.spanClassName,i=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(m.a.error," ").concat(s||""),u="".concat(m.a.input," ").concat(a?m.a.errorInput:m.a.superInput," ").concat(o);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(h.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:u},i)),a&&Object(O.jsx)("span",{className:j,children:a})]})},f=t(21),g=t.n(f),C=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,c=e.spanProps,a=e.onChangeText,o=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps","onChangeText"]),s=Object(r.useState)(!1),i=Object(x.a)(s,2),j=i[0],u=i[1],l=c||{},b=l.children,d=l.onDoubleClick,v=l.className,m=Object(p.a)(l,["children","onDoubleClick","className"]),f="".concat(g.a.span," ").concat(v||"");return Object(O.jsx)(O.Fragment,{children:j?Object(O.jsx)(_,Object(h.a)({autoFocus:!0,onBlur:function(e){u(!1),n&&n(e)},onEnter:function(){u(!1),t&&t()},onChange:function(e){a(e.currentTarget.value)}},o)):Object(O.jsxs)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){u(!0),d&&d(e)},className:f},m),{},{children:["\u270e ",b||o.value]}))})},N=t(15),w=t.n(N),y=function(e){var n=e.red,t=e.className,r=Object(p.a)(e,["red","className"]),c="".concat(n?w.a.red:w.a.default," ").concat(t);return Object(O.jsx)("button",Object(h.a)({className:c},r))};function S(e,n){var t=JSON.stringify(n);localStorage.setItem(e,t)}function k(e,n){var t=n,r=localStorage.getItem(e);return null!==r&&(t=JSON.parse(r)),t}S("test",{x:"A",y:1});k("test",{x:"",y:0});var E=function(){var e=Object(r.useState)(""),n=Object(x.a)(e,2),t=n[0],c=n[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(C,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})}),Object(O.jsx)(y,{onClick:function(){S("editable-span-value",t)},children:"save"}),Object(O.jsx)(y,{onClick:function(){c(k("editable-span-value",""))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};function I(){return Object(O.jsx)("div",{children:Object(O.jsx)(E,{})})}var T=function(e){e.options,e.onChange,e.onChangeOption;var n=Object(p.a)(e,["options","onChange","onChangeOption"]);return Object(O.jsx)("select",Object(h.a)(Object(h.a)({onChange:function(e){}},n),{},{children:[]}))},P=function(e){e.type;var n=e.name,t=e.options,r=(e.value,e.onChange,e.onChangeOption,Object(p.a)(e,["type","name","options","value","onChange","onChangeOption"]),t?t.map((function(e,t){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio"}),e]},n+"-"+t)})):[]);return Object(O.jsx)(O.Fragment,{children:r})},B=["x","y","z"];var J=function(){var e=Object(r.useState)(B[1]),n=Object(x.a)(e,2),t=n[0],c=n[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(T,{options:B,value:t,onChangeOption:c})}),Object(O.jsx)("div",{children:Object(O.jsx)(P,{name:"radio",options:B,value:t,onChangeOption:c})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};function F(){return Object(O.jsx)("div",{children:Object(O.jsx)(J,{})})}function D(){return Object(O.jsx)("div",{children:Object(O.jsx)(d,{})})}var z="/pre-junior",H="/junior",K="/junior+";var L=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(u.a,{to:z})}}),Object(O.jsx)(u.b,{path:z,render:function(){return Object(O.jsx)(I,{})}}),Object(O.jsx)(u.b,{path:H,render:function(){return Object(O.jsx)(F,{})}}),Object(O.jsx)(u.b,{path:K,render:function(){return Object(O.jsx)(D,{})}}),Object(O.jsx)(u.b,{render:function(){return Object(O.jsx)(d,{})}})]})})},A=t(7),W=t.n(A);var G=function(){return Object(O.jsxs)("div",{className:W.a.nav,children:[Object(O.jsx)("span",{className:W.a.item,children:Object(O.jsx)(j.b,{to:z,activeClassName:W.a.active,children:"Pre-junior "})}),Object(O.jsx)("span",{className:W.a.item,children:Object(O.jsx)(j.b,{to:H,activeClassName:W.a.active,children:"Junior "})}),Object(O.jsx)("span",{className:W.a.item,children:Object(O.jsx)(j.b,{to:K,activeClassName:W.a.active,children:"Junior+ "})}),Object(O.jsx)("div",{className:W.a.level,children:"Level >"})]})};var M=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(G,{}),Object(O.jsx)(L,{})]})})};var Q=function(){return Object(O.jsxs)("div",{className:i.a.App,children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(M,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports={item:"Header_item__1Vshz",active:"Header_active__w6tsL",nav:"Header_nav__34UEn",level:"Header_level__ZblTl"}}},[[35,1,2]]]);
//# sourceMappingURL=main.64d84d27.chunk.js.map