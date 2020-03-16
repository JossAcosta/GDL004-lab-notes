import React , { Component } from "react";
import Navbar from '../components/navbar';
import './styles/noteDetails.css'
import firebase from '../firebase.js';

class SingleNote extends Component{
   
   

render()
{
    return(
        <div>
            <Navbar />
           
           <div className="form">
                   
                <div className="title_note box">Title</div>
                <div className="body_note box">body</div>
                        <div className="btns_actions">
                            <button onClick= {this.handleClick} className=" btn_edit" >Edit</button>
                        <button onClick= {this.handleClick} className=" btn_delete" >Delete</button>
                        {this.props.error &&(
                        <p className="text-danger">{this.error.message}</p>
                        )}
                    </div>
                
           </div>
        </div>
    )
}
}
export default SingleNote;