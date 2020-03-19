import React from 'react';

import Modal from './modal';
import './styles/deleteNoteModal.css'

function DeleteNoteModal (props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteNoteModal">
            <h1>Are you Sure?</h1>
            <p>You are about to delete this note</p>
        </div>
        <div>
            <button onClick={props.onDeleteNote}  className="btn_delete  mr-4">DELETE</button>
            <button onClick={props.onClose} className="btn_cancel ">CANCEL</button>
        </div>
    </Modal>
}

export default DeleteNoteModal;