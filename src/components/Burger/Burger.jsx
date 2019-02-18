import React from 'react';

import './Burger.scss';

const Burger = ({children, open, onClick, className}) => (
  <button
    type="button"
    role="switch"
    aria-checked={open}
    className={`Burger ${className}`}
    onClick={onClick}
  >
    <div className={`Burger__box ${open ? 'Burger__box--open': ''}`}>
      <div className={`Burger__inner`}></div>
    </div>
    <div className="Burger__children">
      {children}
    </div>
  </button>
);

export default Burger;
