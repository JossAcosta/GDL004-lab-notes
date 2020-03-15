import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import './styles/navbar.css';

import fire from '../firebase.js';

class Navbar extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={ }
    }
    logout(){
        fire.auth().signOut()   
           .then(window.location = "/");
    }
    render() {
        return <div  className="navbar">
        <div className="container-fluid">
            <Link to="/notes">
                <img src={logo} alt="Logo"/>
                <span className="font-weigth-ligth title_navabar">L A B</span>
                <span className="font-weigth-bold title_navabar"> n o t e s !</span>
            </Link>
            <button onClick={this.logout} className="btn btn_red">Log Out</button>
            </div>
        </div>;
    }
}

export default Navbar;