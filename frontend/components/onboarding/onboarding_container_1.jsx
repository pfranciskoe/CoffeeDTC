import React from 'react';
import { updateAnswer} from '../../actions/onboarding_actions';
import OnboardingForm from './session_form'
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formQuestion: 'What is your coffee experience level?',
    formKey: 'experienceLevel',
    formOptions: ['I’d like to start with something approachable and easy to love.' 'I buy premium coffee from the grocery store and I know a little about roast levels']

});

const mapDispatchtoProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm);