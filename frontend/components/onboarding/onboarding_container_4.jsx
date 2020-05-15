import React from 'react'
import { updateAnswer } from '../../actions/onboarding_actions'
import OnboardingForm from './onboarding_form'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  formQuestion: 'What roast level do you typically enjoy?',
  formKey: 'roast',
  formBodys: {
    1: 'More acidic & expressive of the coffee’s original flavors',
    2: 'Just a hint of roasty flavor beginning to come through',
    3: 'Some oil on the bean with deep, caramelized smokiness',
    4: 'We’ll make a pick based on your other responses'
  },
  formHeads: {
    1: 'Light roast',
    2: 'Medium roast',
    3: 'Dark roast',
    4: 'I defer to you'
  },
  formAnswers: [1, 2, 3, 4],
  questionNumber: 4,
  nextQuesitonNumber: 5,
  whyItMatters: 'Each roaster uses their own “scale” to define light, medium and dark roasts; this means “medium” for one roaster may actually be “dark” for another. To make sure you get what you’re expecting, we score all coffees on Trade on our own scale, so keep in mind that the roast level on your bag may be different from what we describe on site.'
})

const mapDispatchtoProps = (dispatch, ownProps) => ({
  updateAnswer: (formKey, formAnswer) => dispatch(updateAnswer(formKey, formAnswer))
})

export default connect(mapStateToProps, mapDispatchtoProps)(OnboardingForm)
