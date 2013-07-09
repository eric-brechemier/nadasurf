/*
  Select items that match a criterion,
  expressed as a boolean function, in a list

  Parameters:
    array - array, the list of items to filter
    criterion - function( item, i ), the criterion applied to select items,
                called with each item and offset as arguments, it shall return
                true when the item is to be included, and false otherwise.

  Returns:
    array, the list of items that match the criterion
*/
function filter( array, criterion ) {
  var
    i,
    length = array.length,
    item,
    result = [];

  for ( i = 0; i < length; i++ ) {
    item = array[i];
    if ( criterion( item, i ) === true ) {
      result.push( item );
    }
  }

  return result;
}
