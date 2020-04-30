import React from 'react';
import { updateAnswer } from '../../actions/onboarding_actions';
import { defineTasteProfile, editTaste } from '../../actions/taste_profile_actions'
import OnboardingForm from './onboarding_form'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    state: state,
    formQuestion: 'Do you buy ground coffee or whole bean coffee?',
    formKey: 'ground',
    formBodys: {
        1: 'Grind it up!',
        2: "I'll take care of the grinding!"
    },
    formHeads: {
        1: 'Ground',
        2: 'Whole Bean'
    },
    formAnswers: [true,false],
    questionNumber: 6,
    nextquesitonNumber: null,
    imageLink: window.question6
});

const mapDispatchtoProps = (dispatch, ownProps) => ({
    updateAnswer: (key, answer) => dispatch(updateAnswer(key, answer)),
    defineTasteProfile: (tasteProfile) => dispatch(defineTasteProfile(tasteProfile)),
    editTaste: (tasteProfile) => dispatch(editTaste(tasteProfile))
});

export default connect(mapStateToProps, mapDispatchtoProps)(OnboardingForm);