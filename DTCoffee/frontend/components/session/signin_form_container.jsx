import React from 'react';
import { login } from '../../actions/session.js';
import SessionForm from './session_form'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'login'
});

const mapDispatchtoProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm);