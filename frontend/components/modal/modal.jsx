import React from 'react'
import AuthPage from '../session/auth_page'

const Modal = ({ modal, closeModal })=>{
    if (!modal) {
        return null;
    } else {
        return( 
        <div className="auth-background" onClick={closeModal}>
                <div className="modal-wrapper" onClick={event => event.stopPropagation()}>
                <AuthPage closeModal={closeModal}/>
            </div>
        </div>
        )
    }
}

export default Modal;