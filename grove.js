var Grove = Backbone.Collection.extend({
  model: Tree, 
  age: function(){
  	this.each(function(tree){
  		tree.trigger('age')
  	})
  }
});