import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({children, title, TitleTag, className}) => (
  <div className={`Card ${className}`}>
    {title && <TitleTag className="Card__title">{title}</TitleTag>}
    {children}
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  TitleTag: PropTypes.string
};

Card.defaultPropTypes = {
  TitleTag: 'h2'
};

export default Card;
