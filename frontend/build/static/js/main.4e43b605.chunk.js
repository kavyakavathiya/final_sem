(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(43),o=a.n(c),s=a(11),i=a(47),u=(a(79),a(24)),l=a(6),d=a(53),j=a.n(d),p=a(48),b=a.n(p),m=a(0),h=function(e){var t=e.title,a=e.icon,n=e.children;return Object(m.jsxs)("div",{className:b.a.card,children:[Object(m.jsxs)("div",{className:b.a.headingWrapper,children:[a&&Object(m.jsx)("img",{src:"/images/".concat(a,".png"),alt:"logo"}),t&&Object(m.jsx)("h1",{className:b.a.heading,children:t})]}),n]})},f=a(54),O=a.n(f),v=function(e){var t=e.text,a=e.onClick;return Object(m.jsxs)("button",{onClick:a,className:O.a.buttons,children:[Object(m.jsx)("span",{children:t}),Object(m.jsx)("img",{className:O.a.arrow,src:"/images/arrow-forward.png",alt:"logo"})]})},x=function(){var e=Object(l.g)();return Object(m.jsx)("div",{className:j.a.cardWrapper,children:Object(m.jsxs)(h,{title:"Welcome to MicroPod",icon:"logo",children:[Object(m.jsx)("p",{className:j.a.text,children:'MicroPod is a podacast application, where people can interact with each other and can talk about; be it sports, politics or academics. Not able find topic you want to discuss, feel free to create your own Room and start conversation. Like to host a private session where only invited people can join, than start a "Close Room".'}),Object(m.jsx)("div",{children:Object(m.jsx)(v,{onClick:function(){e.push("/authenticate")},text:"Let's Go"})})]})})},_=a(4),g=a(2),N=a.n(g),k=a(40),y=a.n(k),w=y.a.create({baseURL:"http://localhost:5500",withCredentials:!0,headers:{"Content-type":"application/json",Accept:"application/json"}}),R=function(e){return w.post("/api/send-otp",e)},C=function(e){return w.post("/api/verify-otp",e)},B=function(e){return w.post("/api/activate",e)},S=function(){return w.post("/api/logout")},I=function(e){return w.post("/api/rooms",e)},P=function(e){return w.get("/api/rooms/".concat(e))};w.interceptors.response.use((function(e){return e}),function(){var e=Object(_.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,401!==t.response.status||!a||a._isRetry){e.next=12;break}return a.isRetry=!0,e.prev=3,e.next=6,y.a.get("".concat("http://localhost:5500","/api/refresh"),{withCredentials:!0});case 6:return e.abrupt("return",w.request(a));case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0.message);case 12:throw t;case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}());var A=a(37),W=a.n(A),H=a(5),M=a(36),E=Object(M.b)({name:"auth",initialState:{isAuth:!1,user:null,otp:{phone:"",hash:""}},reducers:{setAuth:function(e,t){var a=t.payload.user;e.user=a,e.isAuth=null!==a},setOtp:function(e,t){var a=t.payload,n=a.phone,r=a.hash;e.otp.phone=n,e.otp.hash=r}}}),L=E.actions,T=L.setAuth,F=L.setOtp,D=E.reducer,J=function(){var e=Object(H.b)(),t=Object(H.c)((function(e){return e.auth})),a=t.isAuth,n=t.user;function r(){return(r=Object(_.a)(N.a.mark((function t(){var a,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S();case 3:a=t.sent,n=a.data,e(T(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return Object(m.jsxs)("nav",{className:"".concat(W.a.navbar," container"),children:[Object(m.jsxs)(u.b,{style:{color:"#fff",textDecoration:"none",fontWeight:"bold",fontSize:"22px",display:"flex",alignItems:"center"},to:"/",children:[Object(m.jsx)("img",{src:"/images/logo.png",alt:"logo"}),Object(m.jsx)("span",{style:{marginLeft:"10px"},children:"MicroPod"})]}),a&&Object(m.jsxs)("div",{className:W.a.navRight,children:[Object(m.jsx)("h3",{className:W.a.userName,children:null===n||void 0===n?void 0:n.name}),Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:W.a.avatar,src:n.avatar?n.avatar:"/images/monkey-avatar.png",width:"40",height:"40",alt:"avatar"})}),Object(m.jsx)("button",{className:W.a.logoutButton,onClick:function(){return r.apply(this,arguments)},children:Object(m.jsx)("img",{src:"/images/logout.png",alt:"logout"})})]})]})},U=a(3),G=a(67),q=a.n(G),Y=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("input",Object(s.a)({className:q.a.input,style:{width:"true"===e.fullwidth?"100%":"inherit"},type:"text"},e))})},Q=a(29),Z=a.n(Q),z=function(e){var t=e.onNext,a=Object(n.useState)(""),r=Object(U.a)(a,2),c=r[0],o=r[1],s=Object(H.b)();function i(){return(i=Object(_.a)(N.a.mark((function e(){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,R({phone:c});case 4:a=e.sent,n=a.data,console.log(n),s(F({phone:n.phone,hash:n.hash})),t();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)(h,{title:"Enter phone no",icon:"phone",children:[Object(m.jsx)(Y,{value:c,onChange:function(e){return o(e.target.value)}}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:Z.a.actionButtonWrap,children:Object(m.jsx)(v,{text:"Next",onClick:function(){return i.apply(this,arguments)}})}),Object(m.jsx)("p",{className:Z.a.bottomParagraph,children:"By entering your number, you are agreeing to our Terms of Services and Privacy Policy."})]})]})},V={phone:z,email:function(e){var t=e.onNext,a=Object(n.useState)(""),r=Object(U.a)(a,2),c=r[0],o=r[1];return Object(m.jsxs)(h,{title:"Enter email ID",icon:"email-emoji",children:[Object(m.jsx)(Y,{value:c,onChange:function(e){return o(e.target.value)}}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:Z.a.actionButtonWrap,children:Object(m.jsx)(v,{text:"Next",onClick:t})}),Object(m.jsx)("p",{className:Z.a.bottomParagraph,children:"By entering your email, you are agreeing to our Terms of Services and Privacy Policy."})]})]})}},X=function(e){var t=e.onNext,a=Object(n.useState)("phone"),r=Object(U.a)(a,2),c=r[0],o=(r[1],V[c]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:Z.a.cardWrapper,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:Z.a.buttonWrap}),Object(m.jsx)(o,{onNext:t})]})})})},K=a(49),$=a.n(K),ee=function(){var e=Object(n.useState)(""),t=Object(U.a)(e,2),a=t[0],r=t[1],c=Object(H.b)(),o=Object(H.c)((function(e){return e.auth.otp})),s=o.phone,i=o.hash;function u(){return(u=Object(_.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&s&&i){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,C({otp:a,phone:s,hash:i});case 5:t=e.sent,n=t.data,console.log(n),c(T(n)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:$.a.cardWrapper,children:Object(m.jsxs)(h,{title:"Enter the OTP!",icon:"lock-emoji",children:[Object(m.jsx)(Y,{value:a,onChange:function(e){return r(e.target.value)}}),Object(m.jsx)("div",{className:$.a.actionButtonWrap,children:Object(m.jsx)(v,{onClick:function(){return u.apply(this,arguments)},text:"Next"})}),Object(m.jsx)("p",{className:$.a.bottomParagraph,children:"Enter the 4 digit code that was sent to you."})]})})})},te={1:X,2:ee},ae=function(){var e=Object(n.useState)(1),t=Object(U.a)(e,2),a=t[0],r=t[1],c=te[a];return Object(m.jsx)(c,{onNext:function(){r(a+1)}})},ne=Object(M.b)({name:"activate",initialState:{name:"",avatar:""},reducers:{setName:function(e,t){e.name=t.payload},setAvatar:function(e,t){e.avatar=t.payload}}}),re=ne.actions,ce=re.setName,oe=re.setAvatar,se=ne.reducer,ie=a(68),ue=a.n(ie),le=function(e){var t=e.onNext,a=Object(H.c)((function(e){return e.activate})).name,r=Object(H.b)(),c=Object(n.useState)(a),o=Object(U.a)(c,2),s=o[0],i=o[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(h,{title:"What's your full name?",icon:"goggle-emoji",children:[Object(m.jsx)(Y,{value:s,onChange:function(e){return i(e.target.value)}}),Object(m.jsx)("p",{className:ue.a.paragraph,children:"People use real names at MicroPod :)"}),Object(m.jsx)("div",{children:Object(m.jsx)(v,{onClick:function(){s&&(r(ce(s)),t())},text:"Next"})})]})})},de=a(38),je=a.n(de),pe=a(50),be=a.n(pe),me=function(e){var t=e.message;return Object(m.jsx)("div",{className:be.a.cardWrapper,children:Object(m.jsxs)(h,{children:[Object(m.jsx)("svg",{className:be.a.spinner,width:"40",height:"40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M19.778.001A20 20 0 1 1 .542 24.627l3.876-.922a16.016 16.016 0 1 0 15.404-19.72L19.778.001Z",fill:"#5453E0"})}),Object(m.jsx)("span",{className:be.a.message,children:t})]})})},he=function(e){e.onNext;var t=Object(H.b)(),a=Object(H.c)((function(e){return e.activate})),r=a.name,c=a.avatar,o=Object(n.useState)("/images/monkey-avatar.png"),s=Object(U.a)(o,2),i=s[0],u=s[1],l=Object(n.useState)(!1),d=Object(U.a)(l,2),j=d[0],p=d[1],b=Object(n.useState)(!1),f=Object(U.a)(b,2),O=f[0],x=f[1];function g(){return(g=Object(_.a)(N.a.mark((function e(){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&c){e.next=2;break}return e.abrupt("return");case 2:return p(!0),e.prev=3,e.next=6,B({name:r,avatar:c});case 6:a=e.sent,(n=a.data).auth&&(O||t(T(n))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:return e.prev=14,p(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){return function(){x(!0)}})),j?Object(m.jsx)(me,{message:"Activation in progress..."}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(h,{title:"Okay, ".concat(r),icon:"monkey-emoji",children:[Object(m.jsx)("p",{className:je.a.subHeading,children:"How's this photo?"}),Object(m.jsx)("div",{className:je.a.avatarWrapper,children:Object(m.jsx)("img",{className:je.a.avatarImage,src:i,alt:"avatar"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{onChange:function(e){var a=e.target.files[0],n=new FileReader;n.readAsDataURL(a),n.onloadend=function(){console.log(n.result),u(n.result),t(oe(n.result))}},id:"avatarInput",type:"file",className:je.a.avatarInput}),Object(m.jsx)("label",{className:je.a.avatarLabel,htmlFor:"avatarInput",children:"Choose a different photo"})]}),Object(m.jsx)("div",{children:Object(m.jsx)(v,{onClick:function(){return g.apply(this,arguments)},text:"Next"})})]})})},fe={1:le,2:he},Oe=function(){var e=Object(n.useState)(1),t=Object(U.a)(e,2),a=t[0],r=t[1],c=fe[a];return Object(m.jsx)("div",{className:"cardWrapper",children:Object(m.jsx)(c,{onNext:function(){r(a+1)}})})},ve=a(27),xe=a.n(ve),_e=a(30),ge=a.n(_e),Ne=function(e){var t,a,n=e.room,r=Object(l.g)();return Object(m.jsxs)("div",{onClick:function(){r.push("/room/".concat(n.id))},className:ge.a.card,children:[Object(m.jsx)("h3",{className:ge.a.topic,children:n.topic}),Object(m.jsxs)("div",{className:"".concat(ge.a.speakers," ").concat(1===n.speakers.length?ge.a.singleSpeaker:""),children:[Object(m.jsx)("div",{className:ge.a.avatars,children:null===(t=n.speakers)||void 0===t?void 0:t.map((function(e){return Object(m.jsx)("img",{src:e.avatar,alt:"speaker-avatar"},e.id)}))}),Object(m.jsx)("div",{className:ge.a.names,children:null===(a=n.speakers)||void 0===a?void 0:a.map((function(e){return Object(m.jsxs)("div",{className:ge.a.nameWrapper,children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("img",{src:"/images/chat-bubble.png",alt:"chat-bubble"})]},e.id)}))})]}),Object(m.jsxs)("div",{className:ge.a.peopleCount,children:[Object(m.jsx)("span",{children:n.totalPeople}),Object(m.jsx)("img",{src:"/images/user-icon.png",alt:"user-icon"})]})]})},ke=a(15),ye=a.n(ke),we=function(e){var t=e.onClose,a=Object(l.g)(),r=Object(n.useState)("Public"),c=Object(U.a)(r,2),o=c[0],s=c[1],i=Object(n.useState)(""),u=Object(U.a)(i,2),d=u[0],j=u[1];function p(){return(p=Object(_.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,d){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,I({topic:d,roomType:o});case 5:t=e.sent,n=t.data,a.push("/room/".concat(n.id)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(m.jsx)("div",{className:ye.a.modalMask,children:Object(m.jsxs)("div",{className:ye.a.modalBody,children:[Object(m.jsx)("button",{onClick:t,className:ye.a.closeButton,children:Object(m.jsx)("img",{src:"/images/close.png",alt:"close"})}),Object(m.jsxs)("div",{className:ye.a.modalHeader,children:[Object(m.jsx)("h3",{className:ye.a.heading,children:"Enter Topic & Type of Room"}),Object(m.jsx)(Y,{fullwidth:"true",value:d,onChange:function(e){return j(e.target.value)}}),Object(m.jsx)("h2",{className:ye.a.subHeading,children:"Room Types"}),Object(m.jsxs)("div",{className:ye.a.roomTypes,children:[Object(m.jsxs)("div",{onClick:function(){return s("Public")},className:"".concat(ye.a.typeBox," ").concat("Public"===o?ye.a.active:""),children:[Object(m.jsx)("img",{src:"/images/globe.png",alt:"globe"}),Object(m.jsx)("span",{children:"Public"})]}),Object(m.jsxs)("div",{onClick:function(){return s("Private")},className:"".concat(ye.a.typeBox," ").concat("Private"===o?ye.a.active:""),children:[Object(m.jsx)("img",{src:"/images/lock.png",alt:"lock"}),Object(m.jsx)("span",{children:"Private"})]})]})]}),Object(m.jsxs)("div",{className:ye.a.modalFooter,children:[Object(m.jsx)("h2",{children:"Start a Room"}),Object(m.jsxs)("button",{onClick:function(){return p.apply(this,arguments)},className:ye.a.footerButton,children:[Object(m.jsx)("span",{children:"Let's Go"}),Object(m.jsx)("img",{src:"/images/add-room-icon.png",alt:"go"})]})]})]})})},Re=a(31),Ce=a.n(Re),Be=function(e){var t=e.onClose,a=Object(l.g)(),r=Object(n.useState)(""),c=Object(U.a)(r,2),o=c[0],s=c[1];return Object(m.jsx)("div",{className:Ce.a.modalMask,children:Object(m.jsxs)("div",{className:Ce.a.modalBody,children:[Object(m.jsx)("button",{onClick:t,className:Ce.a.closeButton,children:Object(m.jsx)("img",{src:"/images/close.png",alt:"close"})}),Object(m.jsxs)("div",{className:Ce.a.modalHeader,children:[Object(m.jsx)("h3",{className:Ce.a.heading,children:"Enter Private Invitation Code"}),Object(m.jsx)(Y,{fullwidth:"true",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(m.jsx)("div",{onClick:function(){try{if(!o)return;a.push("/room/".concat(o))}catch(e){console.log(e)}},className:Ce.a.modalFooter,children:Object(m.jsx)("button",{className:Ce.a.footerButton,children:Object(m.jsx)("span",{children:"Join"})})})]})})},Se=function(){var e=Object(n.useState)(!1),t=Object(U.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(U.a)(c,2),s=o[0],i=o[1],u=Object(n.useState)(!1),l=Object(U.a)(u,2),d=l[0],j=l[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(_.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/api/rooms");case 2:t=e.sent,a=t.data,i(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:xe.a.roomsHeader,children:[Object(m.jsx)("div",{className:xe.a.left,children:Object(m.jsx)("span",{className:xe.a.heading,children:"All Voice Rooms"})}),Object(m.jsxs)("div",{className:xe.a.roomButtons,children:[Object(m.jsx)("div",{className:xe.a.right,children:Object(m.jsxs)("button",{onClick:function(){r(!0)},className:xe.a.startRoomButton,children:[Object(m.jsx)("img",{src:"/images/add-room-icon.png",alt:"add-room"}),Object(m.jsx)("span",{children:" Start New Room"})]})}),Object(m.jsx)("div",{className:xe.a.right,children:Object(m.jsx)("button",{onClick:function(){j(!0)},className:xe.a.privateRoomButton,children:Object(m.jsx)("span",{children:" Join Private Room"})})})]})]}),Object(m.jsx)("div",{className:xe.a.roomList,children:s.map((function(e){return Object(m.jsx)(Ne,{room:e},e.id)}))})]}),a&&Object(m.jsx)(we,{onClose:function(){return r(!1)}}),d&&Object(m.jsx)(Be,{onClose:function(){return j(!1)}})]})},Ie=a(74),Pe="join",Ae="leave",We="add-peer",He="remove-peer",Me="relay-ice",Ee="relay-sdp",Le="session-description",Te="ice-candidate",Fe="mute",De="unmute",Je="mute-info",Ue=a(73),Ge=function(){return Object(Ue.a)("http://localhost:5500",{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]})},qe=a(72),Ye=a.n(qe),Qe=function(e,t){var a=function(e){var t=Object(n.useState)(e),a=Object(U.a)(t,2),r=a[0],c=a[1],o=Object(n.useRef)(),s=Object(n.useCallback)((function(e,t){o.current=t,c((function(t){return"function"===typeof e?e(t):e}))}),[]);return Object(n.useEffect)((function(){o.current&&(o.current(r),o.current=null)}),[r]),[r,s]}([]),r=Object(U.a)(a,2),c=r[0],o=r[1],i=Object(n.useRef)({}),u=Object(n.useRef)({}),l=Object(n.useRef)(null),d=Object(n.useRef)(null),j=Object(n.useRef)(null),p=Object(n.useCallback)((function(e,t){void 0===c.find((function(t){return t.id===e.id}))&&o((function(t){return[].concat(Object(Ie.a)(t),[e])}),t)}),[c,o]);Object(n.useEffect)((function(){j.current=c}),[c]),Object(n.useEffect)((function(){var a=function(){var a=Object(_.a)(N.a.mark((function a(){var n,r,c,b,m,h,f,O,v,x,g,k;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return k=function(){return(k=Object(_.a)(N.a.mark((function e(t,a){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=j.current.map((function(e){return e.id})).indexOf(a),r=JSON.parse(JSON.stringify(j.current)),n>-1&&(r[n].muted=t,o(r));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)},g=function(e,t){return k.apply(this,arguments)},x=function(){return(x=Object(_.a)(N.a.mark((function e(t){var a,n,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.peerId,n=t.sessionDescription,u.current[a].setRemoteDescription(new RTCSessionDescription(n)),"offer"!==n.type){e.next=9;break}return r=u.current[a],e.next=6,r.createAnswer();case 6:c=e.sent,r.setLocalDescription(c),l.current.emit(Ee,{peerId:a,sessionDescription:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)},v=function(e){return x.apply(this,arguments)},O=function(){return(O=Object(_.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.peerId,(n=t.icecandidate)&&u.current[a].addIceCandidate(n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)},f=function(e){return O.apply(this,arguments)},h=function(){return(h=Object(_.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.peerId,n=t.userId,u.current[a]&&u.current[a].close(),delete u.current[a],delete i.current[a],o((function(e){return e.filter((function(e){return e.id!==n}))}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},m=function(e){return h.apply(this,arguments)},b=function(){return(b=Object(_.a)(N.a.mark((function a(n){var r,c,o,b;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=n.peerId,c=n.createOffer,o=n.user,!(r in u.current)){a.next=3;break}return a.abrupt("return",console.warn("You are already connected with ".concat(r," (").concat(t.name,")")));case 3:if(u.current[r]=new RTCPeerConnection({iceServers:Ye()()}),u.current[r].onicecandidate=function(e){l.current.emit(Me,{peerId:r,icecandidate:e.candidate})},u.current[r].ontrack=function(a){var n=Object(U.a)(a.streams,1)[0];p(Object(s.a)(Object(s.a)({},o),{},{muted:!0}),(function(){var a=j.current.find((function(e){return e.id===t.id}));if(a&&l.current.emit(Je,{userId:t.id,roomId:e,isMute:a.muted}),i.current[o.id])i.current[o.id].srcObject=n;else var r=!1,c=setInterval((function(){i.current[o.id]&&(i.current[o.id].srcObject=n,r=!0),r&&clearInterval(c)}),300)}))},d.current.getTracks().forEach((function(e){u.current[r].addTrack(e,d.current)})),!c){a.next=14;break}return a.next=10,u.current[r].createOffer();case 10:return b=a.sent,a.next=13,u.current[r].setLocalDescription(b);case 13:l.current.emit(Ee,{peerId:r,sessionDescription:b});case 14:case"end":return a.stop()}}),a)})))).apply(this,arguments)},c=function(e){return b.apply(this,arguments)},r=function(){return(r=Object(_.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:d.current=e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)},n=function(){return r.apply(this,arguments)},l.current=Ge(),a.next=15,n();case 15:p(Object(s.a)(Object(s.a)({},t),{},{muted:!0}),(function(){var e=i.current[t.id];e&&(e.volume=0,e.srcObject=d.current)})),l.current.on(Je,(function(e){var t=e.userId,a=e.isMute;g(a,t)})),l.current.on(We,c),l.current.on(He,m),l.current.on(Te,f),l.current.on(Le,v),l.current.on(Fe,(function(e){e.peerId;var t=e.userId;g(!0,t)})),l.current.on(De,(function(e){e.peerId;var t=e.userId;g(!1,t)})),l.current.emit(Pe,{roomId:e,user:t});case 24:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a(),function(){for(var t in d.current.getTracks().forEach((function(e){return e.stop()})),l.current.emit(Ae,{roomId:e}),u.current)u.current[t].close(),delete u.current[t],delete i.current[t];l.current.off(We),l.current.off(He),l.current.off(Te),l.current.off(Le),l.current.off(Fe),l.current.off(De)}}),[]);return{clients:c,provideRef:function(e,t){i.current[t]=e},handleMute:function(a,n){var r=!1;if(n===t.id)var c=setInterval((function(){d.current&&(d.current.getTracks()[0].enabled=!a,a?l.current.emit(Fe,{roomId:e,userId:t.id}):l.current.emit(De,{roomId:e,userId:t.id}),r=!0),r&&clearInterval(c)}),200)}}},Ze=a(16),ze=a.n(Ze),Ve=function(){var e=Object(H.c)((function(e){return e.auth.user})),t=Object(l.h)().id,a=Object(n.useState)(null),r=Object(U.a)(a,2),c=r[0],o=r[1],s=Qe(t,e),i=s.clients,u=s.provideRef,d=s.handleMute,j=Object(l.g)(),p=Object(n.useState)(!0),b=Object(U.a)(p,2),h=b[0],f=b[1];Object(n.useEffect)((function(){var e=function(){var e=Object(_.a)(N.a.mark((function e(){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:a=e.sent,n=a.data,o((function(e){return n}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(n.useEffect)((function(){d(h,e.id)}),[h]);var O=function(){j.push("/rooms")};return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("button",{onClick:O,className:ze.a.goBack,children:[Object(m.jsx)("img",{src:"/images/arrow-left.png",alt:"arrow-left"}),Object(m.jsx)("span",{children:"All voice rooms"})]})}),Object(m.jsxs)("div",{className:ze.a.clientsWrap,children:[Object(m.jsxs)("div",{className:ze.a.header,children:[c&&Object(m.jsx)("h2",{className:ze.a.topic,children:c.topic}),Object(m.jsx)("div",{className:ze.a.actions,children:Object(m.jsxs)("button",{onClick:O,className:ze.a.actionBtn,children:[Object(m.jsx)("img",{src:"/images/win.png",alt:"win-icon"}),Object(m.jsx)("span",{children:"Leave quietly"})]})})]}),Object(m.jsx)("div",{className:ze.a.clientsList,children:i.map((function(t){return Object(m.jsxs)("div",{className:ze.a.client,children:[Object(m.jsxs)("div",{className:ze.a.userHead,children:[Object(m.jsx)("img",{className:ze.a.userAvatar,src:t.avatar,alt:""}),Object(m.jsx)("audio",{autoPlay:!0,ref:function(e){u(e,t.id)}}),Object(m.jsx)("button",{onClick:function(){t.id===e.id&&f((function(e){return!e}))},className:ze.a.micBtn,children:t.muted?Object(m.jsx)("img",{className:ze.a.mic,src:"/images/mic-mute.png",alt:"mic"}):Object(m.jsx)("img",{className:ze.a.micImg,src:"/images/mic.png",alt:"mic"})})]}),Object(m.jsx)("h4",{children:t.name})]},t.id)}))})]})]})};var Xe=["children"],Ke=["children"],$e=["children"];var et=function(e){var t=e.children,a=Object(i.a)(e,Xe),n=Object(H.c)((function(e){return e.auth})).isAuth;return Object(m.jsx)(l.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){var a=e.location;return n?Object(m.jsx)(l.a,{to:{pathname:"/rooms",state:{from:a}}}):t}}))},tt=function(e){var t=e.children,a=Object(i.a)(e,Ke),n=Object(H.c)((function(e){return e.auth})),r=n.user,c=n.isAuth;return Object(m.jsx)(l.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){var a=e.location;return c?c&&!r.activated?t:Object(m.jsx)(l.a,{to:{pathname:"/rooms",state:{from:a}}}):Object(m.jsx)(l.a,{to:{pathname:"/",state:{from:a}}})}}))},at=function(e){var t=e.children,a=Object(i.a)(e,$e),n=Object(H.c)((function(e){return e.auth})),r=n.user,c=n.isAuth;return Object(m.jsx)(l.b,Object(s.a)(Object(s.a)({},a),{},{render:function(e){var a=e.location;return c?c&&!r.activated?Object(m.jsx)(l.a,{to:{pathname:"/activate",state:{from:a}}}):t:Object(m.jsx)(l.a,{to:{pathname:"/",state:{from:a}}})}}))},nt=function(){var e=function(){var e=Object(n.useState)(!0),t=Object(U.a)(e,2),a=t[0],r=t[1],c=Object(H.b)();return Object(n.useEffect)((function(){Object(_.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat("http://localhost:5500","/api/refresh"),{withCredentials:!0});case 3:t=e.sent,a=t.data,c(T(a)),r(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),r(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),{loading:a}}();return e.loading?Object(m.jsx)(me,{message:"Loading, please wait.."}):Object(m.jsxs)(u.a,{children:[Object(m.jsx)(J,{}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(et,{path:"/",exact:!0,children:Object(m.jsx)(x,{})}),Object(m.jsx)(et,{path:"/authenticate",children:Object(m.jsx)(ae,{})}),Object(m.jsx)(tt,{path:"/activate",children:Object(m.jsx)(Oe,{})}),Object(m.jsx)(at,{path:"/rooms",children:Object(m.jsx)(Se,{})}),Object(m.jsx)(at,{path:"/room/:id",children:Object(m.jsx)(Ve,{})})]})]})},rt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},ct=Object(M.a)({reducer:{auth:D,activate:se}});o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(H.a,{store:ct,children:Object(m.jsx)(nt,{})})}),document.getElementById("root")),rt()},15:function(e,t,a){e.exports={heading:"AddRoomModal_heading__1j9DR",subHeading:"AddRoomModal_subHeading__3t1YN",modalMask:"AddRoomModal_modalMask__1_Go_",modalBody:"AddRoomModal_modalBody__2VRUY",closeButton:"AddRoomModal_closeButton__3fQpi",modalHeader:"AddRoomModal_modalHeader__1tU0C",roomTypes:"AddRoomModal_roomTypes__108Jl",typeBox:"AddRoomModal_typeBox__TG6TE",active:"AddRoomModal_active__2oZLd",modalFooter:"AddRoomModal_modalFooter__2KJwP",footerButton:"AddRoomModal_footerButton__3BixM"}},16:function(e,t,a){e.exports={userHead:"Room_userHead__2-xny",userAvatar:"Room_userAvatar__3yh6L",goBack:"Room_goBack__3wj8y",clientsWrap:"Room_clientsWrap__26U9d",header:"Room_header__1QZ3_",actions:"Room_actions__4fkX2",actionBtn:"Room_actionBtn__1Azjs",topic:"Room_topic__mUcoC",client:"Room_client__1-Mjb",clientsList:"Room_clientsList__1btuF",micBtn:"Room_micBtn__3Q3jN"}},27:function(e,t,a){e.exports={roomsHeader:"Rooms_roomsHeader__1lw3W",left:"Rooms_left__q5HHu",heading:"Rooms_heading__10ysi",searchBox:"Rooms_searchBox__3-EGA",searchInput:"Rooms_searchInput__2S-A6",roomButton:"Rooms_roomButton___hC4Y",startRoomButton:"Rooms_startRoomButton__2INXq",privateRoomButton:"Rooms_privateRoomButton__3CXY7",roomList:"Rooms_roomList___5aVm"}},29:function(e,t,a){e.exports={cardWrapper:"StepPhoneEmail_cardWrapper__2mkb3",buttonWrap:"StepPhoneEmail_buttonWrap__1wAoE",tabButton:"StepPhoneEmail_tabButton__3xUXz",active:"StepPhoneEmail_active__3w9L2",actionButtonWrap:"StepPhoneEmail_actionButtonWrap__2d7wG",bottomParagraph:"StepPhoneEmail_bottomParagraph__H8uno"}},30:function(e,t,a){e.exports={card:"RoomCard_card__3PAaD",speakers:"RoomCard_speakers__3uW-m",avatars:"RoomCard_avatars__2ZuE0",names:"RoomCard_names__2JHTR",peopleCount:"RoomCard_peopleCount__1bHsb",singleSpeaker:"RoomCard_singleSpeaker__3IxI9"}},31:function(e,t,a){e.exports={heading:"PrivateModal_heading__2dlUm",modalMask:"PrivateModal_modalMask__3V10J",modalBody:"PrivateModal_modalBody__1lgyJ",closeButton:"PrivateModal_closeButton__3lKqy",modalHeader:"PrivateModal_modalHeader__lrHia",modalFooter:"PrivateModal_modalFooter__1p2_r",footerButton:"PrivateModal_footerButton__vl8v-"}},37:function(e,t,a){e.exports={navbar:"Navigation_navbar__3RCiN",logoutButton:"Navigation_logoutButton__1TwBN",navRight:"Navigation_navRight__2NAOt",avatar:"Navigation_avatar__2B8ex",userName:"Navigation_userName__2UFse"}},38:function(e,t,a){e.exports={subHeading:"StepAvatar_subHeading__A6QZb",avatarWrapper:"StepAvatar_avatarWrapper__20YYN",avatarImage:"StepAvatar_avatarImage__2f9oE",avatarInput:"StepAvatar_avatarInput__2acde",avatarLabel:"StepAvatar_avatarLabel__XAJEk"}},48:function(e,t,a){e.exports={card:"Card_card__1bSTk",headingWrapper:"Card_headingWrapper__KmI7n",heading:"Card_heading__1fG_7"}},49:function(e,t,a){e.exports={cardWrapper:"StepOtp_cardWrapper__1gahO",actionButtonWrap:"StepOtp_actionButtonWrap__1cj-K",bottomParagraph:"StepOtp_bottomParagraph__Hk09T"}},50:function(e,t,a){e.exports={message:"Loader_message__3hIfO",cardWrapper:"Loader_cardWrapper__3kBQv",spinner:"Loader_spinner__1sGEu",spin:"Loader_spin__2Hiox"}},53:function(e,t,a){e.exports={text:"Home_text__1nzW9",cardWrapper:"Home_cardWrapper__2QMfI",signinWrapper:"Home_signinWrapper__3Zjzl"}},54:function(e,t,a){e.exports={buttons:"Button_buttons__1qWiV",arrow:"Button_arrow__20jyI"}},67:function(e,t,a){e.exports={input:"TextInput_input__3yo_5"}},68:function(e,t,a){e.exports={paragraph:"StepName_paragraph__3qdWs"}},79:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.4e43b605.chunk.js.map