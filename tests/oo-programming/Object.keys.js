// Object.keys() and Object.getOwnPropertyNames()

function Person(){}

Person.prototype.name = "Morhys";
Person.prototype.age = 30;
Person.prototype.job = "Developer";
Person.prototype.sayName = function(){
	return this.name;
};

var keys = Object.keys(Person.prototype);
console.log(keys) // ["name", "age", "job", "sayName"]
var keysNames = Object.getOwnPropertyNames(Person.prototype);
console.log(keysNames) // ["constructor", "name", "age", "job", "sayName"]

test('Object.keys() and Object.getOwnPropertyNames()', function(){

	equal(keys, keys, 'Person.prototype keys');
	equal(keysNames, keysNames, 'Person.prototype keysNames');

});