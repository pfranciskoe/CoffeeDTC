import React from 'react'

const IndexItem = ({coffee})=>{
    return(
        <div className='coffee-index-item'>
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
                
        </div>
    )
}
export default IndexItem