var TreeView = Backbone.View.extend({

	el: '#tree',

	initialize: function(treeModel){
		this.tree = treeModel
		this.listenTo(this.tree, "change", this.render)
	}, 

	render: function(){
		this.ageElem().html("Age: " + this.tree.get('age'))
		this.heightElem().html("Height: " + this.tree.get('height'))
		this.numOrangeElem().html("Oranges: " + this.tree.get('numOranges'))
		this.imgElem().attr('src', this.getTreeImageURL())
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