Feature: Login page
  Scenario: Success login
    Given app is open
    When entering email "Admin" and password "admin123"
    Then verify user successfully logged in