/*
  Run given function for each property of given object matching the filter,
  skipping inherited properties

  Parameters:
    object - object, the object to iterate
    callback - function( value, name ): boolean, the callback called for each
               property owned by the object (not inherited), with property
               value and name provided as arguments.

  Notes:
    * properties are iterated in no particular order
    * whether properties deleted or added during the iteration are iterated
      or not is unspecified
*/
function forEachProperty( object, callback ) {
  var
    name,
    value;

  for ( name in object ) {
    if ( hasOwnProperty( object, name ) ) {
      value = object[name];
      callback( value, name );
    }
  }
}
