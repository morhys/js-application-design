(function(){

	// Named function expressions are like anonymous function expressions 
	// in every way, except that they have a name that you can use from 
	// inside the function (for recursion). That name also conveniently appears 
	// in the function call stack.

	// NOTE: Internet Explorer 8 and older treat named function expressions 
	// like function declarations CUNTS


	var lightbulbAPI = {
		toggle: function toggle(){},
		getState: function getState(){},
		off: function off(){},
		on: function on(){},
		blink: function blink(){}
	};

	// test for named function expressions
	test('Named function expressions.', function(){
		var a = function x(){
			ok(x, 'x() is usable inside the function');
		};

		a();

		try {
			x(); // error
		} catch (e) {
			ok(true, 'x(')
		}


	});

	// test for function scope
	test('Function Scope', function () {

	  	var testDeclaration = false,
	    	foo;

	  	// This function gets erroneously overridden in IE8.
	  	function bar(arg1, bleed) {
	    	if (bleed) {
	      		ok(false, 'Declaration bar() should NOT be callable from inside the expression.');
	    	} else {
				ok(true, 'Declaration bar() should be called outside the expression.');
	    	}
	    
	    	testDeclaration = true;
	  	}

	  	foo = function bar(declaration, recurse) {
	    	if (recurse) {
	      		ok(true, 'Expression bar() should support scope safe recursion');
		    } else if (declaration === true) {

		      ok(true, 'Expression bar() should be callable via foo()');  
		      bar(false, true);
		    } else {
		      // Fails in IE8 and older
		      ok(false, 
		      'Expression bar() should NOT be callable outside the expression');
		    }

	  	};

	  	bar();
	  	foo(true);
	    
	  	// Fails in IE8 and older
	  	ok(testDeclaration, 'The bar() declaration should NOT get overridden by the expression bar()');
	});


	// lambdas (if a function is used as an argument or a return value, it's a lambda )
	var sum = function() {
		var result = 0;

		[5,5,5].forEach(function addTo(number){
			result += number;
		});

		return result;
	};

	test('lambdas', function(){
		equal(sum(), 15, 'result should be 15.');
	});








})();