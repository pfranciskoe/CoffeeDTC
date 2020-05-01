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
            <div className='match-list'>
                
                {this.props.currentUser.matches.map(id => (
                    <MatchItem key={`matched-coffee-${id}`}
                    className='matched-coffee-item'
                        coffee={ this.props.coffees[id]}/> 
                ))}
            </div>
        </div>
        )
    }
}

export default Matches