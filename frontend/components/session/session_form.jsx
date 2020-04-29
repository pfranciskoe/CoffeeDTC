import React from 'react'

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal)
        this.setState({
            email: '',
            password: ''
        })
        
    }
    update(field){
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }
    render(){
        return (
                <form onSubmit={this.handleSubmit} className='session-form-form'>
                    <label className='session-form-field-name'>Email
                    <br/>
                        <input onChange={this.update('email')} 
                        type="email" placeholder='Email' value={this.state.email}
                        className='session-form-field-input'/>
                    </label>
                    <label className='session-form-field-name'>Password
                    <br/>
                        <input onChange={this.update('password')}
                        placeholder='Password'
                        type="password" value={this.state.password}
                        className='session-form-field-input' />
                    </label>
                    <button className='btn' type='submit'>{this.props.formType}</button>
                    <div className='error-box'>
                    {this.props.errors.session ? Object.values(this.props.errors.session).map((error,idx)=>(
                        <p className='auth-error' key={`error-${idx}`}>{error}</p>
                    )) : null }
                    </div>
                </form>
        )
    };
}

export default SessionForm;
