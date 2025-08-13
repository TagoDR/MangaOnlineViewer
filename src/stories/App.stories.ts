import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue } from '../core/settings.ts';
import localhost from '../main/localhost';
// Import all the application's components to ensure they are defined for the story.
// In a real build process, these might be bundled, but for Storybook, it's safest to be explicit.
import type { IMangaImages } from '../types';

// The Meta object configures the component's story page
export default {
  title: 'Application/Complete App',
  component: 'mov-app',
  tags: ['autodocs'],
  parameters: {
    // Render the component in fullscreen mode as it's the root of the application
    layout: 'fullscreen',
    // Disable controls as this story is a self-contained demonstration
    controls: { disable: true },
    docs: {
      description: {
        story: `
          This story renders the entire \`<mov-app>\` application.
          <br/><br/>
          It uses the \`localhost.ts\` site definition to generate mock manga data,
          populates the global stores, and then mounts the app. This provides a
          fully interactive environment for testing the complete application flow,
          including all panels, dialogs, and reading modes.
        `,
      },
    },
  },
  render: () => {
    // 1. Generate the mock manga data using your localhost site runner.
    const site = localhost.run() as IMangaImages;

    // 2. Populate the global stores with the mock data.
    setAppStateValue('manga', site);

    // 3. Initialize or reset any other necessary state for a clean start.
    setAppStateValue('panel', 'none');
    setAppStateValue('currentPage', 1);
    setAppStateValue('loaded', 0);
    setAppStateValue('scrollToPage', undefined);
    setAppStateValue('autoScroll', false);

    // 4. Render the root application component.
    return html` <mov-app></mov-app>`;
  },
} satisfies Meta;

// The primary story for the complete application.
export const Default: StoryObj = {};
