const types = [
  "LOGIN"
];

export default types.reduce((prev, type) => {
  prev[type] = type;
  return prev;
}, {});
