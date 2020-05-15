import { UPDATE_ANSWER } from '../actions/onboarding_actions'

const OnboardingReducer = (state = null, action) => {
  Object.freeze(state)
  switch (action.type) {
    case UPDATE_ANSWER:
      return Object.assign({}, state, { [action.question]: action.answer })
    default:
      return state
  }
}
export default OnboardingReducer
