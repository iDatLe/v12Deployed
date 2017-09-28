var mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment");

var data = [
	{
		name: "Clouds Rest", 
		image: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjR9quWvrTWAhUC0GMKHUkfAosQjRwIBw&url=https%3A%2F%2Fwww.visitnc.com%2Fcamping&psig=AFQjCNEahT5idGIMpL7el8wHxsW5agA5Gw&ust=1506021672620520",
		description: "blah blah blah"
	},
	{
		name: "Beautiful AF", 
		image: "https://recreation-acm.activefederal.com/assetfactory.aspx?did=5221",
		description: "blah blah blah"
	},
	{
		name: "Cold Camping", 
		image: "http://cdn.grindtv.com/uploads/2015/02/shutterstock_242371765.jpg",
		description: "blah blah blah"
	}
];

function seedDB(){
	// REMOVE ALL CAMPGROUNDS
		Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("Removed campgrounds!");
		// 	//Add a few campgrounds
		// 	data.forEach(function(seed){
		// 	Campground.create(seed, function(err, campground){
		// 		if(err) {
		// 			console.log(err);
		// 		} else {
		// 			console.log("Added a campground");
		// 			//Create a comment
		// 			Comment.create(
		// 				{
		// 					text: "This place is great, but I wish there was internet",
		// 					author: "Homer"
		// 				}, function (err, comment) {
		// 					if(err){
		// 						console.log(err);
		// 					} else {
		// 						campground.comments.push(comment);
		// 						campground.save();
		// 						console.log("Created new comment");
		// 					}
		// 				})
		// 		}
		// 	});
		// });
	});
}

module.exports = seedDB;