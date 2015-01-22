// Constructor Pattern

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;

	this.sayName = function(){
		return this.name;
	};
}

var person1 = new Person('Morhys', 30, 'Dev');
var person2 = new Person('Ronnie', 40, 'Snooker');


test('Constructor Pattern', function(){

	equal(person1.sayName(), 'Morhys', 'Morhys');
	equal(person2.sayName(), 'Ronnie', 'Ronnie');

	equal(person1 instanceof Object, true, 'person1 is an instanceof Object');
	equal(person2 instanceof Object, true, 'person2 is an instanceof Object');

	equal(person1 instanceof Person, true, 'person1 is an instanceof Person');
	equal(person2 instanceof Person, true, 'person2 is an instanceof Person');

	equal(person1.constructor == Person, true, 'person1.constructor is Person');
	equal(person2.constructor == Person, true, 'person2.constructor is Person');

	equal(person1.sayName == person2.sayName, false, 'person1.sayName is not the same as person1.sayName seperate instances');


});