var renderIconStyle = require("./render");


var iconSets = [
  'actions',
  'attributes',
  'factions',
  'hits',
  'maneuvers',
  'miscellaneous',
  'ships',
  'slots',
  'tokenOutlines',
];



module.exports = renderIconStyle(iconSets, 'span');