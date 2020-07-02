import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TypingEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      displayText: "",
    };
    this.type = this.type.bind(this);
    this.erase = this.erase.bind(this);
    this.startTyping = this.startTyping.bind(this);
  }

  componentDidMount() {
    this.startTyping();
  }

  componentWillUnmount() {
    this._timeout && clearTimeout(this._timeout);
  }

  startTyping() {
    this._timeout = setTimeout(() => {
      this.type();
    }, this.props.typingDelay);
  }

  type() {
    let { index, displayText } = this.state;
    const text = this.props.text[index];
    if (text.length > displayText.length) {
      displayText = text.substr(0, displayText.length + 1);
      this.setState({ displayText }, () => {
        this._timeout = setTimeout(() => {
          this.type();
        }, this.props.speed);
      });
    } else if (index < this.props.text.length - 1) {
      this._timeout = setTimeout(() => {
        this.erase();
      }, this.props.eraseDelay);
    }
  }

  erase() {
    let { index, displayText } = this.state;
    if (displayText.length === 0) {
      const textArray = this.props.text;
      index = index + 1 === textArray.length ? 0 : index + 1;
      this.setState({ index }, () => {
        this.startTyping();
      });
    } else {
      displayText = displayText.substr(
        -displayText.length,
        displayText.length - 1
      );
      this.setState({ displayText }, () => {
        this._timeout = setTimeout(() => {
          this.erase();
        }, this.props.speed);
      });
    }
  }

  render() {
    const { className } = this.props;
    const { displayText } = this.state;
    return (
      <span className={className}>
        <span>{displayText}</span>
        <span className="font-hairline relative cursor blink">|</span>
      </span>
    );
  }
}

TypingEffect.defaultProps = {
  speed: 200,
  eraseDelay: 5000,
  typingDelay: 2500,
};

TypingEffect.propTypes = {
  speed: PropTypes.number.isRequired,
  typingDelay: PropTypes.number.isRequired,
  eraseDelay: PropTypes.number.isRequired,
  text: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
