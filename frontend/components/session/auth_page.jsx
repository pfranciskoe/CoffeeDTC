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
                    <button onClick={()=>this.selectTab(1)}
                    className={(this.state.selectedTab === 1) ? 'tab-active' : 'tab-inactive' }>Sign Up</button>
                    <button onClick={() =>this.selectTab(2)}
                    className={(this.state.selectedTab === 2) ? 'tab-active' : 'tab-inactive'}>Log In</button>
                </div>
                    {(this.state.selectedTab === 1) ?
                        <SignupFormContainer className='sign-up-form' /> :
                        <SigninFormContainer className='sign-in-form' />}
            </div>
        )
    }    
}


export default AuthPage;