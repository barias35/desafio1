Feature: Buscar libros

  Scenario: Buscar libro existente
    Given I am on the DemoQA books page
    When I search for the book "Git Pocket Guide"
    Then I should see "Git Pocket Guide" in the results

  Scenario: Buscar libro not existente
    Given I am on the DemoQA books page
    When I search for the book "Titulo No Existente"
    Then I should see no books in the results