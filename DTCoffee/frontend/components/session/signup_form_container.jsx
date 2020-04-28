import React from 'react';
import { createNewUser } from '../../actions/session.js';
import SessionForm from './session_form'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'signup'
});

const mapDispatchtoProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(createNewUser(user))
});

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm);
