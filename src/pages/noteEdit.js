import React , { Component } from "react";
import Navbar from '../components/navbar';
import './styles/noteDetails.css'
import firebase from '../firebase.js';


class NoteEdit extends Component{

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('note');
        this.unsubscribe = null;
        this.state = {
          modalIsOpen: false,
          note: []
        };
      }

   
    handleClick = e => {
        this.props.history.push("/notes")
      }


render()
{
    
    return(
        <div>
            <Navbar />
           
           <div className="form">
                   
                <div className="title_note box"
                name="title"
                value={this.state.title}
                 onChange={this.onChange}>
                   {this.setState.key}
                </div>
                <div className="body_note box"
                name="description" 
                value={this.state.note.description} 
                onChange={this.onChange}>
                    {this.state.title}
                </div>
                <div className="btn_save">
                        <button onClick= {this.handleClick} className="btn " >Save</button>
                          
                        {this.props.error &&(
                        <p className="text-danger">{this.error.message}</p>
                        )}
                    </div>
                
           </div>
        </div>
    )
}
}
export default NoteEdit;