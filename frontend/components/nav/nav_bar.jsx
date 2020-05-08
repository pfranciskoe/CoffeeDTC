import React from 'react'
import {Link} from 'react-router-dom'
class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    randomString() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charLength = characters.length;
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(characters.charAt(Math.floor(Math.random() * charLength)))
        };
        return (arr.join(''));
    }
    render(){
        return (
            <div className='navbar'>
                <Link to='/' className='logo-link'><div className='logo-div'>DTCOFFEE</div></Link>
                {this.props.currentUser ?
                    <div>
                    <button onClick={this.props.logout} className='nav-button'>Log Out</button>
                        {this.props.currentUser.matches[0] ? 
                            <Link to='/matches' ><button className='nav-button'>See Matches</button></Link> : 
                            <Link to='/onboarding/1' ><button className='nav-button'>Take Quiz</button></Link>}
                        <Link to='/store' ><button className='nav-button'>Store</button></Link>
                        <button className='nav-button' onClick={this.props.openCart}>CART</button>
                    </div> :
                    <div>
                    <button onClick = { this.props.openModal } className='nav-button'>Log In</button>
                    <button onClick = {()=>this.props.processForm({email: `${this.randomString()}@coffee.com`, password: 'password'
                    })} className='nav-button'>Demo Log In</button>
                    </div>
                    }
                
            </div>
        )
    }
    

}
export default NavBar;