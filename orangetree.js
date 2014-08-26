$(document).ready(function(){
	
	var orangeGrove = new Grove();
	var groveView = new GroveView(orangeGrove);

	$('#create-button').on('click', function(){ orangeGrove.add( new Tree(orangeGrove.length) ) } );
	$('#age-button').on('click', function(){orangeGrove.age()})

})















