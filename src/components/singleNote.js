import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../pages/styles/dashboard.css';
import firebase from '../firebase.js';



class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('note');
        this.unsubscribe = null;
        this.state = {
          note: []
        };
      }
     
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
       console.log(note)
      }
     
     
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
       
     
      }
    
    render(){   
       
        return (
           
                    <div className="row">
                    <div className="list_note">
                  
            {this.state.note.map((singleNote, index)=>{
                return (
                  <ul   key={index} className ="single_note list-unstyled " > 
                    <Link to={`/notes/${singleNote.key}`}>
                        <li  >
                        <p  className="singleNote_title">{singleNote.title} </p>
                        <p   className="singleNote_body">{singleNote.description}</p>
                        <p>{singleNote.author}</p>
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