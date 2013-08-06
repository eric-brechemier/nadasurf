/*
  Compute a value by processing a list of items, one at a time

  Parameters:
    accumulator - any, the initial value of the computation
    array - array, the list of items to process
    operation - function( accumulator, value, offset ), a function called
                on each item in turn to compute step by step an aggregate
                value from the list. The accumulator is the previous result
                of the operation, or the value provided to reduce() initially.
                Both the value and offset of the current item are provided.

  Returns:
    any, the value of the accumulator after the last item has been processed,
    or the initial value of the accumulator when the list is empty.
*/
function reduce( accumulator, array, operation ) {
  forEach( array, function( item, i ) {
    accumulator = operation( accumulator, item, i );
  });

  return accumulator;
}
