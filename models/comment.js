var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
	text: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username: String
	}
}); //author is no longer string. doing this allows you to automatically have your username posted instead of having to type it in each time

module.exports = mongoose.model("Comment", commentSchema);