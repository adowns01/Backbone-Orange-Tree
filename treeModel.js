var Tree = Backbone.Model.extend({
	initialize: function(id){
		this.bind('age', this.age)
		this.id = id

	},
	defaults: {
		age: 0,
		height: 0,
		numOranges: 0
	}, 
	
	age: function(){
		if (this.is_alive()){
			this.increaseAge();
			this.increaseHeight();
			this.setNumOranges();
		}
	}, 
	increaseAge: function(){
		var currentAge = this.get('age');
		this.set({age: currentAge + 1});
		// console.log("Age:" + (currentAge+1));
	}, 
	increaseHeight: function(){
		var currentHeight = this.get('height');
		this.set({height: (currentHeight + CONSTS.heightGrowth)});
		// console.log("Height:" + (currentHeight+1));

	}, 

	setNumOranges: function(){
		this.set({numOranges: this.calculateNumOranges() });
		// console.log("NumberOfOranges:" + this.get('numOranges'));
	},

	calculateNumOranges: function(){
		if (this.get('age') < CONSTS.minOrangeAge || this.get('age') > CONSTS.maxOrangeAge){
			return 0;
		} else {
			return this.get('age') * 2;
		}
	}, 

	is_alive: function(){
		if (this.get('age') < CONSTS.deathAge){
			return true
		}
			
		else {
			return false
		}
			
	}


})