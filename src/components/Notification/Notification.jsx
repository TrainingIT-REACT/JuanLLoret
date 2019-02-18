import React from 'react';

import './Notification.scss';

function renderIcon(type) {
  let icon;
  if (type.toUpperCase() === 'ERROR') {
    icon = 'exclamation-triangle';
  } else if (type.toUpperCase() === 'SUCCESS') {
    icon = 'check-circle';
  } else {
    icon = 'info-circle';
  }
  return <i className={`fas fa-${icon}`}></i>
}

const Notification = ({type, message}) => (
  <div className="Notification" role="alertdialog">
    <div className={`Notification__icon Notification__icon--${type}`}>
      {renderIcon(type)}
    </div>
    <div className="Notification__message">
      {message}
    </div>
  </div>
);

export default Notification;
