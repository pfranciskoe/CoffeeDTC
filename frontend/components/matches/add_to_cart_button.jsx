import React from 'react'

const AddToCartButton = ({state, handleSubmit, handleQChange}) =>{
    if (!state.itemAdded) {
    return(
        <form className='add-to-cart-button' onSubmit={handleSubmit}>
            <select className='add-to-cart-select' onChange={handleQChange} value={state.quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button type="submit">Add To Cart</button>
        </form>)
    } else {
    return(
        <button className='add-to-cart-button button-clicked'
        >✓</button>)
    }
}

export default AddToCartButton;