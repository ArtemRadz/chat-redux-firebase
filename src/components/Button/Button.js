import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ children, onClick, className, disabled, active, ...attrs }) => {
  const classes = classNames('button-component', className, { active });
  return (
    <button {...attrs} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false
};

export default Button;
