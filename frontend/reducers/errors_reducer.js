import { combineReducers } from 'redux'
import sessionErrorsReducer from './session_errors_reducer'
import tasteProfileErrorsReducer from './taste_profile_errors_reducer'
const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tasteProfile: tasteProfileErrorsReducer
})

export default errorsReducer
