const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todos_api", {
	useNewUrlParser    : true,
	useUnifiedTopology : true,
	useFindAndModify   : false
});

mongoose.Promise = Promise;

module.exports = require("./todo");
