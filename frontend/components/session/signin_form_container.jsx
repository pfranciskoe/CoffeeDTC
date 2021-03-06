import React from 'react'
import { login } from '../../actions/session.js'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'Log In'
})

const mapDispatchtoProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm)
