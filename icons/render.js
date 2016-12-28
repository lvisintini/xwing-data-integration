var Classes = require("./classes");


function renderIconStyle(mergeList, tag) {
  var icons = {};

  for (var i = 0; i < mergeList.length; i++) {
    for (var attrname in Classes[mergeList[i]]) {
      icons[attrname] = "<" + tag + " class=\"" + Classes[mergeList[i]][attrname] + "\"/>" ;
    }
  }
}

module.exports = renderIconStyle;
