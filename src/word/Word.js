import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Word.css';

let cx = classNames.bind(styles);

class Word extends Component {

  state = {
    bold: false,
    italic: false,
    underline: false,
  };

  onBold = () => this.setState({ bold: !this.state.bold });

  onItalic = () => this.setState({ italic: !this.state.italic });

  onUnderline = () => this.setState({ underline: !this.state.underline });

  onClick = () => this.props.onClick(this);

  render() {
    const className = cx('base', {
      italic: this.state.italic,
      bold: this.state.bold,
      underline: this.state.underline,
    });
    return (
        <span
          { ...this.props }
          className={className}
          onClick={this.onClick}
        >
          { this.props.children }
        </span>
    );
  }
}

export default Word;
