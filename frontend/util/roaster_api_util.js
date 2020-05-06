export const fetchRoaster = (roasterId) => (
    $.ajax({
        url: `/api/roasters/${roasterId}`,
        method: 'GET'
    })
)

export const fetchRoasters = () => (
    $.ajax({
        url: `/api/roasters/`,
        method: 'GET'
    })
)