// NAMED PARAMETERS

// The number of variables you pass into a function is called its arity. 
// Generally speaking, function arity should be kept small, but sometimes you 
// need a wide range of parameters (for example, to initialize the configuration 
// of a module or create a new object instance). The trouble with a large arity is 
// that each parameter must be passed into the function in the right order, even if 
// several parameters are not needed. It can be difficult to remember what order is 
// required, and it doesn't make sense to require a parameter that isn't really required 
// for the function to do its job properly.

// This example is to set up a new user account. Each user account has some default settings

var userProto = {
	name: '',
	email: '',
	alias: '',
	showInSearch: true,
	colorScheme: 'light'
};

function createUser(name, email, alias, showInSearch, colorScheme) {

	return {
    	name: name || userProto.name,
    	name: email || userProto.email,
    	alias: alias || userProto.alias,
    	showInSearch: showInSearch,
    	colorScheme: colorScheme || userProto.colorScheme
  	};
}

test('User account creation', function(){
	var newUser = createUser('Mothys', '','','', 'dark');

	equal(newUser.colorScheme, 'dark', 'colorScheme stored correctly.');

});	

// $.extend() takes objects as its parameters. The first is the object to be extended. 
// In this case, we want to return a new object so that we don't alter the userProto or 
// options objects. The other objects (as many as you like) hold the properties and methods 
// you wish to extend the first object with. This is a simple, elegant way to reuse code.

function createUserExtend(options) {
  return $.extend({}, userProto, options);
}

test('User account creation with $.extend', function(){
		var newUser1 = createUserExtend({
		  	name: 'Mike',
		  	showInSearch: false
		});

		equal(newUser1.name, 'Mike', 'Mike is the name.');
});	


// FUNCTION POLYMORPHISM

//Polymorphic functions behave differently based on the parameters you pass into them. In JavaScript, 
// those parameters are stored in the array-like arguments object, but it’s missing useful array methods.

// Array.prototype.slice() is an easy way to shallow copy some or all of an array (or an array-like object).

// You can borrow the .slice() method from the Array prototype using a technique called method delegation. 
// You delegate the .slice() call to the Array.prototype object. The method call looks like this.






































