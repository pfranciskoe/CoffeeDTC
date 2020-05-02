import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div className='homepage'>
                <h1 className='homepage-header'>Coffee, Curated For You</h1>
                {/* <Link className='quiz-link-button-link' to='/onboarding/1'>
                    <button className='quiz-link-button'>Get Started</button>
                </Link> */}
                <img></img>
                <img className='home-img-top-left' src={window.home1}/>
                <img className='home-img-top-right' src={window.home2}/>
            </div>
        )
    }   
}
export default Home;