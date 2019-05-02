import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {

    renderWord = (Word, i) => {
      return (<Word key={i} onClick={this.props.onWordSelect} />);
    }

    render() {
        return (
            <div id="file-zone">
                <div id="file">
                  { this.props.text.map(this.renderWord) }
                </div>
            </div>
        );
    }
}

export default FileZone;
