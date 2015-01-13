(function(){

	// Named function expressions are like anonymous function expressions 
	// in every way, except that they have a name that you can use from 
	// inside the function (for recursion). That name also conveniently appears 
	// in the function call stack.

	var lightbulbAPI = {
		toggle: function toggle(){},
		getState: function getState(){},
		off: function off(){},
		on: function on(){},
		blink: function blink(){}
	};

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


})();