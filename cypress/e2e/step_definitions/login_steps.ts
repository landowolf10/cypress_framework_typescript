import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginTask } from '../tasks/login';

let loginTask: LoginTask = new LoginTask;

When("entering email {string} and password {string}", (user: string, password: string) => {
    loginTask.login(user, password)
});

Then("verify user successfully logged in", () => {
    loginTask.validateSuccessfulLogin();
});

Then("verify that user login was not successful", () => {
    loginTask.validateInvalidLogin()
});