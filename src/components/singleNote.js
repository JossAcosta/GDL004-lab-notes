import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/dashboard.css';
import firebase from '../firebase.js';

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('notes');
        this.unsubscribe = null;
        this.state = {
          note: [],
          user:{},
          currentUser:'',
        };
      }
      authListener(props){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              this.setState({user})
              const currentUserEmail = this.state.user.email;
             this.setState({currentUser: currentUserEmail})
            } else {
                this.setState({user:null})
            }
        })
    }
     
      onCollectionUpdate = (querySnapshot) => {
        const note= [];
        querySnapshot.forEach((doc) => {
          const { title, description, author, important } = doc.data();
          note.push({
            key: doc.id,
            doc, 
            title,
            description,
            author, 
            important,
          });
        });
        this.setState({
          note
       });
      }

      important = (id, important) => {
        let noteRef = firebase.firestore().collection("notes").doc(id);
        if(important === false){
          noteRef.update({
            important: true,
          })
        } else {
          noteRef.update({
            important: false,
          })
        }
        }

      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        this.authListener();
      }
      
      componentWillUnmount() {
        this.unsubscribe();

      }



    render(){   
        return (
                    <div className="row">
                    <div className="list_note">
                  
            {this.state.note.map((singleNote, index)=>{
                return (
                  <ul   key={index} id={singleNote.important ? "active": `${singleNote.key}`} className="single_note "> 
                 
                  <button onClick={()=>this.important(singleNote.key, singleNote.important)} className="star-button"  style={{outline: 'none'}}>
                       <span ><i className="fas fa-star"></i></span> 
                        </button>
                    <Link to={`/notes/${singleNote.key}`} style={{textDecoration: 'none', color:'rgba(0, 0, 0, 0.7)'}}>
                        <li  className="container_list">
                         <div className="singleNote_title">
                       <p> {singleNote.title} </p>
                        
                          </div>  
                        <p   className="singleNote_body">{singleNote.description}</p>
                        
                        </li>
                        
                        </Link>
                       
                    </ul>
                )
            })}
        </div>
                    </div>
        );
    }
}
    
   export default SingleNote;