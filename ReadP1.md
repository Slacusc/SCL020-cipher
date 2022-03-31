

README.md: debe explicar cómo descargar, instalar y ejecutar la aplicación así como una introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.


**Proyecto "Videojuego"**

Se realizó una primera encuesta a usuarios de consola y PC para saber que preferencias tneían respecto a los juegos. El resultado de la encuesta arrojó los siguientes resultados.

**Crear una historia de:**

**Aventura: 7**
Misterio: 2

Género

**Ciencia Ficción: 7**
Fantasía: 2

Protagonista

El usuario: 4
**Personajes anteriormente creados: 5**

**Definición del producto**


- **Quiénes son los principales usuarios de producto?**

    Jugadores de RPGs o Juegos de interaccion/aventura

- **Cuáles son los objetivos de estos usuarios en relación con tu producto?**

    Resolver una problemática dentro del juego que les permita pasar a una siguiente etapa

- **Cómo crees que el producto que estás creando está resolviendo sus problemas?**

    A través del producto podrán llegar a la siguiente etapa y se les entregará un bonus por resolver el acertijo, este bonus sumará un item inédito a su perfil de jugador.

En base a lo consultado previamente se procede a elaborar una planilla tanto CSS como en HTML que tenga características asociadas al género elegido.

Se decidió ocupar varias páginas que tengan distintas funciones, estas son a grandes rasgos:


1.- Bienvenida (con breve historia de como llegó ahi)
    Validación de personaje con su nivel
    Botón confirmar (quieres continuar?)
    Botón Siguiente 
2.- Ventana con el suceso que ocurre en ese momento, timer y cifrador.
3.- Dos ventanas más que responderan a logrado y no logrado con sus respectivas funciones para tal.

**Se empieza a trabajar en HTML y CSS**

Se crea una plantilla básica y se empieza a determinar que tipo de fuente es la que se va a ocupar en el proyecto. Dada la naturaleza "ciencia ficción" que por encuesta salió elegida, se busca una fuente acorde para generar el ambiente.

Esta se pega en la plantilla:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Survivors Starship</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
  </head>
```

Luego se genera toda la interfaz gráfica en CSS, destacando el poner un fondo de pantalla acorde con la temática del proyecto.



```css
body
  {
    background: #000033; 
    background-image: url(https://i.ibb.co/xFXPh3Y/Dise-o-sin-t-tulo-22.png
    );
    background-repeat: repeat;
    background-size: auto;
    background-position: center;
    padding: 0;
    margin:0;
    text-align: center;
    font-size: 120%;
    color: white;
    font-family: 'Orbitron', sans-serif;

```
Se inserta imagen (referencial) de un personaje en formato gif (sin fondo) para que sea mas familiar al usuario, para colocar esta imagen se intervino en el codigo html.

Lo mismo al colocar un botón para empezar a jugar, el cual se ocupó una imagen creada en canva a la que se le quitó el fondo y se dimensionó para utilizar en el proyecto.

El botón se habilitó a través de la función getElementById el cual permite al hacer click, lanzar una alerta (con mensaje para el usuario) y direccionarlo de manera automática con un alert incluido en el código, el cual ejecuta un window position.

```javascript

 let Btn = document.getElementById("Btn");
Btn.addEventListener("click", Correcto);

function Correcto() {
    alert("Cuidado con lo que deseas, viajero.")
    window.location="Cipher.html";
     
    }
```
Se habilita Cipher.html para poder codear en ese ambiente el cifrador, el cual contará con diversos elementos para hacer la interfaz acorde a la historia que cuenta el proyecto.

Luego de un feedback con mis compañeras de laboratoria, quedamos todas de acuerdo en que es necesario crear una página principal que cuente de manera resumida:

- **Por qué el usuario está ahi y va a realizar una prueba**
- **Breve historia para crear la ambientación para lo que se viene**

Tambien se realiza en FIGMA un boceto rápido de cada una de las ventanas a crear.

La interfaz visual ya está andando y ahora se empezará a trabajar con JS y todo lo que es cifrado.

28/03

Se intenta aplicar el cifrador en javascript pero se necesita primero el ambiente visual para aplicarlo. Se prueban varios códigos y si bien funcionan, estos no se adecúan a lo que el proyecto busca.

Finalmente se parte de cero con la caja que contendrá el cifrador y se logra algo rústico pero más cercano a lo que se busca en el proyecto.

Se aplica bordes con sombra a las cajas de texto y también cifrador.

**Cierre del primer sprint (31/03/2022)**

- Feedbacks y presentación.
- Programar planning segundo sprint en Trello.

Se programa siguiente sprint y se trabaja en CSS la última hora del día.


**Preguntas para OH:**

 - tienen que ser los dos requisitos del cifrador?

    *Interfaz de usuario (UI)
    La interfaz debe permitir al usuario:
    Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
    Insertar un mensaje (texto) que queremos cifrar.
    Ver el resultado del mensaje cifrado.
    Insertar un mensaje (texto) a descifrar.
    Ver el resultado del mensaje descifrado.*

 - Cajitas para la interfaz visual
 - cajas para el cifrador, una para el código a descifrar y otra para responder.

 Se sube a GitHub

 
 
