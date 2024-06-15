Feature: LOGIN Negative Case

Scenario Outline: As a user, I can not login with incorrect username '<username>' and password '<password>'
  Given I am on the login page dashboard
  When I login with <username> and <password> jamkrindo
  And I click button login
  Then I should see a alert error

  Examples:
  |username   |password|
  |Admin      |Admin   |
  |Admin123   |Admin   |

Scenario: As a user, I can not submit form login with empty value
  Given I am on the login page dashboard
  When I dont fill the form login
  And I click button login
  Then I should see a error message