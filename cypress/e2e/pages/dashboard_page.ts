import { sideMenu, title, userProfile } from '../locators/dashboard_locators';

export class DashboardPage
{
    validateSuccessfulLogin() {
        cy.get(sideMenu).should('be.visible');
        cy.get(title).contains('Dashboard');
        cy.get(userProfile).should('be.visible');

        let titleText;
        cy.get(title).invoke('text').then(element => {
            titleText = element
            cy.log(titleText)

            if (titleText === 'Dashboard')
                cy.log('Logged in successfully');
            else
                cy.log('Not logged in');
        });
    }
}