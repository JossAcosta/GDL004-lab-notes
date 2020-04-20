import React , { Component } from "react";
import Navbar from '../components/navbar';
import './styles/noteDetails.css'
import firebase from '../firebase.js';
import DeleteModal from '../components/deleteNoteModal';
import { Link } from 'react-router-dom';


class SingleNote extends Component{
   
        constructor(props) {
            super(props);
            this.ref = firebase.firestore().collection('notes');
            this.unsubscribe = null;
            this.state = {
              modalIsOpen: false,
              note: null,
              user:{ },
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
         
          onCollectionUpdate = (querySnapshot) => {
            let note;
            const currentUrlKey = window.location.href.split('/')[4];

            querySnapshot.forEach((doc) => {
              const { title, description,  author, important } = doc.data();
              if (doc.id === currentUrlKey) {
                note = {
                  key: doc.id,
                  doc,
                  title,
                  description,
                  author, important 
                };
              }            
            });
            this.setState({
              note
           });   
          }
          componentDidMount() {
            this.unsubscribe = 
            
            this.ref.onSnapshot(this.onCollectionUpdate);
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
                    <div className="form" > 
                    <div className="title_note box">{`${this.state.note.title}`} </div>
                    <div className= "body_note box">{`${this.state.note.description}`}</div>

                    <div className="btns_actions">
                  
                      <Link to={`/notes/${this.state.note.key}/edit`}>
                      <button className=" btn_edit" >Edit</button>
                      </Link>
                      
                      <button onClick= {this.handleOpenModal} className=" btn_delete">Delete</button>
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