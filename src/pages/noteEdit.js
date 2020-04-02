import React , { Component } from "react";
import Navbar from '../components/navbar';
// import { Link } from 'react-router-dom';
import './styles/noteDetails.css'
import firebase from '../firebase.js';
import { withRouter } from "react-router-dom";

class NoteEdit extends Component{
    
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('note');
        this.unsubscribe = null;
        this.state = {
          modalIsOpen: false,
          note: {
            title: '',
            description: ''
          },
          key: null
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        let note;
        const currentUrlKey = window.location.href.split('/')[4];
        querySnapshot.forEach((doc) => {
          const { title, description} = doc.data();
          if (doc.id === currentUrlKey) {
            note = {
              key: doc.id,
              doc, // DocumentSnapshot
              title,
              description,
              // author,
            };
          }                    
        });
        this.setState({
          note
       });   
      }
    
      onChange = (e) => {
        const note = this.state.note
        note[e.target.name] = e.target.value;
        this.setState({note:note});
      }

      handleClick = (e) => {
        e.preventDefault();
        const { title, description} = this.state.note;
        const id =window.location.href.split('/')[4];
        let noteRef = firebase.firestore().collection("note").doc(id);
        noteRef.update({
          title,
          description,
          
        })
        .then(() => {
            console.log("Document successfully updated!");
      this.props.history.push('/notes')
        })
        .catch((error) =>{
           
            console.error("Error updating document: ", error);
        });

      }

     /*handleClick = e => {
        this.props.history.push("/notes")
      }*/
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);  
      }

render()
{
    
    return(
        <div>
            <Navbar />
           
            {this.state.note && (

                    <form>
                    <div className="form">
                        {/* <label>Title</label> */}
                        <input 
                        onChange= {this.onChange} 
                        className="untitle_note box" 
                        type="text" 
                        name="title" 
                        // placeholder="Untitled . . ."
                        value= {this.state.note.title}
                        />
                            
                    </div>
                    <div className="form">
                        {/* <label>Note</label> */}
                        <textarea 
                        onChange={this.onChange}
                        className="body_note box" 
                        type="text" 
                        name="description" 
                        value={this.state.note.description}
                        />
                        
                    </div>
                    <div className="btn_save">
                    <button
                     onClick= {this.handleClick}
                      className="btn " 
                      

                      >Save</button>
                    {this.props.error &&(
                    <p className="text-danger">{this.error.message}</p>
                    )}
                    </div>
                    </form>
                   
                  )}
              
                
           </div>
       
        
    )
}
}
export default NoteEdit;