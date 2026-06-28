const LoginPage = require("../../fixtures/Functions/login");

describe("Login Tests", () => {
  let data;

  before(() => {
    cy.fixture("testData/loginData").then((loginData) => {
      data = loginData;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify successful login", () => {

    LoginPage.clickSignIn();

    LoginPage.enterEmail(data.validUser.email);

    LoginPage.clickContinue();

    LoginPage.validateLoginSuccess();

    LoginPage.enterPassword(data.validUser.password);

    LoginPage.clickLogin();
  });

  it("Verify login with invalid password", () => {

    LoginPage.clickSignIn();

    LoginPage.enterEmail(data.invalidUser.email);

    LoginPage.clickContinue();

    LoginPage.enterPassword(data.invalidUser.password);

    LoginPage.clickLogin();

    LoginPage.verifyInvalidLoginMessage();
  });

  it("Verify successful sign up", () => {

    LoginPage.clickSignIn();

    LoginPage.enterEmail(data.newUser.email);

    LoginPage.clickContinue();

    LoginPage.validateSignUp();

    LoginPage.enterFirstName(data.newUser.firstName);

    LoginPage.enterPassword(data.newUser.password);

    LoginPage.enterConfirmPassword(data.newUser.confirmPassword);

    LoginPage.clickRemember();

    LoginPage.clickSignUp();
  });
});
