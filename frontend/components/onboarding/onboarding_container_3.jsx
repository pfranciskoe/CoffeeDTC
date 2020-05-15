import React from 'react'
import { updateAnswer } from '../../actions/onboarding_actions'
import OnboardingForm from './onboarding_form'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  formQuestion: 'Do you add anything to your coffee?',
  formKey: 'additions',
  formBodys: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null
  },
  formHeads: {
    1: 'Milk or Cream',
    2: 'Flavored Creamer or Syrups',
    3: 'Non-Dairy Milk',
    4: 'Sugar or sweetener',
    5: 'Nope, I take it black',
    6: 'A mix of these choices'
  },
  formAnswers: ['Milk or Cream',
    'Flavored Creamer or Syrups',
    'Non-Dairy Milk',
    'Sugar or sweetener',
    'Nope, I take it black',
    'A mix of these choices'],
  questionNumber: 3,
  nextQuesitonNumber: 4,
  whyItMatters: 'Some coffees can be enhanced by milk, but others may react negatively and result in an unpleasant taste. A little sugar, sweetener or added flavorings can bring out the natural sweetness of some coffees, but overpower others. We’ll recommend coffee that works best with what you like.'
})

const mapDispatchtoProps = (dispatch, ownProps) => ({
  updateAnswer: (formKey, formAnswer) => dispatch(updateAnswer(formKey, formAnswer))
})

export default connect(mapStateToProps, mapDispatchtoProps)(OnboardingForm)
