import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import './styles/dashboard.css';
// import firebase from '../firebase.js';

import SingleNote from '../components/singleNote';

class Dashboard extends Component {

    render(){   
        const { currentUser } = this.props;
        return (
           
           <div className="body_dashboard"> 
                <Navbar />
                
                <div className="container-fluid">
               
                    <div className=" row note_buttons"> 
                        <Link to="/new" className="btn ">New Note</Link>
                    </div>
                    <SingleNote currentUser={currentUser} />
              
                </div>
           </div>
        );
    }
    
}
    
   export default Dashboard;