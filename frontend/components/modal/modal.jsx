import React from 'react'
import AuthPage from '../session/auth_page'

const Modal = ({ modal, closeModal })=>{
    console.log(closeModal)
    if (!modal) {
        
        return (<div>MODAL GOES HERE</div>)
    } else {
        return( 
        <div className="auth-background" onClick={closeModal}>
            <div className="modal-wrapper">
                <AuthPage closeModal={closeModal}/>
            </div>
        </div>
        )
    }
}

export default Modal;