/*
  Apply a function to all the elements in a list

  Parameters:
    array - array, the list of items to process
    operation - function( value, offset ), the function to apply to each item,
                called with the value and offset of each item. The result of
                the operation is stored at the same offset in result array.

  Returns:
    array, the list of results of the operation applied to each item
    of the given array.
*/
function map( array, operation ) {
  var result = Array( array.length );

  forEach( array, function( item, i ) {
    result[ i ] = operation( item, i );
  });

  return result;
}
