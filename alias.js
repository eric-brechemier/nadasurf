/*
  Define an alias for a (Native prototype) function

  The alias allows to call the function with the context object
  as first argument, followed with regular arguments of the function.

  Example:
    var has = alias( Object.prototype.hasOwnProperty );
    has( object, name ) === object.hasOwnProperty( name ); // true

  Parameter:
    func - function, a method part of the prototype of a Constructor

  Dependency:
    nada/bind.js
*/
function alias( func ) {
  return bind( func.call, func );
}

