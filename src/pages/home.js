import React from 'react';
import logo from '../images/logo.png';
// import LoginWithGoogle from '../model/auth/authWithGoogle';

import './styles/home.css';
import 'bootstrap/dist/css/bootstrap.css';
import fire from '../firebase';
// import { app } from 'firebase';
import GoogleLogo from '../images/googleLogo.svg';
import {provider} from '../firebase';
class Home extends React.Component{
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.signInWithGoogle =this.signInWithGoogle.bind(this);
    this.state={
      name:"",
      email:"",
      password:"",   
      message:""
     
    }
}

signInWithGoogle (e){
e.preventDefault()

let googleSignInAttempt = fire.auth().signInWithPopup(provider);
googleSignInAttempt
    .then(result => {
      this.props.history.push("/notes")
    })
    .catch(error => {
      this.setState({message: error.message});
    });
}

login(e){
 e.preventDefault()

        if (this.state.email.length < 4) {
          this.setState({message: 'Please enter an email address.'});
        
          return;
        }
        if (this.state.password.length < 4) {
          this.setState({message: 'Please enter a password.'});
         
          return;
        }
 fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
 .then((u)=>{
   this.props.history.push("/notes")
   console.log(u)
 }).catch((error)=> {
  let errorCode = error.code;
  // let errorMessage = error.message;
  // [START_EXCLUDE]
  if (errorCode === 'auth/wrong-password') {
    this.setState({message:'Wrong password.'});
    
  } else {
    this.setState({message:'User has not been register'});
    
  }
  
 })

}
signup(e){
  e.preventDefault();
  if (this.state.email.length < 4) {
    this.setState({message:'Please enter an email address.'});
   
    return;
  }
  if (this.state.password.length < 4) {
    this.setState({message:'Please enter a password.'});
   
   
    return;
  }
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
   
    this.props.history.push("/notes")
    console.log(u)
  }).catch((error)=> {
    console.log(error);
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode === 'auth/weak-password') {
      this.setState({message:'The password is too weak.'});
      
    } else {
     
      this.setState({message: errorMessage});
     
    }
 });
}
    actionHandleLogin = e => {
        const wrap = document.getElementById('main');
        wrap.classList.remove("singUpActive");
        wrap.classList.add("loginActive");
    
    }
    actionHandleSing = e => {
        const wrap = document.getElementById('main');
        wrap.classList.add("singUpActive");
        wrap.classList.remove("loginActive");
    
    }
 handleChange(e){
   this.setState({
     [e.target.name] : e.target.value
   })
 }

    render(){
        return (
            <div className="home">
                 <div className="container-fluid head">
            
                <img src={logo} alt="Logo"/>
                <span className="font-weigth-ligth title_LAB">L A B      </span>
                
                <span className="font-weigth-bold title_notes">   N O T E S !</span>
            
            </div>
              
                <div>
           <div className="wrap_bg">
          <div id="main" className="login_wrap singUpActive">
            <div className="login_question_wrap">
              <div className="question_singUp ">
                <h2 className="title">Don't have an account?</h2>
                <p>Lorem ipsum dolor sit ames
                  lorem ipsum dolor sit ames
                  lorem ipsum dolor sit ames
                  lorem ipsum dolor sit ames
                </p>
                {/* <a href="/" id="signUpBtn" className="btn btn_rounded">Sing up</a> */}
                <button onClick={this.actionHandleSing }  id="signUpBtn" className="btn btn_rounded">Sing up</button>
              </div>
              <div className="question_login ">
                <h2 className="title">Have an account?</h2>
                <p>Lorem ipsum dolor sit ames
                  lorem ipsum dolor sit ames
                  lorem ipsum dolor sit ames
                  lorem ipsum dolor sit ames
                </p>
                <button onClick={this.actionHandleLogin } id="loginBtn" className="btn btn_rounded">Log In</button>
                {/* <a href="/" id="loginBtn" className="btn btn_rounded">Log in</a> */}
              </div>
              <div className="action_singUp">
                <form action="#">
                  <div>
                    <legend className="title">Sing Up</legend>
                    <div className="input_block">
                      <div className="input_wrap">
                        <input type="text" id="sing_name" className="input" placeholder="Full Name" 
                          name="name"
                          onChange={this.handleChange}
                          vaue={this.state.name}
                         />
                        <label htmlFor="sing_name" className="label_name" />
                      </div>
                      <div className="input_wrap">
                        <input type="text" id="sing_email" className="input" placeholder="Email"  
                        name="email"
                        onChange ={this.handleChange} 
                        value={this.state.email}
                        />
                        <label htmlFor="sing_email" className="label_mail" />
                      </div>
                      <div className="input_wrap">
                        <input type="password" id="sing_pass" className="input" placeholder="Password"  
                         name="password"
                         onChange ={this.handleChange}
                         value={this.state.password}
                         />
                        <label htmlFor="sing_pass" className="label_pass" />
                        <p className="text-danger">{this.state.message}</p>
                      </div>
                    </div>
                  
                    <button type="submit" defaultValue="Sing Up" className="btn btn_red" 
                      onClick={this.signup}
                      >SIGN UP</button>
                  </div>
                </form>
              </div>
              <div className="action_login">
                <form action="#">
                  <div>
                    <legend className="title">Log in</legend>
                    <div className="input_block">
                      <div className="input_wrap">
                        <input type="text" id="mail" className="input" placeholder="Email"
                       name="email"
                       onChange ={this.handleChange}
                        value={this.state.email} />
                        <label htmlFor="sing_pass" className="label_mail" />
                      </div>
                      <div className="input_wrap">
                        <input type="password" id="pass" className="input" placeholder="Password" 
                        name="password"
                        onChange ={this.handleChange}
                        value={this.state.password}/>
                        <label htmlFor="sing_pass" className="label_pass" />
                        <p className="text-danger">{this.state.message}</p>
                      </div>
                    </div>
                   
                    <a href="/" className="forgotPass">Forgot password?</a>
                    <div className="login_btns">
                    <a href="/" onClick= {this.signInWithGoogle} > <img src={GoogleLogo} alt="Google Logo"/></a>
                  <button type="submit"
                    onClick={this.login} defaultValue="Login" className="btn btn_red" > LOG IN</button>
                     </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="login_action_wrap ">
            </div>
          </div>
        </div>
      </div>
            </div>
            
        )
    }

}

export default Home;