export const fetchCoffee = (dtcoffeeId) => (
    $.ajax({
        url: `/api/dtcoffees/${dtcoffeeId}`,
        method: 'GET'
    })
)