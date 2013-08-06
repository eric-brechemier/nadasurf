/*
  Get a default value when given value is null or undefined

  Parameters:
    a - any, the value to check
    b - any, the default value

  Returns:
    any, the default value when the value is null or undefined,
    the value itself otherwise.

  Dependency:
    nada/no.js
*/
function or( a, b ) {
  return no( a )? b: a;
}
