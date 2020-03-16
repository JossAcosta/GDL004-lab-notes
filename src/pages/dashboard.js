import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import './styles/dashboard.css';
import firebase from '../firebase.js';



class Dashboard extends Component {
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
      }
     
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }
    
    render(){   
        const user = this.props
        return (
           
           <div>
                <Navbar />
                <div className="container-fluid">
                
                    <div className=" row note_buttons"> 
                        <Link to="/notes/new" className="btn ">New Note </Link>
                    </div>
                    <div className="row">
                    <div className="">

            {this.state.note.map((singleNote)=>{
                return (
                    <ul className ="single_note list-unstyled "> 
                    <Link to={`/notes/${singleNote.key}`}>
                        <li className="singleNote_title">{singleNote.title}</li>
                        <li className="singleNote_body">{singleNote.description}</li>
                        <li>{singleNote.author}</li>
                   </Link>
                    </ul>
                )
            })}
        </div>
             

                    </div>
                </div>
           </div>
        );
    }
    
}
    
   export default Dashboard;