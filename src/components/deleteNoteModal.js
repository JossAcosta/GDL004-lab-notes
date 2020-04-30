import React from 'react';
import firebase from '../firebase.js';
import Modal from './modal';
import './styles/deleteNoteModal.css'
import { useHistory } from 'react-router-dom';

function DeleteNoteModal (props){
    const history = useHistory();
    const onDeleteNote =()=>{
        let id = window.location.href.split('/')[4];
       
        firebase.firestore().collection('notes').doc(id).delete()
        .then(() => {
            history.push("/notes")
        })
        .catch((error) =>{
            console.error("Error delete document: ", error);
        });
       
    }
   return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="deleteNoteModal">
            <h1>Are you sure?</h1>
            <p>You are about to delete this note</p>
        </div>
        <div>
            <button onClick={onDeleteNote}  className="btn_delete  mr-4">DELETE</button>
            <button onClick={props.onClose} className="btn_cancel ">CANCEL</button>
        </div>
    </Modal>
}


export default DeleteNoteModal;