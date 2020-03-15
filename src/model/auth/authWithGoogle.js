// import firebase, {auth, provider} from './firebase.js'
// //Add Contstructor to AppRouter component
// class LoginWithGoogle extends Component {
//         render(){
// constructor(props){
//     super(props);
//     this.state = {user: null}
// }
// //Add componentDidMount lifecycle
// componentDidMount(){
//     auth.onAuthStateChanged(user => {
//     if(user){
//         this.setState({user});
//     }
// });
// }}


// import React, { Component } from "react";
// import withFirebaseAuth from 'react-with-firebase-auth';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import fire from '../firebase';
// import GoogleLogo from '../../images/googleLogo.svg'

 

// class LoginWithGoogle extends Component {
//     render(){
//         const {
//              user, signOut, 
//             signInWithGoogle} = this.props;
//         return (
//             <div  >
//                 {
                    
//                     user ? 
                    
//                     // this.props.history.push('/notes')
//                     <p> Hello, {user.displayName}  </p>
                    
//                     :
//                      <p> Please, sign in</p>
//                 }
//                 {
//                     user ? <button onClick={signOut}>Sign out</button>
//                         :  <a onClick= {signInWithGoogle}
//                             >  <img src={GoogleLogo} alt="Google Logo"/></a>
//                 }
//             </div>
//         );
//     }
// }



// // const firebaseAppAuth= firebaseApp.auth();
// const providers={
//     googleProvider : new firebase.auth.GoogleAuthProvider(),
// };
// export default withFirebaseAuth({
//     // providers,
//     // firebaseAppAuth,

// })(LoginWithGoogle);