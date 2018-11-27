import React, { Component } from 'react';
import FormInput from './FormInput'
import PropTypes from 'prop-types';

export default class MultiInput extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            inputs: props.inputs,
        };
    }

    handleSubmit = (e) => { e.preventDefault() }

    handleChange = (e) => {
        let inputs = [...this.state.inputs];
        inputs[e.target.dataset.id] = e.target.value;
        this.setState({inputs})//, console.log(this.state.inputs));
    }

    handleInputTyping = (e) => {
        
        let index = e.target.dataset.id;

        if((this.state.inputs.length -1) <= index) {
            this.setState((prevState) => ({
                inputs: [...prevState.inputs, ""]
            }));
        }
    }

    removeInput = (e) => {
        
        let inputs = this.state.inputs.slice(e.target.dataset.id, 1);
        
        this.setState({inputs});
    }
    

    renderSingleForm = () => {
        
        let idx = (this.state.inputs.length > 0 ? this.state.inputs.length - 1 : this.state.inputs.length);
        let value = this.state.inputs.length[idx];

        this.setState((prevState) => ({
            inputs: [...prevState.inputs, ""]
        }));

        return(<FormInput idx={idx} value={value} handleInputTyping={this.handleInputTyping} removeInput={this.removeInput} />);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <h4>Test</h4>
                <div id="field-list">
                {
                    this.state.inputs.length === 0 ? this.renderSingleForm() : 
                        this.state.inputs.map((value, idx) => {
                            return(<FormInput idx={idx} value={value} handleInputTyping={this.handleInputTyping} removeInput={this.removeInput} key={idx} />)
                        })
                }


                </div>
                <button>Cancel</button>
                <button>Save</button>
            </form>
        );
    }
}

MultiInput.propTypes = {
    inputs: PropTypes.array,
}