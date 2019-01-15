(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/*
The Step Definition can be a regular expression or a Cucumber expression. 
 https://docs.cucumber.io/cucumber/step-definitions/
*/
// Example with cucumber expression.
Given('I go to the website {string}', function (url) {
  cy.visit(url, {
    auth: {
      username: 'comatch',
      password: 'Do$enb1er'
    }
  });
  cy.get('#Username')
      .type("asdfasdf");
/*  cy.visit(url, {
    auth: {
      username: 'ebazhanov@yahoo.com',
      password: 'beHappy1'
    }
  });*/
});

// Example with regulair expression.
Then(/^I see (.*) in the title$/, function (title) {
  cy.title().should('include', title);
}); // Example without expression

Then('the logo name should be cypress.io', function () {
  cy.get('.navbar-brand').should('have.text', "cypress.io");
});

},{}]},{},[1]);
