(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={container:"PhoneBock_container__1aUbr",headingForm:"PhoneBock_headingForm__3Fhby",contactList:"PhoneBock_contactList__2I4bt",form:"PhoneBock_form__2uxiK",labelName:"PhoneBock_labelName__14J2L",labelNumber:"PhoneBock_labelNumber__1ZtLE",btnForm:"PhoneBock_btnForm__1Pqa4",containerSearch:"PhoneBock_containerSearch__1zoEw",btnList:"PhoneBock_btnList__2J-hK"}},18:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(2),r=n.n(c),o=n(11),s=n.n(o),i=(n(18),n(5)),l=n(12),u=n(6),h=n(7),b=n(9),m=n(8),j=n(1),d=n.n(j),f=n(3),p=n.n(f),O=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.InputValues=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.addContact=function(e){var n=t.state.name.length,a=t.state.number.length;(e.preventDefault(),n<2||n>10)?alert('\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c"\u044f \u0431\u0456\u043b\u044c\u0448\u0435 1-\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0456 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 10'):a<7||a>10?alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0431\u0456\u043b\u044c\u0448\u0435 7-\u043c\u0438 \u0446\u0438\u0444\u0440 \u0456 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 10"):t.props.contactList({name:t.state.name})?alert('\u0426\u0435 \u0456\u043c"\u044f \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454'):(t.props.onSubmit({id:p.a.generate(),name:t.state.name,number:t.state.number}),t.resetInputValues())},t.resetInputValues=function(){t.setState({name:"",number:""})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=p.a.generate(),e=p.a.generate();return Object(a.jsxs)("form",{className:d.a.form,onSubmit:this.addContact,children:[Object(a.jsx)("label",{htmlFor:t,className:d.a.labelName,children:"\u0418\u043c'\u044f"}),Object(a.jsx)("input",{id:t,type:"text",name:"name",value:this.state.name,onChange:this.InputValues,autoComplete:"off"}),Object(a.jsx)("label",{htmlFor:e,className:d.a.labelNumber,children:"\u041d\u043e\u043c\u0435\u0440"}),Object(a.jsx)("input",{id:e,placeholder:"(0xx) xxx-xx-xx",type:"tel",pattern:"^[ 0-9]+$",name:"number",value:this.state.number,onChange:this.InputValues,autoComplete:"off"}),Object(a.jsx)("button",{className:d.a.btnForm,type:"submite",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(c.Component);function v(t){var e=t.contactList,n=t.onDeleted;return Object(a.jsx)("ul",{className:"js-list",children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{children:[c,": "]}),Object(a.jsxs)("span",{children:["+38 ",Object(a.jsx)("a",{href:"tel: ".concat(r),children:r})]}),Object(a.jsx)("button",{className:d.a.btnList,type:"button",onClick:function(){return n(e)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},e)}))})}function x(t){var e=t.velue,n=t.SearchContact,c=p.a.generate();return Object(a.jsxs)("div",{className:d.a.containerSearch,children:[Object(a.jsx)("label",{className:d.a.labelSearch,htmlFor:c,children:"\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(a.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,id:c,className:d.a.inputSearch})]})}var _=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){t.setState({contacts:[e].concat(Object(l.a)(t.state.contacts))})},t.veluesFilter=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.getFilter=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.onCheckName=function(e,n){return t.state.contacts.some((function(t){return t.name===Object.values(e).join("")}))},t.deletedContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0430"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);t&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.getFilter();return Object(a.jsxs)("div",{className:d.a.container,children:[Object(a.jsx)("h1",{className:d.a.headingForm,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430"}),Object(a.jsx)(O,{onSubmit:this.addContact,contactList:this.onCheckName}),Object(a.jsx)("h2",{className:d.a.contactList,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),Object(a.jsx)(x,{velue:this.state.filter,SearchContact:this.veluesFilter}),Object(a.jsx)(v,{contactList:t,onDeleted:this.deletedContact})]})}}]),n}(r.a.Component);s.a.render(Object(a.jsx)(_,{}),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a7ff9e5b.chunk.js.map