# Práctica 4 - JavaScript

En esta cuarta práctica de la asignatura de PAT, se ha mejorado el site desarrollado anteriormente utilizando los conocimientos de JavaScript adquiridos en clase. Se ha incluido también una primera versión de registro/inicio de sesión utilizando Firebase. Por otro lado, se ha incorporado la interacción con dos API REST diferentes: una para conocer el tiempo meteorológico en una ciudad y otra para convertir monedas de distintos países. La temática de la página web es de Meliá Hotels International, una empresa del Índice Bursátil IBEX 35. El link a la website es:
	https://alejandra-moreno.github.io/index.html


## Novedades en la página web
Todos los cambios incorporados en esta entrega se encuentran en la pantalla de "Inicio", es decir, en el fichero *index.html*.  En primer lugar, el usuario puede crear una cuenta rellenando el formulario y su información se guardará en Firebase. El código relacionado con esta función se encuentra en el fichero *auth.js*.

![Capture3](https://user-images.githubusercontent.com/71815685/155856379-27858f46-fed9-4c9b-be5b-5e02f511c3e5.JPG)

Además, si el usuario no ha hecho log in en la página web el menú superior mostrará las opciones *Iniciar sesión* y *Crear cuenta*. 

![Capture](https://user-images.githubusercontent.com/71815685/155856265-6664bb39-2709-4ae0-b0f0-b4def9d91645.JPG)

Si por el contrario el usuario ha realizado alguna de esas acciones, entonces el menú cambiará y mostrará únicamente la opción *Cerrar sesión*.

![Capture2](https://user-images.githubusercontent.com/71815685/155856309-fdccf4e1-3160-48af-8570-1370af83538f.JPG)

Por otro lado, en la página de inicio el usuario puede hacer uso de las dos APIs implementadas. La primera, cortesía de OpenWeatherMap, nos permite conocer el tiempo meteorológico actual de una ciudad introduciendo el nombre en la barra de búsqueda. El código relacionado con esta API se encuentra en el fichero *weather.js*.

![Capture4](https://user-images.githubusercontent.com/71815685/155856430-d4142299-13c4-4f7f-b861-cf2d963127c5.JPG)

La segunda, sacada de la página web Exchanges Rates API, permite al usuario realizar cambios de moneda introduciendo la cantidad y monedas deseadas. El código relacionado con esta API se encuentra en el fichero *currency.js*.

![Capture5](https://user-images.githubusercontent.com/71815685/155856480-b820a4da-068b-432d-8fc5-9761ba723ca1.JPG)


## Referencias
- Página web oficial de Firebase: https://console.firebase.google.com/u/0/?hl=es-419
- Página web oficial de la API Open Weather Map: https://openweathermap.org/
- Página web oficial de Exchange Rates API : https://exchangeratesapi.io/
- Página web oficial de Bootstrap: https://getbootstrap.com/docs/5.1/getting-started/introduction/
- Para editar el README se ha usado: https://stackedit.io/
