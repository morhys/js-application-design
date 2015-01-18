// "class" and "delegation" design patterns

// CLASSICAL PATTERN

function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function(){
	return "I am " + this.me;
};

function Bar(who) {
	Foo.call( this, who );
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
	return "Hello, " + this.identify() + ".";
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();

test('Classical Pattern', function(){

	equal(b1.speak(), 'Hello, I am b1.', 'output works.')
	equal(b2.speak(), 'Hello, I am b2.', 'output works.')
});

// OLOO PATTERN SAME FUNCTIONALITY AS ABOVE

var Foo2 = {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I am " + this.me;
	}
};


var Bar2 = Object.create( Foo2 );

Bar2.speak = function() {
	return "Hello, " + this.identify() + ".";
};

var a1 = Object.create( Bar2 );
a1.init("a1");

var a2 = Object.create( Bar2 );
a2.init("a2");

test('OLOO Pattern', function(){

	equal(a1.speak(), 'Hello, I am a1.', 'output works.')
	equal(a2.speak(), 'Hello, I am a2.', 'output works.')
});







