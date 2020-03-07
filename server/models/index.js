const mongoose= require("mongoose");

mongoose.set("debug", true);
mongoose.Promise= Promise;

mongoose.connect("mongodb://localhost/twitter", {
    keepAlive: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});

module.exports.User=require("./user");
module.exports.Tweet= require("./tweet");