// The desire to use block scope can be a good code smell that 
// indicates that it may be time to break a function into smaller 
// pieces in order to encourage readability, organization, and code reuse. 
// It's a good idea to keep functions small.


// HOISTING

var x = 1;

(function(){
	console.log(x); // undefined
	var x = 2;
})();


(function(){
	var x; // declared is hoisted and x is undefined
	console.log(x)
	x = 2; // iniialization is still down here. // logs: 2
})();


// Functions behave a little differently. Both the identifier number and the 
// function body are hoisted, whereas the value 2 was not hoisted along with x:

test('Function declaration hoisting', function(){

	function number(){
		return 1;
	}

	(function(){
		equal(number(), 2, 'Inner scope wins');

		function number() {
			return 2;
		}

	})();

	equal(number(), 1, 'Outer scope still works.')

});

// Above code is equivalent to:

test('Function decalarions hoisted', function(){

	function number(){
		return 1;
	}

	(function(){
		function number(){
			return 2;
		}

		equal(number(), 2, 'Innter scope wins.');
	})();

	equal(number(), 1, 'Outer scope still works.')

});


// Function expressions do not share this behavior, because they do not declare 
// a function. Instead, they declare a variable and are subject to the same 
// variable-hoisting behavior:


test('Function expression hoisting', function(){

	function number(){
		return 1;
	}

	(function(){
		try {
			number();
		} catch(e) {
			ok(true, 'number() is undefined');
		}

		var number = function number(){
			return 2;
		}

		equal(number(), 2, 'number() is defined now.');
	})();

	equal(number(), 1, 'Outer scope still works.')

});


// In the function expression example, the number variable is hoisted, but the 
// function body is not hoisted, because it is a named function expression, not 
// a function declaration. The value of number is not defined until runtime. This code 
// is equivalent to:	

test('Function Expression Hoisted', function () {
  	function number() {
    	return 1;
  	}

  	(function () {
   	 	var number; // Declaration initialized to undefined.

    	try {
      		number();
    	} catch (e) {
      		ok(true, 'number() is undefined.');
    	}

    	number = function number() {
      		return 2;
    	}

    	equal(number(), 2, 'number() is defined now.');
  	}());

  	equal(number(), 1, 'Outer scope still works.');
});




























