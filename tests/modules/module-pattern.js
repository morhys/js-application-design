// The original module pattern assigns the result 
// of the IIFE to a predefined namespace variable.

var myModule = (function(){

	return {
		hello: function hello(){
			return 'Hello, world!';
		}
	};

}());

test('Module pattern', function(){

	equal(myModule.hello(), 'Hello, world!', 'module works.')
});
