Feature: Login to DemoQA

  Scenario: Valid login
    Given I am on the DemoQA login page
    When I enter username "testUser" and password "Pass123*-"
    And I click the login button
    Then I should see the user profile page

  Scenario: Invalid login
    Given I am on the DemoQA login page
    When I enter username "invalid" and password "invalid"
    And I click the login button
    Then I should see an error message