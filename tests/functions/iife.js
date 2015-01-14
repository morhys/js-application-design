// Before the IIFE became popular, a common technique was to assign 
// names to the object prototype

var LightBulb = function() {
	this.isOn = false;
}

lightbulb = new LightBulb();

LightBulb.prototype.toggle = function() {
	this.isOn = !this.isOn;
	return this.isOn;
};

LightBulb.prototype.getState = function(){};
LightBulb.prototype.off = function(){};
LightBulb.prototype.on = function(){};
LightBulb.prototype.blink = function(){};

test('Prototypes without IIFE', function(){
	equal(lightbulb.toggle(), true, 'lightbulb turns on.');
	equal(lightbulb.toggle(), false, 'lightbulb turns off.');
});

// As you can see, this method leads to a lot of repetition, as you have to 
// specifically address lightbulb.prototype for every property definition. 
// The IIFE lets you encapsulate scope, so you can assign to regular variables, 
// instead of just the prototype. This gives you more flexibility and the ability 
// to hide state inside the function closure

(function(){
	var isOn = false,
	toggle = function toggle(){
		isOn = !isOn;
		return isOn;
	},
	getState = function getState(){},
	off = function off(){},
	on = function on(){},
	blink = function blink(){},

	lightbulb = {
		toggle: toggle,
		getState: getState,
		off: off,
		on: on,
		blink: blink
	};

	test('Prototypes with IIFE', function(){
		equal(lightbulb.toggle(), true, 'lightbulb turns on.');
		equal(lightbulb.toggle(), false, 'lightbulb turns off.');
	});


})();

// METHOD CONTEXT

// The highPass() function takes one required parameter for the number 
// to be tested and one optional parameter for the cutoff. If the optional 
// parameter is not supplied, the function assumes that it is being called 
// as a method of a valid filter object and uses the cutoff property of the 
// object instead.


function highPass(number, cutoff) {
	cutoff = cutoff || this.cutoff;
	return (number >= cutoff);
}

var filter1 = {
	highPass: highPass,
	cutoff: 5
};
var filter2 = {
	// no highpass
	cutoff: 3
};

test("Invoking a function", function(){
	var result = highPass(6,5);
	equal(result, true, "6 > 5 shoud be true")
});	

// When you invoke a method with dot notation, you have access to the object's 
// properties using this. The number parameter is compared to filter1.cutoff. 
// The method returns false because 3 is less than the value stored in this.cutoff, 
// which refers to filter1.cutoff. Remember, this refers to the object that the method 
// is called on.


test("Invoking a method", function(){
	var result1 = filter1.highPass(3),
		result2 = highPass.call(filter2, 3),
		result3 = filter1.highPass(6);


	equal(result1, false, "3 >= 5 filer1.cutoff should be false.");
	equal(result2, true, "3 >= filer2.cutoff should be true.");
	equal(result3, true, "6 >= filer1.cutoff should be true.");
});	




