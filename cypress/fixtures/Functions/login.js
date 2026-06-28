require("cypress-xpath");

class Login {
  locators = {
    email: () => cy.xpath(`//input[@id='email']`),
    password: () => cy.xpath(`//input[@id='password']`),
    confirmPassword: () => cy.xpath(`//input[@id='confirmPassword']`),
    signInButton: () => cy.contains("button", "Sign In"),
    loginBtn: () => cy.xpath(`//button[normalize-space()='Login']`),
    errorMessage: () => cy.get(".text-red-500"),
    continueBtn: () => cy.xpath(`//button[normalize-space()='Continue']`),
    FirstName: () => cy.xpath(`//input[@id='firstName']`),
    rememberBtn: () => cy.xpath(`//button[@id='remember']`),
    signUpBtn: () => cy.xpath(`//button[normalize-space()='Sign Up']`),
    invalidMessage: () => cy.contains("Invalid login details"),
  };

  verifyInvalidLoginMessage() {
    this.locators.invalidMessage().should("be.visible");
  }

  clickSignIn() {
    this.locators.signInButton().should("be.visible").click();
  }

  enterEmail(email) {
    this.locators.email().clear().type(email);
  }
  clickContinue() {
    this.locators.continueBtn().click();
  }

  enterFirstName(name) {
    this.locators.FirstName().clear().type(name);
  }

  enterPassword(password) {
    this.locators.password().clear().type(password);
  }
  enterConfirmPassword(password) {
    this.locators.confirmPassword().clear().type(password);
  }

  clickRemember() {
    this.locators.rememberBtn().click();
  }

  clickLogin() {
    this.locators.loginBtn().click();
  }
  clickSignUp() {
    this.locators.signUpBtn().click();
  }

  validateLoginSuccess() {
    cy.url().should("include", "login");
  }

  validateSignUp() {
    cy.url().should("include", "sign-up");
  }
}

module.exports = new Login();
