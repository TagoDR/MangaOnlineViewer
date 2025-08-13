import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue } from '../core/settings';

// Import all necessary components

export default {
  title: 'Dialogs/Keybindings Dialog',
  component: 'mov-keybindings-dialog',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
This story demonstrates the Keybindings Dialog. The dialog's visibility
is controlled by the global \`reader\` store.
<br/><br/>
Click the <strong>'Open Keybindings'</strong> button to open the dialog.
The edit and save functionality is fully operational within this story.
        `,
      },
    },
  },
  render: () => {
    // Ensure the panel is closed when the story first loads.
    setAppStateValue('panel', 'none');

    return html`
      <div style="padding: 2rem;">
        <wa-button
          variant="brand"
          appearance="filled"
          @click=${() => setAppStateValue('panel', 'keybindings')}
        >
          Open Keybindings
        </wa-button>
      </div>
      <!-- The actual component being tested -->
      <mov-keybindings-dialog></mov-keybindings-dialog>
    `;
  },
} satisfies Meta;

export const Default: StoryObj = {};
