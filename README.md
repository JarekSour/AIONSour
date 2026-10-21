# AIONSour

Compañero portable para **AION 2** (Windows): inicio con los próximos eventos, llaves y monedas, cubos ocultos, medidor de daño, jefes de campo y eventos, mascotas, tareas diarias y semanales, misiones de encargo con sus recompensas y las habilidades de cada clase. Lee el tráfico del juego en tu PC, no modifica el juego ni envía tus datos a ningún sitio.

![Cubos ocultos](capturas/cubos.jpg)

**[⬇ Descargar AIONSour (ZIP)](https://github.com/JarekSour/AIONSour/archive/refs/heads/main.zip)**

## Instalación

1. Instala [Npcap](https://npcap.com) (lo necesita para leer el tráfico del juego).
2. [Descarga el ZIP](https://github.com/JarekSour/AIONSour/archive/refs/heads/main.zip) y descomprímelo donde quieras.
3. Abre `AIONSour.exe`. La captura empieza sola: escucha en todos tus adaptadores de red (cable, wifi, VPN…), así que no hay que elegir ninguno.

Es una carpeta portable: no se instala nada más y tus datos (historiales, tareas, mascotas, ajustes) se guardan dentro de ella.

## Funciones

### Inicio

![Inicio](capturas/inicio.png)

- Cuenta atrás del **reinicio semanal** (y del diario), el **Festival de Shugo**, la **Invasión dimensional** y la **Grieta espacio-temporal**, o hasta cuándo siguen abiertos. Se ponen en amarillo cuando queda menos de 1 h y en rojo con menos de 15 min.
- **Batallas por los corredores**: las próximas batallas por los artefactos, desde cuándo están abiertos los corredores del Abismo y cuándo caducan, y de quién es cada artefacto (Elyos o Asmodian), leído del juego.
- **Campo de batalla**: cuánto falta para que abra (todos los días de 11:00 a 14:00 y de 19:00 a 21:00) o hasta cuándo sigue abierto.
- **Llaves y monedas**: llaves de Shugo y de Invasión dimensional de la cuenta, con su tope (21 y 7) y cuánto falta para la próxima recarga (+3 y +1 en cada reinicio diario); por personaje, llaves de cubo, kinah, kinah vinculada, puntos de Abismo, fichas de raíz centenaria y fragmentos de ensueño. Las cantidades adicionales salen entre paréntesis y en otro color: «16 (+3) / 21».

### Tareas

![Tareas](capturas/tareas.png)

- Lista de pendientes diarias y semanales **por personaje**; los personajes se añaden solos al entrar al juego con ellos.
- Tareas **automáticas** que se marcan solas con los datos del juego: tope de kinah, suministros (urgentes y semanales), compras de Energía de Od y de Piedras de grieta, Pesadilla, prueba de ascenso, tiempo y puntos del Abismo… Mientras no hay datos del juego dicen «entra al juego» y no se pueden marcar a mano.
- **PvP solo, PvP cooperativo y Campo de batalla**: victorias y participación de la semana (30 y 10; 3 y 3 en el Campo de batalla). Se actualizan solas al ganar o perder cada partida y al abrir la ventana de PvP del juego.
- Las entradas adicionales («quedan 0 (+2) / 3») se muestran aparte y no dejan la tarea pendiente.
- **Poder de combate** de cada personaje en su tarjeta, abreviado como en el juego (112,1A), y al día al equipar o cambiar de personaje.
- Sección **Por batalla**: los corredores del Abismo abiertos para tu cuenta y cuáles hizo cada personaje; se reinician con cada batalla por los artefactos.
- Tarjeta **Cuenta** arriba (🌐), con lo que comparten todos tus personajes: misiones de encargo (5 al día por cuenta), recompensas de asistencia, entradas a la Fisura desconocida (14 a la semana), compra de órdenes (12 a la semana) y fabricar Energía de Od.
- Barra de Energía de Od de cada personaje.
- **Tus propias tareas**: nombre, diaria, semanal o por batalla, número de veces y si son de personaje o de cuenta. Clic para sumar, clic derecho para restar. Debajo de «Nueva tarea» aparecen las que creaste, con su botón para borrarlas.
- Reinicio diario y semanal automático a la hora del servidor.

### Cubos ocultos

- Detecta los cubos ocultos al aparecer y los marca en el mapa de la zona (Verteron o Altgard), con todos los puntos posibles donde pueden salir.
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

- Estado de los jefes de campo de Verteron, Altgard y Reshanta Inferior del Caos: vivo o cuánto falta para que reaparezca.
- Próximos eventos de la versión Global con cuenta atrás: Invasión dimensional, Grieta espacio-temporal, Festival de Shugo y los reinicios diario y semanal.
- Marca los que te interesan (☆ en jefes, casilla en eventos) y te avisa unos minutos antes y al empezar:

  ![Aviso](capturas/aviso.png)

### Mascotas

![Mascotas](capturas/mascotas.png)

- Todas las mascotas del juego, por atributo, con su nivel y progreso de almas; las que aún no tienes aparecen atenuadas.
- Últimas almas obtenidas, con subida de nivel automática.
- Filtro por origen: de campo, solo de mazmorras o de tienda/otras. Buscador por nombre.
- Al pulsar una mascota, el **mapa con los puntos donde aparecen** los monstruos que la sueltan, por zona:

![Dónde aparece una mascota](capturas/mascota-mapa.jpg)

### Misiones de encargo

![Misiones de encargo](capturas/encargos.png)

- El tablón de encargos de tu cuenta con las **recompensas** de cada uno, como en el juego: icono, cantidad abreviada (500, 1,0A…), candado si es ligado, fondo según su grado y probabilidad (100 %, 50 %, 33 %, 25 % y 10 %).
- **Aceptadas** aparte, arriba, y **disponibles** debajo, en el mismo orden que el juego. Se actualizan al momento al aceptar, abandonar, completar o reiniciar la lista; las aceptadas se mantienen al reiniciarla y se vacían con el reinicio diario. Los encargos que empiezas con una orden comprada no se mezclan con los del tablón.
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
