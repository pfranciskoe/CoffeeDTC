import { fetchRoaster, fetchRoasters } from '../util/roaster_api_util'
export const RECEIVE_ROASTER = 'RECEIVE_ROASTER'
export const RECEIVE_ROASTERS = 'RECEIVE_ROASTERS'

const receiveRoaster = roaster => ({
  type: RECEIVE_ROASTER,
  roaster
})
const receiveRoasters = roasters => ({
  type: RECEIVE_ROASTERS,
  roasters
})

export const fetchARoaster = roasterId => dispatch => fetchRoaster(roasterId)
  .then(roaster => dispatch(receiveRoaster(roaster)))

export const fetchAllRoasters = () => dispatch => fetchRoasters()
  .then(roasters => dispatch(receiveRoasters(roasters)))
