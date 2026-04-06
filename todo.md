# MangaOnlineViewer Project Roadmap & Tasks

## Current Objectives

### 1. Enhance `toggle-button` Component (Burger Mode)
Improve the existing `toggle-button` component to support an animated "Burger" icon, inspired by Mantine's Burger component. This will be used in the header for a more polished UI interaction.

- [x] **Research & Design**:
    - Study Mantine's Burger animation (3 lines transforming into an 'X'). https://mantine.dev/core/burger/
    - Plan the CSS transitions for the top, middle, and bottom lines.
- [x] **Implementation** (in `src/ui/components/ToggleButton.ts`):
    - Add `'burger'` to the `ToggleMode` type.
    - Create a `_renderBurger()` private method to render the three line elements (e.g., `<div class="burger-line"></div>`).
    - Add comprehensive CSS for the `.burger-mode` and its `.active` state:
        - Position lines absolutely or using flexbox.
        - Animate `transform` and `opacity` to create the 'X' shape.
        - Ensure compatibility with existing `size` and `appearance` properties.
- [x] **Storybook Integration**:
    - Update `src/stories/components/ToggleButton.stories.ts` to include a new "Burger" section.
    - Verify all sizes and states (active/inactive) look correct in Storybook.
- [x] **Refactor Header**:
    - Update `src/ui/Header.ts` to replace the current `mov-button` + `mov-icon` (IconMenu2) with `<toggle-button mode="burger">`.
    - Ensure the `toggle` event correctly triggers the `headroomController.toggleHeaderVisibility`.

### 2. Create `mov-file-input` Component
Develop a new reusable component for file selection, mimicking the API and styling of Web Awesome's `wa-file-input`. This will replace the disparate file inputs in the project. https://webawesome.com/docs/components/file-input

- [x] **Component Implementation** (create `src/ui/components/FileInput.ts`):
    - Inherit from `LitElement` and implement the standard properties: `accept`, `multiple`, `directory`, `disabled`, `required`.
    - Use a hidden `<input type="file">` and a styled `mov-button` + `mov-icon` (IconFolderOpen) as the UI.
    - Implement a `files` getter to proxy the underlying input's files.
    - Dispatch standard `change` and custom `wa-change` events.
    - Show selected file names or a count when multiple files are selected.
- [x] **Storybook Integration**:
    - Create `src/stories/components/FileInput.stories.ts`.
    - Add stories for "Single File", "Multiple Files", "Directory Selection", and "Accept Specific Types".
    - Test the local file reading logic within a story.
- [x] **Integration in `index.html`**:
    - Replace the multiple `<input type="file">` elements in `index.html` with instances of `<mov-file-input>`.
    - Update the local testing logic in `src/index.ts` to work with the new component's API.

### 3. Review `mov-slider` Component (Marks Alignment)
Review and fix the alignment of markers/marks in the `mov-slider` component, as they are currently not perfectly aligned with the values. They are all together at below the slider at the left.

- [ ] **Research**:
    - Analyze how [Web Awesome Slider](https://webawesome.com/docs/components/slider/) handles marks and their alignment relative to the thumb.
    - Analyze how [Mantine RangeSlider](https://mantine.dev/core/range-slider/) positions its marks and labels.
- [ ] **Implementation** (in `src/ui/components/Slider.ts` and related CSS):
    - Adjust the marker positioning logic to account for thumb width or use a more robust calculation.
    - Ensure markers are visually centered under the corresponding value on the track.
    - Update the CSS to ensure markers don't overflow the track edges.
- [ ] **Storybook Validation**:
    - Use `src/stories/Slider.stories.ts` to verify alignment across different sizes and ranges.
- [ ] **Biome**
    - Biome have many complaints about slider component, fix all of them.

## Future Considerations
- [ ] Explore adding more "Mantine-inspired" components as needed for complex UI states.
- [ ] Standardize all form-like components to follow the Web Awesome 3.5.0 API patterns.
- [ ] Improve the `Standalone` build to better handle large local ZIP files using the new `mov-file-input`.
