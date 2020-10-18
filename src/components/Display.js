import React from 'react';
import './Display.css';

export default class DisplayToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.onTextareaChanged = this.onTextareaChanged.bind(this);
    }

    onTextareaChanged() {
    }

    render() {
        return (
            <div className="display-toolbar">
                <form className="display">
                    <textarea className="display-formula" onChange={this.onTextareaChanged}
                              value={this.props.formula.join("")}></textarea>
                    <textarea className="display-input" id="display" rows="1" onChange={this.onTextareaChanged}
                              value={this.props.input}></textarea>
                </form>
            </div>
        )
    }
}