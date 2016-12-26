var fs = require("fs");


function getData(path) {
  return JSON.parse(fs.readFileSync(path))
}

var data = {
  actions: getData("./mappings/actions.js"),
  attributes: getData("./mappings/attributes.js"),
  factions: getData("./mappings/factions.js"),
  hits: getData("./mappings/hits.js"),
  maneuvers: getData("./mappings/maneuvers.js"),
  miscellaneous: getData("./mappings/miscellaneous.js"),
  overlays: getData("./mappings/overlays.js"),
  ships: getData("./mappings/ships.js"),
  slots: getData("./mappings/slots.js"),
  tokenOutlines: getData("./mappings/token-outlines.js"),
  tokens: getData("./mappings/tokens.js"),
};

module.exports = data;