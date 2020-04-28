import React from 'react'
import SignupFormContainer from './signup_form_container'
import SigninFormContainer from './signin_form_container'
const AuthPage = ()=>(
    <div>
    
    <SignupFormContainer className='sign-up-form'/>
    <SigninFormContainer className='sign-in-form'/>
    </div>
)

export default AuthPage;