# MangaOnlineViewer Improvement Points
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
