import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import fire from '../firebase.js';

// import LogOut from '../model/auth/logOut';





class Dashboard extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            
        }
    }
    logout(){
        fire.auth().signOut()
       
           .then(window.location = "/");
     
    }
    render()
    {
        return (
           <div>
               <h1>You are logged in</h1>
               <button onClick={this.logout}>Log Out</button>
               <div className="note_buttons"> 
                        <Link to="/notes/new" className="btn btn-primary">New Note </Link>
                    </div>
           </div>
        );
    }
    
}
    
   export default Dashboard;