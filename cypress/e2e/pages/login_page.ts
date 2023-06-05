import { loginButton, passwordTextBox, usernameTextBox, errorMessage } from '../locators/login_locators';

export class LoginPage
{
    enterUserName(userName: string) {
        cy.get(usernameTextBox).type(userName);
    }

    entePassword(password: string) {
        cy.get(passwordTextBox).type(password);
    }

    clickLoginBtn()
    {
        cy.get(loginButton).click()
    }

    validateInvalidLogin()
    {
        cy.get(loginButton).should('be.visible');
        cy.get(errorMessage).should('be.visible');
        cy.get(errorMessage).invoke('text').should("eq", "Invalid credentials");
    }
}