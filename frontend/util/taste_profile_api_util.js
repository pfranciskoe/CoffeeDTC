export const defineTaste = (tasteProfile) => (
    $.ajax({
        url: '/api/taste_profiles',
        method: 'POST',
        data: {tasteProfile}
    })
)
export const editTaste = (tasteProfile) => (
    $.ajax({
        url: `/api/taste_profiles/${tasteProfile.userId}`,
        method: 'PATCH',
        data: { taste_profile: tasteProfile }
    })
)

export const fetchTasteProfile = (userId) => (
    $.ajax({
        url: `/api/taste_profiles/${userId}`,
        method: 'GET'
    })
)