# Sci-filos, 

## Introducción
El consumo de contenido audiovisual por medio de plataformas digitales, dispositivos móviles y streaming ha experimementado un boom desde hace algunos años. 
Netflix, la plataforma que va a la cabeza en este sector generó según datos de la propia empresa  2 mil 785 millones de dólares durante un segundo trimestre del 2017. 
Al ser un mercado en crecimiento las casas productoras "tradicionales"  y compañias relacionadas con el entretenimiento también han generado sus propias plataformas para la distribución de sus productos. Plataformas como FOX Play, Go, Cinepolis Clic o Google play son ejemplos de ello.

## Plateamiento del problema
¿A cuantos de nosotros no nos pasa que queremos ver una película pero no sabemos cual y terminamos naufragando en el catálogo de películas?
Pasa mas a menudo de lo que a veces nos gustaría, a pesar de los esfuerzos de las plataformas por mostrarnos sugerencias que nos podrían interesar.

## Nuestro producto.
De la necesidad de proporcionar una experiencia mas ágil al elegir contenido surge Sci-filos.
Una aplicación especializada en la recomendación de películas del género de ciencia ficción.
Sci-filos busca ayudar al usuario a elegir un titulo en un menor tiempo, para ello tiene una sección con sugerencias del día,  sugerencias basadas en mejores efectos especiales y un botón para obtener una sugerencia random.
Otra sección dentro de Sci-Filos es un top de las películas mejor calificas.
Para los amantes de la ciencia ficción que quieren conocer mas sobre una película en particular se agrego un buscador en la parte superior de la aplicación.

## Prototipado

Baja fidelidad
![probando](https://i.ibb.co/Y7K6ymq/prototipobaja.png)

- Pruebas de usabilidad
Entre las principales observaciones que se hizo a la interfaz está que falta especificar la función de los marcianitos en la parte inferior de la imagen de la película ya que algunos lo interpretaron como una posible pista de lo que trataba el filme o si se podía interactuar con ellos para jugar. Una vez que se les comentó que era para puntuar la película, uno sugirió cambiarlo por una barra que se llenara, 2 más opinaron que se regresara al tradicional sistema de estrellas, otro comentó que solo se agregara la calificación en número y 2 más creyeron conveniente agregar el texto “puntuación” sobre los marcianitos. 
El 80% opinó que la navegación era rápida y simple, solo uno se sintió confundido al no tener la visualización completa de la app (que tuviera texto e imágenes de las películas)
El 60% dijo que no la usaría mas de dos veces por semana ya que no tienen tanto tiempo para ver películas o buscar sobre ellas, el otro 40% se sintió entusiasmado en tener una app que le ayudara con el contenido que quería ver
Al 100% les pareció útil la idea para optimizar su tiempo y obtener sugerencias.

[Prototipo Marvel](https://marvelapp.com/87607bd/screen/53878026)

Alta fidelidad
![probando](https://i.ibb.co/0MtVBmx/prototipoalta.png)

[Resultados de las pruebas con usuarios](https://docs.google.com/document/d/1dciFzH8T0574tdzBzyVNgas-9lX_POLIqcIOxwKz0js/edit)

## Encuestas
[Encuestas](https://docs.google.com/document/d/1v1NqMLAKgoq1u7gdmKCabHb5l9X7pjnQUI4wuVi1-4A/edit)




## Build status
Terminado
## Code Style
- Vanilla Javascript
 
## Screenshots
![Pantalla de inicio](https://ibb.co/gb2N6Sy)
*Pantalla de Inicio en mobile*
![Pantalla de inicio en web](https://ibb.co/gPKhfSZ)
*Pantalla de inicio en web*
![Tarjeta con información detallada del personaje](https://ibb.co/QftTh60)
## Tech/framework usados
Desarrollado con:
-  HTML5
-  CSS3
- Javascript (ES6)
## Features
El objetivo de nuestra página es que el jugador tenga rápido acceso la información mas relevante de los campeones.
La pagina permite al usuario:
* Ver las diferentes listas de roles
* Dar clic sobre la tarjeta de un personaje para obtener información mas detallada
* Hacer busqueda por nombre del campeón
* Conocer el promedio de ataque de todos los campeones
 
* Utiliza la interfaz en móviles y web
* Realizar pruebas unitarias
## Instalación
Para poder utilizar el código, realizar modificaciones o contribuir al proyecto es necesario:
- Tener un editor de textos instalado (Visual Studio Code, Atom, Sublime, etc.)
- Realizar un fork del repositorio
- Clonarlo el fork a la computadora donde se vaya a trabajar
- Tener instalado Node.js
- Instalar las dependencias del proyecto con el comando *npm install*
## Archivos
El *boilerplate* de este proyecto contiene la siguiente estructura de archivos, así como toda la configuración de dependencias y tests:
```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
│   │
│   │──assets
│       ├── Logo LOL png.png
│       ├── blol.jpg
│       ├── icono-menu.png
│       └── logoLOL.png
└── test
    └── data.spec.js
8 directories, 17 files
```
La carpeta `data/` dentro del _boilerplate_ incluye un extracto de la data que podemos usar tanto en los tests como en la interfaz en sí. Todos los datos usados son ficticios, y su uso no afecta ni perjudica a ninguna persona o individuo moral.
### Carpeta src
**data.js**
En este archivo se encuentran las funciones que permiten la manipulación de datos a través de arreglos y objetos. Contiene toda la funcionalidad que corresponde a obtener, procesar y manipular datos.
**main.js**
Este archivo contiene todo el código y funciones relacionadas con mostrar en pantalla los datos solicitados por el usuario y obtenidos de las funciones ejecutadas en data.js
**index.html**
Contiene la maquetación base de nuestro sitio y sobre la que se agregan elementos del DOM de acuerdo a las necesidades de la interfaz, también contiene los links a las hojas de estilo y archivos de Javascript que dan estilo y funcionalidad a la página.
**style.css**
Aquí se encuentra todo el código relacionado a los estilos necesarios para todos los elementos de la interfaz
### Carpeta UX
En esta carpeta se encuentra documentado el proceso de diseño realizado para la elaboración de la interfaz, eso incluye la aplicación de entrevistas, encuestas y pruebas de usuario, así como la elaboracion de sketches, wireframes y prototipos.
## Tests
Para correr los test del proyecto es necesario:
- Tener instalado Node.js
- Instalar las dependencias del proyecto con el comando 
```javascript
npm install
```
- Ejecutar desde la terminal las pruebas unitarias con el comando
```javascript
npm run test
```
## ¿Cómo usar LOL Lovers?
Para ingresar a la plataforma de LOL Lovers, se debe contar con acceso a interner e ingresar a la liga: https://cristalgarcia.github.io/cdmx-2019-01-bc-core-data-lovers/src/
En la parte superior del menú se encuentran las opciones que pueden ser visitadas, también se encuentra un buscador para encontrar al campeon de su preferencia y por ultimo se puede dar clic en las tarjetas de los diferentes campeones para conocer una informacion mas detallada de cada uno.
## Colaboradoras
- [Cristal Grisel García Gutiérrez](https://github.com/Cristalgarcia)
- [Evaluz Vazquez Espinosa](https://github.com/eve2921/)

