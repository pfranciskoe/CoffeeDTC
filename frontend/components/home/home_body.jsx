import React from 'react'
import {Link} from 'react-router-dom'
const HomeBody = ()=>(
<div className='home-body'>
    <div className='how-header'>
            <h3 className='how-header-text'>How It Works</h3>
    </div>
    <div className='how-part'>
        <h6 className='how-part-sub'>Step 1</h6>
        <h4 className='how-part-head'>Take our Quiz</h4>
        <Link to='/onboarding/1' ><button className='button-2'>Take Quiz</button></Link>
        <p className='how-part-body'>Let us know how you like your coffee.</p>
    </div>
    <div className='how-part'>
        <h6 className='how-part-sub'>Step 2</h6>
        <h4 className='how-part-head'>See Matches</h4>
        <p className='how-part-body'>Explore the coffees our algorithm has paired you with.</p>
    </div>
</div>
)

export default HomeBody;