import React from 'react'
import MatchItem from './match_item'
class Matches extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loaded: false
        }
        this.props.fetchDTCoffees()
    }
    // componentDidMount(){
    //     this.setState({ loaded: true })
    // }
    render(){   
        return(
        <div className='matches-page'>
            <div>
                <img src="" alt=""/>
            </div>
            <div className='match-header-box'>
                <h2 className='match-header'>Your Matches</h2>
            </div>
            <div className='match-list'>
                
                {this.props.currentUser.matches.map(id => (
                    this.props.coffees[id] ?
                    <MatchItem key={`matched-coffee-${id}`}
                    className='matched-coffee-box'
                        coffee={this.props.coffees[id]}/> :
                        null
                ))}
            </div>
        </div>
        )
    }
}

export default Matches