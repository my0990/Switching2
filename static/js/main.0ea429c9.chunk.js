(this.webpackJsonpswitching=this.webpackJsonpswitching||[]).push([[0],{45:function(e,n,t){},46:function(e,n,t){},53:function(e,n,t){},54:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var i,c,r,a=t(1),s=t.n(a),o=t(23),l=t.n(o),d=(t(45),t.p,t(46),t(3)),j=t(7),u=t(8),b=t(14),h=(t(56),t(6)),p=t(2),x=u.a.div(i||(i=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    display: block;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n   \n"]))),O=u.a.div(c||(c=Object(j.a)(["\n    width: 60px;\n    height: 35px;\n    background: skyblue;\n    border-radius: 5px;\n    &:hover {\n        cursor: pointer\n    }\n    margin: 5px;\n \n"]))),f=u.a.div(r||(r=Object(j.a)(["\n    width: 60px;\n    height: 35px;\n    background: white;\n    border-radius: 5px;\n    &:hover {\n        cursor: pointer\n    }\n    margin: 5px;\n"])));var g,v=function(e){var n=Object(a.useState)(e.arr),t=Object(d.a)(n,2),i=t[0],c=t[1],r=function(e,n){var t=Object(h.a)(i);1===t[e][n]?t[e].splice(n,1,0):t[e].splice(n,1,1),c(Object(h.a)(t)),console.log(i)};return Object(p.jsx)(x,{children:Object(p.jsx)("table",{children:i.map((function(e,n){return Object(p.jsx)("tr",{children:i[n].map((function(e,t){return 1===e?Object(p.jsx)("td",{children:Object(p.jsx)(O,{onClick:function(){r(n,t)}})}):Object(p.jsx)("td",{children:Object(p.jsx)(f,{onClick:function(){r(n,t)}})})}))})}))})})};u.a.div(g||(g=Object(j.a)(["\n    display: flex;\n    height: 500px;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n\n"])));var m,y,w,k,S,C=t(59),I=(t(53),u.a.div(m||(m=Object(j.a)(["\n    width: 100%;\n    position: relative;\n    min-width: 600px;\n    \n    background: #eee; \n    \n    \n"])))),N=u.a.div(y||(y=Object(j.a)(["\n    width: 100%;\n    background: white;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n"]))),F=Object(u.a)(b.animated.div)(w||(w=Object(j.a)(["\n    width: 140px;\n    height: 70px;\n    background: skyblue;\n    border-radius: 5px;\n    margin: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5em;\n"]))),R=u.a.div(k||(k=Object(j.a)(["\n    width: 140px;\n    height: 70px;\n    background: white;\n    border-radius: 5px;\n    margin: 10px;\n"]))),T=u.a.div(S||(S=Object(j.a)(["\n    width: 90%;\n    height: 50%;\n    display: block;\n    background: white;\n    margin: 40px auto;\n    border-radius: 10px;\n    h4 {\n        text-align: left;\n        padding-left: 20px;\n        \n    }\n    \n    div div{\n        font-size: 1.5em;\n        width: 610px;\n        overflow: overlay;\n        height: 60%;\n        margin: 10px;\n        word-break:break-all;\n    }\n    \n"])));var z,B,D,H=function(){var e=0,n=Object(a.useState)(),t=Object(d.a)(n,2),i=(t[0],t[1]),c=Object(a.useState)(),r=Object(d.a)(c,2),s=r[0],o=r[1],l=Object(a.useRef)(),j=Object(a.useRef)(),u=Object(a.useState)([]),x=Object(d.a)(u,2),O=x[0],f=x[1],g=Object(a.useState)(!1),m=Object(d.a)(g,2),y=m[0],w=m[1],k=Object(a.useState)(!1),S=Object(d.a)(k,2),z=S[0],B=S[1],D=Object(a.useRef)(),H=Object(a.useRef)(),J=Object(a.useRef)(),L=Object(a.useState)([]),M=Object(d.a)(L,2),P=M[0],W=M[1],X=Object(a.useState)([]),A=Object(d.a)(X,2),E=A[0],q=A[1],G=Object(a.useState)([]),K=Object(d.a)(G,2),Q=K[0],U=K[1],V=function(){B(!1);var e=[];f([].concat(e)),U([].concat(e)),W([].concat(e)),q([].concat(e))},Y=Object(a.useState)(0),Z=Object(d.a)(Y,2),$=Z[0],_=Z[1],ee=Object(b.useTransition)($,{from:{x:100,opacity:0,position:"absolute"},enter:{x:0,opacity:1},leave:{x:-50,opacity:0}});function ne(e){_((function(e){return(e+1)%2}))}var te=[function(e){e.style;return Object(p.jsxs)("div",{className:"item1",style:{transform:"translateX("+(window.innerWidth/2-500)+"px)"},children:[Object(p.jsxs)("div",{style:{padding:"20px"},children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{ref:l,id:"col",placeholder:"col"})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{ref:j,id:"row",placeholder:"row"})})]}),Object(p.jsx)(C.a,{variant:"danger",onClick:function(){!function(){if(!z)if(l.current.value>10||j.current.value>10)alert("10\uc774\ud558 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),l.current.value="",j.current.value="";else{for(var e=[],n=0;n<l.current.value;++n){for(var t=[],c=0;c<j.current.value;++c)t[c]=1;e[n]=t}f([].concat(e)),i(parseInt(l.current.value)),o(parseInt(j.current.value)),w(!0)}}()},children:"\ucc45\uc0c1\uc0dd\uc131"}),Object(p.jsxs)("div",{className:"smallDesk",children:[Object(p.jsx)(v,{arr:O,propsFunction:ne}),y?Object(p.jsx)("div",{style:{position:"relative",bottom:"50px"},children:"\ud074\ub9ad\ud558\uba74 \ucc45\uc0c1\uc744 \uc9c0\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}):""]}),Object(p.jsx)(C.a,{variant:"danger",onClick:function(){ne()},children:"\ub2e4\uc74c"})]})},function(e){e.style;return Object(p.jsxs)("div",{className:"item2",style:{transform:"translateX("+(window.innerWidth/2-350)+"px)"},children:[Object(p.jsx)("div",{children:Object(p.jsxs)("div",{style:{padding:"25px 50px",display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)("input",{id:"start",placeholder:"\uc2dc\uc791\ubc88\ud638",ref:D}),Object(p.jsx)("input",{id:"end",placeholder:"\ub05d\ubc88\ud638",ref:H}),Object(p.jsx)("input",{id:"ex",placeholder:"\uc81c\uc678\ubc88\ud638 \ucf64\ub9c8\ub85c \uad6c\ubd84",ref:J})]})}),Object(p.jsx)(C.a,{variant:"danger",onClick:function(){return function(){if(!z){var e,n=J.current.value.split(",").map(Number);(e=console).log.apply(e,Object(h.a)(n)),U([].concat(Object(h.a)(Q),Object(h.a)(n)));var t=[];t=E?Object(h.a)(E):[],console.log("\uc608\uc678\ubc88\ud638 \ubc30\uc5f4: ",n),console.log("test start");for(var i=parseInt(D.current.value);i<parseInt(H.current.value)+1;++i)n.includes(i)||(console.log(i,"\ub294 \uc608\uc678 \ubc88\ud638\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."),t.push(parseInt(i)));console.log(t),q([].concat(Object(h.a)(E),Object(h.a)(t))),t.sort((function(){return Math.random()-.5})),W(Object(h.a)(t))}}()},children:"\ubc88\ud638\ucd94\uac00"}),Object(p.jsxs)(T,{children:[Object(p.jsxs)("div",{style:{height:"50%"},children:[Object(p.jsx)("h4",{children:"\uc0dd\uc131\ub41c \ubc88\ud638"}),Object(p.jsx)("div",{children:E.map((function(e,n){return n!=E.length-1?e+",":e}))})]}),Object(p.jsxs)("div",{style:{height:"50%"},children:[Object(p.jsx)("h4",{children:"\uc81c\uc678\ub41c \ubc88\ud638"}),Object(p.jsx)("div",{children:Q.map((function(e,n){return 0===e?null:n!=Q.length-1?e+",":e}))})]})]}),Object(p.jsx)(C.a,{variant:"danger",onClick:function(){se(!0)},children:"\ud655\uc778"})]})}],ie=Object(a.useState)(!1),ce=Object(d.a)(ie,2),re=ce[0],ae=ce[1],se=function(){ae(!0)},oe=Object(b.useTransition)(re,{enter:{opacity:1},leave:{opacity:0}}),le=Object(b.useTransition)(z,{from:{opacity:0},enter:{opacity:1}});return Object(p.jsxs)(I,{style:{height:window.innerHeight},children:[oe((function(e,n){return n?z?Object(p.jsx)(C.a,{className:"btnStyle",variant:"danger",onClick:function(){window.confirm("\uc815\ub9d0 \ucd08\uae30\ud654\ud558\uc2e4\uac70\uc5d0\uc694?")?(V(),window.location.reload()):console.log("\ubcc0\ud654\uc5c6\uc74c")},children:"reset"}):Object(p.jsx)(C.a,{className:"btnStyle",variant:"danger",onClick:function(){0!=O.length&&0!=P.length?B(!0):alert("\ucc45\uc0c1\uacfc \ubc88\ud638\ub97c \uc0dd\uc131\ud574\uc8fc\uc138\uc694~")},children:"start"}):Object(p.jsx)(b.animated.div,{style:e,children:ee((function(e,n){var t=te[n];return Object(p.jsx)(b.animated.div,{style:e,children:Object(p.jsx)(t,{})})}))})})),re?Object(p.jsx)(N,{style:{height:9*window.innerHeight/10},children:Object(p.jsx)("table",{children:O.map((function(n,t){return Object(p.jsx)("tr",{children:O[t].map((function(n,i){return 1===n?Object(p.jsx)("td",{children:Object(p.jsx)(F,{children:le((function(n,c){return c?Object(p.jsx)(b.animated.div,{style:n,children:P[t*s+i-e]}):null}))})}):(e++,Object(p.jsx)("td",{children:Object(p.jsx)(R,{})}))}))})}))})}):"",Object(p.jsx)("div",{children:Object(p.jsx)("p",{style:{position:"absolute",right:0,bottom:0},children:"email: my0990@naver.com"})})]})};t(54),u.a.div(z||(z=Object(j.a)(["\n    \n    width: 100%;\n    height: 1000px;\n    min-width: 1300px;\n    background: gray;\n    margin: auto;\n"]))),u.a.div(B||(B=Object(j.a)(["\n    width: 50%;\n    height: 100px;\n    background: white;\n    float: left;\n    background: skyblue;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    button {\n        width: 50px;\n        height: 70px;\n        position: relative;\n        top: -5px;\n    }\n    \n"]))),u.a.div(D||(D=Object(j.a)(["\n    width: 50%;\n    height: 100px;\n    background: white;\n    float: left;\n    background: green;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    button {\n        width: 50px;\n        height: 70px;\n        position: relative;\n        top: -10px;\n    }\n"])));t(55);var J=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(H,{})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),r(e),a(e)}))};l.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),L()}},[[57,1,2]]]);
//# sourceMappingURL=main.0ea429c9.chunk.js.map