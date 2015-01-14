// Because the closure variables in the outer function are only in scope within 
// the containing function, you can't get at the data except through its privileged 
// methods. In other languages, a privileged method is an exposed method that has 
// access to private data. In JavaScript, any exposed method defined within the closure 
// scope is privileged. For example:

var o = function o(){
	var data = 1,
		get;

	get = function get(){
		return data;
	};

	return {
		get: get
	};
};

test('Closure for object privacy', function() {
	var obj = o(); // Get an object with the .get method.

	try {
		ok(data, 'This will throw and error.');
	} catch (e) {
		ok(true, 'The data var is only available.')
	}

	equal(obj.get(), 1, '.get() should have access to the closure.')
});

// In addition to the data privacy benefits, closures are an essential ingredient in 
// languages that support first-class functions, because they give you access to outer 
// scope variables from inside your lambdas.

// Closures are commonly used to feed data to event handlers or callbacks, which might 
// get triggered long after the containing function has finished. For example:


// example of asynchronous recursion, and the pattern is sometimes used to retry Ajax 
// requests when they fail. There is usually a retry limit and a delay so that the server 
// doesn't get hammered with endless retries from millions of users.

(function(){

	var arr = [],
		count = 1,
		delay = 20,
		timer,
		complete;

	timer = function timer(){
		setTimeout(function inner(){
			arr.push(count);

			if(count < 3){
				count += 1;
				timer();
			} else {
				complete();
			}
		}, delay);
	};

	asyncTest('Closure with setTimeout.', function () {
    	complete = function complete() {
      		equal(arr.join(','), '1,2,3','arr should be [1,2,3]');
      		start();
    	};

    	timer();

    	equal(arr.length, 0,'array should be empty until the first timout.');
  	});

})();





























