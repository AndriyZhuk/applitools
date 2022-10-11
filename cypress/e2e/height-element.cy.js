// write your credentials here
  const email = "";
  const password = "";

  const browsers = [
    { width: 475, height: 667, name: "chrome" },
  ];

  const eyesOpenOptions = {
    appName: "Community hub",
    batchName: "Community hub",
    notifyOnCompletion: true,
    testName: "Community long region test",
  };

  describe("applitools height region test", () => {
    before(function () {
      cy.clearCookies();
      cy.visit("/auth/login.html");

      cy.eyesOpen({ ...eyesOpenOptions, browser: browsers });
    });

    after(() => {
      cy.eyesClose();
    });

    it("Login to dashboard", () => {
      cy.wait(3000);
      cy.get('[data-cy="user-email"]').type(email);
      cy.get('[data-cy="current-password"]').type(password);
      cy.get('[data-cy="sign-in-btn"]').click();
      cy.wait(3000);
    });

    it("make screenshot of dashboard", () => {
      cy.visit("/");
      cy.wait(3000); // for eyes stability

      cy.eyesCheckWindow({
        tag: "screenshot of dashboard (plugin version 3.23.7) correct",
        target: "region",
        selector: "hub-page"
      });

      cy.wait(3000); // for eyes stability
    });
})
