// Factory Pattern

function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		return this.name;
	};

	return o;
}

var person1 = createPerson("Morhys", 30, "Web Developer");
var person2 = createPerson("Ronnie", 35, "Snooker Player");


function SpecialArray(){

	var values = new Array();

	values.push.apply(values, arguments);

	values.toPipedString = function(){
		return this.join("|");
	};

	return values;
}

var colors = new SpecialArray("red", "blue", "green");


test('Factory Pattern', function(){

	equal(person1.sayName(), 'Morhys', 'Morhys');

	equal(colors.toPipedString(), 'red|blue|green', 'array method works');
	equal(colors instanceof SpecialArray, false, 'colors is not an instances of SpecialArray.');

	

});