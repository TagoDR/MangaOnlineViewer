import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue } from '../core/settings';

// Import all necessary components
import localhost from '../main/localhost.ts';
import type { IMangaImages } from '../types';

const mockManga = localhost.run() as IMangaImages;

const mockComments = document.createElement('div');
mockComments.innerHTML = `
  <div style="padding: 1rem; text-align: left;">
    <h3>Discussion</h3>
    <p><b>User123:</b> This chapter was amazing! The art is top-notch.</p>
    <p>
      <b>MangaFan_22:</b> I agree! I can't wait to see what happens next. Does anyone have theories?
    </p>
    <p><b>AnotherReader:</b> I think the main character will finally unlock their hidden power.</p>
    <hr />
    <p><i>... more comments ...</i></p>
  </div>
`;
mockManga.comments = mockComments;

export default {
  title: 'Dialogs/Comments Dialog',
  component: 'mov-comments-dialog',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
This story demonstrates the Comments Dialog. The dialog's visibility
is controlled by the global \`reader\` store, and its content is populated
from the store as well. It also features an independent color scheme toggle.
<br/><br/>
Click the <strong>'Open Comments'</strong> button to open the dialog.
        `,
      },
    },
  },
  render: () => {
    // Ensure the panel is closed when the story first loads.
    setAppStateValue('panel', 'none');
    // Populate the store with mock comments
    setAppStateValue('manga', mockManga);

    return html`
      <div style="padding: 2rem;">
        <wa-button
          variant="brand"
          appearance="filled"
          @click=${() => setAppStateValue('panel', 'comments')}
        >
          Open Comments
        </wa-button>
      </div>
      <!-- The actual component being tested -->
      <mov-comments-dialog></mov-comments-dialog>
    `;
  },
} satisfies Meta;

export const Default: StoryObj = {};
