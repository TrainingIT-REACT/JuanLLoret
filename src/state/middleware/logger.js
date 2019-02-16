import log from 'log-utils';

const logger = (store) => (next) => (action) => {
  console.log(log.heading(`${log.info} Action @ ${action.type} ${log.timestamp}`), action);
  console.log(log.heading(`${log.error} Before   `), store.getState());
  const result = next(action);
  console.log(log.heading(`${log.success} Current  `), store.getState());
  return result;
};

export default logger;
