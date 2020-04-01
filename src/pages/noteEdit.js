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
        this.onSubmit= this.onSubmit.bind(this);
        this.unsubscribe = null;
        this.state = {
          modalIsOpen: false,
          note: null,
          key: null,
          title: '',
          description: '',
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
       console.log(this.state.note.title)    
       console.log(this.state.note.description)   
      }
    
      
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({note:state});
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { title, description} = this.state;
        const id =window.location.href.split('/')[4];
        let noteRef = firebase.firestore().collection("note").doc(id);
        return noteRef.update({
          title,
          description,
          
        })
        .then(function() {
            console.log("Document successfully updated!");
      this.props.history.push('/notes')
        
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    //  console.log(firebase.firestore().collection("note").doc(id)
    //  .onSnapshot(function(doc){
    //      console.log("Current data: ", doc.data());
    //  }));

      }
      
      

    handleClick = e => {
        this.props.history.push("/notes")
      }
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);  
      }

render()
{
    
    return(
        <div>
            <Navbar />
           
            {this.state.note && (

                    <form onSubmit={this.onSubmit}>
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
                    <button  type="submit"
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