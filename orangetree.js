$(document).ready(function(){
	var tree = new Tree(); 

	$('#age-button').on('click', function(){tree.trigger('age')})
	var view = new TreeView(tree);
})














