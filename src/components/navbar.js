import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo from '../images/logo.png';
import './styles/navbar.css';

import fire from '../firebase.js';

class Navbar extends React.Component {

    constructor(props){
        super(props)
        
        this.state={ }
    }

    logout= (e) =>{
     
        fire.auth().signOut()   
           .then(
            
            this.props.history.push('/')
             );
    }
    render() {
        return <div  className="navbar">
        <div className="container-fluid">
            <Link to="/notes">
                <div  className="navbar_logo-title">
                    <img src={logo} alt="Logo"/>
                   
                <span className="font-weigth-ligth title_LAB">L A B      </span>
                <span className="font-weigth-bold title_notes">   N O T E S !</span>
                </div>
                
            </Link>
            <button onClick={this.logout} className="btn-logOut">Log Out <span className="fas fa-sign-out-alt"></span></button>
            </div>
        </div>;
    }
}
export default withRouter(Navbar);

// export default Navbar;