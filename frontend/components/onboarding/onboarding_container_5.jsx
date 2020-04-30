import React from 'react';
import { updateAnswer } from '../../actions/onboarding_actions';
import OnboardingForm from './onboarding_form'
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => ({
    formQuestion: 'How do you like your coffee to taste?',
    formKey: 'adventure',
    formBodys: {
        1: 'I like coffee that tastes like coffee',
        2: 'But nothing too crazy',
        3: 'Take me on an adventure',
        4: 'We’ll make a pick based on your other responses'
    },
    formHeads: {
        1: 'Classic and traditional',
        2: 'Hints of something different',
        3: 'Surprising and unconventional',
        4: 'I defer to you'
    },
    formAnswers: ['easy', 'medium', 'hard', 'none'],
    questionNumber: 5,
    nextQuesitonNumber: 6,
    whyItMatters: 'Taste is a subjective thing. And while none of the coffees on Trade contain any added flavors or ingredients (just 100% coffee!) they can taste totally different based on where they’re from, how they’re processed and how they’re roasted.'
});

const mapDispatchtoProps = (dispatch, ownProps) => ({
    updateAnswer: (formKey, formAnswer) => dispatch(updateAnswer(formKey, formAnswer))
});

export default connect(mapStateToProps, mapDispatchtoProps)(OnboardingForm);