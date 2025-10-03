import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { themesCSS } from '../ui/themes';
import '../ui/Startup.ts';

// Mock data for the story
const MOCK_BEGIN = 10;

type StoryStatus = 'idle' | 'running' | 'success';

@customElement('late-start-story-wrapper')
// @ts-expect-error
// biome-ignore lint/correctness/noUnusedVariables: Display
class LateStartStoryWrapper extends LitElement {
  @property({ type: Number })
  maxPages = 50;

  @state()
  private storyStatus: StoryStatus = 'idle';

  @state()
  private startupStatus: 'initial-prompt' | 'late-start-button' | 'late-start-prompt' =
    'initial-prompt';

  @state()
  private message = 'Click a button to begin the process.';

  @state()
  private result: { begin: number; end: number } | null = null;

  private themeStyleElement: HTMLStyleElement | null = null;

  connectedCallback() {
    super.connectedCallback();
    if (this.themeStyleElement) return;
    this.themeStyleElement = document.createElement('style');
    this.themeStyleElement.id = 'mov-theme-styles-story';
    this.themeStyleElement.textContent = themesCSS();
    document.head.append(this.themeStyleElement);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.themeStyleElement?.remove();
    this.themeStyleElement = null;
  }

  private reset = () => {
    this.storyStatus = 'idle';
    this.message = 'Click a button to begin the process.';
    this.result = null;
  };

  private startProcess = (lateStart = false) => {
    this.reset();
    this.storyStatus = 'running';
    this.startupStatus = lateStart ? 'late-start-prompt' : 'initial-prompt';
    this.message = lateStart
      ? 'Late start dialog is open. Choose a page range.'
      : 'Initial prompt is open. It will auto-run or you can cancel.';
  };

  private handleStart = (e: CustomEvent) => {
    this.storyStatus = 'success';
    this.result = e.detail;
    this.message = e.detail
      ? 'Success! Script ran with the selected page range.'
      : 'Success! Script ran immediately.';
  };

  protected render() {
    return html`
      <div style="font-family: sans-serif; padding: 1rem; color: var(--mov-text-color)">
        <h2>Manga Online Viewer - Start Process Simulation</h2>
        <p><b>Status:</b> ${this.message}</p>

        ${
          this.storyStatus !== 'running'
            ? html`
              <button @click=${() => this.startProcess(false)}>Start Full Process</button>
              <button @click=${() => this.startProcess(true)}>Start Late Dialog</button>
            `
            : nothing
        }
        ${this.storyStatus !== 'idle' ? html`<button @click=${this.reset}>Reset</button>` : nothing}
        ${
          this.storyStatus === 'running'
            ? html`
              <script-startup
                .mangaPages=${this.maxPages}
                .begin=${MOCK_BEGIN}
                .status=${this.startupStatus}
                @start=${this.handleStart}
              ></script-startup>
            `
            : nothing
        }
        ${
          this.result
            ? html`
              <div style="margin-top: 20px;">
                <strong>Result:</strong>
                <pre>${JSON.stringify(this.result, null, 2)}</pre>
              </div>
            `
            : nothing
        }
      </div>
    `;
  }
}

export default {
  title: 'Features/LateStart',
  render: args =>
    html`<late-start-story-wrapper .maxPages=${args.maxPages}></late-start-story-wrapper>`,
  argTypes: {
    maxPages: {
      control: { type: 'number' },
    },
  },
  args: {
    maxPages: 50,
  },
} satisfies Meta;

export const Default: StoryObj = {
  name: 'Full Process Simulation',
};
