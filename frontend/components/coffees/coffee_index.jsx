import React from 'react';
import IndexItem from './index_item';
import IndexFilterItem from './index_filter_item';
const roastValues = {1:'Light',2:'Medium Light',3:'Medium',4:'Medium Dark',5:'Dark'}
class CoffeeIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: true,
            name:'',
            coffees: {},
            roast: { 1: true, 2: true, 3: true, 4: true, 5: true},
            roastFiltered: false,
            flavorFiltered: false,
            price:[15,18,22,200],
            flavors: {'Sweet & Smooth': true, 'Chocolaty & Sweet': true, 'Comforting & Rich': true,
                'Balanced & Fruity': true, 'Syrupy & Smooth': true, 'Subtle & Delicate': true, 
                'Funky & Fruity': true, 'Sweet & Tart': true, 'Roasty & Smoky': true},
            weight: {8: true, 10: true, 12: true},
            singleOrigin: true,
            blend: true
        }
        this.handleChangeR=this.handleChangeR.bind(this)
        this.handleChangeF=this.handleChangeF.bind(this)
    }
    componentDidMount(){
        this.props.fetchDTCoffees()
            .then(()=>this.setState({loading:false}))
            .then(()=>this.setState({coffees:this.props.coffees}))
    }

    handleChangeR(){
        if (!this.state.roastFiltered) {
            this.setState({roastFiltered:true})
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
    handleChangeF() {
        if (!this.state.flavorFiltered) {
            this.setState({ flavorFiltered: true })
            let newVal = { [event.target.value]: event.target.checked }
            let oldVal = {
                'Sweet & Smooth': false, 'Chocolaty & Sweet': false, 'Comforting & Rich': false,
                'Balanced & Fruity': false, 'Syrupy & Smooth': false, 'Subtle & Delicate': false,
                'Funky & Fruity': false, 'Sweet & Tart': false, 'Roasty & Smoky': false
            }
            let newState = { ...oldVal, ...newVal }
            this.setState({ [event.target.name]: newState })
        } else {
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
                            {Object.keys(this.state.roast).map((roast)=>(
                                <IndexFilterItem handleChange={this.handleChangeR}
                                filterName='roast' filterValue={roast} 
                                filterDisplay={roastValues[roast]}
                                />
                            ))}
                        </div>
                        <div className='index-filters-cat'>
                            Flavor Profile
                        </div>
                        <div className='index-filters-items'>
                            {Object.keys(this.state.flavors).map((flavor)=>(
                                <IndexFilterItem handleChange={this.handleChangeF}
                                filterName='flavors' filterValue={flavor} 
                                filterDisplay={flavor}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='index-body-container'>
                        {Object.values(this.state.coffees).map((coffee,idx)=>(
                            (this.state.roast[coffee.roast] && this.state.flavors[coffee.flavors]) ? 
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