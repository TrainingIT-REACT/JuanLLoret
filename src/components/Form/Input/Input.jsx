import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
      error: false
    };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.error === true && !state.error) {
      return {error: true};
    }
    return null;
  }

  render () {
    const {
      id,
      type,
      value,
      label,
      onFocus,
      onChange,
      onBlur,
      error,
      ...others
    } = this.props;

    return <div className={`Input ${this.state.error ? 'Input--error': ''}`}>
      <label
        htmlFor={id}
        className={`Input__label ${this.state.error ? 'Input__label--error': ''}`}
      >
        {label} {this.props.required && '*'}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onFocus={(e) => {this.proxyEvent(e, this.onFocus, onFocus)}}
        onBlur={(e) => {this.proxyEvent(e, this.onBlur, onBlur)}}
        onChange={(e) => {this.proxyEvent(e, this.onChange, onChange)}}
        {...others}
        className={`Input__input`}
      />
      <span className={`Input__focus ${this.state.error ? 'Input__focus--error': ''}`}>&nbsp;</span>
    </div>
  }

  proxyEvent(e, here, there) {
    e.preventDefault();
    here(e);
    there(e);
  }

  onFocus() {
    this.setState({dirty: true});
  }

  onChange(e) {
    const {value} = e.target;
    if (value && this.props.required) {
      this.setState({error: false});
    }
  }

  onBlur(e) {
    const {value} = e.target;
    if (this.state.dirty && this.props.required && !value) {
      this.setState({error: true});
    }
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  value: '',
  required: false,
  onFocus: () => {},
  onChange: () => {},
  onBlur: () => {},
  error: null
};

export default Input;
