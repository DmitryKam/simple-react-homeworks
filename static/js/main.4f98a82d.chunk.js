(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={general:"Message_general__24A1S",content:"Message_content__Q-0x_",name:"Message_name__3Rdzc",message:"Message_message__221RA",time:"Message_time__301dV",before:"Message_before__1TLCq"}},,,,function(e,t,a){e.exports={someClass:"Affairs_someClass__YQfQm",textColor:"Affairs_textColor__3uwtz",itemClass:"Affairs_itemClass__uxu6D"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__UEayH",error:"Greeting_error__2gO03",errorMessage:"Greeting_errorMessage__3JfVg"}},,,,,function(e,t,a){e.exports={e404module:"Error404_e404module__3vvud",title:"Error404_title__1lL1r",text:"Error404_text__PKxJG",img:"Error404_img__1SBcS"}},function(e,t,a){e.exports={navMenu:"Header_navMenu__uv01o",navItem:"Header_navItem__F9uEW"}},,,,function(e,t,a){e.exports={errorInput:"SuperInputText_errorInput__2QlPn",error:"SuperInputText_error__233EF",superInput:"SuperInputText_superInput__pXBRP"}},,function(e,t,a){e.exports={App:"App_App__2HItb",title:"App_title__3txqR"}},function(e,t,a){e.exports={default:"SuperButton_default__Sg5wW",red:"SuperButton_red__1vqm4"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__275vo",spanClassName:"SuperCheckbox_spanClassName__1K4je"}},function(e,t,a){e.exports={clock:"Clock_clock__2SV2h",data:"Clock_data__W3z77"}},,,,,,,function(e,t,a){e.exports={blue:"HW4_blue__36gyR",column:"HW4_column__1gnen",defaultsButton:"HW4_defaultsButton__2W9b_"}},function(e,t,a){e.exports={superSpan:"SuperEditableSpan_superSpan__1gdkr"}},function(e,t,a){e.exports={select:"SuperSelect_select__2ffua"}},function(e,t,a){e.exports={input:"SuperRadio_input__3QoXq"}},function(e,t,a){e.exports={general:"HW9_general__2StWL"}},,function(e,t,a){e.exports=a.p+"static/media/preloader.4f01d042.svg"},function(e,t,a){e.exports={generalPlus:"Jonior_Plus_generalPlus__210OC"}},function(e,t,a){e.exports={container:"HW5_container__2KoCd"}},,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(48),a(23)),u=a.n(o),i=a(7),s=a(2),m=a(16),d=a.n(m);var E=function(){return r.a.createElement("div",{className:d.a.e404module},r.a.createElement("div",{className:d.a.title},"404"),r.a.createElement("div",{className:d.a.text},"Page not found!"),r.a.createElement("div",{className:d.a.img},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},p=a(6),f=a.n(p);function v(e){return r.a.createElement("img",{className:f.a.img,src:e.immage})}function _(e){return r.a.createElement("div",{className:f.a.name},r.a.createElement("span",null,e.user))}function g(e){return r.a.createElement("div",{className:f.a.message},e.messages)}function h(e){return r.a.createElement("div",{className:f.a.time},e.time)}var b=function(e){return r.a.createElement("div",{className:f.a.general},r.a.createElement(v,{immage:e.avatar}),r.a.createElement("div",{className:f.a.before}),r.a.createElement("div",{className:f.a.content},r.a.createElement(_,{user:e.name}),r.a.createElement(g,{messages:e.message}),r.a.createElement(h,{time:e.time})))},C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",k="Dmitry",O="NPM \u0441\u0442\u0430\u0440\u0442 \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",N="22:00";var j=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(b,{avatar:C,name:k,message:O,time:N}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=a(1),S=a(10),y=a.n(S),w=a(3),I=a(24),A=a.n(I),P=function(e){var t=e.red,a=e.className,n=Object(w.a)(e,["red","className"]),l="".concat(t?A.a.red:A.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))};var T=function(e){return r.a.createElement("div",{className:y.a.itemClass},r.a.createElement("span",null,e.affair," "),r.a.createElement("span",{className:y.a.textColor},e.priority),r.a.createElement(P,{onClick:e.deleteAffairCallback},"X"))};var M=function(e){var t=e.data.map((function(t){return r.a.createElement(T,{affair:t.name,priority:t.priority,deleteAffairCallback:function(){e.deleteAffairCallback(t._id)}})}));return r.a.createElement("div",{className:y.a.someClass},t,r.a.createElement(P,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(P,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(P,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(P,{onClick:function(){e.setFilter("low")}},"Low"))},R=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(n.useState)(R),t=Object(x.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(x.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:"high"===t?e=R.filter((function(e){return"high"===e.priority})):"middle"===t?e=R.filter((function(e){return"middle"===e.priority})):"low"===t?e=R.filter((function(e){return"low"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(M,{data:s,setFilter:i,deleteAffairCallback:function(e){l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=a(15),H=a(11),B=a.n(H),J=a(21),U=a.n(J),L=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(U.a.error," ").concat(u||""),m=c?"".concat(U.a.errorInput," ").concat(o||""):U.a.superInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},D=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?B.a.error:"";return r.a.createElement("div",null,r.a.createElement(L,{value:t,onChange:a,className:o}),r.a.createElement(P,{onClick:n},"Add"),r.a.createElement("span",null,c),l&&r.a.createElement("div",{className:B.a.errorMessage},l))};var G=function(e){var t=Object(n.useState)(""),a=Object(x.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),u=Object(x.a)(o,2),i=u[0],s=u[1],m=e.users.length;return r.a.createElement(D,{name:l,setNameCallback:function(e){c(e.currentTarget.value)},addUser:function(){""!==l.trim()?(e.addUserCallback(l),c(""),s(null),alert("Hello "+l+"!")):s("Title is required!")},error:i,totalUsers:m})},q=a(56);var K=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:B.a.someClass},"Homeworks 3",r.a.createElement(G,{users:a,addUserCallback:function(e){var t=[{_id:Object(q.a)(),name:e}].concat(Object(W.a)(a));l(t)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Q=a(33),z=a.n(Q),X=a(25),V=a.n(X),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(w.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:t||function(e){a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(x.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:z.a.column},r.a.createElement(L,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(P,{red:!0,onClick:o},"delete"),r.a.createElement(Y,{checked:s,onChangeChecked:m},a," "),r.a.createElement(Y,{checked:s,onChange:function(e){m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=a(34),ee=a.n($),te=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(w.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(x.a)(o,2),i=u[0],s=u[1],m=l||{},d=m.children,E=m.onDoubleClick,p=m.className,f=Object(w.a)(m,["children","onDoubleClick","className"]),v="".concat(ee.a.superSpan," ").concat(p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:v},f),d||c.value))};function ae(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ne(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}ae("test",{x:"A",y:1});ne("test",{x:"",y:0});var re=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(te,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(P,{onClick:function(){ae("editable-span-value",a)}},"save"),r.a.createElement(P,{onClick:function(){l(ne("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var le=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(F,null),r.a.createElement(K,null),r.a.createElement(Z,null),r.a.createElement(re,null))},ce=a(35),oe=a.n(ce),ue=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,l=Object(w.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){})):[];return r.a.createElement("select",Object.assign({className:oe.a.select,onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},l),c)},ie=a(36),se=a.n(ie),me=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(w.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e),c&&c(e.currentTarget.value)}),u=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a,className:se.a.input},r.a.createElement("input",{type:"radio",value:e,name:t,onChange:o,checked:n===e}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)};var de=function(){var e=Object(n.useState)(["x","y","z"]),t=Object(x.a)(e,2),a=t[0],l=(t[1],Object(n.useState)(a[1])),c=Object(x.a)(l,2),o=c[0],u=c[1];return console.log(a),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7.2",r.a.createElement("div",null,r.a.createElement(ue,{options:a,value:o,onChangeOption:u})),r.a.createElement("div",null,r.a.createElement(me,{name:"radio",options:a,value:o,onChangeOption:u})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ee=function(e,t){switch(t.type){case"sort":if("up"===t.payload){var a=e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));return Object(W.a)(a)}if("down"===t.payload){var n=e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));return Object(W.a)(n.reverse())}case"check":return e.filter((function(e){return e.age>t.payload}));default:return e}},pe=function(e){return{type:"sort",payload:e}},fe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ve=function(){var e=Object(n.useState)(fe),t=Object(x.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},"\u0418\u043c\u044f ".concat(e.name,", \u0432\u043e\u0437\u0440\u0432\u0441\u0442: ").concat(e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(P,{onClick:function(){return l(Ee(fe,pe("up")))}},"sort up")),r.a.createElement("div",null,r.a.createElement(P,{onClick:function(){return l(Ee(fe,pe("down")))}},"sort down")),r.a.createElement("div",null,r.a.createElement(P,{onClick:function(){return l(Ee(fe,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},_e=a(26),ge=a.n(_e);var he=function(){var e=Object(n.useState)(0),t=Object(x.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(x.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(x.a)(s,2),d=m[0],E=m[1],p=function(){window.clearInterval(a)},f=null===u||void 0===u?void 0:u.toLocaleTimeString(),v=null===u||void 0===u?void 0:u.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)},className:ge.a.clock},f),d&&r.a.createElement("div",{className:ge.a.data},v),r.a.createElement(P,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(P,{onClick:p},"stop"))},be=a(37),Ce=a.n(be);var ke=function(){return r.a.createElement("div",{className:Ce.a.general},r.a.createElement("hr",null),"homeworks 9",r.a.createElement(he,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},Oe=a(14),Ne=a(42),je={loadingInReducer:!1},xe=function(e){return{type:"LOADING",loadingInReducer:e}},Se=a(39),ye=a.n(Se);var we=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:ye.a}))};var Ie=function(){var e=Object(Oe.c)((function(e){return e.loading.loadingInReducer})),t=Object(Oe.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement(we,null):r.a.createElement("div",null,r.a.createElement(P,{onClick:function(){var e=xe(!0);t(e),setTimeout((function(){var e=xe(!1);t(e)}),2e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ae=function(){return r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement(ve,null),r.a.createElement(ke,null),r.a.createElement(Ie,null))},Pe=a(40),Te=a.n(Pe);var Me=function(){return r.a.createElement("div",{className:Te.a.generalPlus},"This is Page JuniorPlus!!")},Re="/pre-junior",Fe="/junio",We="/junior-plus";var He=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:Re})}}),r.a.createElement(s.b,{path:Re,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(s.b,{path:Fe,render:function(){return r.a.createElement(Ae,null)}}),r.a.createElement(s.b,{path:We,render:function(){return r.a.createElement(Me,null)}}),r.a.createElement(s.b,{render:function(){return r.a.createElement(E,null)}})))},Be=a(17),Je=a.n(Be);var Ue=function(){return r.a.createElement("div",{className:Je.a.navMenu},r.a.createElement("div",null,r.a.createElement(i.b,{className:Je.a.navItem,to:Re}," PRE_JUNIOR ")),r.a.createElement("div",null,r.a.createElement(i.b,{className:Je.a.navItem,to:Fe}," JUNIO ")),r.a.createElement("div",null,r.a.createElement(i.b,{className:Je.a.navItem,to:We}," JUNIOR_PLUS ")))},Le=a(41),De=a.n(Le);var Ge=function(){return r.a.createElement("div",{className:De.a.container},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(Ue,null)),r.a.createElement("div",null,r.a.createElement(He,null))))};var qe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",{className:u.a.title},"react homeworks:"),r.a.createElement(Ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ke=a(13),Qe=Object(Ke.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return console.log(t.loadingInReducer),Object(Ne.a)({},e,{loadingInReducer:t.loadingInReducer});default:return e}}}),ze=Object(Ke.c)(Qe),Xe=ze;window.store=ze,c.a.render(r.a.createElement(Oe.a,{store:Xe},r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[43,1,2]]]);
//# sourceMappingURL=main.4f98a82d.chunk.js.map