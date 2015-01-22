// Accessor Properties

var book = {
	_year: 2015,
	edition: 1
};



Object.defineProperty(book, "year", {
	get: function(){

	},
	set: function(newValue) {

		if(newValue > 2015) {
			this._year = newValue;
			this.edition += newValue - 2015;
		}
	}

});

book.year = 2016;

test('Accessor Properties', function(){

	equal(book.edition, 2, 'second edition.');

});




