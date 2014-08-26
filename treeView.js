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
			return "http://fe867b.medialib.glogster.com/media/dc/dc1a7adff862424cd98ee66089d7da17220379f5aa3af0d767382128be5a05ab/baby-tree.jpg"
		} 
		else if (treeAge > this.tree.get('MAX_ORANGE_AGE')){
			return "http://fc02.deviantart.net/fs70/i/2011/152/9/3/dead_tree_png_by_gd08-d3hs9tf.png"
		}
		else {
			return "http://www.plantsenhance.com/image/cache/data/artificial-orange-tree-150cm-500x700.jpg"
		}

	}

});