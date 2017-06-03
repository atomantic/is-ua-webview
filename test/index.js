const chai = require("chai")
chai.should()
const isWebview = require('../index')
const listWebview = require('./data/webview')
const listNot = require('./data/not-webview')

describe('is-ua-webview', function () {
    describe('webviews', function () {
      listWebview.forEach(function(ua) {
          it('should detect (' + ua + ') as webview', function() {
              isWebview(ua).should.be.true;
          });
      });
    });
    describe('not webviews', function () {
      listNot.forEach(function(ua) {
          it('should not be detected (' + ua + ') as webview', function() {
              isWebview(ua).should.be.false;
          });
      });
    });
});
