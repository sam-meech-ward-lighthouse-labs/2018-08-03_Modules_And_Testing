var flavourMappings = {
  'maple syrup': '🍁'
}


function chooseFlavour(flavour) {
  if (flavour === 'maple syrup') {
    return flavourMappings[flavour];
  }

  if (flavour === 'matcha') {
    return '🍵';
  }

  if (flavour === 'hot dog') {
    return '😻';
  }

  if (flavour === 'regret') {
    return '💔';
  }

  return 'out of stock';
}

exports.chooseFlavour = chooseFlavour;
exports.emotion = "😎";

// module.exports = {
//   chooseFlavour: chooseFlavour,
//   emotion: "😎"
// };