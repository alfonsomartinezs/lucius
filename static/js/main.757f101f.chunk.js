(this["webpackJsonplucius-front-end"]=this["webpackJsonplucius-front-end"]||[]).push([[0],{45:function(e,t,c){},59:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyApd0f1zTDDRcp1J_oNstBHngtfLYEH2ow","authDomain":"lucius-bot.firebaseapp.com","databaseURL":"https://lucius-bot-default-rtdb.firebaseio.com","projectId":"lucius-bot","storageBucket":"lucius-bot.appspot.com","messagingSenderId":"494555490972","appId":"1:494555490972:web:3f279e9f239d7227f6db59","measurementId":"G-SQLY5J3RZ6"}')},66:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(26),a=c.n(r),i=c(15),l=c.n(i),j=c(19),d=c(11),o=c(75),b=c(73),u=c(71),h=c(68),x=c(46),O=(c(57),c(59)),m=x.a.initializeApp(O),f=m.auth(),p=c(1),w=n.a.createContext(),g=function(){return Object(s.useContext)(w)},v=function(e){var t=e.children,c=Object(s.useState)(),n=Object(d.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)(!0),l=Object(d.a)(i,2),j=l[0],o=l[1];Object(s.useEffect)((function(){return f.onAuthStateChanged((function(e){a(e),o(!1)}))}),[]);var b={currentUser:r,signup:function(e,t){return f.createUserWithEmailAndPassword(e,t)},login:function(e,t){return f.signInWithEmailAndPassword(e,t)},logout:function(){return f.signOut()},resetPassword:function(e){return f.sendPasswordResetEmail(e)}};return Object(p.jsx)(w.Provider,{value:b,children:!j&&t})},y=c(7),k=c(9),N=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!1),a=Object(d.a)(r,2),i=a[0],x=a[1],O=Object(s.useRef)(),m=Object(s.useRef)(),f=Object(s.useRef)(),w=g().signup,v=Object(y.g)(),N=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m.current.value===f.current.value){e.next=3;break}return e.abrupt("return",n("Passwords do not match"));case 3:return e.prev=3,n(""),x(!0),e.next=8,w(O.current.value,m.current.value);case 8:v.push("/dashboard"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n("Sign up failed.");case 14:x(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{className:"bg-secondary text-white",children:Object(p.jsxs)(o.a.Body,{children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),c&&Object(p.jsx)(b.a,{variant:"danger",children:c}),Object(p.jsxs)(u.a,{onSubmit:N,children:[Object(p.jsxs)(u.a.Group,{id:"email",children:[Object(p.jsx)(u.a.Label,{children:"Email"}),Object(p.jsx)(u.a.Control,{type:"email",ref:O,required:!0})]}),Object(p.jsxs)(u.a.Group,{id:"password",children:[Object(p.jsx)(u.a.Label,{children:"Password"}),Object(p.jsx)(u.a.Control,{type:"password",ref:m,required:!0})]}),Object(p.jsxs)(u.a.Group,{id:"password-confirm",children:[Object(p.jsx)(u.a.Label,{children:"Confirm Password"}),Object(p.jsx)(u.a.Control,{type:"password",ref:f,required:!0})]}),Object(p.jsx)(h.a,{disabled:i,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(p.jsxs)("div",{className:"w-100 text-center mt-2 text-white",children:["Need an account? ",Object(p.jsx)(k.b,{to:"/login",children:"Log In"})]})]})},C=c(69),S=c(70),L=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(C.a,{className:"bg-dark text-white d-flex text-center align-items-center",style:{height:"90vh"},children:Object(p.jsxs)(S.a,{className:"text-container",children:[Object(p.jsx)("h1",{children:"Challenge Your Destiny."}),Object(p.jsx)("p",{children:"Add the Lucius bot to Discord to easily keep track of fate decks, control hands, and character details"}),Object(p.jsx)("a",{className:"btn btn-primary btn-hero",href:"https://discord.com/oauth2/authorize?client_id=800485041159012372&scope=bot&permissions=658496",target:"_blank",rel:"noreferrer",children:"Add Lucius to Discord"})]})})})},I=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!1),a=Object(d.a)(r,2),i=a[0],x=a[1],O=Object(s.useRef)(),m=Object(s.useRef)(),f=g().login,w=Object(y.g)(),v=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n(""),x(!0),e.next=6,f(O.current.value,m.current.value);case 6:w.push("/dashboard"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n("Sign in failed."),console.log(e.t0);case 13:x(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{className:"bg-secondary text-white",children:Object(p.jsxs)(o.a.Body,{children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),c&&Object(p.jsx)(b.a,{variant:"danger",children:c}),Object(p.jsxs)(u.a,{onSubmit:v,children:[Object(p.jsxs)(u.a.Group,{id:"email",children:[Object(p.jsx)(u.a.Label,{children:"Email"}),Object(p.jsx)(u.a.Control,{type:"email",ref:O,required:!0})]}),Object(p.jsxs)(u.a.Group,{id:"password",children:[Object(p.jsx)(u.a.Label,{children:"Password"}),Object(p.jsx)(u.a.Control,{type:"password",ref:m,required:!0})]}),Object(p.jsx)(h.a,{disabled:i,className:"w-100",type:"submit",children:"Log In"})]}),Object(p.jsx)("div",{className:"w-100 text-center mt-3",children:Object(p.jsx)(k.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(p.jsxs)("div",{className:"w-100 text-center mt-2 text-white",children:["Need an account? ",Object(p.jsx)(k.b,{to:"/signup",children:"Sign Up"})]})]})},D=function(){var e=g().currentUser;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.a,{children:Object(p.jsxs)(o.a.Body,{children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Characters"}),Object(p.jsxs)("p",{children:["for ",e&&e.email]})]})})})},P=c(37),R=c(51),U=function(e){var t=e.component,c=Object(R.a)(e,["component"]),s=g().currentUser;return Object(p.jsx)(y.b,Object(P.a)(Object(P.a)({},c),{},{render:function(e){return s?Object(p.jsx)(t,Object(P.a)({},e)):Object(p.jsx)(y.a,{to:"/login"})}}))},F=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!1),a=Object(d.a)(r,2),i=a[0],x=a[1],O=Object(s.useState)(""),m=Object(d.a)(O,2),f=m[0],w=m[1],v=Object(s.useRef)(),y=g().resetPassword,N=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,w(""),n(""),x(!0),e.next=7,y(v.current.value);case 7:w("Please Check your email for further instructions."),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),n("Reset failed."),console.log(e.t0);case 14:x(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a,{className:"bg-secondary text-white",children:Object(p.jsxs)(o.a.Body,{children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),c&&Object(p.jsx)(b.a,{variant:"danger",children:c}),f&&Object(p.jsx)(b.a,{variant:"success",children:f}),Object(p.jsxs)(u.a,{onSubmit:N,children:[Object(p.jsxs)(u.a.Group,{id:"email",children:[Object(p.jsx)(u.a.Label,{children:"Email"}),Object(p.jsx)(u.a.Control,{type:"email",ref:v,required:!0})]}),Object(p.jsx)(h.a,{disabled:i,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(p.jsx)("div",{className:"w-100 text-center mt-3",children:Object(p.jsx)(k.b,{to:"/login",children:"Log In"})})]})}),Object(p.jsxs)("div",{className:"w-100 text-center mt-2 text-white",children:["Need an account? ",Object(p.jsx)(k.b,{to:"/signup",children:"Sign Up"})]})]})},A=function(e){var t=e.children;return Object(p.jsx)(S.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(p.jsx)("div",{className:"w-100",style:{maxWidth:"450px"},children:t})})},E=c(72),H=c(74),B=function(){var e=g().currentUser,t=Object(s.useState)(""),c=Object(d.a)(t,2),n=c[0],r=c[1],a=g().logout,i=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,a();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),r("Log out failed: ".concat(n)),console.log(n);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(E.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top",children:[Object(p.jsx)(k.b,{className:"navbar-brand",to:"/",children:"Lucius"}),Object(p.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(E.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(H.a,{className:"mr-auto",children:[Object(p.jsx)(k.b,{className:"nav-link",to:"/using-lucius",children:"Using Lucius"}),Object(p.jsx)(k.b,{className:"nav-link",to:"/character-sheet",children:"Character Sheet"})]}),Object(p.jsx)(H.a,{children:e?Object(p.jsx)(h.a,{onClick:i,children:"Log Out"}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(k.b,{className:"btn btn-primary",to:"/login",children:"Log in"})})})]})]})},G=(c(45),c(76)),q=function(){return Object(p.jsxs)(S.a,{children:[Object(p.jsx)("h1",{children:"Using the Lucius Bot"}),Object(p.jsx)("p",{children:"A fate deck is automatically created for your use when you add Lucius to your Discord guild. Each user can add and control their respective control hands. You can use the commands shown below to control the deck and control hands."}),Object(p.jsx)("h3",{className:"mt-5",children:"Commands"}),Object(p.jsxs)(G.a,{className:"w-75",children:[Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Flip"}),Object(p.jsx)("small",{children:"Fate Deck"})]}),Object(p.jsx)("p",{children:"Flips a number of cards from the fate deck. Omitting a number will flip one (1) card by default."}),Object(p.jsx)("small",{children:Object(p.jsx)("code",{children:"!flip [number]"})})]}),Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Unflip"}),Object(p.jsx)("small",{children:"Fate Deck"})]}),Object(p.jsx)("p",{children:"Places a number of cards from the discard pile back unto the deck. Useful for when we flip a card too many but don't want to waste a Joker. Omitting a number will unflip one (1) card by default."}),Object(p.jsx)("small",{children:Object(p.jsx)("code",{children:"!unflip [number]"})})]}),Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Shuffle"}),Object(p.jsx)("small",{children:"Control Hand | Fate Deck"})]}),Object(p.jsx)("p",{children:"This command shuffles either the fate deck or your control hand."}),Object(p.jsxs)("small",{children:["control hand: ",Object(p.jsx)("code",{children:"!shuffle"}),"     |    fate deck: ",Object(p.jsx)("code",{children:"!shuffle_fate"})]})]}),Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Create"}),Object(p.jsx)("small",{children:"Control Hand"})]}),Object(p.jsxs)("p",{children:["Creates a twist deck from the four suits given. Abbreviations are ok, so ",Object(p.jsx)("code",{children:"!create t c r m"})," will work just as well as ",Object(p.jsx)("code",{children:"!create Tomes Crows Rams Masks"}),". The suits should be ordered in descending order."]}),Object(p.jsx)("small",{children:Object(p.jsx)("code",{children:"!create [defining suit] [ascendant suit] [center suit] [descendant suit]"})})]}),Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Cheat"}),Object(p.jsx)("small",{children:"Control Hand"})]}),Object(p.jsx)("p",{children:"Cheats in a card with the given value from your control hand."}),Object(p.jsx)("small",{children:Object(p.jsx)("code",{children:"!cheat [value]"})})]}),Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Draw"}),Object(p.jsx)("small",{children:"Control Hand"})]}),Object(p.jsx)("p",{children:"Draws a number of cards from your twist deck to your control hand. Omitting a numberwill draw one (1) card by default."}),Object(p.jsx)("small",{children:Object(p.jsx)("code",{children:"!draw [number]"})})]}),Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Undraw"}),Object(p.jsx)("small",{children:"Control Hand"})]}),Object(p.jsx)("p",{children:"Places a a number of cards back unto the twist deck from your control hand. For when you draw too many cards."}),Object(p.jsx)("small",{children:Object(p.jsx)("code",{children:"!undraw [number]"})})]}),Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Discard"}),Object(p.jsx)("small",{children:"Control Hand"})]}),Object(p.jsx)("p",{children:"Discards a card with the given value from your control hand."}),Object(p.jsx)("small",{children:Object(p.jsx)("code",{children:"!discard [value]"})})]}),Object(p.jsxs)(G.a.Item,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h5",{children:"Resurrect"}),Object(p.jsx)("small",{children:"Control Hand"})]}),Object(p.jsx)("p",{children:"places a number of cards from your graveyard back into your hand. For when you cheat a little too early."}),Object(p.jsx)("small",{children:Object(p.jsx)("code",{children:"!res [number]"})})]})]})]})},J=function(){return Object(p.jsx)(k.a,{children:Object(p.jsxs)(v,{children:[Object(p.jsx)(B,{}),Object(p.jsxs)(y.d,{children:[Object(p.jsx)(y.b,{exact:!0,path:"/",children:Object(p.jsx)(L,{})}),Object(p.jsx)(y.b,{path:"/signup",children:Object(p.jsx)(A,{children:Object(p.jsx)(N,{})})}),Object(p.jsx)(y.b,{path:"/login",children:Object(p.jsx)(A,{children:Object(p.jsx)(I,{})})}),Object(p.jsx)(y.b,{path:"/forgot-password",children:Object(p.jsx)(A,{children:Object(p.jsx)(F,{})})}),Object(p.jsx)(y.b,{path:"/using-lucius",children:Object(p.jsx)(q,{})}),Object(p.jsx)(U,{exact:!0,path:"/dashboard",component:D})]})]})})};a.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.757f101f.chunk.js.map