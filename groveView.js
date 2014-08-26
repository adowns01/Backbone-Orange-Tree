var GroveView = Backbone.View.extend({


	initialize: function(grove){
		this.tree = grove
		this.listenTo(grove, "change", this.render)
		this.listenTo(grove, "add", this.addTree)
	}, 

	render: function(e){
		// var id = e.id


		// this.ageElem().html("Age: " + this.tree.get('age'))
		// this.heightElem().html("Height: " + this.tree.get('height'))
		// this.numOrangeElem().html("Oranges: " + this.tree.get('numOranges'))
		// this.imgElem().attr('src', this.getTreeImageURL())
	},

	addTree: function(e){
		var id = e.id
		var tree = $("<div id = tree-"+ id +" ></div>").appendTo("body");

		$("<p class = 'age-value'>Age: 0 </p>").appendTo(tree);
		$("<p class = 'height-value'>Height: 0</p>").appendTo(tree);
		$("<p class = 'num-orange-value'>Oranges: 0</p>").appendTo(tree);
		$("<hr>").appendTo(tree);
	}, 

	ageElem: function(){
		return this.$el.children(".age-value");
	}, 

	heightElem: function(){
		return this.$el.children(".height-value");
	}, 

	numOrangeElem: function(){
		return this.$el.children(".num-orange-value");
	}, 

	imgElem: function(){
		return this.$el.children(".tree-pic");
	}, 

	getTreeImageURL: function() {
		var treeAge = this.tree.get('age');
		if (treeAge < this.tree.get('MIN_ORANGE_AGE')){
			return CONSTS.smallTreeSrc
		} 
		else if (treeAge > this.tree.get('MAX_ORANGE_AGE')){
			return CONSTS.largeTreeSrc
		}
		else {
			return CONSTS.mediumTreeSrc
		}

	}

});