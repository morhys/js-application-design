(function(){

	var score = 6;

	// you cannot declare a function conditionally 
	if (score > 5) {
	  function grade() {
	    return 'pass';
	  }
	} else {
	  function grade() {
	    return 'fail';
	  }
	}

	// JavaScript functions are declared using a function literal 
	// that creates a function value in the same way that a numeric 
	// literal creates a numeric value. As first- class objects, 
	// functions are values that can be used in the language just like other values, 
	// such as strings and numbers.

	function isNimble() { return true; }

	var canFly = function(){ return true; };

	var namedCanFly = function namedCanFly(){ return true; };

	// All tests that occur after a call to QUnit.module() 
	// will be grouped into that module, until other QUnit.module() 
	// is called. The test names will all be preceded by the module 
	// name in the test results. You can then use that module name 
	// to select tests to run.
	module('Pass or Fail');

	test('Conditional function declaration.', function () {
	  	// Firefox: Pass
	  	// Chrome, Safari, IE, Opera: Fail
	  	equal(grade(), 'pass', 'Grade should pass.');

	  	equal(typeof isNimble, 'function', 'isNimble() defined');
	  	equal(isNimble.name, 'isNimble', 'isNimble() has a name');

	  	equal(typeof canFly, 'function', 'canFly() defined');
	  	equal(canFly.name, '', 'canFly() has no name');

	  	equal(typeof namedCanFly, 'function', 'namedCanFly() defined');
	  	equal(namedCanFly.name, 'namedCanFly', 'namedCanFly() has a name');


	});



})();