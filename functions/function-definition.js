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
	});



})();