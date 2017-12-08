var rules = require('./data/rules')
var webviewRegExp = new RegExp('(' + rules.join('|') + ')', 'ig')

module.exports = function isWebview(ua) {
  return !!ua.match(webviewRegExp)
}
