import { removeCoffeeFromCart, updateCoffeeInCart, getCart, addCoffeeToCart, deleteCart } from '../util/cart_api_util'
export const OPEN_CART = 'OPEN_CART'
export const CLOSE_CART = 'CLOSE_CART'
export const RECEIVE_CART = 'RECEIVE_CART'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

export const openCart = () => {
  return {
    type: OPEN_CART,
    cart: true
  }
}

export const closeCart = () => {
  return {
    type: CLOSE_CART
  }
}

const receiveCart = (cartItems) => {
  return {
    type: RECEIVE_CART,
    cartItems
  }
}
const removeCartItem = (cartItem) => {
  return {
    type: REMOVE_CART_ITEM,
    cartItem
  }
}
const receiveCartItem = (cartItem) => {
  return {
    type: RECEIVE_CART_ITEM,
    cartItem
  }
}

export const fetchCart = () => dispatch => getCart()
  .then((cartItems) => dispatch(receiveCart(cartItems)))

export const addItemToCart = (coffee_id, quantity) => dispatch => addCoffeeToCart(coffee_id, quantity)
  .then((cartItem) => dispatch(receiveCartItem(cartItem)))

export const removeItemToCart = (id) => dispatch => removeCoffeeFromCart(id)
  .then((cartItem) => dispatch(removeCartItem(cartItem)))

export const changeItemInCart = (itemId, coffee_id, quantity) => dispatch => updateCoffeeInCart(itemId, coffee_id, quantity)
  .then((cartItem) => dispatch(receiveCartItem(cartItem)))

export const checkoutCart = () => dispatch => deleteCart()
  .then((cartItems) => dispatch(receiveCart(cartItems)))
