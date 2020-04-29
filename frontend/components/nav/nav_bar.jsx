import React from 'react'

const NavBar = ({ currentUser, logout })=>{
    return (
            <div className='navbar'>
            <div className='logo-div'>DTCOFFEE</div>
            <div>{currentUser ? `Hi ${currentUser.email}` : null} </div> 
                {currentUser ? 
                <button onClick={logout} className='nav-button'>Log Out</button> :
                <button onClick={logout} className='nav-button'>Log In</button>}
            </div>
    )

}
export default NavBar;