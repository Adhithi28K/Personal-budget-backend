describe('Visual Validation of the Login Page', () => {
    it('should visually validate the login page with Applitools', () => {
      cy.visit('/login');
      cy.eyesOpen({
        appName: 'Your App Name',
        testName: 'Visual Test for Login Page',
        browser: { width: 1024, height: 768 }
      });
      cy.eyesCheckWindow('Login Page View');
  
      cy.eyesClose();
    });
  });
  