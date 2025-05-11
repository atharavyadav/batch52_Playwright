Feature: Validate Radio Button Functionality
  
  Scenario Outline: Select the Radio Button
  Given Navigate to the Radio Button
  When Radio button is selected "<RadioButton>"
  Then Validate if Radio button was selected "<assertion>"

 Examples:
        |RadioButton|assertion|
        |radio1|True|
        # |radio2|True|
        # |radio3|True|

  
  Scenario Outline: Select the dropdown value
  Given Navigate to the Radio Button
  When dropdown value is selected "<dropdown>"

 Examples:
        |dropdown|
        |Option1|
        |Option2|
        |Option3|

 