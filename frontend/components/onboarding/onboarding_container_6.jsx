import React from 'react';
import { refreshUser} from '../../actions/session'
import { updateAnswer } from '../../actions/onboarding_actions';
import { defineTasteProfile, updateTaste } from '../../actions/taste_profile_actions'
import OnboardingForm from './onboarding_form'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    profile: state.entities.onboarding,
    currentId: state.session.id,
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
    imageLink: window.question6,
    whyItMatters: 'We try to offer ground to order coffee from as many roasters as possible.If ground is your thing we’ll make sure we don’t recommend a coffee that’s only available as whole bean.'
});

const mapDispatchtoProps = (dispatch) => ({
    updateAnswer: (key, answer) => dispatch(updateAnswer(key, answer)),
    defineTasteProfile: (tasteProfile) => dispatch(defineTasteProfile(tasteProfile)),
    updateTaste: (tasteProfile) => dispatch(updateTaste(tasteProfile)),
    refreshUser: (userId) => dispatch(refreshUser(userId))
});

export default connect(mapStateToProps, mapDispatchtoProps)(OnboardingForm);