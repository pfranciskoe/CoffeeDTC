import React from 'react'
import SignupFormContainer from './signup_form_container'
import SigninFormContainer from './signin_form_container'
class AuthPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab: 1
        }
    }
    selectTab(tabNumber){
       this.setState({selectedTab:tabNumber})
    }
    render(){
        return (
            <div className='auth-page'>
                <div className='auth-tabs'>
                    <button onClick={()=>this.selectTab(1)}>Sign Up</button>
                    <button onClick={() =>this.selectTab(2)}>Log In</button>
                </div>
                <div className='auth-form-container'>
                    {(this.state.selectedTab === 1) ?
                        <SignupFormContainer className='sign-up-form' /> :
                        <SigninFormContainer className='sign-in-form' />}
                </div>
              
            </div>
        )
    }    
}


export default AuthPage;