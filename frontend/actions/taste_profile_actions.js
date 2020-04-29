export const RECEIVE_TASTE_PROFILE = 'RECEIVE_TASTE_PROFILE'
import { defineTaste, editTaste, fetchTasteProfile} from '../util/taste_profile_api_util'
export const RECEIVE_TASTE_ERRORS = 'RECEIVE_TASTE_ERRORS';

const receiveErrors = errors => ({
    type: RECEIVE_TASTE_ERRORS,
    errors
})
const receiveTasteProfile = tasteProfile => ({
    type: RECEIVE_TASTE_PROFILE,
    tasteProfile
})

export const defineTasteProfile = formTaste => dispatch => defineTaste(formTaste)
    .then(tasteProfile => dispatch(receiveTasteProfile(tasteProfile)), errors => dispatch(receiveErrors(errors.responseJSON)));

export const updateTaste = formTaste => dispatch => editTaste(formTaste)
    .then(tasteProfile => dispatch(receiveTasteProfile(tasteProfile)), errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchTaste = userid => dispatch => fetchTasteProfile(userid)
    .then((tasteProfile) => dispatch(receiveTasteProfile(tasteProfile), errors => dispatch(receiveErrors(errors.responseJSON))));
