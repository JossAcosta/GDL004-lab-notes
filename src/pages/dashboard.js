import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import './styles/dashboard.css';
// import firebase from '../firebase.js';

import SingleNote from '../components/singleNote';



class Dashboard extends Component {

    render(){   
       
        return (
           
           <div className="body_dashboard"> 
                <Navbar />
                
                <div className="container">
                
                    <div className=" row note_buttons"> 
                        <Link to="/notes/new" className="btn ">New Note :3 </Link>
                    </div>
                    <SingleNote/>
               <div>
                   Soy el footer
               </div>
                </div>
           </div>
        );
    }
    
}
    
   export default Dashboard;