import React from 'react'
import IndexItem from './index_item'
import IndexFilterItem from './index_filter_item'
const roastValues = { 1: 'Light', 2: 'Medium Light', 3: 'Medium', 4: 'Medium Dark', 5: 'Dark' }
class CoffeeIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      name: '',
      coffees: {},
      roasters: {},
      roast: { 1: true, 2: true, 3: true, 4: true, 5: true },
      roastFiltered: false,
      flavorFiltered: false,
      weightFiltered: false,
      price: [0, 200],
      flavors: {
        'Sweet & Smooth': true,
        'Chocolaty & Sweet': true,
        'Comforting & Rich': true,
        'Sweet & Inviting': true,
        'Balanced & Fruity': true,
        'Syrupy & Smooth': true,
        'Subtle & Delicate': true,
        'Funky & Fruity': true,
        'Sweet & Tart': true,
        'Roasty & Smoky': true
      },
      weight: { 8: true, 10: true, 12: true },
      singleOrigin: true,
      blend: true
    }
    this.handleChangeR = this.handleChangeR.bind(this)
    this.handleChangeF = this.handleChangeF.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChangeP = this.handleChangeP.bind(this)
    this.handleChangeW = this.handleChangeW.bind(this)
    // this.handleClear=this.handleClear.bind(this)
  }

  componentDidMount () {
    this.props.fetchDTCoffees()
      .then(() => this.setState({ coffees: this.props.coffees }))
      .then(() => this.props.fetchAllRoasters())
      .then(() => this.setState({ roasters: this.props.roasters }))
      .then(() => this.setState({ loading: false }))
  }

  handleChangeR () {
    if (!this.state.roastFiltered) {
      this.setState({ roastFiltered: true })
      const newVal = { [event.target.value]: event.target.checked }
      const oldVal = { 1: false, 2: false, 3: false, 4: false, 5: false }
      const newState = { ...oldVal, ...newVal }
      this.setState({ [event.target.name]: newState })
    } else {
      const newVal = { [event.target.value]: event.target.checked }
      const oldVal = this.state[event.target.name]
      const newState = { ...oldVal, ...newVal }
      if (JSON.stringify(newState) != JSON.stringify({ 1: false, 2: false, 3: false, 4: false, 5: false })) {
        this.setState({ [event.target.name]: newState })
      } else {
        this.setState({ [event.target.name]: { 1: true, 2: true, 3: true, 4: true, 5: true } })
        this.setState({ roastFiltered: false })
      }
    }
  }

  handleChangeW () {
    if (!this.state.weightFiltered) {
      this.setState({ weightFiltered: true })
      const newVal = { [event.target.value]: event.target.checked }
      const oldVal = { 8: false, 10: false, 12: false }
      const newState = { ...oldVal, ...newVal }
      this.setState({ [event.target.name]: newState })
    } else {
      const newVal = { [event.target.value]: event.target.checked }
      const oldVal = this.state[event.target.name]
      const newState = { ...oldVal, ...newVal }
      if (JSON.stringify(newState) != JSON.stringify({ 8: false, 10: false, 12: false })) {
        this.setState({ [event.target.name]: newState })
      } else {
        this.setState({ [event.target.name]: { 8: true, 10: true, 12: true } })
        this.setState({ weightFiltered: false })
      }
    }
  }

  handleChangeP () {
    this.setState({ [event.target.name]: event.target.value.split(',').map(num => Number(num)) })
  }

  handleChangeF () {
    if (!this.state.flavorFiltered) {
      this.setState({ flavorFiltered: true })
      const newVal = { [event.target.value]: event.target.checked }
      const oldVal = {
        'Sweet & Smooth': false,
        'Chocolaty & Sweet': false,
        'Comforting & Rich': false,
        'Sweet & Inviting': false,
        'Balanced & Fruity': false,
        'Syrupy & Smooth': false,
        'Subtle & Delicate': false,
        'Funky & Fruity': false,
        'Sweet & Tart': false,
        'Roasty & Smoky': false
      }
      const newState = { ...oldVal, ...newVal }
      this.setState({ [event.target.name]: newState })
    } else {
      const newVal = { [event.target.value]: event.target.checked }
      const oldVal = this.state[event.target.name]
      const newState = { ...oldVal, ...newVal }
      if (JSON.stringify(newState) != JSON.stringify({
        'Sweet & Smooth': false,
        'Chocolaty & Sweet': false,
        'Comforting & Rich': false,
        'Sweet & Inviting': false,
        'Balanced & Fruity': false,
        'Syrupy & Smooth': false,
        'Subtle & Delicate': false,
        'Funky & Fruity': false,
        'Sweet & Tart': false,
        'Roasty & Smoky': false
      })) {
        this.setState({ [event.target.name]: newState })
      } else {
        this.setState({
          [event.target.name]: {
            'Sweet & Smooth': true,
            'Chocolaty & Sweet': true,
            'Comforting & Rich': true,
            'Sweet & Inviting': true,
            'Balanced & Fruity': true,
            'Syrupy & Smooth': true,
            'Subtle & Delicate': true,
            'Funky & Fruity': true,
            'Sweet & Tart': true,
            'Roasty & Smoky': true
          }
        })
        this.setState({ flavorFiltered: false })
      }
    }
  }

  handleSearch () {
    this.setState({ name: event.target.value })
  }

  // handleClear(){
  //     this.setState({
  //         roast: { 1: true, 2: true, 3: true, 4: true, 5: true },
  //         roastFiltered: false,
  //         flavorFiltered: false,
  //         price: [15, 18, 22, 200],
  //         flavors: {
  //             'Sweet & Smooth': true, 'Chocolaty & Sweet': true, 'Comforting & Rich': true,
  //             'Balanced & Fruity': true, 'Syrupy & Smooth': true, 'Subtle & Delicate': true,
  //             'Funky & Fruity': true, 'Sweet & Tart': true, 'Roasty & Smoky': true
  //         },
  //         weight: { 8: true, 10: true, 12: true },
  //         singleOrigin: true,
  //         blend: true})
  // }
  render () {
    if (this.state.loading) {
      return (
        <div />
      )
    } {
      return (
        <div className='index-page'>
          <div className='store-header'>
            <div>
                    ALL THE COFFEES.
            </div>
            <div className='store-sub-header'>
                    . . . or at least the ones we drink.
            </div>
          </div>
          <div className='search-bar-container'>
            <input type='text' onChange={this.handleSearch} placeholder='Search' />
          </div>
          <div className='index-container'>
            {/* <div className='index-filters-container' onClick={this.handleClear}>
                        Clear Filters
                    </div> */}
            <div className='index-filters-container'>
              <div className='index-filters-cat'>
                            Price
              </div>
              <div className='index-filters-items'>
                <form onChange={this.handleChangeP}>
                  <label>
                    <input name='price' id='rad-1' type='radio' value='0,15' />
                                    Under $15
                  </label>
                  <label>
                    <input name='price' id='rad-2' type='radio' value='15,18' />
                                     $15 - $18
                  </label>
                  <label>
                    <input name='price' id='rad-3' type='radio' value='18,22' />
                                     $18 - $22
                  </label>
                  <label>
                    <input name='price' id='rad-4' type='radio' value='22,200' />
                                    Above $22
                  </label>
                  <label>
                    <input name='price' id='rad-5' type='radio' value='0,200' />
                                    All
                  </label>
                </form>
              </div>
              <div className='index-filters-cat'>
                            Roast
              </div>
              <div className='index-filters-items'>
                {Object.keys(this.state.roast).map((roast, idx) => (
                  <IndexFilterItem
                    handleChange={this.handleChangeR}
                    filterName='roast' filterValue={roast}
                    filterDisplay={roastValues[roast]}
                    key={`roast-${idx}`}
                  />
                ))}
              </div>
              <div className='index-filters-cat'>
                            Flavor Profile
              </div>
              <div className='index-filters-items'>
                {Object.keys(this.state.flavors).map((flavor, idx) => (
                  <IndexFilterItem
                    handleChange={this.handleChangeF}
                    filterName='flavors' filterValue={flavor}
                    filterDisplay={flavor}
                    key={`flavor-${idx}`}
                  />
                ))}
              </div>
              <div className='index-filters-cat'>
                            Weight(oz.)
              </div>
              <div className='index-filters-items'>
                {Object.keys(this.state.weight).map((weight, idx) => (
                  <IndexFilterItem
                    handleChange={this.handleChangeW}
                    filterName='weight' filterValue={weight}
                    filterDisplay={weight}
                    key={`weight-${idx}`}
                  />
                ))}
              </div>
            </div>
            <div className='index-body-container'>
              {Object.values(this.state.coffees).map((coffee, idx) => (
                (this.state.roast[coffee.roast] &&
                                this.state.flavors[coffee.flavors] &&
                                this.state.price[0] <= coffee.price &&
                                this.state.price[1] >= coffee.price &&
                                this.state.weight[coffee.weight] &&
                                (
                                  coffee.name.toLowerCase().includes(this.state.name.toLowerCase()) ||
                                    this.state.roasters[coffee.roasterId].name.toLowerCase().includes(this.state.name.toLowerCase()) ||
                                    this.state.name === '')
                )
                  ? <IndexItem
                    coffee={coffee}
                    roaster={this.state.roasters[coffee.roasterId]}
                    key={`coffee-index-item-${idx}`}
                  />
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
