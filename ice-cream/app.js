
var flavour = require('./flavour');
var numberOfScoops = require('./numberOfScoops');
var cowsay = require("cowsay");

var iceCream = numberOfScoops() + ' scoops of ' + flavour.chooseFlavour(process.argv[2]);

console.log(cowsay.say({
	text : iceCream,
	e : "❤️❤️",
	T : "👅"
}));
