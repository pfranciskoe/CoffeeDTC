import React from 'react'
import IndexItem from './index_item'
class CoffeeIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: true,
            name:'',
            coffees: this.props.coffees,
            roast: { 'Light': true, 'Medium Light': true, 'Meduium': true, 'Medium Dark': true, 'Dark': true},
            price:[15,18,22,200],
            flavors: {'Sweet & Smooth': true, 'Chocolaty & Sweet': true, 'Comforting & Rich': true,
                'Balanced & Fruity': true, 'Syrupy & Smooth': true, 'Subtle & Delicate': true, 
                'Funky & Fruity': true, 'Sweet & Tart': true, 'Roasty & Smoky': true},
            weight: {8: true, 10: true, 12: true},
            singleOrigin: true,
            blend: true
        }
        this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount(){
        this.props.fetchCoffees()
            .then(()=>this.setState({loading:false}))
    }

    handleChange(){
        this.setState({[event.target.name]:{[event.target.value]:event.target.checked}})
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
                                <label><input type="checkbox"/>Light</label>
                                <label><input type="checkbox"/>Medium Light</label>
                                <label><input type="checkbox"/>Medium</label>
                                <label><input type="checkbox"/>Medium Dark</label>
                                <label><input type="checkbox"/>Dark</label>
                            </div>
                        
                    </div>
                    <div className='index-body-container'>
                        <IndexItem/>
                    </div>
                </div>
            </div>
            )
        }
    }
}

export default CoffeeIndex


// string.includes(substring)