var GroveView = Backbone.View.extend({


	initialize: function(grove){
		this.grove = grove 
		this.models = grove.models
		this.listenTo(grove, "change", this.render)
		this.listenTo(grove, "add", this.addTree)
	}, 

	render: function(e){
		var id = "#tree-" + e.id
		var tree = this.models[e.id]


		this.ageElem(id).html("Age: " + tree.get('age'))
		this.heightElem(id).html("Height: " + tree.get('height'))
		this.numOrangeElem(id).html("Oranges: " + tree.get('numOranges'))
		this.imgElem(id).attr('src', this.getTreeImageURL(tree))
	},

	addTree: function(e){
		var id = e.id
		var tree = $("<div style= 'display: inline-block' id = tree-"+ id +" ></div>").appendTo("body");

		$("<img class = 'tree-pic' style = 'width: 100px; height: 150px' src='"+ CONSTS.smallTreeSrc+ "'/>").appendTo(tree)
		$("<p class = 'age-value'>Age: 0 </p>").appendTo(tree);
		$("<p class = 'height-value'>Height: 0</p>").appendTo(tree);
		$("<p class = 'num-orange-value'>Oranges: 0</p>").appendTo(tree);
	}, 

	ageElem: function(tree_id){
		return $(tree_id).children(".age-value");
	}, 

	heightElem: function(tree_id){
		return $(tree_id).children(".height-value");
	}, 

	numOrangeElem: function(tree_id){
		return $(tree_id).children(".num-orange-value");
	}, 

	imgElem: function(tree_id){
		return $(tree_id).children(".tree-pic");
	}, 

	getTreeImageURL: function(tree) {
		var treeAge = tree.get('age');
		if (treeAge < tree.get('MIN_ORANGE_AGE')){
			return CONSTS.smallTreeSrc
		} 
		else if (treeAge > tree.get('MAX_ORANGE_AGE')){
			return CONSTS.largeTreeSrc
		}
		else {
			return CONSTS.mediumTreeSrc
		}

	}

});