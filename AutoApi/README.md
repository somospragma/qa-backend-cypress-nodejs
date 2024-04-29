# Cypress API Testing Automation

Este proyecto está diseñado para automatizar las pruebas de API utilizando Cypress, una potente herramienta de pruebas end-to-end. Cypress te permite garantizar la integridad y el rendimiento de tus servicios web de manera eficiente.

## Estructura de Carpetas

En este proyecto, siguiendo las convenciones por defecto de Cypress, encontrarás la siguiente estructura de carpetas:

- `cypress`: Carpeta principal que contiene todos los archivos relacionados con las pruebas Cypress.
  - `e2e` (o tu carpeta de elección): Contiene los archivos de prueba de extremo a extremo. Cada archivo representa una suite de pruebas relacionadas.
  - `fixtures`: Aquí alojamos datos estáticos en archivos JSON que se utilizan en las pruebas.
  - `support`: La carpeta que contiene, por defecto, el archivo `index.js`, el cual se ejecuta antes de cada prueba y se usa comúnmente para configuraciones generales, como una función de inicio de sesión que debe ejecutarse antes de las pruebas.
  - `downloads`: En este proyecto no se utiliza, pero esta carpeta contendría archivos descargados durante la ejecución de pruebas que generan descargas automáticas, como al hacer click en un botón.
  - `screenshots`: Almacena capturas de pantalla configuradas mediante `cy.screenshot` o configuradas para pruebas que fallan.
  - `videos`: Puede habilitarse si se necesitan evidencias en formato MP4 de las pruebas. Se puede configurar para no generar automáticamente.
  - `plugins`: Permite manejar, modificar o extender el comportamiento interno de Cypress.

## Archivos Principales

- `cypress.config.js`: Archivo de configuración de Cypress donde se pueden definir variables de configuración globales y plugins.
- `package-lock.json`: Registra las dependencias específicas y las versiones exactas de las bibliotecas utilizadas en el proyecto.
- `package.json`: Contiene información del proyecto, como las versiones de las bibliotecas/dependencias a utilizar, información del autor y comandos para ejecutar las pruebas.

## Conceptos Básicos de Cypress

Dentro de nuestras pruebas `e2e` o API, utilizamos los siguientes conceptos:

- `describe`/`context`: Permite definir un grupo de pruebas. Requiere dos parámetros: el texto que proporciona contexto sobre la prueba y una función de callback.
- `it`/`specify`: Se utiliza para definir casos de prueba individuales. El primer parámetro de `it` proporciona contexto para el caso de prueba, y el segundo parámetro es una función de callback donde se ejecuta la prueba.
- Assertion: Dentro de `it` se encuentran las afirmaciones (assertions), que son los comandos que contienen las comprobaciones y validaciones de la prueba.
- Hooks: Permiten establecer condiciones antes o después de la ejecución de una prueba. En el ciclo de vida de una prueba, se ejecutan en el siguiente orden: `before()`, `beforeEach()`, `it`, `afterEach()`, `after()`. `before()` y `after()` se ejecutan una vez antes y después de todas las pruebas, mientras que `beforeEach()` y `afterEach()` se ejecutan antes y después de cada prueba.
- Ejecutar el proyecto: Utiliza el comando `npm start` en la terminal para ejecutar todas las pruebas. Si deseas ejecutar una prueba específica, agrega `.only` al `it`. Para omitir una prueba, agrega `.skip` al `it`.

## Automatización de Pruebas API

Este proyecto está orientado a TDD (Desarrollo Guiado por Pruebas) utilizando comandos personalizados que constan de 4 archivos ubicados en la carpeta de pruebas "api". Cada archivo representa una operación de CRUD (GET, POST, PUT y DELETE). Los datos necesarios para estas operaciones se encuentran en el archivo `data.js` dentro de la carpeta `fixtures`.

Se utilizó la validación con `.to.deep.equal` para comparar si dos conjuntos de claves en objetos o estructuras de datos son idénticos en términos de contenido y orden. Esto permite asegurarse de que una solicitud API tenga la misma estructura de claves que un esquema definido, lo que garantiza que la solicitud se ajuste a la estructura esperada sin verificar los valores de las claves, facilitando la validación de la estructura de la solicitud.

## Documentación de Cypress

- [Documentación oficial de Cypress](https://docs.cypress.io/guides/overview/why-cypress.html): La documentación oficial de Cypress es una fuente invaluable para aprender sobre las capacidades y características de Cypress.

## Cómo ejecutar este proyecto:
Primero se debe descargar el repo de la API en [Repositorio API](https://github.com/castilloedwin/movie-api) y se ejecuta con los comandos `npm install` y luego `npm start`. Posteriormente procedemos a clonar este repositorio de automatización y ejecutamos con `npm start`.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu contribución.
3. Realiza los cambios y asegúrate de que las pruebas pasen.
4. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Puedes utilizarlo y modificarlo según tus necesidades.

## Contacto

Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con el equipo de desarrollo a través de los correos de [María Fernanda Jiménez Heredia](mailto:fernanda.jimenezh@pragma.com.co) y [Juan Carlos Herazo Plazas](mailto:juan.herazop@pragma.com.co).

¡Gracias por utilizar este proyecto para automatizar tus pruebas de API con Cypress!