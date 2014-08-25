var Tree = Backbone.Model.extend({});

var Tree = Backbone.Model.extend({
	initialize: function(){
		this.bind('age', this.age)

	},
	defaults: {
		age: 0,
		height: 0,
		numOranges: 0,
		HEIGHT_GROWTH: 1, 
		MIN_ORANGE_AGE: 10, 
		MAX_ORANGE_AGE: 25
	}, 
	age: function(){
		this.increaseAge();
		this.increaseHeight();
		this.setNumOranges();
	}, 
	increaseAge: function(){
		var currentAge = this.get('age');
		this.set({age: currentAge + 1});
		console.log("Age:" + (currentAge+1));
	}, 
	increaseHeight: function(){
		var currentHeight = this.get('height');
		this.set({height: (currentHeight + this.defaults.HEIGHT_GROWTH)});
		console.log("Height:" + (currentHeight+1));

	}, 

	setNumOranges: function(){
		this.set({numOranges: this.calculateNumOranges() });
		console.log("NumberOfOranges:" + this.get('numOranges'));
	},
	calculateNumOranges: function(){
		if (this.get('age') < this.get('MIN_ORANGE_AGE') || this.get('age') > this.get('MAX_ORANGE_AGE')){
			return 0;
		} else {
			return this.get('age') * 2;
		}
	}
})

var tree = new Tree();
tree.trigger('age')





