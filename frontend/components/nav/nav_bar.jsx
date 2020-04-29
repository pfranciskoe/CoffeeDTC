import React from 'react'

const NavBar = ({ currentUser, logout })=>{

    return (<div>Hi!{currentUser ? currentUser.email : null}
                {/* {this.state.currentUser ? 
                <button onClick={this.logOut()}>Log Out</button> :
                null}*/}
            </div>
    )

}
export default NavBar;