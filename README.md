# Práctica 4 - JavaScript

En esta cuarta práctica de la asignatura de PAT se ha mejorado el site desarrollado anteriormente utilizando los conocimientos de JavaScript adquiridos en clase. Se ha incluido también una primera versión de registro/inicio de sesión utilizando Firebase. Por otro lado, se ha incorporado la interacción con dos API REST diferentes: una para conocer el tiempo meteorológico en una ciudad y otra para convertir monedas de distintos países. La temática de la página web es de Meliá Hotels International, una empresa del Índice Bursátil IBEX 35. El link a la website es:
	https://alejandra-moreno.github.io/index.html


## Novedades en la página web
Todos los cambios incorporados en esta entrega se encuentran en la pantalla "Inicio", es decir, en el fichero *index.html*.  En primer lugar, el usuario puede rellenar el formulario para crearse una cuenta, de modo que su dirección de correo electrónico y contraseña quedarán registrados en Firebase. El código relacionado con esta función está en el fichero *auth.js*.

![Capture3](https://user-images.githubusercontent.com/71815685/155856845-5d4f7131-4262-4dfe-8d97-020c7e8a30dd.JPG)

Además, si el usuario no ha hecho log in en la página web el menú superior mostrará las opciones *Iniciar sesión* y *Crear cuenta*.

![Capture](https://user-images.githubusercontent.com/71815685/155856834-a7234aa2-7cbd-47ea-ba7d-a6a0bce66ed6.JPG)

Si por el contrario el usuario ha realizado ya alguna de esas acciones, entonces el menú cambiará y mostrará únicamente la opción *Cerrar sesión*.

![Capture2](https://user-images.githubusercontent.com/71815685/155856839-f326b3b2-155f-4711-ba67-a19054553ac7.JPG)

Por otro lado, la API de Open Weather Map nos permite conocer el tiempo meteorológico actual de una ciudad introduciendo el nombre en el buscador. El código donde se implementa esta funcionalidad se encuentra en el fichero *weather.js*.

![Capture4](https://user-images.githubusercontent.com/71815685/155856912-3c7e7d9a-764b-4421-b175-45c93b8827b4.JPG)

Finalmente, la API de Exchange rates permite al usuario convertir monedas introduciendo la cantidad y monedas deseadas. El código donde se implementa esta funcionalidad se encuentra en el fichero *currency.js*.

![Capture5](https://user-images.githubusercontent.com/71815685/155856964-8b262630-5ae6-442a-a794-95d91023d561.JPG)


## Referencias
- Página web oficial de Firebase: https://console.firebase.google.com/u/0/?hl=es-419
- Página web oficial de la API Open Weather Map: https://openweathermap.org/
- Página web oficial de Exchange Rates API : https://exchangeratesapi.io/
- Página web oficial de Bootstrap: https://getbootstrap.com/docs/5.1/getting-started/introduction/
- Para editar el README se ha usado: https://stackedit.io/
