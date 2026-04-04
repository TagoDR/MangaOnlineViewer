# Project To-Do List

## 1. Create a Toast component (`mov-toast`)
Replace `@moaqzdev/toast` with a custom implementation following Web Awesome standards.

### Research & Design
- [ ] Analyze `wa-toast` and `wa-toast-item` API from Web Awesome: variants (info, success, warning, danger), `closable`, `duration`, and the `toast()` utility method.
- [ ] Review current `toast` usage in `src/core/settings.ts` and `src/ui/events/bookmarks.ts`.
- [ ] Design the CSS styles in `src/ui/styles/` or within the component, ensuring compatibility with the project's theme system.
- [ ] on the documentation the code is available https://webawesome.com/docs/components/toast/

### Implementation
- [ ] Create `src/ui/styles/toast.css` for component styling.
- [ ] Create `src/ui/components/Toast.ts` (register as `mov-toast`).
    - [ ] Support `variant` property.
    - [ ] Implement `show()` and `hide()` methods.
    - [ ] Implement a static `toast()` method or a global utility to manage toast stack and queuing.
- [ ] Ensure parity with Web Awesome's `wa-toast` for properties and events.

### Integration & Verification
- [ ] Replace `@moaqzdev/toast` imports with the new `mov-toast` in:
    - `src/core/settings.ts`
    - `src/ui/events/bookmarks.ts`
- [ ] Update `src/ui/index.ts` to export/register the new component.
- [ ] Create `src/stories/Toast.stories.ts` for visual testing in Storybook.
- [ ] Remove `@moaqzdev/toast` from `package.json` and external dependencies.

## 2. Create a Range Slider component (`mov-slider`)
Replace `toolcool-range-slider` with a custom implementation following Web Awesome standards, supporting dual-range if necessary.

### Research & Design
- [ ] Analyze `wa-slider` API from Web Awesome.
- [ ] Evaluate if a single `mov-slider` or a separate `mov-range-slider` is needed for dual-pointer support (as seen in `src/ui/Startup.ts`).
- [ ] Design the UI inspired by Mantine's RangeSlider but with Web Awesome aesthetic.

### Implementation
- [ ] Create `src/ui/styles/slider.css` for component styling.
- [ ] Create `src/ui/components/Slider.ts` (register as `mov-slider`).
    - [ ] Support `min`, `max`, `step`, and `value`.
    - [ ] Implement dual-pointer support if required (for `value1` and `value2`).
    - [ ] Add support for labels and marks (as used in `Startup.ts`).
- [ ] Handle input and change events.

### Integration & Verification
- [ ] Replace `tc-range-slider` with `mov-slider` in:
    - `src/ui/Startup.ts`
- [ ] Update `src/ui/index.ts` to export/register the new component.
- [ ] Create `src/stories/Slider.stories.ts` for visual testing in Storybook.
- [ ] Remove `toolcool-range-slider` from `package.json` and external dependencies (CDN links in `src/core/externals.ts`).
- [ ] Clean up related CSS links in `src/ui/Startup.ts` and `src/stories/LateStart.stories.ts`.

## 3. Storybook
- [ ] Update the stories to show the version of the component from webawesome for comparison, be carefull for the dialog and drawer to have independent buttons for each demo
- [ ] Import webawesome dynamically from cdn to display in storybook
