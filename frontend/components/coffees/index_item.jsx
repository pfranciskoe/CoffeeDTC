import React from 'react'
import { Link } from 'react-router-dom'
const IndexItem = ({coffee})=>{
    return(
        < Link to = {`/coffees/${coffee.id}`} className='coffee-index-item'>
                <div className='coffee-index-img'>

                </div>
                <div className='coffee-index-text'>
                    <div className='coffee-index-flavors'>
                        {coffee.flavors}
                    </div>
                    <div className='coffee-index-roaster'>
                        
                        {coffee.roasterId}
                        
                    </div>
                    <div className='coffee-index-name'>
                        {coffee.name}
                    </div>
                    <div className='coffee-index-price'>
                        ${coffee.price.toFixed(2)}
                    </div>
                </div>
        </Link>  
        
    )
}
export default IndexItem