// var Person = Backbone.Model.extend({});

// var Person = Backbone.Model.extend({
// 	initialize: function(){
// 		console.log("A new person was just created :)");
// 		this.on('change', this.changeAlert, this);
// 	},

// 	defaults: {
// 		name: "Amelia", 
// 		birthYear: 1991
// 	}, 

// 	changeAlert: function() {
// 		console.log("there has been a change!")
// 	}
// });

// var amelia = new Person();
// var louie = new Person({name: "Louie", birthYear: 1992});

// louie.set({name: "LOUIS"});


// Classroom = new Backbone.Collection([amelia, louie]);

// var v = new Backbone.View()
// var div = v.$el
// $('body').append(div)

// var Clock = Backbone.View.extend({
// 	render: function () {
//       this.$el.empty().append(new Date)
//       console.log("date was rendered?")
//     }
// });

// var clock = new Clock();

// // Append its element to the document body
// clock.$el.appendTo('body')
// //-> An empty div is attached to the body
// //-> because render() has not yet been called

// clock.render()

