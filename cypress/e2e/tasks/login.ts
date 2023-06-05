import { DashboardPage } from '../pages/dashboard_page';
import { LoginPage } from '../pages/login_page';


export class LoginTask
{
    loginPage: LoginPage = new LoginPage;
    dashboardPage: DashboardPage = new DashboardPage;

    login(user: string, password: string): void
    {
        this.loginPage.enterUserName(user);
        this.loginPage.entePassword(password);
        this.loginPage.clickLoginBtn();
    }

    validateSuccessfulLogin(): void
    {
        this.dashboardPage.validateSuccessfulLogin();
    }

    validateInvalidLogin(): void
    {
        this.loginPage.validateInvalidLogin();
    }
}