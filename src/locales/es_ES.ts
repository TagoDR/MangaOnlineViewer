import type { ILocale } from '../types';

export default {
  ID: 'es_ES',
  NAME: 'Español (ES)',
  STARTING: 'Iniciando<br>Manga OnlineViewer',
  RESUME: 'Continuando lectura desde la Página ',
  WAITING: 'Por favor espere, 3 segundos...',
  CHOOSE_BEGINNING: 'Elija la página en la que comenzar:',
  BUTTON_START: 'Iniciar Manga OnlineViewer',
  SETTINGS: 'Ajustes',
  LANGUAGE: 'Idioma',
  COLOR_SCHEME: 'Esquema de color',
  THEME: 'Tema',
  THEME_COLOR: 'Color',
  THEME_HUE: 'Matiz del color',
  THEME_SHADE: 'Saturación del color',
  DEFAULT_LOAD_MODE: 'Modo de carga por defecto',
  LOAD_MODE_NORMAL: 'Normal (Espera 3s)',
  LOAD_MODE_ALWAYS: 'Siempre (Inmediatamente)',
  LOAD_MODE_NEVER: 'Nunca (Manualmente)',
  LOAD_SPEED: 'Velocidad carga página/segundo',
  DEFAULT_ZOOM: 'Zoom por defecto (entre 5 y 200)',
  DEFAULT_ZOOM_MODE: 'Modo de zoom por defecto',
  MINIMUM_ZOOM: 'Zoom mínimo relativo al ancho de la pantalla',
  ZOOM_STEP: 'Paso entre cambios de zoom (entre 5 y 50)',
  DEFAULT_VIEW_MODE: 'Modo de visualización por defecto',
  VIEW_MODE_VERTICAL: 'Vertical',
  VIEW_MODE_LEFT: 'Izquierda a derecha',
  VIEW_MODE_RIGHT: 'Derecha a izquierda',
  VIEW_MODE_WEBCOMIC: 'WebComic',
  FIT_WIDTH_OVERSIZED: 'Ajustar ancho si es demasiado grande',
  SHOW_THUMBNAILS: 'Mostrar miniaturas',
  ENABLE_COMMENTS: 'Capturar comentarios (cuando esté disponible)',
  HIDE_CONTROLS: 'Ocultar siempre la barra de controles',
  HEADER_TYPE: 'Cambiar tipo de cabecera',
  HEADER_HOVER: 'Pasar por encima',
  HEADER_SCROLL: 'Desplazamiento',
  HEADER_CLICK: 'Hacer click',
  HEADER_FIXED: 'Fijo',
  HEADER_SIMPLE: 'Sencillo',
  BUTTON_DOWNLOAD: 'Descargar',
  DOWNLOAD_ZIP: 'Descargar fichero Zip',
  DOWNLOAD_IMAGES: 'Autodescargar imágenes como Zip',
  BUTTON_NEXT: 'Siguiente',
  NEXT_CHAPTER: 'Siguiente capítulo',
  BUTTON_PREVIOUS: 'Anterior',
  PREVIOUS_CHAPTER: 'Capítulo anterior',
  BOOKMARKS: 'Marcadores',
  BOOKMARK: 'Marcador',
  BOOKMARK_REMOVED: 'Marcador eliminado',
  BOOKMARK_SAVED: 'Marcador guardado',
  BOOKMARK_MESSAGE:
    'La próxima vez que abra este capítulo, continuará desde la <h4>página ##num##</h4>(Sólo <i>UNA VEZ</i> por Marcador)',
  KEYBINDINGS: 'Atajos de teclado',
  EDIT_KEYBINDS: 'Editar atajos',
  SAVE_KEYBINDS: 'Guardar atajos',
  BUTTON_EDIT: 'Editar',
  BUTTON_SAVE: 'Guardar',
  KEYBIND_RULES: `
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
  ATTENTION: 'Atención',
  WARNING: 'Alerta',
  BUTTON_RESET_SETTINGS: 'Reiniciar ajustes(Reset Settings)',
  SETTINGS_RESET:
    'Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto',
  LANGUAGE_CHANGED: 'Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto',
  AUTO_DOWNLOAD:
    'La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente',
  LAZY_LOAD:
    "La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",
  LAZY_LOAD_IMAGES_ENABLE: 'Habilitar carga de imágenes diferida',
  LAZY_LOAD_IMAGES: 'Empezar carga diferida a partir de la página (entre 5 y 100)',
  RETURN_CHAPTER_LIST: 'Regresar a la lista de capítulos',
  PAGES_LOADED: 'Páginas cargadas',
  GO_TO_PAGE: 'Ir a página',
  ENLARGE: 'Agrandar',
  RESTORE: 'Restaurar',
  REDUCE: 'Reducir',
  FIT_WIDTH: 'Ajustar al ancho',
  FIT_HEIGHT: 'Ajustar al alto',
  PERCENT: 'Porcentual',
  TOGGLE_CONTROLS: 'Alternar controles de página',
  ZOOM_IN: 'Acercar',
  ZOOM_OUT: 'Alejar',
  ZOOM_RESET: 'Restablecer zoom',
  ZOOM_WIDTH: 'Zoom al ancho',
  ZOOM_HEIGHT: 'Zoom al alto',
  HIDE: 'Ocultar',
  RELOAD: 'Recargar',
  SLOWLY: 'Lento',
  NORMAL: 'Normal',
  FAST: 'Rápido',
  EXTREME: 'Extremo',
  ALL_PAGES: 'Todas las páginas',
  SPEED_WARNING: 'Velocidad de carga muy alta',
  SPEED_WARNING_MESSAGE:
    'No se recomienda esta velocidad.<br> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br> ¡Utilícelo con precaución!',
  SCROLL_UP: 'Desplazar arriba',
  SCROLL_DOWN: 'Desplazar abajo',
  CLOSE: 'Cerrar',
  LIST_EMPTY: 'Lista vacía',
  DISPLAY_COMMENTS: 'Mostrar comentarios',
  COMMENTS: 'Sección de comentarios',
  SCROLL_START: 'Alternar desplazamiento automático',
  AUTO_SCROLL_HEIGHT: 'Velocidad de desplazamiento automático en píxeles',
  VERTICAL_SEPARATOR: 'Mostrar separadores verticales',
  END: 'Fin',
  SCOPE: 'Alcance',
  GLOBAL: 'Global',
  GENERAL: 'General',
  LOADING: 'Carga',
  ZOOM: 'Zoom',
  OTHERS: 'Otros',
} satisfies ILocale;
