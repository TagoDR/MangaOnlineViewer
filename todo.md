# MangaOnlineViewer Improvement Points

- **Implement a new view mode 'gallery'**
    - **Goal**: Align everything in columns using a flex/grid layout where images take minimal space.
    - **Details**:
        - Update `ViewMode` type in `src/types/ISettings.ts` to include `'Gallery'`.
        - Add `IconLayoutDashboard` to `src/ui/icons/` (from Tabler Icons).
        - Update `src/ui/Reader.ts` and `src/ui/MangaPage.ts` to handle the new mode.
        - Add CSS in `src/ui/styles/gallery.css` (or `App.css`):
            - `#Chapter.Gallery`: `display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;`
            - `.Gallery .MangaPage`: `width: auto; min-width: unset; flex: 0 1 auto;`
            - `.Gallery .PageFunctions`, `.Gallery .separator`: `display: none;` (hidden by default).
        - Integrate into `src/ui/Header.ts`, `src/ui/SettingsPanelZoom.ts`, and `src/ui/events/viewmode.ts`.
        - Add a keybinding (e.g., `G`) in `src/ui/events/keybindings.ts`.

- **Refactor `src/core/Image.ts` with concurrency pool**
    - **Goal**: Replace `setTimeout` throttling with a parallel worker pool for better performance and control.
    - **Details**:
        - Remove `position` based timing in `addImg` and `addPage`.
        - Implement a queue/pool mechanism to limit concurrent `fetch` requests.
        - **Maintain Throttling**: Even with parallel loading, implement a delay between starting new tasks (controlled by `throttlePageLoad`) to prevent being flagged by anti-DDoS systems.
        - **Concurrency Logic**:
            - Determine pool size (concurrency) based on `throttlePageLoad` (e.g., lower milliseconds -> higher concurrency).
            - Each worker should wait for a "token" or "slot" from the pool before starting a `fetch`.
            - Apply a global delay between task initiations within the pool manager.
        - Ensure compatibility with lazy loading logic.
        - Replace throttlePageLoad with loadSpeed with the options
                - Safe - Pool of 5 delay of 1000ms [Default]
                - Standard - Pool of 5 delay of 500ms
                - Faster - Pool of 10 delay of 500ms
                - Extreme - Pool of 10 delay of 250ms
                - All - Pool of 20 delay of 50ms
        - Lazy load settings must be respected when enabled
        - Remember that the user is able to select the starting position to skip starting images

- **Check components compatibility with Web Awesome**
    - **Goal**: Ensure `mov-*` components are 1:1 API compatible with Web Awesome (Shoelace) for future-proofing.
    - **Details**:
        - Audit `src/ui/components/` (button, drawer, dialog, etc.).
        - Compare properties, events (e.g., `sl-change` vs `mov-change`), and slots.
        - Ensure Webcomponents 3.0.0 standards are met.

- **Add Support to weebdex**
    - **Goal**: Implement a new site module for the Weebdex engine.
    - **Details**:
        - Create `src/main/weebdex.ts`.
        - Identify URL patterns and DOM selectors for images and navigation.
        - Implement the `ISite` interface.
        - Register the new module in `src/main/index.ts`.
