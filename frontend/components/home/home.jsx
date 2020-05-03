import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            para1 = document.getElementsByClassName('para-element')[0]
            
        })
    }
    render(){

        return(
            <div className='homepage'>
                <h1 className='homepage-header'>Coffee, Curated For You</h1>
                {/* <Link className='quiz-link-button-link' to='/onboarding/1'>
                    <button className='quiz-link-button'>Get Started</button>
                </Link> */}
                <div className='para-element'>
                    <img className='home-img-top-left' src={window.home1} />
                    <img className='home-img-top-right' src={window.home2} />
                </div>
                <div className='para-element'>
                    <img className='home-img-bottom-left' src={window.home3} />
                    <img className='home-img-bottom-right' src={window.home4} />
                </div>
            </div>
        )
    }   
}
export default Home;