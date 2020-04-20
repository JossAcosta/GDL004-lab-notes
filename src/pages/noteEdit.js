import React , { Component } from "react";
import Navbar from '../components/navbar';
import './styles/noteEdit.css'
import firebase from '../firebase.js';


class NoteEdit extends Component{

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('notes');
        this.unsubscribe = null;
        this.state = {
          modalIsOpen: false,
          note: {
            title: '',
            description: '',
            author:'',
            important: false,
          },
        };
      }

      onCollectionUpdate = (querySnapshot) => {
        let note;
        const currentUrlKey = window.location.href.split('/')[4];
        querySnapshot.forEach((doc) => {
          const { title, description, author, important } = doc.data();
          if (doc.id === currentUrlKey) {
            note = {
              key: doc.id,
              doc,
              title,
              description,
              author, 
              important, 
            };
          }                    
        });
        this.setState({
          note
       });   
      }
    
      onChange = (e) => {
        const newNote = { ...this.state.note }
        newNote[e.target.name] = e.target.value;
        this.setState({note: newNote});
      }

      handleClick = (e) => {
        e.preventDefault();
        const { title, description, author, important } = this.state.note;
        const id =window.location.href.split('/')[4];
        let noteRef = firebase.firestore().collection("notes").doc(id);
        noteRef.update({
          title,
          description,
          author,
          important,
        })
        .then(() => {
            console.log("Document successfully updated!");
      this.props.history.push('/notes')
        })
        .catch((error) =>{
            console.error("Error updating document: ", error);
        });
      }

      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);  
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

render()
{
    
    return(
        <div>
            <Navbar />
           
            {this.state.note && (

                    <form className="form">
                    <div className=" ">
                        <input 
                        onChange= {this.onChange} 
                        className="title_note box" 
                        type="text" 
                        name="title" 
                        value= {this.state.note.title}
                        />
                            
                    </div>
                    <div className="">
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
                        >
                        Save
                        </button>
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