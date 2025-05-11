Feature: Validate Radio Button Functionality
  
  Scenario Outline: Select the Radio Button
  Given Navigate to the Radio Button
  When Radio button is selected "<RadioButton>"
  Then Validate if Radio button was selected "<assertion>"

 Examples:
        |RadioButton|assertion|
        |Radio1|True|