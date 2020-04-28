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

      onCollectionUpdateFilter = (querySnapshot) => {
          	const { currentUser } = this.props;
            const note = [];
            this.ref.where("author", "==", currentUser.email)
              .get()
              .then(
                function (querySnapshot) {
                  querySnapshot.forEach(function (doc) {
                    const {
                      title,
                      description,
                      author,
                      important
                    } = doc.data();
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
                }.bind(this))
              .catch(function (error) {
                console.log("Error getting documents: ", error);
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
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdateFilter);
      }
      
      componentWillUnmount() {
        this.unsubscribe();

      }

    render(){
      const { currentUser } = this.props;
        return (
          <div className="row">
            <div className="list_note">
              {currentUser
                ? (<p className="singleNote_title">User Email: {currentUser.email}</p>)
                : (<p>Loading . . .</p>) } 
                {this.state.note.map((singleNote, index)=>{
                  return (
                    <ul   key={index} id={singleNote.important ? "active": null} className="single_note "> 
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