import React from 'react'
import {Link} from 'react-router-dom'
class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='navbar'>
                <Link to='/' className='logo-link'><div className='logo-div'>DTCOFFEE</div></Link>
                <div>{this.props.currentUser ? `Hi ${this.props.currentUser.email}` : null} </div>
                {this.props.currentUser ?
                    <button onClick={this.props.logout} className='nav-button'>Log Out</button> :
                    <div>
                    <button onClick = { this.props.openModal } className='nav-button'>Log In</button>
                    <button onClick = {()=>this.props.processForm({email: 'demo@coffee.com',
                        password: 'password'})}className='demo-button'>Demo Log In</button>
                    </div>
                    }
            </div>
        )
    }
    

}
export default NavBar;