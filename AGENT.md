# AI Agent Instructions for MangaOnlineViewer

This document provides AI coding agents with essential information for contributing to the MangaOnlineViewer project.

## 1. Project Overview

MangaOnlineViewer is a browser userscript that enhances the experience of reading manga and comics online by loading all pages of a chapter into a single, configurable viewer. It is distributed as a userscript and is intended for use with browser extensions like Tampermonkey or Violentmonkey.

## 2. Core Architecture

The project is written in TypeScript and uses Vite for its build process. The architecture is modular, with a clear separation between core logic and site-specific implementations.

- **Entry Points**: The project has three distinct builds, each with its own entry point:
  - `src/userscript-main.ts`: For the main, public version.
  - `src/userscript-adult.ts`: For sites with adult content.
  - `src/userscript-dev.ts`: A development build that includes all sites.

- **Site Modules (The Core Task)**: The primary function of this project is to support various manga websites. Each site is a self-contained module located in either `src/main/` or `src/adult/`.
  - **`ISite` Interface**: Every site module must export a default object that conforms to the `ISite` interface (defined in `src/types/ISite.ts`). This interface is the central abstraction of the project.
  - **Key `ISite` Properties**:
    - `url`: A `RegExp` that matches the chapter URLs for the specific site.
    - `run()`: The main function that scrapes the page to find and return chapter and image information (`IManga` object).
    - `wait...`: A set of properties (`waitEle`, `waitAttr`, `waitVar`, `waitFunc`, `waitTime`) used to delay the execution of `run()` until the page is fully loaded and ready for scraping. For example, `waitEle: '#image-container'` will wait for that element to appear in the DOM.
  - **Aggregation**: All site modules are imported and aggregated in their respective `index.ts` files (`src/main/index.ts` and `src/adult/index.ts`).

- **Core Logic**: Shared functionality like the viewer, settings panel, download manager, and UI components are located in `src/core/` and `src/ui/`.

- **UI Layer**: The UI is built using the `lit` library. UI components are in `src/ui/`, with their logic and presentation separated.

## 3. Developer Workflow

- **Setup**:
  1.  Clone the repository.
  2.  Run `npm install` to install all dependencies.

- **Builds**: The build process is managed by Vite and configured in `vite.config.ts`.
  - **Development**: Run `npm start` or `npm run build`. This generates a `Manga_Online_Viewer_DEV.user.js` file in the `dist/` directory. This is the recommended script for development and testing as it includes all sites. And `npm run storybook` to test individual peaces of the UI.
  - **Release**: Run `npm run release`. This generates the separate `main` and `adult` userscripts for production. Should only be used by CI/CD pipeline.
  - **Standalone**: Run `npm run build:standalone`. This compiles the application into a single, portable HTML file (`dist/Manga_Online_Viewer_Standalone.html`) that can be opened directly in a browser to read local files.

- **Linting & Formatting**: The project uses Biome and Prettier to maintain code quality and consistency. Configuration is in `biome.json` and the `prettier` key in `package.json`.
  - `npm run lint`: Check for linting issues.
  - `npm run format`: Automatically format the code.
  - `npm run check`: Run all Biome checks and apply safe fixes.

- **Testing**: There are no automated unit or integration tests. All testing is done manually by installing the generated userscript in a browser with Tampermonkey and visiting a supported site. Storybook is used for UI component visualization via `npm run storybook`.

## 4. How to Add a New Site (A Step-by-Step Guide)

This is the most common contribution. Follow these steps carefully.

1.  **Create the Site File**: Create a new TypeScript file in `src/main/` (or `src/adult/` if appropriate). The filename should be the name of the site (e.g., `newsite.ts`).

2.  **Implement the `ISite` Object**: In your new file, define and export the site configuration.

    ```typescript
    // src/main/newsite.ts
    import { ISite } from '../types/ISite.ts';

    const newSite: ISite = {
      name: 'New Site',
      homepage: 'https://newsite.com/',
      url: /https:\/\/newsite\.com\/manga\/.+\/\d+/,
      language: 'English',
      category: 'manga',
      // Use a wait condition to ensure the page is ready
      waitEle: '#chapter-images',
      run: () => {
        const images = [...document.querySelectorAll('#chapter-images img')];
        return {
          title: document.querySelector('h1.title')?.textContent?.trim() ?? '',
          series: document.querySelector('a.series-link')?.getAttribute('href') ?? '',
          pages: images.length,
          begin: 1,
          prev: document.querySelector('a.prev-chapter')?.getAttribute('href') ?? '',
          next: document.querySelector('a.next-chapter')?.getAttribute('href') ?? '',
          listImages: images.map(img => img.getAttribute('src')),
        };
      },
    };

    export default newSite;
    ```

3.  **Register the Site**: Open `src/main/index.ts` (or `src/adult/index.ts`) and add your new site to the list.

    ```typescript
    // src/main/index.ts
    // ... other imports
    import newSite from './newsite.ts';

    const sites = [
      // ... other sites
      newSite,
    ];

    export default sites;
    ```

4.  **Build and Test**:
    - Run `npm run build` to generate the development userscript.
    - Install or update the script in Tampermonkey.
    - Navigate to a URL that matches the `url` regex you defined and verify that the viewer loads correctly.

## 5. Folder Philosophy: Where to Create Files

To maintain a clean and organized codebase, follow these guidelines for creating new files:

- `src/main/` and `src/adult/`: Place new site-specific modules here. If a site contains adult content, it goes in `src/adult/`.

- `src/core/`: Add new files here for shared, non-UI business logic. Examples include download management, application state, or new viewer features.

- `src/ui/`: This folder is for all things related to the user interface.
  - `src/ui/components/`: Create new reusable UI components (e.g., a new button, a dialog) as Lit elements here.
  - `src/ui/styles/`: Add global styles or styles specific to a component.
  - `src/ui/icons/`: Store new SVG icons in this directory.
  - `src/ui/events/`: Store UI event logic to avoid bloating the main components in `src/ui/` folder.

- `src/types/`: If you need a new data structure or interface that will be shared across different parts of the application (e.g., a new `IChapter` or `IUser` type), define it here.

- `src/utils/`: This is for small, pure, and reusable helper functions that are not specific to any single feature. Examples include date formatting, color manipulation, or string utilities.

- `src/locales/`: Add new language translations here. Create a new file (e.g., `fr_FR.ts`) and add the key-value pairs for the new language.

- `src/stories/`: Contain stories for Storybook to test peaces of the ui

## 6. Important Conventions

- **External Dependencies**: Dependencies are **not** bundled into the userscript. As defined in `vite.config.ts` under `externalGlobals`, they are loaded via CDN at runtime by the userscript manager. Do not add new dependencies without modifying the build configuration.

- **Code Style**: Adhere to the styles enforced by Biome and Prettier. Use single quotes, 2-space indentation, and trailing commas.

- **Immutability**: When transforming data, prefer creating new objects/arrays rather than mutating existing ones.

- **DOM Queries**: Be specific and robust in your CSS selectors to avoid breakage when a site updates its layout.
