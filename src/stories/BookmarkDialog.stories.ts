import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue, settings } from '../core/settings';

// Import all necessary components
import type { IBookmark } from '../types';

const mockBookmarks: IBookmark[] = [
  {
    name: 'Epic Moment - Chapter 42',
    url: 'https://example.com/manga/series-1/chapter-42',
    page: 15,
    date: new Date('2023-10-26T10:00:00Z').getTime().toString(),
  },
  {
    name: 'Start of the Final Arc',
    url: 'https://example.com/manga/series-1/chapter-150',
    page: 1,
    date: new Date('2023-08-15T18:30:00Z').getTime().toString(),
  },
  {
    name: 'A Different Series',
    url: 'https://example.com/manga/another-series/chapter-5',
    page: 8,
    date: new Date('2023-05-01T12:00:00Z').getTime().toString(),
  },
];

export default {
  title: 'Dialogs/Bookmarks Dialog',
  component: 'mov-bookmarks-dialog',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
This story demonstrates the Bookmarks Dialog. The dialog's visibility
is controlled by the global \`reader\` store, and its content is populated
from the \`settings\` store.
<br/><br/>
Click the <strong>'Open Bookmarks'</strong> button to open the dialog.
The bookmarking and deletion buttons are fully functional within this story.
        `,
      },
    },
  },
  render: args => {
    // Ensure the panel is closed when the story first loads.
    setAppStateValue('panel', 'none');
    // Populate the store with mock bookmarks
    settings.setKey('bookmarks', args.bookmarks);

    return html`
      <div style="padding: 2rem;">
        <wa-button
          variant="brand"
          appearance="filled"
          @click=${() => setAppStateValue('panel', 'bookmarks')}
        >
          Open Bookmarks
        </wa-button>
      </div>
      <!-- The actual component being tested -->
      <mov-bookmarks-dialog></mov-bookmarks-dialog>
    `;
  },
} satisfies Meta;

type Story = StoryObj<{ bookmarks: IBookmark[] }>;

export const WithBookmarks: Story = {
  args: {
    bookmarks: mockBookmarks,
  },
};

export const Empty: Story = {
  name: 'Empty State',
  args: {
    bookmarks: [],
  },
};
