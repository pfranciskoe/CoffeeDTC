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
        this.props.processForm(user);
    }
    update(field){
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='session-form-form'>
                    <label className='session-form-field-name'>Email
                        <input onChange={this.update('email')} 
                        type="text" value={this.state.email}
                        className='session-form-field-input'/>
                    </label>
                    <label className='session-form-field-name'>Password
                        <input onChange={this.update('email')}
                        type="password" value={this.state.email}
                        className='session-form-field-input' />
                    </label>
                    <button type='submit'>{this.props.formType}</button>
                </form>
            </div>
        )
    };
}

export default SessionForm;
