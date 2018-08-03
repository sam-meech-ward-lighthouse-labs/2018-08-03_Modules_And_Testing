function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function numberOfScoops() {
  return getRandomInt(70);
}

module.exports = numberOfScoops;