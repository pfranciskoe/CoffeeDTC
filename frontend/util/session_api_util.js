export const signUp = (user) => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
)

export const logIn = (user) => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
)

export const logOut = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
)

export const getUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET',
    })
)