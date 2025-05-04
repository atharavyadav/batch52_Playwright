Feature: Login to Register Page

  Scenario Outline: User navigates to the register page and fills Contact Information
    Given the user is on the login page
    When the user enters contact information "<firstname>" "<lastname>" "<phone>" "<email>"

    Examples:
      | firstname | lastname | phone | email          |
      | testuser1 | pass123  | 19090 | test@gmail.com |

  Scenario Outline: User navigates to the register page and fills mail Information
    When the user enters email information "<address>" "<city>" "<state>" "<postalcode>" "<country>"

    Examples:
      | address   | city | state      | postalcode | country |
      | hinjewadi | pune | Maharashta |     411057 | INDIA   |

  Scenario Outline: User navigates to the register page and fills user Information
    When the user enters user information "<username>" "<password>"

    Examples:
      | username  | password |
      | neelam123 | test123  |
