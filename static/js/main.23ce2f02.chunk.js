(this.webpackJsonplabnotes=this.webpackJsonplabnotes||[]).push([[0],{23:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABdUlEQVR4nO3dvVHDQAAF4SeGGaqgCgJCtwY1uCIKoAFScBGQiMABfzL4pLtbLO+XS+N5O2dbJiCRJEmSJEnSuRhKLxgfrsYWL2Qths1r0aYXrV6IjmMAmAFgBoAZAGYAmAFgBoAZAGYAmAFgBoAZAGYAmAFgl7Vv+PxY+47/y/VN3ft5AmAGgBkAVv0zoPZ75Np5AmAGgBkAZgCYAWA+CRfySXhlDAAzAMwnYZgnAGYAmAFgBoAZALa6J+FT+xbmCYAZAGYAmE/CME8AzAAwA8AMADMAzAAwA8AMADMAzAAwA8Cq/xZ0cm6fll2/2yYv29mXewKWWDh+YoD5Jscf70pvY4A5Dow/bN7uS29lgFIVx08MUKby+IkBjtdg/MQAx2k0fmKAvzUcPzHA7xqPnxjgsA7jJwaY1mn8xAA/dRw/McBXncdPDPABGD8xwB40fuLfA/bD75jxE/+Jz4R+4ye+BX3Td/zEAJ/0H1+SJEmSJEnn5R31N3meDeXOCQAAAABJRU5ErkJggg=="},25:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/googleLogo.0a7ca061.svg"},34:function(e,t,a){e.exports=a(64)},50:function(e,t,a){},51:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(21),l=a.n(o),i=(a(29),a(3)),c=a(4),r=a(6),m=a(5),u=a(7),d=a(11),p=a(14),h=a(17),g=a.n(h),b=g.a.initializeApp({apiKey:"AIzaSyBLE-dgZImtGnS-DPAS582Z2vLptsFl8Us",authDomain:"labnotes-4c088.firebaseapp.com",databaseURL:"https://labnotes-4c088.firebaseio.com",projectId:"labnotes-4c088",storageBucket:"labnotes-4c088.appspot.com",messagingSenderId:"1055902215333",appId:"1:1055902215333:web:93652f91371798b2d2b14c",measurementId:"G-6G9ZJ2NS36"}),E=new g.a.auth.GoogleAuthProvider;g.a.auth(),g.a.database();g.a.firestore().settings({});var f=b,v=a(22),N=a(13),A=a(23),y=a.n(A),C=(a(50),a(30)),O=a.n(C),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).doCreateUser=function(e,t,a){var n=f.ref("users/".concat(e)).set({uid:e,username:t,email:a});console.log(n)},a.actionHandleLogin=function(e){var t=document.getElementById("main");t.classList.remove("singUpActive"),t.classList.add("loginActive")},a.actionHandleSing=function(e){var t=document.getElementById("main");t.classList.add("singUpActive"),t.classList.remove("loginActive")},a.login=a.login.bind(Object(N.a)(a)),a.handleChange=a.handleChange.bind(Object(N.a)(a)),a.signup=a.signup.bind(Object(N.a)(a)),a.signInWithGoogle=a.signInWithGoogle.bind(Object(N.a)(a)),a.state={username:"",name:"",email:"",password:"",message:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"signInWithGoogle",value:function(e){var t=this;e.preventDefault(),f.auth().signInWithPopup(E).then((function(e){t.props.history.push("/notes")})).catch((function(e){t.setState({message:e.message})}))}},{key:"login",value:function(e){var t=this;e.preventDefault(),this.state.email.length<4?this.setState({message:"Please enter an email address."}):this.state.password.length<4?this.setState({message:"Please enter a password."}):f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(){t.props.history.push("/notes")})).catch((function(e){"auth/wrong-password"===e.code?t.setState({message:"Wrong password."}):t.setState({message:"User has not been register"})}))}},{key:"signup",value:function(e){var t=this;e.preventDefault(),this.state.email.length<4?this.setState({message:"Please enter an email address."}):this.state.password.length<4?this.setState({message:"Please enter a password."}):f.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){t.props.history.push("/notes")})).catch((function(e){var a=e.code,n=e.message;"auth/weak-password"===a?t.setState({message:"The password is too weak."}):t.setState({message:n})}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"container-fluid head"},s.a.createElement("img",{src:y.a,alt:"Logo"}),s.a.createElement("span",{className:"font-weigth-ligth title_LAB"},"L A B      "),s.a.createElement("span",{className:"font-weigth-bold title_notes"},"   N O T E S !")),s.a.createElement("div",null,s.a.createElement("div",{className:"wrap_bg"},s.a.createElement("div",{id:"main",className:"login_wrap singUpActive"},s.a.createElement("div",{className:"login_question_wrap"},s.a.createElement("div",{className:"question_singUp "},s.a.createElement("h2",{className:"title"},"Don't have an account?"),s.a.createElement("p",null,"Lorem ipsum dolor sit ames lorem ipsum dolor sit ames lorem ipsum dolor sit ames lorem ipsum dolor sit ames"),s.a.createElement("button",{onClick:this.actionHandleSing,id:"signUpBtn",className:"btn btn_rounded"},"Sing up")),s.a.createElement("div",{className:"question_login "},s.a.createElement("h2",{className:"title"},"Have an account?"),s.a.createElement("p",null,"Lorem ipsum dolor sit ames lorem ipsum dolor sit ames lorem ipsum dolor sit ames lorem ipsum dolor sit ames"),s.a.createElement("button",{onClick:this.actionHandleLogin,id:"loginBtn",className:"btn btn_rounded"},"Log In")),s.a.createElement("div",{className:"action_singUp"},s.a.createElement("form",{action:"#"},s.a.createElement("div",null,s.a.createElement("legend",{className:"title"},"Sing Up"),s.a.createElement("div",{className:"input_block"},s.a.createElement("div",{className:"input_wrap"},s.a.createElement("input",{type:"text",id:"sing_name",className:"input",placeholder:"Full Name",name:"name",onChange:this.handleChange,vaue:this.state.name}),s.a.createElement("label",{htmlFor:"sing_name",className:"label_name"})),s.a.createElement("div",{className:"input_wrap"},s.a.createElement("input",{type:"text",id:"sing_email",className:"input",placeholder:"Email",name:"email",onChange:this.handleChange,value:this.state.email}),s.a.createElement("label",{htmlFor:"sing_email",className:"label_mail"})),s.a.createElement("div",{className:"input_wrap"},s.a.createElement("input",{type:"password",id:"sing_pass",className:"input",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password}),s.a.createElement("label",{htmlFor:"sing_pass",className:"label_pass"}),s.a.createElement("p",{className:"text-danger"},this.state.message))),s.a.createElement("button",{type:"submit",defaultValue:"Sing Up",className:"btn btn_red",onClick:this.signup},"SIGN UP")))),s.a.createElement("div",{className:"action_login"},s.a.createElement("form",{action:"#"},s.a.createElement("div",null,s.a.createElement("legend",{className:"title"},"Log in"),s.a.createElement("div",{className:"input_block"},s.a.createElement("div",{className:"input_wrap"},s.a.createElement("input",{type:"text",id:"mail",className:"input",placeholder:"Email",name:"email",onChange:this.handleChange,value:this.state.email}),s.a.createElement("label",{htmlFor:"sing_pass",className:"label_mail"})),s.a.createElement("div",{className:"input_wrap"},s.a.createElement("input",{type:"password",id:"pass",className:"input",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password}),s.a.createElement("label",{htmlFor:"sing_pass",className:"label_pass"}),s.a.createElement("p",{className:"text-danger"},this.state.message))),s.a.createElement("div",{className:"login_btns"},s.a.createElement("a",{href:"/",onClick:this.signInWithGoogle}," ",s.a.createElement("img",{src:O.a,alt:"Google Logo"})),s.a.createElement("button",{type:"submit",onClick:this.login,defaultValue:"Login",className:"btn btn_red"}," LOG IN")))))),s.a.createElement("div",{className:"login_action_wrap "})))))}}]),t}(s.a.Component),w=(a(51),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).logout=function(e){f.auth().signOut().then(a.props.history.push("/"))},a.state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"navbar"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(d.b,{to:"/notes"},s.a.createElement("div",{className:"navbar_logo-title"},s.a.createElement("img",{src:y.a,alt:"Logo"}),s.a.createElement("span",{className:"font-weigth-ligth title_LAB"},"L A B      "),s.a.createElement("span",{className:"font-weigth-bold title_notes"},"   N O T E S !"))),s.a.createElement("button",{onClick:this.logout,className:"btn-logOut"},"Log Out ",s.a.createElement("span",{className:"fas fa-sign-out-alt"}))))}}]),t}(s.a.Component)),j=Object(p.g)(w),k=(a(25),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).onCollectionUpdateFilter=function(e){var t=a.props.currentUser,n=[];a.ref.where("author","==",t.email).get().then(function(e){e.forEach((function(e){var t=e.data(),a=t.title,s=t.description,o=t.author,l=t.important;n.push({key:e.id,doc:e,title:a,description:s,author:o,important:l})})),this.setState({note:n})}.bind(Object(N.a)(a))).catch((function(e){console.log("Error getting documents: ",e)}))},a.important=function(e,t){var a=f.firestore().collection("notes").doc(e);!1===t?a.update({important:!0}):a.update({important:!1})},a.ref=f.firestore().collection("notes"),a.unsubscribe=null,a.state={note:[],user:{},currentUser:"",noteKey:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdateFilter)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this,t=this.props.currentUser;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"list_note"},t?s.a.createElement("p",{className:"singleNote_title"},"User Email: ",t.email):s.a.createElement("p",null,"Loading . . ."),this.state.note.map((function(t,a){return s.a.createElement("ul",{key:a,id:t.important?"active":null,className:"single_note "},s.a.createElement("button",{onClick:function(){return e.important(t.key,t.important)},className:"star-button",style:{outline:"none"}},s.a.createElement("span",null,s.a.createElement("i",{className:"fas fa-star"}))),s.a.createElement(d.b,{to:{pathname:"/".concat(t.key),state:{noteKey:t.key}},style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.7)"}},s.a.createElement("li",{className:"container_list"},s.a.createElement("div",{className:"singleNote_title"},s.a.createElement("p",null," ",t.title," ")),s.a.createElement("p",{className:"singleNote_body"},t.description))))}))))}}]),t}(n.Component)),S=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.currentUser;return s.a.createElement("div",{className:"body_dashboard"},s.a.createElement(j,null),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:" row note_buttons"},s.a.createElement(d.b,{to:"/new",className:"btn "},"New Note")),s.a.createElement(k,{currentUser:e})))}}]),t}(n.Component),U=(a(59),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,s=a.description,o=a.author,l=a.important;e.ref.add({title:n,description:s,author:e.state.currentUser,important:l}).then((function(t){e.setState({title:"",description:"",author:o,important:l}),e.props.history.push("/notes")})).catch((function(e){console.error("Error adding document: ",e)}))},e.ref=f.firestore().collection("notes"),e.state={title:"",description:"",author:"",important:!1,user:{},currentUser:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.auth().onAuthStateChanged((function(t){if(t){e.setState({user:t});var a=e.state.user.email;e.setState({currentUser:a})}else e.setState({user:null})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(j,null),s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form"},s.a.createElement("input",{onChange:this.onChange,className:"untitle_note box",type:"text",name:"title",placeholder:"Untitled . . ."})),s.a.createElement("div",{className:"form"},s.a.createElement("textarea",{onChange:this.onChange,className:"body_note box",type:"text",name:"description",placeholder:"Write your note . . ."})),s.a.createElement("div",{className:"btn_save"},s.a.createElement("button",{onClick:this.handleClick,className:"btn "},"Save"),this.props.error&&s.a.createElement("p",{className:"text-danger"},this.error.message)))))}}]),t}(n.Component));a(60),a(61);var x=function(e){return e.isOpen?l.a.createPortal(s.a.createElement("div",{className:"Modal"},s.a.createElement("div",{className:"Modal__container"},s.a.createElement("button",{onClick:e.onClose,className:"Modal__close-button"},"X"),e.children)),document.getElementById("modal")):null};a(62);var L=function(e){var t=Object(p.f)();return s.a.createElement(x,{isOpen:e.isOpen,onClose:e.onClose},s.a.createElement("div",{className:"deleteNoteModal"},s.a.createElement("h1",null,"Are you sure?"),s.a.createElement("p",null,"You are about to delete this note")),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){var e=window.location.href.split("/")[4];f.firestore().collection("notes").doc(e).delete().then((function(){t.push("/notes")})).catch((function(e){console.error("Error delete document: ",e)}))},className:"btn_delete  mr-4"},"DELETE"),s.a.createElement("button",{onClick:e.onClose,className:"btn_cancel "},"CANCEL")))},D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleOpenModal=function(e){a.setState({modalIsOpen:!0})},a.handleCloseModal=function(e){a.setState({modalIsOpen:!1})},a.onCollectionUpdate=function(e){var t,n=a.props.location.state.noteKey;e.forEach((function(e){var a=e.data(),s=a.title,o=a.description,l=a.author,i=a.important;e.id===n&&(t={key:e.id,doc:e,title:s,description:o,author:l,important:i})})),a.setState({note:t})},a.ref=f.firestore().collection("notes"),a.unsubscribe=null,a.state={modalIsOpen:!1,note:null,user:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate),console.log(this.props.location.state)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(j,null),this.state.note&&s.a.createElement("div",{className:"form"},s.a.createElement("div",{className:"title_note box"},"".concat(this.state.note.title)," "),s.a.createElement("div",{className:"body_note box"},"".concat(this.state.note.description)),s.a.createElement("div",{className:"btns_actions"},s.a.createElement(d.b,{to:{pathname:"/edit",state:{noteKey:this.state.note.key}}},s.a.createElement("button",{className:" btn_edit"},"Edit")),s.a.createElement("button",{onClick:this.handleOpenModal,className:" btn_delete"},"Delete"),s.a.createElement(L,{isOpen:this.state.modalIsOpen,onClose:this.handleCloseModal}))))}}]),t}(n.Component),B=a(33),I=(a(63),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).onCollectionUpdate=function(e){var t,n=a.props.location.state.noteKey;console.log(window.location.href.split("/")),e.forEach((function(e){var a=e.data(),s=a.title,o=a.description,l=a.author,i=a.important;e.id===n&&(t={key:e.id,doc:e,title:s,description:o,author:l,important:i})})),a.setState({note:t})},a.onChange=function(e){var t=Object(B.a)({},a.state.note);t[e.target.name]=e.target.value,a.setState({note:t})},a.handleClick=function(e){e.preventDefault();var t=a.state.note,n=t.title,s=t.description,o=t.author,l=t.important,i=a.props.location.state.noteKey;f.firestore().collection("notes").doc(i).update({title:n,description:s,author:o,important:l}).then((function(){console.log("Document successfully updated!"),a.props.history.push("/notes")})).catch((function(e){console.error("Error updating document: ",e)}))},a.ref=f.firestore().collection("notes"),a.unsubscribe=null,a.state={noteKey:"",modalIsOpen:!1,note:{title:"",description:"",author:"",important:!1}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate),console.log("received "+this.props.location.state.noteKey)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(j,null),this.state.note&&s.a.createElement("form",{className:"form"},s.a.createElement("div",{className:" "},s.a.createElement("input",{onChange:this.onChange,className:"title_note box",type:"text",name:"title",value:this.state.note.title})),s.a.createElement("div",{className:""},s.a.createElement("textarea",{onChange:this.onChange,className:"body_note box",type:"text",name:"description",value:this.state.note.description})),s.a.createElement("div",{className:"btn_save"},s.a.createElement("button",{onClick:this.handleClick,className:"btn "},"Save"),this.props.error&&s.a.createElement("p",{className:"text-danger"},this.error.message))))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={user:""},console.log("1.Constructor"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("3.ComponentDimoount"),setTimeout((function(){e.setState({user:"Bienvenido"})}),4e3)}},{key:"componentDidUpdate",value:function(){console.log("5.ComponentDidUpdate"),console.log({props:this.props,state:this.state})}},{key:"componentWillUnmount",value:function(){console.log("6.componentWillUnmount")}},{key:"render",value:function(){return console.log("2/4.render"),s.a.createElement("div",{className:"body_dashboard"},s.a.createElement(j,null),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("p",null,"NOT FOUND ! ! !"))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={user:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(e){var t=this;f.auth().onAuthStateChanged((function(e){e?t.setState({user:e}):t.setState({user:null})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(d.a,{basename:"/"},s.a.createElement(p.c,null,this.state.user?s.a.createElement(p.a,{path:"/notes",render:function(t){return s.a.createElement(S,Object.assign({},t,{currentUser:e.state.user}))}}):s.a.createElement(p.a,{path:"/",component:_}),s.a.createElement(p.a,{exact:!0,path:"/new",component:U}),s.a.createElement(p.a,{exact:!0,path:"/edit",component:I}),s.a.createElement(p.a,{exact:!0,path:"/:noteKey",component:D}),s.a.createElement(p.a,{component:M}))))}}]),t}(n.Component),P=document.getElementById("app");l.a.render(s.a.createElement(G,null),P)}},[[34,1,2]]]);
//# sourceMappingURL=main.23ce2f02.chunk.js.map