/*
  Find the first item that matches given criterion

  Parameters:
    array - array, the list of items to check
    criterion - function( item ), the condition to check,
                called with each item of the array in turn,
                it must return true to select the item and end the search,
                and false otherwise.

  Returns:
    any, the first item for which criterion() returns true,
    or null if no such item is found.
*/
function find( array, criterion ) {
  var result = null;

  forEach( array, function( item ) {
    if ( criterion( item ) ) {
      result = item;
      return true;
    }
  });

  return result;
}
