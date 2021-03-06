import React from 'react'
import { Link } from 'react-router-dom'
import HomeBodyContainer from './home_body_container.jsx'
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handleDown = this.handleDown.bind(this)
    this.para = () => {
      const para1 = document.getElementsByClassName('para-element')[0]
      const para2 = document.getElementsByClassName('homepage-header')[0]
      const para3 = document.getElementsByClassName('homepage-header')[1]
      const para4 = document.getElementsByClassName('para-element')[1]
      para1.style.transform = `translateY(-${(window.pageYOffset * 1.5) / 3}px`
      para2.style.transform = `translateY(-${(window.pageYOffset * 2.5) / 3}px`
      para3.style.transform = `translateY(${(window.pageYOffset * 0.5) / 8}px`
      para4.style.transform = `translateY(-${(window.pageYOffset * 3) / 3}px`
    }
    this.randomString = this.randomString.bind(this)
  }

  randomString () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charLength = characters.length
    const arr = []
    for (let i = 0; i < 8; i++) {
      arr.push(characters.charAt(Math.floor(Math.random() * charLength)))
    };
    return (arr.join(''))
  }

  componentDidMount () {
    window.addEventListener('scroll', this.para)
    window.scrollTo(0, 0)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.para)
  }

  handleDown () {
    window.scrollTo(0, 860)
  }

  render () {
    return (
      <div className='homepage'>
        <div className='homepage-para-part'>
          <h1 className='homepage-header'>Coffee Curated, For You</h1>
          <h1 onClick={this.handleDown} className='homepage-header head-arrow'>ˇ</h1>
          <div className='para-element'>
            <img className='home-img-top-left' src={window.home1} />
            <img className='home-img-top-right' src={window.home2} />
          </div>
          <div className='para-element'>
            <img className='home-img-bottom-left' src={window.home3} />
            <img className='home-img-bottom-right' src={window.home4} />
          </div>
          <div className='home-title-backdrop' />
        </div>
        <HomeBodyContainer randomString={this.randomString} />
      </div>
    )
  }
}
export default Home
