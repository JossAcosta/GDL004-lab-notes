// import React, { Component } from "react";
// import withFirebaseAuth from 'react-with-firebase-auth';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../../firebase';
// import GoogleLogo from '../../images/googleLogo.svg'

 

// const firebaseApp = firebase.initializeApp(firebaseConfig);

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



// const firebaseAppAuth= firebaseApp.auth();
// const providers={
//     googleProvider : new firebase.auth.GoogleAuthProvider(),
// };
// export default withFirebaseAuth({
//     providers,
//     firebaseAppAuth,

// })(LoginWithGoogle);