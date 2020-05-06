import React from 'react'
import IndexItem from './index_item'
class CoffeeIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: true,
            name:'',
            coffees: {},
            roast: { 1: true, 2: true, 3: true, 4: true, 5: true},
            roastFiltered: false,
            price:[15,18,22,200],
            flavors: {'Sweet & Smooth': true, 'Chocolaty & Sweet': true, 'Comforting & Rich': true,
                'Balanced & Fruity': true, 'Syrupy & Smooth': true, 'Subtle & Delicate': true, 
                'Funky & Fruity': true, 'Sweet & Tart': true, 'Roasty & Smoky': true},
            weight: {8: true, 10: true, 12: true},
            singleOrigin: true,
            blend: true
        }
        this.handleChangeR=this.handleChangeR.bind(this)
    }
    componentDidMount(){
        this.props.fetchDTCoffees()
            .then(()=>this.setState({loading:false}))
            .then(()=>this.setState({coffees:this.props.coffees}))
    }

    handleChangeR(){
        console.log(this.state.roast)
        console.log(this.state.roastFiltered)
        if (!this.state.roastFiltered) {
            this.setState({roastFiltered:true})
            this.setState({roast:{ 1: false, 2: false, 3: false, 4: false, 5: false }})
            let newVal = { [event.target.value]: event.target.checked }
            let oldVal = { 1: false, 2: false, 3: false, 4: false, 5: false }
            let newState = { ...oldVal, ...newVal }
            this.setState({ [event.target.name]: newState })
        }else{
        let newVal = { [event.target.value]: event.target.checked }
        let oldVal = this.state[event.target.name]
        let newState = { ...oldVal, ...newVal }
        this.setState({ [event.target.name]: newState })
        }
    }

    render(){
        if (this.state.loading){
            return(
                <div></div>
            )}{
            return(
            <div className='index-page'>
                <div className='search-bar-container'>
                    
                </div>
                <div className='index-container'>
                    <div className='index-filters-container'>
                        <div className='index-filters-cat'>
                            Roast
                        </div>
                            <div className='index-filters-items'>
                                <label><input onChange={this.handleChangeR} 
                                    type="checkbox" name='roast' value={1} 
                                    />Light</label>
                                <label><input onChange={this.handleChangeR} 
                                    type="checkbox" name='roast' value={2} 
                                    />Medium Light</label>
                                <label><input onChange={this.handleChangeR} 
                                    type="checkbox" name='roast' value={3} 
                                    />Medium</label>
                                <label><input onChange={this.handleChangeR} 
                                    type="checkbox" name='roast' value={4} 
                                    />Medium Dark</label>
                                <label><input onChange={this.handleChangeR} 
                                    type="checkbox" name='roast' value={5} 
                                    />Dark</label>
                            </div>
                        
                    </div>
                    <div className='index-body-container'>
                        {Object.values(this.state.coffees).map((coffee,idx)=>(
                            this.state.roast[coffee.roast] ? 
                                <IndexItem coffee={coffee}
                                key={`coffee-index-item-${idx}`}/> 
                            : null
                        ))}
                    </div>
                </div>
            </div>
            )
        }
    }
}

export default CoffeeIndex


// string.includes(substring)