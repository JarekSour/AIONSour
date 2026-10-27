// Traducción de la interfaz (español → inglés). La página se escribe en español; en inglés, un
// observador traduce cada texto que aparece (fijo o pintado por el código) y los atributos
// title/placeholder/aria-label con EN (frases exactas) y PATTERNS (frases con números o nombres).
// Lo que no esté en el diccionario se queda en español (I18N.missing lo apunta para completarlo).
// Los datos del juego (jefes, habilidades, mascotas…) los manda el servidor ya en el idioma elegido.
const I18N = (() => {
  const EN = {
    // Pestañas y cabecera
    "Inicio": "Home", "Tareas": "Tasks", "Cubos": "Cubes", "Daño": "Damage", "Jefes y eventos": "Bosses & events",
    "Mascotas": "Pets", "Encargos": "Duties", "Clases": "Classes", "Minimapa": "Minimap", "Medidor": "Meter",
    "Actualizar": "Update", "Más tarde": "Later", "Idioma": "Language",
    "Abre o cierra el minimapa flotante (se configura en su ⚙)": "Opens or closes the floating minimap (set it up in its ⚙)",
    "Abre o cierra el medidor de daño flotante (se configura en su ⚙)": "Opens or closes the floating damage meter (set it up in its ⚙)",
    // Inicio
    "Reinicio semanal": "Weekly reset", "Reinicio diario": "Daily reset", "Festival de Shugo": "Shugo Festival",
    "Invasión dimensional": "Dimensional Invasion", "Grieta espacio-temporal": "Spacetime Rift",
    "Batallas por los corredores": "Corridor battles", "Campo de batalla": "Battlefield", "Llaves y monedas": "Keys & currency",
    "Al terminar cada batalla por los artefactos se abren los corredores del Abismo (para la facción que la gana); caducan al empezar la siguiente.":
      "When each artifact battle ends, the Abyss corridors open (for the winning faction); they expire when the next one starts.",
    "Abierto todos los días de 11:00 a 14:00 y de 19:00 a 21:00.": "Open every day from 11:00 to 14:00 and from 19:00 to 21:00.",
    "En curso": "In progress", "En mantenimiento": "Under maintenance", "Cuenta": "Account", "Personajes": "Characters",
    "Llaves de Shugo": "Shugo keys", "Llaves de Invasión dimensional": "Dimensional Invasion keys", "Llaves de cubo": "Cube keys",
    "Kina": "Kinah", "Kina (vinculada)": "Kinah (bound)", "Puntos de Abismo": "Abyss points",
    "Fichas de raíz centenaria (Shugo)": "Centuryroot tokens (Shugo)", "Fragmentos de ensueño (Pesadilla)": "Phantasmal fragments (Nightmare)",
    "Batalla en curso: los corredores se abren al terminar": "Battle in progress: the corridors open when it ends",
    "Elyos": "Elyos", "Asmodian": "Asmodian", "Sin dueño": "No owner",
    // Cubos
    "◆ Ir al cubo": "◆ Go to cube", "Puntos posibles": "Possible spots", "punto posible de cubo": "possible cube spot",
    "Cubo encontrado": "Cube found", "Avisos de cubos": "Cube alerts", "Sonido al encontrar un cubo": "Sound when a cube is found",
    "Volumen": "Volume", "Probar aviso": "Test alert", "Si el minimapa flotante está abierto, el aviso suena en él.":
      "If the floating minimap is open, the alert plays there.", "Historial": "History", "Borrar historial": "Clear history",
    "Verde": "Green", "Rojo": "Red", ": lo abriste tú ·": ": you opened it ·", ": lo abrió otro jugador": ": another player opened it",
    "Mapa": "Map", "Centrar el mapa en el cubo activo": "Center the map on the active cube", "Acercar": "Zoom in", "Alejar": "Zoom out",
    "Configuración de los avisos de cubos": "Cube alert settings", "Probar el aviso": "Test the alert",
    "Borra el cubo activo y todo el historial": "Clears the active cube and all history", "Automático": "Automatic",
    "◆ ¡Cubo oculto!": "◆ Hidden cube!", "Cubo oculto": "Hidden cube", "abierto": "opened", "abierto por otro": "opened by another",
    "reemplazado": "replaced", "activo": "active", "cubo activo ·": "active cube ·",
    "¿Borrar el cubo activo y todo el historial? No se puede deshacer.": "Clear the active cube and all history? This can't be undone.",
    // Daño
    "Sin combates todavía": "No fights yet", "⟵ Combate actual": "⟵ Current fight", "⟲ Reiniciar": "⟲ Reset", "Reiniciar": "Reset",
    "Fin del combate": "End of fight", "Sin golpes durante": "No hits for",
    "Contra un jefe, terminar cuando muere o desaparece (no por inactividad)": "Against a boss, end when it dies or disappears (not on inactivity)",
    "Prueba con muñeco": "Training dummy test",
    "Muñeco de entrenamiento: el combate termina al cumplir ese tiempo (0 = sin límite) o antes si dejas de golpear.":
      "Training dummy: the fight ends after that time (0 = no limit) or earlier if you stop hitting.",
    "Jugador": "Player", "DPS": "DPS", "Habilidades": "Skills", "Habilidad": "Skill", "Golpes": "Hits", "Crít.": "Crit.",
    "Combates": "Fights", "Borrar": "Delete", "Muertes": "Deaths", "Daño total": "Total damage", "DPS del grupo": "Group DPS",
    "Duración": "Duration", "Jugadores": "Players", "Tus habilidades": "Your skills", "Combate": "Fight", "último combate": "last fight",
    "Ataca a algo y el combate aparecerá aquí.": "Attack something and the fight will show up here.",
    "Ataca a algo y aparecerá aquí.": "Attack something and it will show up here.", "La captura está detenida.": "Capture is stopped.",
    "⚔ Sin combates": "⚔ No fights", "Sin daño de jugadores en este combate.": "No player damage in this fight.",
    "Aún no hay combates terminados.": "No finished fights yet.", "clase desconocida": "unknown class", "Clase desconocida": "Unknown class",
    "Reiniciar el medidor (el combate actual pasa al historial)": "Reset the meter (the current fight goes to history)",
    "Termina el combate y deja vacíos este medidor y el flotante hasta tu próximo golpe": "Ends the fight and clears this meter and the floating one until your next hit",
    "Cuándo termina un combate": "When a fight ends", "Borra el historial de combates": "Clears the fight history",
    "¿Borrar todos los combates guardados? No se puede deshacer.": "Delete all saved fights? This can't be undone.",
    "Configuración de esta ventana": "Settings for this window", "Cerrar esta ventana": "Close this window",
    "Arrastra para cambiar el tamaño": "Drag to resize", "Muertes en este combate": "Deaths in this fight",
    // Jefes y eventos
    "Jefes de campo": "Field bosses", "Zona horaria del servidor": "Server time zone", "Aviso de jefes ★": "Boss alert ★",
    "min antes": "min before", "Aviso de eventos": "Event alert", "Pantalla": "Screen", "Posición del aviso": "Alert position",
    "Arriba a la izquierda": "Top left", "Arriba al centro": "Top center", "Arriba a la derecha": "Top right",
    "Centro de la pantalla": "Screen center", "Abajo a la izquierda": "Bottom left", "Abajo al centro": "Bottom center",
    "Abajo a la derecha": "Bottom right", "Probar notificación": "Test notification",
    "Marca con ★ los jefes de los que quieres aviso. Los jefes aparecen al visitar su mapa (el juego envía su estado).":
      "Mark with ★ the bosses you want alerts for. Bosses show up when you visit their map (the game sends their status).",
    "Próximos eventos": "Upcoming events",
    "Marca los eventos de los que quieres aviso: suena unos minutos antes y al empezar.":
      "Check the events you want alerts for: it plays a few minutes before and when they start.",
    "Avisos, zona horaria y volumen": "Alerts, time zone and volume", "Vivo": "Alive", "Desconocido": "Unknown",
    "Debería haber reaparecido": "Should have respawned", "Fijo": "Fixed", "Prueba de notificación": "Test notification",
    "Evento · Comienza ahora": "Event · Starting now", "Comienza ahora": "Starting now",
    // Mascotas
    "Mis mascotas": "My pets", "Todas": "All", "Obtenidas": "Obtained", "Sin obtener": "Not obtained",
    "Solo en mazmorras": "Dungeons only", "Tienda, cofres y otros": "Shop, chests and others",
    "Clic en una mascota para ver en el mapa dónde aparecen los monstruos que la sueltan.":
      "Click a pet to see on the map where the monsters that drop it spawn.", "Últimas obtenidas": "Recently obtained",
    "Qué mascotas mostrar": "Which pets to show", "Buscar…": "Search…", "Borra el historial de almas": "Clears the soul history",
    "¿Borrar el historial de almas de mascota?": "Clear the pet soul history?", "Máx.": "Max",
    "Monstruos que la sueltan": "Monsters that drop it", "Cerrar": "Close",
    // Tareas
    "Pendientes por personaje": "To do per character", "Nueva tarea": "New task", "Nueva tarea…": "New task…",
    "Diaria": "Daily", "Semanal": "Weekly", "Por batalla": "Per battle", "Personaje": "Character", "Añadir": "Add",
    "Diarias": "Daily", "Semanales": "Weekly", "Llaves y entradas": "Keys & entries", "Tus tareas": "Your tasks",
    "Compartidas por todos tus personajes": "Shared by all your characters", "Todo hecho": "All done",
    "Reinicio diario a las 07:00 UTC y semanal el miércoles a las 07:00 UTC (servidores Global).":
      "Daily reset at 07:00 UTC and weekly on Wednesday at 07:00 UTC (Global servers).",
    "Entra al juego con un personaje y aparecerá aquí.": "Log in with a character and it will show up here.",
    "Borrar tarea": "Delete task", "A la venta": "For sale", "Lo que te falta, en el mapa:": "What you're missing, on the map:",
    "Lo que te falta": "What you're missing", "Ya tienes al máximo todas las mascotas de esta zona.": "All pets in this zone are already maxed.",
    "Pasa el ratón por un punto para ver qué mascota sale; clic para abrir su mapa.": "Hover a point to see which pet drops there; click to open its map.", "Todas las zonas": "All zones", "Zona donde aparece": "Zone where it appears", "Agotada": "Sold out",
    "Ya tienes al máximo todas las mascotas a la venta.": "All pets for sale are already maxed.",
    "Abre una tienda de mascotas en el juego para verlas aquí.": "Open a pet shop in the game to see them here.",
    "La tienda se renovó: vuelve a abrirla para ver lo que vende ahora.": "The shop has refreshed: open it again to see what it sells now.",
    "Borrar combates": "Delete fights", "Quitar personaje": "Remove character",
    "Quitar": "Remove", "Cancelar": "Cancel", "Aceptar": "OK",
    "Se quitará {0} de todos tus personajes, junto con lo que tengas marcado.":
      "{0} will be removed from all your characters, along with anything you've checked.",
    // Ventanas flotantes (su ⚙) y su barra de título
    "Opacidad": "Opacity", "Siempre encima": "Always on top", "Medidor de daño": "Damage meter",
    "Ningún cubo a la vista.": "No cube in sight.", "Aún no has visto ningún cubo.": "You haven't seen any cube yet.", "Energía de Od": "Od Energy",
    "diaria": "daily", "semanal": "weekly", "por batalla": "per battle", "cuenta": "account", "personaje": "character",
    // Tareas automáticas (nombres) y estados
    "Misiones de encargo": "Duty missions", "Recompensas de asistencia": "Attendance rewards", "Tope de kinah": "Kinah cap",
    "Suministros: urgentes": "Supplies: urgent", "Suministros: semanales": "Supplies: weekly",
    "Mazmorra diaria: Fisura desconocida": "Daily dungeon: Unknown Fissure", "Comprar órdenes": "Buy orders", "Ciudad": "City", "Abismo": "Abyss", "común": "common", "poco común": "uncommon", "raro": "rare", "épico": "epic",
    "Fabricar Energía de Od": "Craft Od Energy", "Comprar Energía de Od": "Buy Od Energy",
    "Comprar Piedras de grieta": "Buy Rift Stones", "Pesadilla": "Nightmare", "Prueba de ascenso": "Ascension Trial",
    "Tiempo en el Abismo": "Abyss time", "Corredores del Abismo": "Abyss corridors",
    "Set": "Set", "Configuración": "Settings", "Configurar notificación": "Notification settings", "Recordatorio de set": "Set reminder",
    "Sale en la misma ventana que los avisos de jefes y eventos: el volumen, la pantalla y la posición son los mismos.":
      "It shows in the same window as the boss and event alerts: volume, screen and position are shared.",
"Set para cada contenido": "Set for each content", "Mundo abierto": "Open world", "Set actual:": "Current set:",
    "Elige el set de cada personaje. Si empiezas una partida de PvP o entras al mundo abierto (Verteron o Altgard) con otro set puesto, se mostrará una notificación.":
      "Pick each character's set. If you start a PvP match or enter the open world (Verteron or Altgard) with another set on, a notification will show up.",
    "cámbialo en el juego para que lo vea": "switch it in the game so the app sees it", "no sé qué set llevas": "current set unknown",
    "Entra al juego con tus personajes para configurar sus sets.": "Log in with your characters to set up their sets.",
    "PvP solo": "Solo PvP", "PvP cooperativo": "Co-op PvP", "Victorias": "Wins", "Participación": "Participation",
    "entra al juego": "log in", "abre la ventana de PvP": "open the PvP window", "reclamada": "claimed", "pendiente": "pending",
    "hecho": "done", "ninguno": "none", "agotado": "used up",
    // Encargos
    "Filtros": "Filters", "Marcar recompensas": "Mark rewards", "Quitar marcas": "Clear marks",
    "Pulsa el nombre de una misión o de una recompensa para ponerle nombre, como sale en el juego.":
      "Click a mission or reward name to rename it as it appears in the game.",
    "Ver solo los encargos que dan esta recompensa": "Show only duties that give this reward",
    "Todas las recompensas": "All rewards", "Aceptadas": "Accepted", "Disponibles": "Available", "Completada": "Completed",
    "En curso…": "In progress…",
    // Clases
    "Elige una clase": "Choose a class", "Activas": "Active", "Pasivas": "Passive", "Estigmas": "Stigmas",
    "Habilidades activas": "Active skills", "Habilidades pasivas": "Passive skills",
    "Gladiador": "Gladiator", "Templario": "Templar", "Asesino": "Assassin", "Arquero": "Ranger", "Hechicero": "Sorcerer",
    "Invocador": "Spiritmaster", "Clérigo": "Cleric", "Cantor": "Chanter", "Luchador": "Fighter",
    // Mascotas: familias y fichas
    "Especial": "Special", "Otras": "Others", "veces": "times", "vez": "time", "¡Nueva!": "New!", "¡nueva!": "new!", "subió de nivel": "leveled up",
    "Activa": "Active", "clic: dónde aparece": "click: where it spawns", "Aún no la tienes": "You don't have it yet",
    "Monstruos que la sueltan:": "Monsters that drop it:", "Solo aparece en mazmorras (ver abajo).": "Only appears in dungeons (see below).",
    "No hay posiciones conocidas.": "No known positions.", "Sin datos (visita el mapa)": "No data (visit the map)",
    "La colección completa la envía el juego al entrar a un mapa o cambiar de personaje; mientras tanto se usa la última guardada.":
      "The game sends the full collection when you enter a map or switch characters; until then the last saved one is used.",
    // Encargos y cubos
    "Pulsa para ponerle nombre": "Click to rename", "Pulsa para marcar los encargos que lo dan": "Click to mark the duties that give it",
    "Pulsa para marcar": "Click to mark", "fin desconocido": "unknown end",
    // Mapas (static/maps/maps.json)
    "Reshanta Inferior del Caos": "Chaotic Lower Reshanta", "Reshanta Media del Caos": "Chaotic Middle Reshanta",
    "Reshanta Superior del Caos": "Chaotic Upper Reshanta", "mapa desconocido": "unknown map", "Cargando mapas…": "Loading maps…",
    // Varios
    "hace": "ago", "Aviso": "Alert", "Evento": "Event", "Jefe": "Boss", "Avisarme": "Alert me",
    "Captura detenida": "Capture stopped", "No obtenida": "Not obtained", "Pantalla": "Screen",
  };
  // Frases con números o nombres dentro: [patrón, reemplazo].
  const PATTERNS = [
    [/^quedan (.+)$/, "$1 left"], [/^hace (.+)$/, "$1 ago"], [/^visto hace (.+)$/, "seen $1 ago"], [/^· se renueva en (.+)$/, "· refreshes in $1"],
    [/^Vivo \(visto hace (.+)\)$/, "Alive (seen $1 ago)"], [/^abierto por otro tras (.+)$/, "opened by another after $1"],
    [/^abierto por ti tras (.+)$/, "opened by you after $1"], [/^reemplazado tras (.+)$/, "replaced after $1"],
    [/^fuera de rango tras (.+)$/, "out of range after $1"], [/^Misión (\d+)$/, "Mission $1"], [/^Artefacto (\d+)$/, "Artifact $1"],
    [/^Nv (\d+)$/, "Lv $1"], [/^Usa el set (\d+)$/, "Use set $1"], [/^llevas el set (\d+)$/, "you have set $1"], [/^Set (\d+)$/, "Set $1"], [/^(\d+) mascotas$/, "$1 pets"], [/^(\d+)\/(\d+) almas$/, "$1/$2 souls"], [/^mundo (\d+)$/, "world $1"], [/^(\d+) veces$/, "$1 times"], [/^1 vez$/, "1 time"],
    [/^última (.+)$/, "last $1"], [/^Abre en (.+)$/, "Opens in $1"], [/^tablón de ([^·]+?)( · .+)?$/, (m, who, rest) => `${tr(who)}'s board${rest || ""}`],
    [/^Aceptadas$/, "Accepted"], [/^Disponibles$/, "Available"],
    [/^Un combate termina tras (.+) sin golpes, o contra un jefe al morir o desaparecer\. Solo cuenta el daño de jugadores y sus invocaciones\.$/,
     "A fight ends after $1 without hits, or against a boss when it dies or disappears. Only damage from players and their summons counts."], [/^hace (\d+) (s|min)$/, "$1 $2 ago"], [/^en (.+)$/, "in $1"],
    [/^Termina en (.+)$/, "Ends in $1"], [/^termina en (.+)$/, "ends in $1"],
    [/^(\d+) encargos? marcados?$/, (m, n) => `${n} marked ${n === "1" ? "duty" : "duties"}`], [/^A las (.+)$/, "At $1"], [/^Reinicio diario en (.+)$/, "Daily reset in $1"],
    [/^Mantenimiento: (.+) · ~5–6 h$/, "Maintenance: $1 · ~5–6 h"], [/^Termina ~(.+)$/, "Ends ~$1"],
    [/^Diario en (.+) · semanal en (.+) · batalla en (.+)$/, "Daily in $1 · weekly in $2 · battle in $3"],
    [/^(\d+) pendientes?$/, (m, n) => `${n} pending`], [/^(\d+) de (\d+) cofres abiertos$/, "$1 of $2 chests opened"],
    [/^Corredores abiertos desde (.+); caducan (.+)$/, "Corridors open since $1; they expire $2"],
    [/^Corredores abiertos desde (.+); caducan al empezar la batalla$/, "Corridors open since $1; they expire when the battle starts"],
    [/^Los corredores se abren al terminar \((.+)\)$/, "The corridors open when it ends ($1)"],
    [/^Artefacto (\d+):$/, "Artifact $1:"], [/^Habilidades de (.+)$/, "$1's skills"],
    [/^desde las (.+)$/, "since $1"], [/^(\d+) jug\.$/, "$1 pl."], [/^● En curso$/, "● In progress"],
    [/^Reaparece en (.+)$/, "Respawns in $1"], [/^Debería haber reaparecido (.+)$/, "Should have respawned $1"],
    [/^¿Quitar a (.+) de la lista de tareas\?$/, "Remove $1 from the task list?"],
    [/^\+(\d+) en (.+)$/, "+$1 in $2"], [/^Personaje (.+)$/, "Character $1"], [/^Jugador (\d+)$/, "Player $1"],
    [/^Entidad (\d+)$/, "Entity $1"], [/^Sin cubo$/, "No cube"],
    [/^Nombre del objeto (\d+), como sale en el juego \(vacío: quitarlo\):$/, "Name of item $1, as shown in the game (empty: remove it):"],
    [/^Nombre de la misión (\d+), como sale en el juego \(vacío: quitarlo\):$/, "Name of mission $1, as shown in the game (empty: remove it):"], [/^Pantalla (\d+) \(principal\)$/, "Screen $1 (primary)"], [/^Pantalla (\d+)$/, "Screen $1"], [/^Mundo (\d+)\?$/, "World $1?"], [/^Automático \((.+)\)$/, "Automatic ($1)"],
  ];
  const DAYS = { "lunes": "Monday", "martes": "Tuesday", "miércoles": "Wednesday", "jueves": "Thursday", "viernes": "Friday",
                 "sábado": "Saturday", "domingo": "Sunday" };
  let lang = "es";
  const original = new WeakMap();     // nodo de texto → texto en español
  const written = new WeakMap();      // nodo de texto → lo último que escribimos
  const missing = new Set();
  const ATTRS = ["title", "placeholder", "aria-label"];

  function tr(s) {
    if (lang === "es" || typeof s !== "string") return s;
    const k = s.trim().replace(/\s+/g, " ");
    if (!k || !/[A-Za-zÁÉÍÓÚáéíóúñÑ]/.test(k)) return s;
    let out = EN[k];
    if (out === undefined) {
      for (const [re, rep] of PATTERNS) if (re.test(k)) { out = k.replace(re, rep); break; }
    }
    if (out === undefined && DAYS[k.split(" ")[0]]) out = k.replace(/^\S+/, w => DAYS[w]);
    if (out === undefined) {                      // separador al final («⚔ Entidad 9000 ·»): se conserva
      const m = k.match(/^(.*?[^\s·:,;])([\s·:,;]+)$/);
      const rest = m && tr(m[1]);
      if (m && rest !== m[1]) out = rest + m[2];
    }
    if (out === undefined) {                      // símbolos delante («🏠 Inicio», «◆ Cubos»): se conservan
      const m = k.match(/^([^A-Za-zÁÉÍÓÚáéíóúñÑ¿¡]+)(.+)$/);
      const rest = m && tr(m[2]);
      if (m && rest !== m[2]) out = m[1] + rest;
    }
    if (out === undefined && /\n/.test(s.trim())) {         // tooltip de varias líneas: línea a línea
      const lines = s.split("\n"), done = lines.map(tr);
      if (done.some((d, i) => d !== lines[i])) return done.join("\n");
    }
    if (out === undefined && k.includes(" · ")) {        // «3 veces · última 01:20»: trozo a trozo
      const parts = k.split(" · "), done = parts.map(tr);
      if (done.some((d, i) => d !== parts[i])) out = done.join(" · ");
    }
    if (out === undefined) { missing.add(k); return s; }
    if (s.trim() !== k) return s.replace(s.trim(), out);   // tenía saltos de línea dentro
    // Lo de dentro de un patrón (p. ej. «en 3 h» → «in 3 h») puede tener más traducción.
    return s.replace(k, out);
  }
  function text(n) {
    const cur = n.nodeValue;
    if (!original.has(n) || cur !== written.get(n)) original.set(n, cur);      // el código lo cambió
    const v = tr(original.get(n));
    written.set(n, v);
    if (cur !== v) n.nodeValue = v;
  }
  function attrs(el) {
    for (const a of ATTRS) {
      if (!el.hasAttribute || !el.hasAttribute(a)) continue;
      const key = `i18n${a}`, cur = el.getAttribute(a);
      if (el[key] === undefined || cur !== el[key + "w"]) el[key] = cur;
      const v = tr(el[key]);
      el[key + "w"] = v;
      if (cur !== v) el.setAttribute(a, v);
    }
  }
  function walk(root) {
    if (root.nodeType === 3) { if (!skip(root.parentNode)) text(root); return; }
    if (root.nodeType !== 1 || skip(root)) return;
    attrs(root);
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    for (let n = it.nextNode(); n; n = it.nextNode()) {
      if (n.nodeType === 1) { if (skip(n)) continue; attrs(n); } else if (!skip(n.parentNode)) text(n);
    }
  }
  const skip = el => !el || el.closest?.("script, style, [data-noi18n]");
  const observer = new MutationObserver(list => {
    for (const m of list) {
      if (m.type === "characterData") { if (!skip(m.target.parentNode)) text(m.target); }
      else if (m.type === "attributes") attrs(m.target);
      else m.addedNodes.forEach(walk);
    }
  });
  function set(l) {
    lang = l === "en" ? "en" : "es";
    document.documentElement.lang = lang;
    if (document.body) walk(document.body);
  }
  function start() {
    walk(document.body);
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
  // Mensajes que no van a la página (confirm/alert) también se traducen.
  const confirm0 = window.confirm.bind(window), alert0 = window.alert.bind(window), prompt0 = window.prompt.bind(window);
  window.confirm = msg => confirm0(tr(msg));
  window.alert = msg => alert0(tr(msg));
  window.prompt = (msg, value) => prompt0(tr(msg), value);
  return { set, tr, get lang() { return lang; }, missing,
           locale: () => (lang === "en" ? "en-US" : "es") };
})();
