# AIONSour

Compañero portable para **AION 2** (Windows): cubos ocultos, medidor de daño, jefes de campo y eventos, mascotas, tareas diarias y semanales, misiones de encargo con sus recompensas y las habilidades de cada clase. Lee el tráfico del juego en tu PC, no modifica el juego ni envía tus datos a ningún sitio.

![Cubos ocultos](capturas/cubos.jpg)

**[⬇ Descargar AIONSour (ZIP)](https://github.com/JarekSour/AIONSour/archive/refs/heads/main.zip)**

## Instalación

1. Instala [Npcap](https://npcap.com) (lo necesita para leer el tráfico del juego).
2. [Descarga el ZIP](https://github.com/JarekSour/AIONSour/archive/refs/heads/main.zip) y descomprímelo donde quieras.
3. Abre `AIONSour.exe`. La captura empieza sola: escucha en todos tus adaptadores de red (cable, wifi, VPN…), así que no hay que elegir ninguno.

Es una carpeta portable: no se instala nada más y tus datos (historiales, tareas, mascotas, ajustes) se guardan dentro de ella.

## Funciones

### Cubos ocultos

- Detecta los cubos ocultos al aparecer y los marca en el mapa de la zona, con todos los puntos posibles donde pueden salir.
- Historial con la hora y el resultado de cada uno: **verde** si lo abriste tú, **rojo** si lo abrió otro jugador, o reemplazado por uno nuevo.
- Aviso con sonido y notificación al aparecer un cubo (configurable).

### Medidor de daño

![Medidor de daño](capturas/dano.png)

- Daño total, DPS y porcentaje de cada jugador del grupo, con su clase, y muertes del combate.
- Al pulsar un jugador, el desglose por habilidad: daño, golpes y críticos.
- Historial de combates con el nombre del jefe o monstruo, duración y número de jugadores.
- Solo cuenta el daño de jugadores y sus invocaciones; el combate termina al morir el jefe o tras un tiempo sin golpes (configurable).
- Barras animadas: crecen suavemente y, cuando un jugador adelanta a otro, su fila sube deslizándose por encima.

### Ventanas flotantes

| Minimapa | Medidor |
| --- | --- |
| ![Minimapa flotante](capturas/minimapa.jpg) | ![Medidor flotante](capturas/medidor.png) |

- **Minimapa** con el cubo activo y **medidor de daño** compacto, siempre encima del juego.
- Cada una con su ⚙: opacidad, tamaño y posición. Se abren con los botones de arriba a la derecha.

### Jefes de campo y eventos

![Jefes y eventos](capturas/jefes.png)

- Estado de los jefes de campo de cada zona: vivo o cuánto falta para que reaparezca.
- Próximos eventos (grietas, invasiones, festival de Shugo, arenas, asedios, reinicios…) con cuenta atrás.
- Marca los que te interesan (☆ en jefes, casilla en eventos) y te avisa unos minutos antes y al empezar:

  ![Aviso](capturas/aviso.png)

### Mascotas

![Mascotas](capturas/mascotas.png)

- Todas las mascotas del juego, por atributo, con su nivel y progreso de almas; las que aún no tienes aparecen atenuadas.
- Últimas almas obtenidas, con subida de nivel automática.
- Filtro por origen: de campo, solo de mazmorras o de tienda/otras. Buscador por nombre.
- Al pulsar una mascota, el **mapa con los puntos donde aparecen** los monstruos que la sueltan, por zona:

![Dónde aparece una mascota](capturas/mascota-mapa.jpg)

### Tareas

![Tareas](capturas/tareas.png)

- Lista de pendientes diarias y semanales **por personaje**; los personajes se añaden solos al entrar al juego con ellos.
- Tareas **automáticas** (marcadas «auto») que se actualizan solas con los datos del juego: tope de kinah, suministros del Abismo, prueba de ascenso, Pesadilla, tiempo y puntos del Abismo, Energía de Od, compras semanales, misiones de evento…
- Tarjeta **Cuenta** arriba (🌐), con lo que comparten todos tus personajes: misiones de encargo (5 al día por cuenta, sumando las de cada personaje), recompensas de asistencia, entradas a la Fisura desconocida (14 a la semana, se descuentan solas) y fabricar Energía de Od.
- Sección **Llaves y entradas**: llaves de Shugo y de Invasión dimensional (de cuenta) y llaves de cubo de cada personaje, leídas del juego. Solo informan: no cuentan como pendientes.
- Barra de Energía de Od de cada personaje.
- Tus propias tareas: nombre, diaria o semanal, número de veces y si son de personaje o de cuenta. Clic para sumar, clic derecho para restar.
- Reinicio diario y semanal automático a la hora del servidor.

### Misiones de encargo

![Misiones de encargo](capturas/encargos.png)

- El tablón de encargos de tu cuenta con las **recompensas** de cada uno, como en el juego: icono, cantidad abreviada (500, 1,0A…), candado si es ligado, fondo según su grado y probabilidad (100 %, 50 %, 33 %, 25 % y 10 %).
- **Aceptadas** aparte, arriba, y **disponibles** debajo, en el mismo orden que el juego. Se actualizan al momento al aceptar, abandonar, completar o reiniciar la lista, y las aceptadas se mantienen al reiniciarla.
- **Filtro por recompensa**: elige un objeto y verás solo los encargos que lo dan, primero los de más probabilidad.
- **Marcar recompensas**: elige las que te interesan (cristales de alma, tickets, llaves, materiales épicos…) y los encargos que las dan quedan resaltados. Tus marcas se guardan.
- Pulsa una misión o una recompensa para ponerle el nombre que sale en el juego; queda guardado.

### Clases

![Clases](capturas/clases.png)

- Las 9 clases con sus habilidades activas, pasivas y estigmas, con icono y nombre en español.

### Actualizaciones

- La app comprueba al abrirse (y cada 6 h) si hay una versión nueva y se actualiza con un clic, conservando tus datos.

## Notas

- Las capturas son de la propia app; los nombres de personaje se han cambiado por su clase.
- Nombres (en inglés), grados e iconos de los objetos: [AION2 Hub](https://aion2hub.com).
- Proyecto de aficionados, sin relación con NCSOFT.
