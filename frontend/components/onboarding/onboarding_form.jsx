import React from 'react'
class OnboardingForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleSubmit(idx){
        this.props.updateAnswer(this.props.formKey, this.props.formAnswers[idx + 1])
        this.props.nextQuesitonNumber !== null ?
        this.props.history.push(`/onboarding/${this.props.nextQuesitonNumber}`) : null
        // this.props.editTaste(this)

    };
    render(){
        console.log(this.props)
        return ( 
            <div className='question-form'>
                    {this.props.questionNumber === 6 ? <img className='quiz-image' src={window.question6}/> : null}
                    {this.props.questionNumber === 5 ? <img className='quiz-image' src={window.question5} /> : null}
                    {this.props.questionNumber === 4 ? <img className='quiz-image' src={window.question4} /> : null}
                    {this.props.questionNumber === 3 ? <img className='quiz-image' src={window.question3} /> : null}
                    {this.props.questionNumber === 2 ? <img className='quiz-image' src={window.question2} /> : null}
                    {this.props.questionNumber === 1 ? <img className='quiz-image' src={window.question1} /> : null}
                <div className='quiz-header-container'>
                    <h6 className='quiz-number'>{`${this.props.questionNumber} of 6`}</h6>
                    <h1 className='quiz-header'>{this.props.formQuestion}</h1>
                </div>
                <div className='questions-container'>
                    {Object.values(this.props.formBodys).map((body,idx)=>(
                        <button 
                            onClick={()=>this.handleSubmit(idx)} 
                        className='quiz-button'
                        >
                            <p className='quiz-head'>{this.props.formHeads[idx+1]}</p> 
                            <p className='quiz-body'>{this.props.formBodys[idx+1]}</p> 
                        </button>
                    ))}
                </div>
            </div>
        )
    }
}

export default OnboardingForm;