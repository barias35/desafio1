#Inicio

Clona o copia este repositorio. Necesitarás tener node y npm instalados globalmente en tu máquina.

#Instalación:

npm i playwright o npx playwright install
npm i @cucumber/cucumber

#Para ejecutar la suite de pruebas:

npx cucumber-js test 
npx cucumber-js tests/features/*.feature

#Para ver el reporte:

open cucumber-report.html

#Para ejecutar en modo headless:

HEADLESS=true npx cucumber-js

#New User
No es posible automatizar el flujo "New User" debido al impedimento tecnico del framework al interactuar con mecanismos de reconocimiento de usuarios humanos (reCAPTCHA) y bloquear ejecucion de bots automatizados. 
