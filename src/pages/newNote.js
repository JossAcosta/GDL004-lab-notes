import React , { Component } from "react";
import Navbar from '../components/navbar';
import './styles/newNote.css'
import firebase from '../firebase.js';

class NewNote extends Component{
   
     
  constructor() {
    super();
    this.ref = firebase.firestore().collection('notes');
    this.state = {
      title: '',
      description: '',
      author: '',
      important: false, 
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
 
  onSubmit = (e) => {
    e.preventDefault();
 
    const { title, description, author, important } = this.state;
 
    this.ref.add({
      title,
      description,
      author, 
      important,
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: '',
        important
      });
      this.props.history.push("/notes")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

render()
{
    return(
        <div>
            <Navbar />
           
           <div>
                
                <form onSubmit={this.onSubmit}>
                    <div className="form">
                        {/* <label>Title</label> */}
                        <input 
                        onChange= {this.onChange} 
                        className="untitle_note box" 
                        type="text" 
                        name="title" 
                        placeholder="Untitled . . ."
                        // value= {this.props.formValues.titleNote} 
                        />
                    </div>
                    <div className="form">
                        {/* <label>Note</label> */}
                        <textarea 
                        onChange={this.onChange}
                        className="body_note box" 
                        type="text" 
                        name="description" 
                        placeholder="Write your note . . ."
                        // value={this.props.formValues.bodyNote}
                        />
                    </div>
                    <div className="btn_save">
                    <button onClick= {this.handleClick} className="btn " >Save</button>
                    {this.props.error &&(
                    <p className="text-danger">{this.error.message}</p>
                    )}
                    </div>
                </form>
            </div>
        </div>
    )
}
}
export default NewNote;