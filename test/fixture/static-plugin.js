;(function() {
  "use strict"

  /**
   *  Mock static method.
   */
  function method(el) {
    return el;
  }

  module.exports = function plugin() {
    this.air.method = method;
  }
})();
