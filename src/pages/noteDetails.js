import React , { Component } from "react";
import Navbar from '../components/navbar';
import './styles/noteDetails.css'
import firebase from '../firebase.js';
import DeleteModal from '../components/deleteNoteModal';
import { Link } from 'react-router-dom';


class SingleNote extends Component{
   
        constructor(props) {
            super(props);
            this.ref = firebase.firestore().collection('note');
            this.unsubscribe = null;
            this.state = {
              modalIsOpen: false,
              note: null,
            };
          }
        
          handleClick = e => {
            this.props.history.push("/notes/:noteKey/edit")
          }

          handleOpenModal = e =>{
            this.setState({modalIsOpen: true})
        };
    
        handleCloseModal = e =>{
            this.setState({modalIsOpen: false})
        };
    
        handleDeleteNote = async e =>{
          
        };
         
          onCollectionUpdate = (querySnapshot) => {
            let note;
            const currentUrlKey = window.location.href.split('/')[4];
            querySnapshot.forEach((doc) => {
              const { title, description, author } = doc.data();
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
         
         
          componentDidMount() {
            this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
          }
    

render()
{
    
    return(
        <div>
            <Navbar />
                  <div > hey </div>
                  {this.state.note && (
                    <div className="form" > 
                    <div className="title_note box">{`${this.state.note.title}`} </div>
                    <div className= "body_note box">{`${this.state.note.description}`}</div>

                    <div className="btns_actions">
                  <ul  className ="single_note list-unstyled " > 
                  
                  <Link to={`/notes/${this.state.note.key}/edit`}>
                    {this.state.note.title}
                  <button className=" btn_edit" >Edit</button>
                 </Link>
                  </ul>
                  <button onClick= {this.handleOpenModal} className=" btn_delete" >Delete</button>
                        <DeleteModal 
                        isOpen={this.state.modalIsOpen}
                        onClose={this.handleCloseModal}
                           />
                          
                  </div>
                  </div>
                  )}
                      
            </div>
    )
}
}
export default SingleNote;