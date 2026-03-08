# MangaOnlineViewer Improvement Plan

This document outlines the planned improvements for the MangaOnlineViewer project based on the existing `TODO` comments and project evaluation.

## 1. Core Logic Improvements

### 1.1. Concurrency and Loading Pool
- **File**: `src/core/Image.ts`
- **Task**: Implement a concurrency pool instead of a simple throttle. Use a new `concurrentImages` setting to limit simultaneous requests.
- **Expected Result**: More efficient image loading without overwhelming the browser or the target server.
- **Dependencies**: New setting in `src/core/settings.ts`.

### 1.2. Page Skipping and Arbitrary Ranges
- **Files**: `src/core/Image.ts`, `src/ui/Startup.ts`
- **Task**: Refactor image loading logic to support a specific list of pages (e.g., `[1, 5, 10-15]`).
- **Expected Result**: Users can load only specific pages or ranges, saving bandwidth and time.

### 1.3. Pre-cached Image Blobs
- **Files**: `src/core/Image.ts`, `src/core/download.ts`
- **Task**: Store raw `Blob` in `appState` after fetching an image. Update download manager to use these blobs instead of re-fetching.
- **Expected Result**: Instant ZIP generation for downloaded pages; reduced network traffic.

### 1.4. Forced Download and Error Logging
- **File**: `src/core/download.ts`
- **Task**:
    - Implement "Forced Download" that proceeds even if some images fail.
    - Generate a `failed_pages.txt` within the ZIP file listing all pages that couldn't be downloaded.
- **Expected Result**: More robust download experience; users know exactly which pages are missing.

## 2. UI/UX Enhancements

### 2.1. Advanced Startup Prompt
- **File**: `src/ui/Startup.ts`
- **Tasks**:
    - Implement button to open advanced startup, left-click for immediate start.
    - Add text input for custom page lists/ranges.
    - Add button to load ranges from a `.txt` file.
    - Add batch loading suggestions (e.g., buttons for "1-500", "501-1000") for large manga.
    - Add increment/decrement (`+`/`-`) buttons for the page slider.
- **Expected Result**: Greater control over how a chapter starts, especially for huge chapters or specific reading needs.

### 2.2. New Viewing Modes
- **Files**: `src/core/settings.ts`, `src/types/ISettings.ts`, `src/ui/Reader.ts` (or equivalent)
- **Task**: Implement `masonry` and `justified` viewing modes.
- **Expected Result**: Better layout options for webtoons vs. traditional manga vs. galleries.

## 3. Testing and Storybook Strategy

### 3.1. Non-Visual Testing (Vitest)
- **Evaluation**: Install **Vitest** for testing non-visual logic. It is fast, Vite-native, and requires minimal configuration.
- **Targets**:
    - `src/utils/*.ts`: Pure functions (URL parsing, formatting).
    - `src/core/settings.ts`: Store logic, persistence, and migrations.
    - `src/core/download.ts`: ZIP generation logic (mock JSZip).
    - `src/core/Image.ts`: Concurrency pool and loading logic.
    - `src/main/index.ts`: Site matching and registration.

### 3.2. Storybook Expansion
- **New Stories**:
    - `src/stories/Reader.stories.ts`: Full reader view with different layouts.
    - `src/stories/StartupAdvanced.stories.ts`: Advanced startup dialog states.
    - `src/stories/FailedDownloadDialog.stories.ts`: UI for reporting download failures.
    - `src/stories/components/ConcurrencyControl.stories.ts`: UI for the new concurrency setting.

## 4. Implementation Steps

1.  **Phase 1: Foundation (Vitest & Settings)**
    - Install Vitest: `npm install -D vitest`.
    - Add new settings (`concurrentImages`, new `viewModes`).
    - Create unit tests for existing `utils` and `settings`.
    - Integrate storybook to show functional test results, skipping visual tests

2.  **Phase 2: Image Logic (Concurrency & Caching)**
    - Refactor `src/core/Image.ts` with concurrency pool.
    - Implement Blob caching in `appState`.
    - Verify with Vitest.

3.  **Phase 3: Download Logic (Robustness)**
    - Update `src/core/download.ts` to use cached blobs and handle errors gracefully.
    - Implement `failed_pages.txt` generation.

4.  **Phase 4: UI/UX (Startup & Layouts)**
    - Update `src/ui/Startup.ts` with advanced controls.
    - Implement CSS for `masonry` and `justified` layouts.
    - Create corresponding Storybook stories for visual verification.

5.  **Phase 5: Refinement**
    - Final UI polish.
    - Documentation updates.
    - Regression testing.
