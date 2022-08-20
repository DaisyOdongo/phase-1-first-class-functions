
  function receivesAFunction (callback) {
    return callback();
  }

  function returnsANamedFunction() {
      function diel () {alert('DAISY')};
      return diel;
  }

  function returnsAnAnonymousFunction() {
      return function () {};
  } 
    
  