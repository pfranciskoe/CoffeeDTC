import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div className='homepage'>
                <Link to='/onboarding/1'>
                    <button className='quiz-link-button'>Get Started</button>
                </Link>
            </div>
        )
    }
}
export default Home;