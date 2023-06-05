Feature: Login page
  Scenario: Login with invalid user
    Given app is open
    When entering email "Admi" and password "admin123"
    Then verify that user login was not successful