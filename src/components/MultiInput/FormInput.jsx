import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FromInput extends Component {
    render() {
        return(
            <div className="form-fields">
                <label>test attribute</label>
                <input type="text" className="input" data-id={this.props.idx} defaultValue={this.props.value} onKeyDown={this.props.handleInputTyping} />
                { this.props.value ? (<a href="#/" data-id={this.props.idx} onClick={this.props.removeInput}>X</a>) : "" }
            </div>
        )
    }
}

FromInput.propTypes = {
    idx: PropTypes.number.isRequired,
    handleInputTyping: PropTypes.func.isRequired,
    removeInput: PropTypes.func.isRequired,
}