import { RECEIVE_ROASTER, RECEIVE_ROASTERS } from '../actions/roaster_actions'

const RoastersReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_ROASTER:
      return Object.assign({}, state, { [action.roaster.id]: action.roaster })
    case RECEIVE_ROASTERS:
      return Object.assign({}, state, action.roasters)
    default:
      return state
  }
}

export default RoastersReducer
