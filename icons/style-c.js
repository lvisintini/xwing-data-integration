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
  'tokens',
];



module.exports = renderIconStyle(iconSets, 'span');