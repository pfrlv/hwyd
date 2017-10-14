export default (str, substr) => {
  if (str) {
    return str.indexOf(substr) === -1 ? false : true
  } else {
    return false
  }
}