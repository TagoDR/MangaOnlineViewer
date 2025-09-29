import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { lateStart } from '../core/main';
import localhost from '../main/localhost.ts';
import type { IMangaImages } from '../types';

// Mock data for the manga
const mockManga = localhost.run() as IMangaImages;
mockManga.pages = 50;

@customElement('late-start-story-wrapper')
// @ts-expect-error
class LateStartStoryWrapper extends LitElement {
  @state()
  private result: { begin: number; end: number } | null = null;

  private async openDialog() {
    this.result = await lateStart(mockManga, mockManga.begin ?? 1);
  }

  protected render() {
    return html`
      <button @click=${this.openDialog}>Open Late Start Dialog</button>
      ${
        this.result
          ? html`
            <div style="margin-top: 20px; font-family: sans-serif;">
              <strong>Result:</strong>
              <pre>${JSON.stringify(this.result, null, 2)}</pre>
            </div>
          `
          : ''
      }
    `;
  }
}

export default {
  title: 'Features/LateStart',
  render: () => html`<late-start-story-wrapper></late-start-story-wrapper>`,
} satisfies Meta;

export const Default: StoryObj = {
  name: 'Default',
};
