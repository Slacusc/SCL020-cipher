Usa este alfabeto simple (solamente mayúsculas y sin ñ):

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

README.md: debe explicar cómo descargar, instalar y ejecutar la aplicación así como una introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.


Proyecto "Videojuego"

Se realizó una primera encuesta a usuarios de consola y PC para saber que preferencias tneían respecto a los juegos. El resultado de la encuesta arrojó los siguientes resultados.

Crear una historia de:

Aventura: 7
Misterio: 2

Género

Ciencia Ficción: 7
Fantasía: 2

Protagonista

El usuario: 4
Personajes anteriormente creados: 5

Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto?

Jugadores de RPGs o Juegos de interaccion/aventura

- Cuáles son los objetivos de estos usuarios en relación con tu producto?

Resolver una problemática dentro del juego que les permita pasar a una siguiente etapa

- Cómo crees que el producto que estás creando está resolviendo sus problemas?

A través del producto podrán llegar a la siguiente etapa y se les entregará un bonus por resolver el acertijo, este bonus sumará un item inédito a su perfil de jugador.

En base a lo consultado previamente se procede a elaborar una planilla tanto CSS como en HTML que tenga características asociadas al género elegido.

Se decidió ocupar varias páginas que tengan distintas funciones, estas son a grandes rasgos:


1.- Bienvenida (con breve historia de como llegó ahi)
    Validación de personaje con su nivel
    Botón confirmar (quieres continuar?)
    Botón Siguiente 
2.- Ventana con el suceso que ocurre en ese momento, timer y cifrador.
3.- Dos ventanas más que responderan a logrado y no logrado con sus respectivas funciones para tal.

Se empieza a trabajar en HTML y CSS

```
 let Btn = document.getElementById("Btn");
Btn.addEventListener("click", Correcto);

```



Interfaz de usuario (UI)
La interfaz debe permitir al usuario:

Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
Insertar un mensaje (texto) que queremos cifrar.
Ver el resultado del mensaje cifrado.
Insertar un mensaje (texto) a descifrar.
Ver el resultado del mensaje descifrado.