const rules = require('./data/rules')
const webviewRegExp = new RegExp('(' + rules.join('|') + ')', 'ig')

module.exports = function isWebview(ua) {
  return !!ua.match(webviewRegExp)
}
