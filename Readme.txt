

El servidor  REST programado,consiste en una mini-base de datos no permanente, que permite almacenar un usuario y un n�mero 
de tel�fono perteneciente a ese usuario,tambi�n permite consultar el n�mero de tel�fono de un usuario a trav�s de una b�squeda.El front-end esta en JQuery y el back-end en node.js.

El documento html menu.html contiene enlaces a los 2 tipos de petici�n que se pueden realizar al navegador: "Consultar usuario" 
y "A�adir usuario": 

-El enlace "Consultar usuario" despliega un formulario html que permite hacer una petici�n POST al servidor REST para consultar y 
recuperar el tel�fono del usuario introducido.Para buscar al usuario deseado basta con introducir en el campo del formulario 
desplegado el nombre del usuario a buscar y presionar la tecla "enter" apareciendo el resultado en el html. Dicha b�squeda 
tambi�n se puede realizar mediante una petici�n GET, introduciendo en la barra del navegador: 
"http://127.0.0.1:8080/consulta/nombreUsuario". 

-El enlace "A�adir usuario" despliega un documento html que permite hacer una petici�n POST al servidor creando un usuario 
con un n�mero de tel�fono. Para crear un usuario se introduce el nombre del usuario a crear en el campo indicado del formulario 
desplegado y se pulsa la tecla "enter" posteriormente se introduce el n�mero de tel�fono del usuario en el campo indicado como 
tel�fono y se presiona la tecla "enter". 

Desde los dos formularios hay enlaces a los dos tipos de petici�n. 

Los ficheros que componen el c�digo son: 

- 'server.js' que se deber� ejecutar mediante "node server.js" para poner el servidor en marcha. 
- 'menu.html' contiene los enlaces a los dos tipos de peticiones. 
- 'consultar_formulario.html' y 'agregar_formulario.html' contienen los formularios para buscar y a�adir un usuario respectivamente. 
-'consulta.js' contiene las funciones que permiten hacer las disintas peticiones al servidor. 