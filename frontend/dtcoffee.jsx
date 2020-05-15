import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import configureStore from './store/store'
import { fetchCart } from './actions/cart_actions'
window.fetchCart = fetchCart

document.addEventListener('DOMContentLoaded', () => {
  let store
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    }
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})
