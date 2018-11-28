const { expect } = require('chai');
const openBrowser = require('../support/openBrowser');

module.exports = () => {
  this.Given(/^I go to the website "([^"]*)"$/, openBrowser);

  this.Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
  });
};
