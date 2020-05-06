import React from 'react'

const IndexItem = ({coffee})=>{
    return(
        <div className='coffee-index-item'>{coffee.name}</div>
    )
}
export default IndexItem