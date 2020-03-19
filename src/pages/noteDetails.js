import React , { Component } from "react";
import Navbar from '../components/navbar';
import './styles/noteDetails.css'
import firebase from '../firebase.js';
import DeleteModal from '../components/deleteNoteModal';
import Modal from '../components/modal';

class SingleNote extends Component{
   
        constructor(props) {
            super(props);
            this.ref = firebase.firestore().collection('note');
            this.unsubscribe = null;
            this.state = {
              modalIsOpen: false,
              note: []
            };
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
            const note= [];
            querySnapshot.forEach((doc) => {
              const { title, description, author } = doc.data();
              note.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                description,
                author,
              });
            });
            this.setState({
              note
           });
          }
         
         
          componentDidMount() {
            this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
          }
   
     
    
     
    
     
    //   onChange = (e) => {
    //     const state = this.state
    //     state[e.target.name] = e.target.value;
    //     this.setState({singleNote:state});
    //   }
     
    //   onSubmit = (e) => {
    //     e.preventDefault();
     
    //     const { title, description, author } = this.state;
     
    //     const updateRef = firebase.firestore().collection('note').doc(this.state.key);
    //     updateRef.set({
    //       title,
    //       description,
    //       author
    //     }).then((docRef) => {
    //       this.setState({
    //         key: '',
    //         title: '',
    //         description: '',
    //         author: ''
    //       });
    //       this.props.history.push("/notes/"+this.props.match.params.id)
    //     })
    //     .catch((error) => {
    //       console.error("Error adding document: ", error);
    //     });
    //   }
    
   

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
                        <div className="btns_actions">
                            <button onClick= {this.handleClick} className=" btn_edit" >Edit</button>
                        <button onClick= {this.handleOpenModal} className=" btn_delete" >Delete</button>
                        <DeleteModal 
                        isOpen={this.state.modalIsOpen}
                        onClose={this.handleCloseModal}
                           />
                          
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