import React from 'react'
const MatchItem = ({ coffee, addItemToCart})=>(
    <div className='matched-coffee-item'>
        <div className='matched-coffee-item-photo-box'></div>
        <div className='matched-coffee-item-info-box'>
            <div className='matched-coffee-item-name'><div>{coffee.name}</div></div>
            <div className='matched-coffee-item-flavors'>{coffee.flavors}</div>
            <div className='matched-coffee-item-details'>
                <div className='matched-coffee-item-detail'> 
                    {coffee.roast === 1 ? 'Light ' : null}
                    {coffee.roast === 2 ? 'Medium Light ' : null}
                    {coffee.roast === 3 ? 'Medium ' : null}
                    {coffee.roast === 4 ? 'Medium Dark ' : null}
                    {coffee.roast === 5 ? 'Dark ' : null}
                  Roast</div>
                <div className='matched-coffee-item-detail'>${coffee.price}</div>
            </div>
            <div onClick={() =>addItemToCart(coffee.id,1)}
                className='add-to-cart-button'
            >Add To Cart</div>
        </div>
    </div>
)

export default MatchItem;