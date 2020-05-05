export const addCoffeeToCart = (coffeeId, quantity) => (
    $.ajax({
        url: '/api/cart_items',
        method: 'POST',
        data: { coffee_id: coffeeId, quantity: quantity}
    })
)
export const removeCoffeeFromCart = (itemId) => (
    $.ajax({
        url: `/api/cart_items/${itemId}`,
        method: 'DELETE'
    })
)

export const updateCoffeeInCart = (itemId, coffeeId, quantity) => (
    $.ajax({
        url: `/api/cart_items/${itemId}`,
        method: 'PATCH',
        data: { coffee_id: coffeeId, quantity: quantity }

    })
)
export const getCart = () => (
    $.ajax({
        url: '/api/carts/1',
        method: 'GET'
    })
)

export const deleteCart = () => (
    $.ajax({
        url: '/api/carts/1',
        method: 'DELETE'
    })
)