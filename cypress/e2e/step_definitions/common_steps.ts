import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("app is open", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
});