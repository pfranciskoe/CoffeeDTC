import React from 'react'
import { Link } from 'react-router-dom'
const HomeBody = ({ currentUser, logout, openModal, processForm, openCart, randomString }) => (
  <div className='home-body'>
    <div className='how-header'>
      <h3 className='how-header-text'>How It Works</h3>
    </div>
    <div className='how-part'>
      <h6 className='how-part-sub'>Step 1</h6>
      <h4 className='how-part-head'>Log In / Sign Up</h4>
      <p className='how-part-body'>or use our demo login.</p>

      {currentUser
        ? <button onClick={logout} className='button-2'>Log Out</button>
        : <div className='how-part-button-group'> <button onClick={openModal} className='button-2'>Login</button>
          <button
            onClick={() => processForm({
              email: `${randomString()}@coffee.com`, password: 'password'
            })} className='button-2'
          >Demo
          </button>
        </div>}

    </div>
    <div className='how-part'>
      <h6 className='how-part-sub'>Step 2</h6>
      <h4 className='how-part-head'>Get Paired</h4>
      <p className='how-part-body'>Let us know how you like your coffee.</p>
      <Link className='link-wrapper' to='/onboarding/1'><button className='button-2'>Take Quiz</button></Link>
    </div>
    <div className='how-part'>
      <h6 className='how-part-sub'>Step 3</h6>
      <h4 className='how-part-head'>Explore Coffees</h4>
      <p className='how-part-body'>See the coffees our algorithm has picked for you.</p>
      <p className='how-part-body'>Or browse our store.</p>
      <div className='how-part-button-group'>
        <Link className='link-wrapper' to='/matches'><button className='button-2'>See Matches</button></Link>
        <Link className='link-wrapper' to='/store'><button className='button-2'>Visit Store</button></Link>
      </div>
    </div>
    <div className='how-part'>
      <h6 className='how-part-sub'>Step 4</h6>
      <h4 className='how-part-head'>Drink Coffee</h4>
      <p className='how-part-body'>Order the coffees that sound most appealing to your taste.</p>
      {currentUser ? <button className='button-2' onClick={openCart}>View Cart</button> : null}
    </div>
  </div>
)

export default HomeBody
