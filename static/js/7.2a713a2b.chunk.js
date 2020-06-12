(this["webpackJsonpdont-be-so-trivial"]=this["webpackJsonpdont-be-so-trivial"]||[]).push([[7],{115:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a.n(n),o=a(39),i=a(45),c=a(0),s=a.n(c),l=a(111),u=a(2),d=a(31),p=(a(7),a(32)),h=a(33),m=c.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,o=void 0===r?"div":r,i=e.square,s=void 0!==i&&i,l=e.elevation,h=void 0===l?1:l,m=e.variant,f=void 0===m?"elevation":m,v=Object(d.a)(e,["classes","className","component","square","elevation","variant"]);return c.createElement(o,Object(u.a)({className:Object(p.a)(a.root,n,"outlined"===f?a.outlined:a["elevation".concat(h)],!s&&a.rounded),ref:t},v))})),f=Object(h.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(u.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(m),v=c.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.raised,o=void 0!==r&&r,i=Object(d.a)(e,["classes","className","raised"]);return c.createElement(f,Object(u.a)({className:Object(p.a)(a.root,n),elevation:o?8:1,ref:t},i))})),g=Object(h.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(v),b=a(107);Object(b.a)((function(e){return{removeLinkStyling:{"&:link, &:visited, &:hover":{color:"inherit",textDecoration:"none"},"&:active":{color:"inherit",fontWeight:"bold",textDecoration:"none"}}}}));var y=a(113),w=a(68),O=a(42),j=Object(b.a)((function(e){return{removeLinkStyling:{"&:link, &:visited, &:hover":{color:"inherit",textDecoration:"none"},"&:active":{color:"inherit",fontWeight:"bold",textDecoration:"none"}},questionGrid:{height:150},questionCard:{height:"100%",width:"100%"},questionText:{height:"100%",width:"100%"},correctQuestionCard:{height:"100%",width:"100%",backgroundColor:"green"}}}));var x=function(e){var t=j(),a=Object(c.useState)([]),n=Object(i.a)(a,2),u=n[0],d=n[1],p=Object(c.useState)(0),h=Object(i.a)(p,2),m=h[0],f=h[1],v=Object(c.useState)(!1),b=Object(i.a)(v,2),x=b[0],E=b[1],N=Object(c.useState)(-1),k=Object(i.a)(N,2),C=k[0],q=k[1],S=function(e){E(!0),q(u[m].answers.indexOf(u[m].correct_answer)),u[m].answers[e]===u[m].correct_answer?console.log("correct"):console.log("incorrect"),m<u.length-1&&setTimeout((function(){E(!1),q(-1),f(m+1)}),3e3)},M=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.b)({numQuestions:4});case 2:t=e.sent,console.log(t),0!==t.data.response_code&&console.log("Error retrieving questions from the API"),a=t.data.results,d(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){M()}),[]),s.a.createElement("div",null,u.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{width:"100%",height:"30%"}},s.a.createElement(l.a,{container:!0,spacing:2},s.a.createElement(l.a,{item:!0,xs:6,className:t.questionGrid},s.a.createElement(g,{className:x&&0==C?t.correctQuestionCard:t.questionCard},s.a.createElement(y.a,{className:t.questionText,onClick:function(){return S(0)}},u[m].answers[0]))),s.a.createElement(l.a,{item:!0,xs:6,className:t.questionGrid},s.a.createElement(g,{className:x&&1==C?t.correctQuestionCard:t.questionCard},s.a.createElement(y.a,{className:t.questionText,onClick:function(){return S(1)}},u[m].answers[1]))))),s.a.createElement(w.a,{variant:"h4",style:{padding:40}},u[m].question),s.a.createElement("div",{style:{width:"100%",height:"30%"}},s.a.createElement(l.a,{container:!0,spacing:2},s.a.createElement(l.a,{item:!0,xs:6,className:t.questionGrid},s.a.createElement(g,{className:x&&2==C?t.correctQuestionCard:t.questionCard},s.a.createElement(y.a,{className:t.questionText,onClick:function(){return S(u[m].answers[2])}},u[m].answers[2]))),s.a.createElement(l.a,{item:!0,xs:6,className:t.questionGrid},s.a.createElement(g,{className:x&&3==C?t.correctQuestionCard:t.questionCard},s.a.createElement(y.a,{className:t.questionText,onClick:function(){return S(u[m].answers[3])}},u[m].answers[3])))))):"")},E=Object(b.a)((function(e){return{removeLinkStyling:{"&:link, &:visited, &:hover":{color:"inherit",textDecoration:"none"},"&:active":{color:"inherit",fontWeight:"bold",textDecoration:"none"}}}}));t.default=function(e){E();var t=s.a.createElement(x,null),a=Object(c.useState)([]),n=Object(i.a)(a,2),u=n[0],d=n[1],p=e.match.params.code;return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,Object(O.a)(t);case 3:e.t1=e.sent.data.value,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(p)}),[p]),s.a.createElement("div",null,t,s.a.createElement(l.a,{container:!0,spacing:3},u.map((function(e,t){return s.a.createElement(l.a,{item:!0,xs:3,key:t},s.a.createElement(g,null,e))}))))}},42:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return d}));var n=a(38),r=a.n(n),o=a(39),i=a(53),c=a.n(i),s={"General Knowledge":9,Books:10,Film:11,Music:12,"Musicals & Plays":13,Television:14,"Video Games":15,"Board Games":16,"Science and Nature":17,Computers:18,Mathematics:19,Mythology:20,Sports:21,Geography:22,History:23,Politics:24,Art:25,Celebrities:26,Animals:27,Vehicles:28,Comics:29,Gadgets:30,"Japanese Anime & Manga":31,"Cartoon & Animation":32},l=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,o,i,l,u,d,p,h,m,f,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.category,n=t.numQuestions,o=void 0===n?1:n,i=t.difficulty,l=t.type,u=void 0===l?"multiple":l,d="https://opentdb.com/api.php?amount=".concat(o),a&&s[a]&&(d+="&category=".concat(s[a])),i&&(d+="&difficulty=".concat(i)),d+="&type=".concat(u,"&encode=url3986"),e.next=7,c.a.get(d);case 7:for(p=e.sent,h=p.data.results,m=0;m<h.length;m++){for(h[m].question=decodeURIComponent(h[m].question),h[m].answers=[],r=0,g=2,f=Math.floor(Math.random()*(g-r+1))+r,v=0;v<h[m].incorrect_answers.length;v++)h[m].answers.push(decodeURIComponent(h[m].incorrect_answers[v]));h[m].answers.splice(f,0,decodeURIComponent(h[m].correct_answer))}return p.data.results=h,e.abrupt("return",Promise.resolve(p));case 12:case"end":return e.stop()}var r,g}),e)})));return function(t){return e.apply(this,arguments)}}();var u=function(){var e=Object(o.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[JOINING ROOM] Name: ".concat(t,", Room code: ").concat(a)),e.abrupt("return",Promise.resolve({status:200,data:{}}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[GETTING MEMBERS] Room code: ".concat(t)),e.abrupt("return",Promise.resolve({status:200,data:{value:["Nik","Siena","Filip"]}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},68:function(e,t,a){"use strict";var n=a(2),r=a(31),o=a(0),i=(a(7),a(32)),c=a(33),s=a(36),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var a=e.align,c=void 0===a?"inherit":a,u=e.classes,d=e.className,p=e.color,h=void 0===p?"initial":p,m=e.component,f=e.display,v=void 0===f?"initial":f,g=e.gutterBottom,b=void 0!==g&&g,y=e.noWrap,w=void 0!==y&&y,O=e.paragraph,j=void 0!==O&&O,x=e.variant,E=void 0===x?"body1":x,N=e.variantMapping,k=void 0===N?l:N,C=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),q=m||(j?"p":k[E]||l[E])||"span";return o.createElement(q,Object(n.a)({className:Object(i.a)(u.root,d,"inherit"!==E&&u[E],"initial"!==h&&u["color".concat(Object(s.a)(h))],w&&u.noWrap,b&&u.gutterBottom,j&&u.paragraph,"inherit"!==c&&u["align".concat(Object(s.a)(c))],"initial"!==v&&u["display".concat(Object(s.a)(v))]),ref:t},C))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)}}]);
//# sourceMappingURL=7.2a713a2b.chunk.js.map