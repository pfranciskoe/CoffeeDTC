import React from 'react'
import {Link} from 'react-router-dom'
import HomeBody from './home_body.jsx'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.para = () => {
            let para1 = document.getElementsByClassName('para-element')[0];
            let para2 = document.getElementsByClassName('homepage-header')[0];
            let para3 = document.getElementsByClassName('para-element')[1]
            para1.style.transform = `translateY(-${(window.pageYOffset * 1.5) / 3}px`
            para2.style.transform = `translateY(-${(window.pageYOffset * 2.5) / 3}px`
            para3.style.transform = `translateY(-${(window.pageYOffset * 3) / 3}px`
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.para)
        window.scrollTo(0, 0)
       
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.para)
    }
    render(){

        return(
            <div className='homepage'>
                <div className='homepage-para-part'>
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
                <div className='home-title-backdrop'></div>
                </div>
                <HomeBody/>
            </div>
        )
    }   
}
export default Home;