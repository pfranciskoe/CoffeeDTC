import React from 'react'
import { createNewUser } from '../../actions/session.js'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'Sign up'
})

const mapDispatchtoProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(createNewUser(user)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm)
