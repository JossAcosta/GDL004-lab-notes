import React from 'react';
import firebase from '../firebase.js';
import Modal from './modal';
import './styles/deleteNoteModal.css'
import { useHistory } from 'react-router-dom';

function DeleteNoteModal (props){
    const history = useHistory();
    const onDeleteNote =()=>{
        let id = window.location.href.split('/')[4];
     
        console.log(id);
        firebase.firestore().collection('note').doc(id).delete();
        console.log('Succeful delete');
        history.push("/notes")
    }
   return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteNoteModal">
            <h1>Are you Sure?</h1>
            <p>You are about to delete this note</p>
        </div>
        <div>
            <button onClick={onDeleteNote}  className="btn_delete  mr-4">DELETE</button>
            <button onClick={props.onClose} className="btn_cancel ">CANCEL</button>
        </div>
    </Modal>
}


export default DeleteNoteModal;