// Parasitic Combination Inheritance

function object(o) {
	function F(){};
	F.prototype = o;
	return new F();
}

function inheritPrototype(subType, superType) {
	var prototype = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
	return this.name;
};

function SubType(name, age) {
	SuperType.call(this, name);

	this.age = age;
}


inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
	return this.age;
};

var instance1 = new SubType("Morhys", 30);
instance1.colors.push("brown");
console.log(instance1.colors); //  ["red", "blue", "green", "brown"]
instance1.sayName();
instance1.sayAge();


console.log(instance1);