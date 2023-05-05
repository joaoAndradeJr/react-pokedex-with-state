import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick, innerText, disabled } = this.props;

    return (
      <button
        onClick={ onClick }
        disabled={ disabled }
      >
        { innerText }
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  innerText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
