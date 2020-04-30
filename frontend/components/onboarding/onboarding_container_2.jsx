import React from 'react';
import { updateAnswer } from '../../actions/onboarding_actions';
import OnboardingForm from './onboarding_form'
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => ({
    formQuestion: 'How do you usually make coffee at home?',
    formKey: 'brewMethod',
    formBodys: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null
    },
    formHeads: {
        1: 'Coffee Maker',
        2: 'French Press',
        3: 'Pour Over',
        4: 'Chemex',
        5: 'AeroPress',
        6: 'Percolator',
        7: 'Cold Brew',
        8: 'Espresso Machine',
        9: 'Moka Pot',
        10: 'Refillable Pods'
    },
    formAnswers: ['Coffee Maker',
                    'French Press',
                    'Pour Over',
                    'Chemex',
                    'AeroPress',
                    'Percolator',
                    'Cold Brew',
                    'Espresso Machine',
                    'Moka Pot',
                    'Refillable Pods'],
    questionNumber: 2,
    nextQuesitonNumber: 3,
    whyItMatters:'Certain coffee-making methods are especially good for certain coffees. We start with this question to make sure the coffee we recommend will taste great with your current coffee routine.'
});

const mapDispatchtoProps = (dispatch, ownProps) => ({
    updateAnswer: (formKey, formAnswer) => dispatch(updateAnswer(formKey, formAnswer))
});

export default connect(mapStateToProps, mapDispatchtoProps)(OnboardingForm);