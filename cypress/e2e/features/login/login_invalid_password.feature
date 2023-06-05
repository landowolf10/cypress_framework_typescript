Feature: Login page
  Scenario: Login with invalid user
    Given app is open
    When entering email "Admin" and password "admin12"
    Then verify that user login was not successful