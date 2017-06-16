var connection = require("./connection.js");
var sql = require("mySQL");

var test = function() {
connection.query("SELECT * FROM PROPERTIES", function(err, res) {
	console.log(res)
});
};

test();