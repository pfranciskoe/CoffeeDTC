export const fetchCoffee = (dtcoffeeId) => (
    $.ajax({
        url: `/api/dtcoffees/${dtcoffeeId}`,
        method: 'GET'
    })
)

export const fetchCoffees = () => (
    $.ajax({
        url: `/api/dtcoffees/`,
        method: 'GET'
    })
)