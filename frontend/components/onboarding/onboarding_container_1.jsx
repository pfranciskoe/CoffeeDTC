import React from 'react';
import { updateAnswer} from '../../actions/onboarding_actions';
import OnboardingForm from './onboarding_form'
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => ({
    formQuestion: 'What is your coffee experience level?',
    formKey: 'experienceLevel',
    formBodys: {1:'I’d like to start with something approachable and easy to love.',
                2:'I buy premium coffee from the grocery store and I know a little about roast levels',
                3:'I buy coffee from specialty roasters and I know the difference between blends and single origins.',
                4:'I know my Caturra from my Bourbon and cupping is my favorite hobby.'},
    formHeads: { 1: 'I’m pretty new to all of this',
                2: 'I’m at an intermediate stage',
                3: 'I’m pretty advanced',
                4:'I’m a total coffee nerd'},
    questionNumber: 1,
    nextquesitonNumber:2
});

const mapDispatchtoProps = (dispatch, ownProps) => ({
    updateAnswer: (formKey, formAnswer) => dispatch(updateAnswer(formKey, formAnswer))
});

export default connect(mapStateToProps, mapDispatchtoProps)(OnboardingForm);