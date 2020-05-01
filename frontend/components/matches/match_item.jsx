import React from 'react'
const MatchItem = ({coffee})=>(
    <div className='matched-coffee-item'>
        <div className='matched-coffee-item-photo-box'></div>
        <div className='matched-coffee-item-info-box'>
            <div className='matched-coffee-item-name'><div>{coffee.name}</div></div>
            
            <div className='matched-coffee-item-details'>
                <div className='matched-coffee-item-detail'> {coffee.roast} roast</div>
                <div className='matched-coffee-item-detail'>${coffee.price}</div>
            </div>
            <div className='matched-coffee-item-flavors'>{coffee.flavors}</div>
        </div>
    </div>
)

export default MatchItem;