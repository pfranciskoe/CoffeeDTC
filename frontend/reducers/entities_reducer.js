import usersReducer from './users_reducer.js'
import { combineReducers } from 'redux'
import TasteProfileReducer from './taste_profile_reducer'
import OnboardingReducer from './onboarding_reducer'
import CoffeesReducer from './coffees_reducer'
import RoastersReducer from './roaster_reducer'
const entitiesReducer = combineReducers({
  users: usersReducer,
  tasteProfile: TasteProfileReducer,
  onboarding: OnboardingReducer,
  coffees: CoffeesReducer,
  roasters: RoastersReducer
})

export default entitiesReducer
