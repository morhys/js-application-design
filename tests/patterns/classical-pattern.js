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
	console.log( "Hello, " + this.identify() + "." );
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

console.log(b1);
console.log(b2)

b1.speak();
b2.speak();


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
	console.log( "Hello, " + this.identify() + "." );
};

var a1 = Object.create( Bar2 );
a1.init(" a1 ");

var a2 = Object.create( Bar2 );
a2.init(" a2 ");

console.log(a1);
console.log(a2)







