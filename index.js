module.exports = (fn) => {

  const fnString = fn.toString();

  // in a typical case, where the function was defined
  // in a file and was indented 4 spaces, the 4 spaces
  // are preserved after the functions openning like:
  // function () {
  //       return 1;
  //     }
  // so the trick here is to count the preceding
  // white space before the closing brace and remove
  // that from all preceding lines, effectively left
  // aligning the function
  const matches = /\n( +)\}$/.exec(fnString)

  if (!matches || !matches.length) {
    return fnString;
  }

  const [ _, trail ] = matches;

  if (!trail) {
    return fnString;
  }

  const regexp = new RegExp(`^${trail}`);

  return fnString
    .split('\n')
    .map((row) => row.replace(regexp, ''))
    .join('\n');

};
