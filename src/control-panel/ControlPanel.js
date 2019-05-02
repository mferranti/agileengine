import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {

    onBold = () => this.props.selected && this.props.selected.onBold();

    onItalic = () => this.props.selected && this.props.selected.onItalic();

    onUnderline = () => this.props.selected && this.props.selected.onUnderline();

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button onClick={this.onBold} className="format-action" type="button"><b>B</b></button>
                    <button onClick={this.onItalic} className="format-action" type="button"><i>I</i></button>
                    <button onClick={this.onUnderline} className="format-action" type="button"><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
