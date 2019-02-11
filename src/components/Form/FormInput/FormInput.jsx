import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.css';

const FormInput = ({id, label, type, value, ...others}) => (
  <div className="FormInput">
    <label htmlFor={id}
           className="FormInput__label">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      {...others} className="FormInput__input"
    />
    <span className="FormInput__focus">&nbsp;</span>
  </div>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
};

FormInput.defaultPropTypes = {
  type: 'text',
  value: ''
};

export default FormInput;
