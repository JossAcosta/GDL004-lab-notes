// import React, { Component } from "react";
// import withFirebaseLogOut from 'react-with-firebase-auth';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// // import firebase from '../../firebase';


 

 
// class LogOut extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           users: []
//         }
//       }
//     render(){
        
//         const {
//              user, signOut, 
//             } = this.props;
//         return (
//             <div  onSubmit={this.props.onSubmit}>
//                 {
//                     user ? 
                   
//                     <p> Hello, {user.displayName}  </p>
                   
//                     :
//                      <p> Please, sign in</p>
//                 }
//                 {
//                     user ? <button onClick={signOut}>Sign out</button>
//                         : 
//                         <p> Please, sign in</p>
//                 }
//             </div>
//         );
//     }
// }

// // const firebaseAppAuth= firebaseApp.auth();

// // export default withFirebaseLogOut({
    
// //     firebaseAppAuth,

// // })(LogOut);

// export default LogOut;