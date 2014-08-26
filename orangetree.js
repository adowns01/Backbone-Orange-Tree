$(document).ready(function(){
	// var tree = new Tree(); 

	// var view = new TreeView(tree);

	var orangeGrove = new Grove();
	$('#create-button').on('click', function(){ orangeGrove.add( new Tree() )});
	$('#age-button').on('click', function(){orangeGrove.age()})

})















