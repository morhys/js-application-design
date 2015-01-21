// The manner in which a function is invoked has 
// a huge impact on how the code within it operates, primarily in 
// how the this parameter is established.

// Invocation as a function

function ninja(){};
ninja();

var samurai = function(){};
samurai();

// Invocation as a method
var o = {};
o.whatever = function(){};
o.whatever();

/* what is 'this' */

function whatIsThis(){
	return this;
}

var sneak = whatIsThis;

var ninja1 = {
	weapon: whatIsThis
};

var ninja2 = {
	weapon: whatIsThis
};


/* Using a constructor to set up common objects */

function Ninja() {
	// creates a skull property on whatever object 
	// is the function context.
    this.skulk = function() { 
    	return this; 
    };
}

// Creates two objects by invoking the constructor with new.
var ninja3 = new Ninja();
var ninja4 = new Ninja();

// call and apply invoke a function and to explicitly specify any object 
// we want as the function context.

function addRandom(){
	var result = 0;

	// sums up the arguments
	for(var n = 0; n < arguments.length; n++) {
		result += arguments[n];
	}

	// stores the result in context
	this.result = result;
}

var ninja5 = {};
var ninja6 = {};

addRandom.apply(ninja5, [1,2,3,4]);
addRandom.call(ninja6,5,6,7,8);

test('How functions are invoked', function() {

	// Invocation as a function
	equal(whatIsThis(), window, 'whatIsThis() Creeping in the window.');
	equal(sneak(), window, 'sneak() Creeping in the window.');

	// Invocation as a method
	equal(ninja1.weapon(), ninja1, 'ninja1.weapon() is ninja1.');
	equal(ninja2.weapon(), ninja2, 'ninja2.weapon() is ninja2.');

	// Invoking a function as a constructor	
	equal(ninja3.skulk(), ninja3, 'ninja3.skulk() is ninja3.');
	equal(ninja4.skulk(), ninja4, 'ninja4.skulk() is ninja4.');

	// Using the apply() and call() methods to supply the function context
	equal(ninja5.result, 10, 'added via apply');
	equal(ninja6.result, 26, 'added via call');

});

