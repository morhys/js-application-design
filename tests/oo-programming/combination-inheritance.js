// Combination Inheritance

function SuperType(name) {
	this.name = name;
	this.colors = ['red','blue','green'];
}

SuperType.prototype.sayName = function(){
	return this.name;
};

function SubType(name, age) {
	SuperType.call(this, name);

	this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function(){
	return this.age;
};

var instance1 = new SubType("Morhys", 30);

instance1.colors.push("brown");

var instance2 = new SubType("Dave", 100);

instance2.colors.push("Yellow");


test('Combination Inheritance', function(){

	equal(instance1.sayName(), 'Morhys', 'Morhys');
	equal(instance1.sayAge(), 30, '30');

});
