import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import './styles/dashboard.css';




class Dashboard extends Component {

    render(){   
        const user = this.props
        return (
           
           <div>
                <Navbar />
                <div className="container-fluid">
                
                    <div className=" row note_buttons"> 
                        <Link to="/notes/new" className="btn ">New Note </Link>
                    </div>
                    <div className="row"></div>
                </div>
           </div>
        );
    }
    
}
    
   export default Dashboard;