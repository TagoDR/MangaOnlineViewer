# Copilot Instructions for MangaOnlineViewer

## Architecture Overview

- **Entry Points:** Userscript builds start from `src/userscript-main.ts`, `src/userscript-adult.ts`, and `src/userscript-dev.ts`.
- **Site Modules:** Each supported site is a module in `src/main/` or `src/adult/`, exporting an `ISite` object. All are aggregated in their respective `index.ts`.
- **Core Logic:** Shared features (downloading, uploading, settings, viewer, etc.) are in `src/core/`.
- **UI Layer:** split in styles in `src/ui/styles`, and components in `src/ui/components`. UI events are handled in `src/ui/events/`.
- **Types & Localization:** Shared types/interfaces in `src/types/`, language files in `src/locales/`.

## Developer Workflows

- **Build:** Use Vite. Run `npm install` then `npm run build`. See `vite.config.ts` for multi-script output.
- **Testing:** No automated tests; manual browser testing via Tampermonkey/Violentmonkey is standard.
- **Debugging:** Use browser console and userscript manager tools.

## Project-Specific Patterns

- **Site Integration:** To add a site, create a module in `src/main/` or `src/adult/` exporting an `ISite` object. Import it in the folder's `index.ts`.
- **Hotkeys:** Managed globally via `src/ui/events/keybindings.ts` using `hotkeys-js`. Actions are mapped to UI events and core logic.
- **Image Handling:** Core logic manages image loading, reload, and ZIP download.
- **Settings & Overlays:** Managed via UI components; state should use Lit properties and custom events.

## External Dependencies

- Uses libraries: `tinycolor`, `jszip`, `nprogress`, `sweetalert2`, `lodash`, `hotkeys-js`, `range-slider-input`, `bowser`, `blob-util`.
- Dependencies are not bundled with the userscript builds whenever possible, they are imported via CDN in the userscript manager.
- Designed for Tampermonkey/Violentmonkey, but can run as bookmarklets or local HTML.

## Conventions

- **TypeScript-first:** Use shared interfaces and types.
- **Component-based UI:** Currently uses global DOM manipulation, in the process of moving to nanostates based UI updates

## Key Files & Directories

- `src/main/`, `src/adult/`: Site modules
- `src/core/`: Shared logic
- `src/ui/`: UI components and events
- `src/types/`: Shared types
- `src/locales/`: Localization
- `index.html`: Local file reader
- `vite.config.ts`, `tsconfig.json`: Build config
- `src/svelte/`: when preset is an attempt to migrate to Svelte components
- `src/react`: when preset is an attempt to migrate to React/Preact components
- `src/elements`: when preset is an attempt to migrate to Web Components using LitElement

## Example: Adding a New Site

See README for a full example. Create a new file in `src/main/` or `src/adult/`, export an `ISite` object, and import it in the folder's `index.ts`.

---

If any section is unclear or missing, please provide feedback to improve these instructions.
