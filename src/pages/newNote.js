import React , { Component } from "react";
import Navbar from '../components/navbar';
import './styles/newNote.css'


class NewNote extends Component{
    state = {};
render()
{
    return(
        <div>
            <Navbar />
           
           <div>
                
                <form onSubmit={this.props.onSubmit}>
                    <div className="form">
                        {/* <label>Title</label> */}
                        <input 
                        onChange= {this.props.onChange} 
                        className="untitle_note box" 
                        type="text" 
                        name="titleNote" 
                        placeholder="Untitled . . ."
                        // value= {this.props.formValues.titleNote} 
                        />
                    </div>
                    <div className="form">
                        {/* <label>Note</label> */}
                        <textarea 
                        onChange={this.props.onChange}
                        className="body_note box" 
                        type="text" 
                        name="bodyNote" 
                        placeholder="Write your note . . ."
                        // value={this.props.formValues.bodyNote}
                        />
                    </div>
                    <div className="btn_save">
                    <button onClick= {this.handleClick} className="btn " >Save</button>
                    {this.props.error &&(
                    <p className="text-danger">{this.props.error.message}</p>
                    )}
                    </div>
                </form>
            </div>
        </div>
    )
}
}
export default NewNote;