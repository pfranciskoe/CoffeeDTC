import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div className='homepage'>
                <Link to='/onboarding'>
                    <button className='quiz-button'>Get Started</button>
                </Link>
            </div>
        )
    }
}
export default Home;