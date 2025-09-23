const get = require("lodash.get");

function getValueByPath(obj, path) {
  try {
    return get(obj, path);
  } catch (e) {
    return undefined;
  }
}

module.exports = { getValueByPath };
