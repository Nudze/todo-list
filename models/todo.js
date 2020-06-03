const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	name         : {
		type     : String,
		required : "Name can't be blank!"
	},
	date_created : {
		type    : Date,
		default : Date.now
	},
	completed    : {
		type    : Boolean,
		default : false
	}
});

module.exports = mongoose.model("Todo", todoSchema);
