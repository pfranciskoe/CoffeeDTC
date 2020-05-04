import React from 'react'
import {Link} from 'react-router-dom'
const HomeBody = ({currentUser, logout, openModal, processForm,})=>(
<div className='home-body'>
    <div className='how-header'>
            <h3 className='how-header-text'>How It Works</h3>
    </div>
    <div className='how-part'>
        <h6 className='how-part-sub'>Step 1</h6>
        <h4 className='how-part-head'>Log In</h4>
            <p className='how-part-body'>or use our demo login.</p>
        <div className='how-part-button-group'>
            <button onClick={openModal} className='button-2'>Login</button>
            <button onClick={() => processForm({
                email: 'demo@coffee.com', password: 'password'
            })
            } className='button-2'>Demo</button>
        </div>
    </div>
    <div className='how-part'>
        <h6 className='how-part-sub'>Step 2</h6>
        <h4 className='how-part-head'>Take our Quiz</h4>
        <p className='how-part-body'>Let us know how you like your coffee.</p>
        <Link className='link-wrapper' to='/onboarding/1' ><button className='button-2'>Take Quiz</button></Link>
    </div>
    <div className='how-part'>
        <h6 className='how-part-sub'>Step 3</h6>
        <h4 className='how-part-head'>See Your Matches</h4>
        <p className='how-part-body'>Explore the coffees our algorithm has paired you with.</p>
        <Link className='link-wrapper' to='/matches' ><button className='button-2'>See Matches</button></Link>
    </div>
    <div className='how-part'>
        <h6 className='how-part-sub'>Step 4</h6>
        <h4 className='how-part-head'>Drink Coffee</h4>
        <p className='how-part-body'>Order the coffees that sound most appealing to your taste.</p>
        <Link className='link-wrapper' to='/cart' ><button className='button-2'>View Cart</button></Link>
    </div>
</div>
)

export default HomeBody;