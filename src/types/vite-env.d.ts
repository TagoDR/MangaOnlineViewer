/// <reference types="vite/client" />
/** biome-ignore-all lint/suspicious/noExplicitAny: global variables */

declare let unsafeWindow: Window & { [key: string]: any };
declare let window: Window & { [key: string]: any };
