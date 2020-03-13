import React from 'react';
import logo from '../images/logo.png';
import Login from '../model/auth';

import './styles/home.css';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends React.Component{
 
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

    render(){
        return (
            <div>
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
                        <input type="text" id="sing_name" className="input" placeholder="Full Name" />
                        <label htmlFor="sing_name" className="label_name" />
                      </div>
                      <div className="input_wrap">
                        <input type="text" id="sing_email" className="input" placeholder="Email" />
                        <label htmlFor="sing_email" className="label_mail" />
                      </div>
                      <div className="input_wrap">
                        <input type="text" id="sing_pass" className="input" placeholder="Password" />
                        <label htmlFor="sing_pass" className="label_pass" />
                      </div>
                    </div>
                    <input type="submit" defaultValue="Sing Up" className="btn btn_red" />
                  </div>
                </form>
              </div>
              <div className="action_login">
                <form action="#">
                  <div>
                    <legend className="title">Log in</legend>
                    <div className="input_block">
                      <div className="input_wrap">
                        <input type="text" id="mail" className="input" placeholder="Email" />
                        <label htmlFor="sing_pass" className="label_mail" />
                      </div>
                      <div className="input_wrap">
                        <input type="text" id="pass" className="input" placeholder="Password" />
                        <label htmlFor="sing_pass" className="label_pass" />
                      </div>
                    </div>
                    <a href="/" className="forgotPass">Forgot password?</a>
                    <Login />
                    <input type="submit" defaultValue="Login" className="btn btn_red" />
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