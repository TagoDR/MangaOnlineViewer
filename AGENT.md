# Copilot Instructions for MangaOnlineViewer

## Architecture Overview

- **Entry Points:** Userscript builds start from `src/userscript-main.ts`, `src/userscript-adult.ts`, and `src/userscript-dev.ts`.
- **Site Modules:** Each supported site is a module in `src/main/` or `src/adult/`, exporting an `ISite` object. All are aggregated in their respective `index.ts`.
- **Core Logic:** Shared features (downloading, uploading, settings, viewer, etc.) are in `src/core/`.
- **UI Layer:** split in styles in `src/elements/styles`, and components in `src/elements/`. UI events are handled in `src/elements/events/`.
- **Types & Localization:** Shared types/interfaces in `src/types/`, language files in `src/locales/`.

## Developer Workflows

- **Build:** Use Vite. Run `npm install` then `npm run build`. See `vite.config.ts` for multi-script output.
- **Testing:** No automated tests; manual browser testing via Tampermonkey/Violentmonkey is standard and vite serve as website.
- **Debugging:** Use browser console and userscript manager tools.

## Project-Specific Patterns

- **Site Integration:** To add a site, create a module in `src/main/` or `src/adult/` exporting an `ISite` object. Import it in the folder's `index.ts`.
- **Hotkeys:** Managed globally via `src/elements/events/keybindings.ts` using `hotkeys-js`. Actions are mapped to UI events and core logic.
- **MangaPage Handling:** Core logic manages image loading, reload, and ZIP download.
- **Settings & Overlays:** Managed via UI components; state should use Lit properties and custom events.

## External Dependencies

- Uses libraries: `tinycolor`, `imagesloaded`, `jszip`, `nprogress`, `sweetalert2`, `lodash`, `hotkeys-js`, `range-slider-input`, `bowser`, `blob-util`.
- Dependencies are not bundled with the userscript builds whenever possible, they are imported via CDN in the userscript manager.
- Designed for Tampermonkey/Violentmonkey, but can run as bookmarklets or local HTML.

## Conventions

- **TypeScript-first:** Use shared interfaces and types.
- **Component-based UI:** Currently uses global DOM manipulation, in the process of moving to nanostates based UI updates

## Key Files & Directories

- `src/main/`, `src/adult/`: Site modules
- `src/core/`: project specific logic
- `src/utils/`: reusable logic
- `src/ui/`: backup old UI components and events for reference, some parts still needs to be migrated
- `src/types/`: Shared types
- `src/locales/`: Localization
- `src/stories/`: Visual testing with storybook
- `index.html`: Local file reader
- `vite.config.ts`, `tsconfig.json`: Build config
- `src/elements`: work in progress migration to Web Components using LitElement

## Example: Adding a New Site

See README for a full example. Create a new file in `src/main/` or `src/adult/`, export an `ISite` object, and import it in the folder's `index.ts`.

---

If any section is unclear or missing, please provide feedback to improve these instructions.
