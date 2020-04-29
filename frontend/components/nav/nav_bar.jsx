import React from 'react'

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='navbar'>
                <div className='logo-div'>DTCOFFEE</div>
                <div>{this.props.currentUser ? `Hi ${this.props.currentUser.email}` : null} </div>
                {this.props.currentUser ?
                    <button onClick={this.props.logout} className='nav-button'>Log Out</button> :
                    <button onClick = { this.props.openModal } className='nav-button'>Log In</button>}
            </div>
        )
    }
    

}
export default NavBar;